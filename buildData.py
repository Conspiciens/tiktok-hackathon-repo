from serpapi import GoogleSearch
#commented out since pip dependency doesn't work
# from dotenv import load_dotenv, dotenv_values
import os
import cv2
import numpy as np
import boto3
import uuid
import json

###         CONSTANTS:      ###

#Image -> URL Constants:
TOP_REALITORS = ["amazon", "ebay", "walmart", "target", "zappos", "newegg"]
params = {
    "engine": "google_lens", 
    #remember to delete
    "api_key": "7b083c0493628e4959a44977acf9039a4daed2d59324da373e6bca9d1614af07"
}

session = boto3.Session(
    #remember to delete
    aws_access_key_id='AKIA2MAMGG24V4QW3X6F',
    aws_secret_access_key='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',
    region_name='us-west-1'
)

s3 = session.client('s3')
bucket = 'image-bucket-for-tiktok'

# load_dotenv()

#Collage -> Images:
def getImages(path = 'collages/', collage = 'collage'):
    num = 0
    images = []
    uuids = []

    # Read the image
    image = cv2.imread(path+collage+".png")
    if image is None:
        print("Error: Could not load the image. Check the file path.")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Edge detection
    edges = cv2.Canny(gray, 50, 150)

    # Find contours
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Loop over contours and extract images
    buffer = 10
    for i, contour in enumerate(contours):
        x, y, w, h = cv2.boundingRect(contour)
        y1, y2 = max(y - buffer, 0), min(y + h + buffer, image.shape[0])
        x1, x2 = max(x - buffer, 0), min(x + w + buffer, image.shape[1])
        
        extracted_image = image[y1:y2, x1:x2]
        extracted_image = cv2.resize(extracted_image, (400, 400))
        min_width, min_height = 30+buffer, 30+buffer
        
        if w >= min_width and h >= min_height:
            num += 1
            new_uuid = str(uuid.uuid4())
            location = f'outputs/{new_uuid}.jpg'
            cv2.imwrite(location, extracted_image)
            uuids.append(new_uuid)
            images.append(location)

    print(num, " objects found")
    return images, uuids

#list of images holds path and image [a.png, b.png...]
def upload_images(images, uuids, bucket=bucket): 
    counter = 0
    for file in images: 
        key_name = uuids[counter]+".jpg"
        s3.upload_file(f'{file}', bucket, key_name, ExtraArgs={'ContentType': 'jpg'})

        counter += 1 


def get_images(uuids, bucket=bucket):
    urls = []
    for uuid in uuids:
        url = f"https://{bucket}.s3.amazonaws.com/{uuid}.jpg"
        urls.append(url)
    return urls

#Image -> URL:

def getURLS(images, uuids, context): #Images is the public urls
    top_results = []
    other_results = []
    data = []
    counter = 0

    #Call API and search of images
    for image in images: 
        params["url"] = images[0]
        search = GoogleSearch(params) 
        print(search.get_dict())
        results = search.get_dict()["visual_matches"]

        for result in results: 
            link = result["link"]
            #can help with prompting
            isTopReal = False
            for retailer in TOP_REALITORS: 
                if retailer in link: 
                    top_results.append(link)
                    isTopReal = True
                    break
            if (not isTopReal):       
                other_results.append(link)

        #Create object to store the data:
        obj = {
            "uuid": uuids[counter],
            "image_link": image,
            "top_results": top_results[:10],
            "other_results": other_results[:10],
            "context": context
        }

        data.append(obj)
        counter += 1
    return data

def main():
    collages = ['collage']#, 'collage2','collage3', 'collage4','collage5', 'collage6']
    contexts = ['These are great gifts for the moms, sisters, and girlfriends in your life! Great for people who love self-care, looking amazing, and resting!',
                'These are great gifts for the friends in your life who love to take care of their hair!',
                'BEST IDEAS OF THE GUYS! Buy these gifts for your brothers, dads, and boyfriends!'
                'Cool ideas for things to buy for your boyfriend!',
                'GIFT IDEAS FOR YOUR MOTHERS AND MOMS! Get these gifts for your moms for mothers day!',
                'Fathers day is coming up! Get these gifts for the dads in your life!'
                ]

    counter = 0
    for c in collages:
        images, uuids = getImages(path = 'collages/', collage = c)
        upload_images(images, uuids)
        imageURLS = get_images(uuids)
        #print(imageURLS)
        data = getURLS(imageURLS, uuids, contexts[counter])

        file_path = "tiktok-react-app/src/data.json"
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=2)

        print(f"JSON data saved to {file_path}")#Fix me, src
        counter+=1

main()