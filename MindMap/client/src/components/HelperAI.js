import {useState} from 'react';
import '@chatscope/chat-ui-kit-react';

import firstPage from "../assets/AdobeStock_387753011.mov"
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";
const MY_KEY = "<your api key>"

const HelperAI = props =>{
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm MindMap",
            sender: "ChatGPT",
        }
    ])

    const handleonsend = async (message) => {
        const newMessage = {
            message: message, 
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages)

        setTyping(true);

        await processMessageToChatGPT(newMessages);
    }
    

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role ="";
            if(messageObject.sender === "ChatGPT") {
                role = "assistant"
            } else {
                role = "user"
            }
            return { role: role, content: messageObject.message}
        });

        const systemMessage = {
            role: "system",
            content: "Speak like Mental Helth therapist"
        }

        const apiRequestBody = {
            "model" : "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages,
            ]
            
        }
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST", 
            headers:
                {
                    "Authorization" : "Bearer " + MY_KEY,
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            //console.log(data.choices[0].message.content);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]
            );
            setTyping(false);
        })
    }
    return(
        <div className="firstPageClass">
            <MainContainer>
                <video src={firstPage} autoPlay loop muted></video>
                <ChatContainer>
                    <MessageList
                        scrollBehavior='smooth'
                        typingIndicator = {typing ? <TypingIndicator content = "MindMap is typing" /> : null}>
                        {messages.map((message, index) =>{
                            return <Message key={index} model={message} />
                        })}
                    </MessageList>
                    <MessageInput placeholder='Type here' onSend={handleonsend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default HelperAI