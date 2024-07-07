from openai import OpenAI 

import json

client = OpenAI(api_key="")

def chat_with_memory(): 
    user_data = get_user_data()

    description = ["User tends to like something girly"]
    links = ["https://the-drawer.com/shop/sleepwear/pyjama-sets/gisele-relaxed-short-pj-set-2/"]

    context = ""
    context += "User perferences: "
    context += "User Input: "

    prompt = "You are ChatGPT with memory capabilities. You are to determine the best link for the given user based on the context given. "

    for text in range(len(description)):
        prompt += description[text] 
    
    for text in range(len(links)): 
        prompt += links[text]

    context += "User perferences: "
    for text in range(len(description)): 
        context += description[text]
    
    context += " User Input: "
    for text in range(len(links)): 
        context += links[text] 

    print(context)
    print(prompt)

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are ChatGPT with memory capabilities. You are to determine the best link for the given user based on the context given."},
            {"role": "user", "content": context},
        ], 
    )
    
    # Store the new conversation in user data
    conversation_history = user_data.get("conversation_history", [])
    conversation_history.append({"user_input": "You are ChatGPT with memory capabilities. You are to determine the best link for the given user based on the context given.", "response": response.choices[0].message.content})
    store_user_data({"conversation_history": conversation_history})
    
    return response.choices[0].message.content 

def store_user_data(json_data): 
    file_path = "user.json"
    with open(file_path, 'r') as file: 
        user_data = json.load(file) 
    
    user_data.update(json_data)

    with open(file_path, 'w') as file: 
        json.dump(user_data, file)
    

def get_user_data(): 
    file_path = "user.json"
    with open(file_path, 'r') as file:
            user_data = json.load(file)
    return user_data

def main(): 
    print(chat_with_memory()) 

main() 