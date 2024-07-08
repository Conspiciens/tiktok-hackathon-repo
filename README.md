# Tiktok TechJam Hackathon Repo

## About TikTok On The Clock

> [!NOTE]
> **TODO**: Add chatbot description here!

## Features
> [!NOTE]
> **TODO**: Add existing features here!

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
> [!NOTE]
> **TODO**: Add future implementation here!

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
