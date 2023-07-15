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
  return <>
    <form onSubmit={async (e) => {
      e.preventDefault();
      await client.say({ sentense: inputValue })
    }}>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  </>
}

export default App;