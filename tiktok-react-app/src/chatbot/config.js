import { createChatBotMessage } from "react-chatbot-kit";
import ProductLink from "../widgets/ProductLink";

// This file contains configurations for the ChatBot

const botName = "TikTok On The Clock";

export const config = {
  botName: botName,

  // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example
  state: {
    linksToDisplay: [],
  },

  // Defines an array of initial messages that will be displayed on first render
  initialMessages: [
    createChatBotMessage(`Hi, my name is ${botName}. Ask me anything!`),
  ],

  // Defines an object of custom components that will replace the stock chatbot components.
  customComponents: {
    botAvatar: () => (
      <img
        className="rounded-full h-14 w-14"
        src="./bot-icon.jpg"
        alt="TikTok Chatbot that can aid you with searching"
      ></img>
    ),
    userAvatar: () => (
      <img
        className="rounded-full h-14 w-14"
        src="./user-profile-pic.jpg"
        alt=""
      ></img>
    ),
  },

  // Defines an object of custom styles if you want to override styles
  customStyles: {
    botMessageBox: {
      backgroundColor: "#72BEC5",
    },
    chatButton: {
      backgroundColor: "#ED1E50",
    },
  },

  // Defines an array of widgets that you want to render with a chatbot message
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: "productLink",
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <ProductLink {...props} />,
      // Any props you want the widget to receive on render
      props: { },
      // Any piece of state defined in the state object that you want to pass down to this widget
      mapStateToProps: ["linksToDisplay",],
    },
  ],
};
