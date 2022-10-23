import json
import boto3
from analyzer.runner import DocumentAnalyzer


def get_user_documents(user_id):
    s3 = boto3.client('s3')
    response = s3.list_objects(
        Bucket='user-documents142632-dev',
        Prefix=f'private/{user_id}/',
    )

    print(response)
    return response['Contents'][1:]


def handler(event, context):
    print('received event:')
    print(event)

    data = {}
    if event['httpMethod'] == 'GET':
        user_id = event['requestContext']['authorizer']['claims']['cognito:username']
        data = get_user_documents(user_id)
    elif event['httpMethod'] == 'POST':
        key = event['queryStringParameters']['key']
        analyzer = DocumentAnalyzer(key=key)
        data = analyzer.run()
    elif event['httpMethod'] == 'PUT':
        key = event['queryStringParameters']['key']
        analyzer = DocumentAnalyzer(key=key)
        data = analyzer.run()

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(data, default=str)
    }