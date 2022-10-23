export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amplifybiasguard9aab57d5": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "analizer": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "documents": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "analizer": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "documents": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "s3amplifybiasguardstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}