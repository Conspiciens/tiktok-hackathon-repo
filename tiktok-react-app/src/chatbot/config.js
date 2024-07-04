import { createChatBotMessage } from "react-chatbot-kit";

const botName = "TikTok On The Clock"

export const config = {
    botName: botName,

    // Defines an array of initial messages that will be displayed on first render
    initialMessages: [
        createChatBotMessage(`Hi, my name is ${botName}. Ask me anything!`)
    ],

    // Defines an object of custom components that will replace the stock chatbot components. 
    customComponents: {
        botAvatar: () => <img className="rounded-full h-14 w-14" src="./bot-icon.jpg" alt="TikTok Chatbot that can aid you with searching"></img>,
    },

    // Defines an object of custom styles if you want to override styles
    customStyles: {
        botMessageBox: {
            backgroundColor: "#72BEC5",
        }
    }
}
