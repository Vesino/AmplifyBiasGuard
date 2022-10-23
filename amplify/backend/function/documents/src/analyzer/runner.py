import os, boto3
from decimal import Decimal


class DocumentAnalyzer:
    def __init__(self, key) -> None:
        self.key = key
        self.table = None

        self.comprehend = boto3.client("comprehend")
        self.dynamodb = boto3.resource("dynamodb")

    def connect_to_dynamodb(self):
        self.table = self.dynamodb.Table('scores')

    def store_url_cache(self, item):
        if not self.table:
            self.connect_to_dynamodb()

        self.table.put_item(Item=item)

    def run(self):
        s3 = boto3.client("s3")
        data = s3.get_object(Bucket="amplifybiasguard-storage35827-dev", Key=self.key)
        contents = data["Body"].read().decode('utf-8')

        classification_response = self.comprehend.classify_document(
            Text=contents,
            EndpointArn=os.environ['COMPREHEND_MODEL_ARN']
        )

        # classification_response = {
        #     "Classes": [],
        #     "Labels": [
        #         {"Name": "Male", "Score": 0.4},
        #         {"Name": "Female", "Score": 0.25},
        #         {"Name": "Neutral", "Score": 0.35},
        #     ],
        # }

        scores = {
            l["Name"].lower(): l["Score"] 
            for l in classification_response["Classes"]
        }

        item = {
            "url": self.key,
            "male": Decimal(str(scores.get("male", 0))),
            "female": Decimal(str(scores.get("female", 0))),
            "neutral": Decimal(str(scores.get("neutra", 0))),
        }

        self.store_url_cache(item=item)
        
        item.pop('url')
        key, value = max(item.items(), key=lambda pair: pair[1])
        
        return {key: value}
