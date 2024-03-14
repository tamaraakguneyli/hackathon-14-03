import { useState } from "react";
import MessageBox from "./components/MessageBox/MessageBox";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.scss";

const api_Key = "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";
function App() {
  const [content, setContent] = useState(null);
  const [originalPrompt, setOriginalPrompt] = useState(null);

  const handleSendRequest = async (message) => {
    message.preventDefault();
    const form = message.target;
    const userInput = form.input.value;
    setOriginalPrompt(userInput);

    try {
      const response = await processMessageToChatGPT([userInput]);
      setContent(response.choices[0]?.message?.content);
      console.log(response);
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
      }
      return userInput;
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  async function processMessageToChatGPT(userInput) {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: `${userInput}` }],
    };

    const responseData = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + api_Key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }
    );

    return responseData.json();
  }

  const handleNewResponse = async (event) => {
    event.preventDefault();

    const secondPrompt = `I dont like ${content}.${originalPrompt}  `;

    try {
      const newResponse = await processMessageToChatGPT([secondPrompt]);
      setContent(newResponse.choices[0]?.message?.content);
      console.log(newResponse);
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
      }
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="chat">
        <MessageBox onSend={handleSendRequest} />
        <div className="content">
          {content && <p className="content__box">{content}</p>}
        </div>
      </div>
      <Button onSubmit={handleNewResponse} />
    </>
  );
}

export default App;
