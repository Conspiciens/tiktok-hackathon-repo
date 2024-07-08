# Tiktok TechJam Hackathon Repo

## Problem Statement
TikTok is the new go-to place for getting information and fulfilling search inquiries. This can come as a surprise, but it is also commonly used for gift finding! You can easily search for gift ideas on TikTok and get a ton of recommendations and product reviews from other creators. This is so much more convenient than searching on Google because there are actual people vouching for these products/items!

While this is great, these recommendations/reviews present themselves as a collage or a video, adding an extra step for users to find the actual product on their own. You can just imagine having to switch between Google and the TikTok App to make sure you have the spelling correct and how frustrating that can be. This leads most people to give up in the middle of their search.

## About TikTok On The Clock
TikTok On The Clock is a chatbot that is integrated with TikTok's current Search page. The chatbot is designed to aid users with their search experience and alleviate the workload they need to do. With the help of the chatbot, users can get access to reviewed/vouched for product links with just one inquiry. TikTok On The Clock will also add all the links it provides to a wishlist that users can reference at a later time!

### Built With 
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React-chatbot-kit](https://github.com/FredrikOseberg/react-chatbot-kit)
* [OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
* [Google Reverse Image API](https://serpapi.com/google-reverse-image)
* [OpenCV: Canny Edge Detection](https://docs.opencv.org/4.x/d7/de1/tutorial_js_canny.html)

## Getting Started

### Prerequisites 

  * Node.js and NPM

    The following commands are suitable for `macOS` using `nvm`. For additional instructions on how to install Node.js and NPM using other tools/managers, refer to this link: https://nodejs.org/en/download/package-manager and change the selections.

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    nvm install 20
    ```

    Verify the versions of Node.js and NPM installed through:
    ```
    node -v
    npm -v
    ```

### Installation
  1. Clone the repo
  ```
  git clone https://github.com/Conspiciens/tiktok-hackathon-repo.git
  ```
  2. Install NPM packages inside React app
  ```
  cd tiktok-react-app
  npm install
  ```
  Some packages may require specific tags to successfully install them, so you may need to search up the specific command that includes the name of the package. 
  
  Some specific commands that may be needed are listed below (do all package installation inside the `tiktok-react-app` directory):
  ```
  # For MUI components and icons
  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

  # For React router dom module
  npm install react-router-dom --save
  ```

## Future Implementation
* Adapt the chatbot’s personality/way of speaking to the user’s watch history
* Include TikTok videos in the analysis process and provide links to videos that are most helpful considering the user's inquiry.
* Expand beyond gift ideas! We can embed product links directly to any video mentioning items/products

## Help
If you are using a Windows OS and you run into the following error after running `npm start`:
```
 Plugin "react" was conflicted between "package.json >> eslint-config-react-app
 >> [some_path]" and "BaseConfig >> [some_other_path]".
```
This is a problem with casing, which is only specific to Windows. You can resolve this by locating the directory names with the correct casing and running the React application again from there.

## Resources 
* [Node.js and NPM Installation](https://nodejs.org/en/download/package-manager)
* [React-chatbot-kit Docs](https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/)
