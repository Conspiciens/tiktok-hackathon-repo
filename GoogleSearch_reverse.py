from serpapi import GoogleSearch
from dotenv import load_dotenv, dotenv_values
import os

load_dotenv()

params = {
    "engine": "google_reverse_image", 
    "api_key": os.getenv("my_api_key")
}

images = ["https://drive.google.com/file/d/1omEjL2979qkaFUq2AGS78fC0cj6gYAc_/view?usp=sharing"]
top_results = []
other_results = []

top_retailers = ["amazon", "ebay", "walmart", "target", "zappos", "newegg"]

for image in images: 
    params["image_url"] = images[0]
    search = GoogleSearch(params)
    print(search)
    results = search.get_dict()["image_results"]
    print(results)
    for result in results: 
        link = result["link"]
        #can help with prompting
        isTopReal = False
        for retailer in top_retailers: 
            if retailer in link: 
                top_results.append(link)
                isTopReal = True
                break
        if (not isTopReal):       
            other_results.append(link)


print(top_results)
print(other_results)
    # urls = [result for result in results["image_results"] if result['link'].lower() in top_retailers]
    # print(urls)