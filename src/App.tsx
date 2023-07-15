import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { useState } from "react";
import { ElizaService } from "@buf/bufbuild_eliza.bufbuild_connect-es/buf/connect/demo/eliza/v1/eliza_connect";

const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build"
})

const client = createPromiseClient(ElizaService, transport);

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{
    fromMe: boolean;
    message: string;
  }[]>([]);

  return <>
    <ol>
      {messages.map((message, index) => <li key={index}>{`${message.fromMe ? "ME:" : "ELIZA:"} ${message.message}`} </li>)}
    </ol>
    <form onSubmit={async (e) => {
      e.preventDefault();
      setInputValue("");
      setMessages((prev) => [...prev,
      {
        fromMe: true,
        message: inputValue
      }
      ])
      const response = await client.say({ sentense: inputValue })
      console.log(response.sentence)
      setMessages((prev) => [...prev,
      {
        fromMe: false,
        message: response.sentence
      }
      ])
    }}>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  </>
}

export default App;