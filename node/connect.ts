import { ConnectRouter } from "@bufbuild/connect";
import { Eliza } from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.Eliza
  router.service(Eliza, {
    // implements rpc Say
    async say(req) {
      return {
        sentence: `You: ${req.sentence}`
      }
    },
  });