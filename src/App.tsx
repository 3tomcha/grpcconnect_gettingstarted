import { createPromiseClient } from "@bufbuild/connect";
import { createConnectTransport } from "@bufbuild/connect-web";

import { ElizaService } from "@buf/bufbuild_eliza.bufbuild_connect-es/buf/connect/demo/eliza/v1/eliza_connect";

const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build"
})

const client = createPromiseClient(ElizaService, transport);