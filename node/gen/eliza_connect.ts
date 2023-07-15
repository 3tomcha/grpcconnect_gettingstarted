// @generated by protoc-gen-connect-es v0.11.0 with parameter "target=ts"
// @generated from file eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service buf.connect.demo.eliza.v1.Eliza
 */
export const Eliza = {
  typeName: "buf.connect.demo.eliza.v1.Eliza",
  methods: {
    /**
     * @generated from rpc buf.connect.demo.eliza.v1.Eliza.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

