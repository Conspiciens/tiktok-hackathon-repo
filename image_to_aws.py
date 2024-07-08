import boto3
import os 

session = boto3.Session(
    aws_access_key_id='key',
    aws_secret_access_key='key',
    region_name='us-west-1'
)

s3 = session.client('s3')
bucket = 'image-bucket-for-tiktok'

#placeholder 
files = [r"local file path"]

counter = 0
for file in files: 
    key_name = "image" + str(counter)
    counter += 1 
    s3.upload_file(file, bucket, key_name)