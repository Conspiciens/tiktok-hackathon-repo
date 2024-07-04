import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
// import "./custom_style.css"
import { config } from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function TikTokChatbot() {

  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    ></Chatbot>
  );
}

export default TikTokChatbot;
