from serpapi import GoogleSearch
from dotenv import load_dotenv, dotenv_values
import os
import cv2
import numpy as np

###         CONSTANTS:      ###

#Image -> URL Constants:
TOP_REALITORS = ["amazon", "ebay", "walmart", "target", "zappos", "newegg"]
params = {
    "engine": "google_reverse_image", 
    "api_key": os.getenv("my_api_key")
}

load_dotenv()

#Collage -> Images:
def getImages(path = '/collage2.png'):
    # Read the image
    image = cv2.imread(path)
    if image is None:
        print("Error: Could not load the image. Check the file path.")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Edge detection
    edges = cv2.Canny(gray, 50, 150)

    # Find contours
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Loop over contours and extract images
    num = 0
    buffer = 10
    for i, contour in enumerate(contours):
        x, y, w, h = cv2.boundingRect(contour)
        y1, y2 = max(y - buffer, 0), min(y + h + buffer, image.shape[0])
        x1, x2 = max(x - buffer, 0), min(x + w + buffer, image.shape[1])
        
        extracted_image = image[y1:y2, x1:x2]
        min_width, min_height = 30+buffer, 30+buffer
        
        if w >= min_width and h >= min_height:
            num += 1
            cv2.imwrite(f'/home/image_{i}.jpg', extracted_image) #TODO FIX THIS
    print(num, " objects found")

#Image -> URL:
def getURLS(images):
    images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1130px-Red_Apple.jpg"]
    top_results = []
    other_results = []
    toReturn = {}

    #Call API and search of images
    for image in images: 
        params["image_url"] = images[0]
        search = GoogleSearch(params) 
        results = search.get_dict()["image_results"]

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
        toReturn[image] = {"top_results": top_results, "other_results": other_results}
        print(top_results)
        print(other_results)

    return toReturn