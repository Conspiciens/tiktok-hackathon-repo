import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children}) => {

    function handleMessage(userMessage) {
        // This function should generate a response from ChatGPT
        const botResponse = createChatBotMessage(`Please wait a moment while I find an answer for the inquiry: ${userMessage}.`)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botResponse],
        }))
    }

    function handleHello() {
        const botResponse = createChatBotMessage("Hi, my name is TikTok On The Clock, it's very nice to meet you! I can help search for TikTok videos and links that best fit your inquiry.")

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botResponse],
        }))
    }

    function handleGoodbye() {
        const botResponse = createChatBotMessage("Goodbye, please let me know if there is anything else I can help you with.")

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botResponse],
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleMessage, handleHello, handleGoodbye },
                })
            })}
        </div>
    )
}

export default ActionProvider;