import React from "react";

const MessageParser = ({ children, actions }) => {

    // Every message sent by the user passes through this func
    function parse(message) {
        // For now, there is no specific ruleset so handleMessage is the response to everything
        console.log(message);
        if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello")) {
            actions.handleHello();
        } else if (message.toLowerCase().includes("bye")) {
            actions.handleGoodbye();
        } else {
            actions.handleMessage(message);
        }
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                })
            })}
        </div>
    )
}

export default MessageParser;