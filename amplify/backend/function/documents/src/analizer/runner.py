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
        data = s3.get_object(Bucket="user-documents142632-dev", Key=self.key)
        contents = data["Body"].read()

        """classification_response = self.comprehend.classify_document(
            Text=contents,
            EndpointArn=os.environ['COMPREHEND_MODEL_ARN']
        )"""

        classification_response = {
            "Classes": [],
            "Labels": [
                {"Name": "Male", "Score": 0.4},
                {"Name": "Female", "Score": 0.25},
                {"Name": "Neutral", "Score": 0.35},
            ],
        }

        scores = {
            l["Name"]: l["Score"] 
            for l in classification_response["Labels"]
        }

        item = {
            "url": self.key,
            "male": Decimal(str(scores["Male"])),
            "female": Decimal(str(scores["Female"])),
            "neutral": Decimal(str(scores["Neutral"])),
        }

        self.store_url_cache(item=item)
        return
