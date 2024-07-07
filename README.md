# Tiktok TechJam Hackathon Repo

## About TikTok On The Clock

> [!NOTE]
> **TODO**: Add chatbot description here!

### Set Up:
Run this command: pip install -r requirements.txt to get all the python libraries


### Built With 
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
* [React-chatbot-kit](https://github.com/FredrikOseberg/react-chatbot-kit)

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
  

## Resources 
* [Node.js and NPM Installation](https://nodejs.org/en/download/package-manager)
* [React-chatbot-kit Docs](https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/)
