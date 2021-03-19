(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{733:function(e,o,t){"use strict";t.r(o);var c=t(1),n=Object(c.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("While encoding in the SDK used to be mainly handled by "),t("code",[e._v("go-amino")]),e._v(" codec, the SDK is moving towards using "),t("code",[e._v("gogoprotobuf")]),e._v(" for both state and client-side encoding.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK application")])],1)]),e._v(" "),t("h2",{attrs:{id:"encoding-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding-2"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",[e._v("The Cosmos SDK utilizes two binary wire encoding protocols, "),t("a",{attrs:{href:"https://github.com/tendermint/go-amino/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amino"),t("OutboundLink")],1),e._v(" which is an object encoding specification and "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),t("OutboundLink")],1),e._v(", a subset of Proto3 with an extension for\ninterface support. See the "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3 spec"),t("OutboundLink")],1),e._v("\nfor more information on Proto3, which Amino is largely compatible with (but not with Proto2).")]),e._v(" "),t("p",[e._v("Due to Amino having significant performance drawbacks, being reflection-based, and\nnot having any meaningful cross-language/client support, Protocol Buffers, specifically\n"),t("a",{attrs:{href:"https://github.com/gogo/protobuf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),t("OutboundLink")],1),e._v(", is being used in place of Amino.\nNote, this process of using Protocol Buffers over Amino is still an ongoing process.")]),e._v(" "),t("p",[e._v("Binary wire encoding of types in the Cosmos SDK can be broken down into two main\ncategories, client encoding and store encoding. Client encoding mainly revolves\naround transaction processing and signing, whereas store encoding revolves around\ntypes used in state-machine transitions and what is ultimately stored in the Merkle\ntree.")]),e._v(" "),t("p",[e._v('For store encoding, protobuf definitions can exist for any type and will typically\nhave an Amino-based "intermediary" type. Specifically, the protobuf-based type\ndefinition is used for serialization and persistence, whereas the Amino-based type\nis used for business logic in the state-machine where they may converted back-n-forth.\nNote, the Amino-based types may slowly be phased-out in the future so developers\nshould take note to use the protobuf message definitions where possible.')]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("codec")]),e._v(" package, there exists two core interfaces, "),t("code",[e._v("Marshaler")]),e._v(" and "),t("code",[e._v("ProtoMarshaler")]),e._v(",\nwhere the former encapsulates the current Amino interface except it operates on\ntypes implementing the latter instead of generic "),t("code",[e._v("interface{}")]),e._v(" types.")]),e._v(" "),t("p",[e._v("In addition, there exists two implementations of "),t("code",[e._v("Marshaler")]),e._v(". The first being\n"),t("code",[e._v("AminoCodec")]),e._v(", where both binary and JSON serialization is handled via Amino. The\nsecond being "),t("code",[e._v("ProtoCodec")]),e._v(", where both binary and JSON serialization is handled\nvia Protobuf.")]),e._v(" "),t("p",[e._v("This means that modules may use Amino or Protobuf encoding but the types must\nimplement "),t("code",[e._v("ProtoMarshaler")]),e._v(". If modules wish to avoid implementing this interface\nfor their types, they may use an Amino codec directly.")]),e._v(" "),t("h3",{attrs:{id:"amino"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),t("p",[e._v("Every module uses an Amino codec to serialize types and interfaces. This codec typically\nhas types and interfaces registered in that module's domain only (e.g. messages),\nbut there are exceptions like "),t("code",[e._v("x/gov")]),e._v(". Each module exposes a "),t("code",[e._v("RegisterLegacyAminoCodec")]),e._v(" function\nthat allows a user to provide a codec and have all the types registered. An application\nwill call this method for each necessary module.")]),e._v(" "),t("p",[e._v("Where there is no protobuf-based type definition for a module (see below), Amino\nis used to encode and decode raw wire bytes to the concrete type or interface:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YnogOj0ga2VlcGVyLmNkYy5NdXN0TWFyc2hhbEJpbmFyeUJhcmUodHlwZU9ySW50ZXJmYWNlKQprZWVwZXIuY2RjLk11c3RVbm1hcnNoYWxCaW5hcnlCYXJlKGJ6LCAmYW1wO3R5cGVPckludGVyZmFjZSkK"}}),e._v(" "),t("p",[e._v("Note, there are length-prefixed variants of the above functionality and this is\ntypically used for when the data needs to be streamed or grouped together\n(e.g. "),t("code",[e._v("ResponseDeliverTx.Data")]),e._v(")")]),e._v(" "),t("h3",{attrs:{id:"gogoproto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gogoproto"}},[e._v("#")]),e._v(" Gogoproto")]),e._v(" "),t("p",[e._v("Modules are encouraged to utilize Protobuf encoding for their respective types. In the SDK, we use the "),t("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gogoproto"),t("OutboundLink")],1),e._v(" specific implementation of the Protobuf spec that offers speed and DX improvements compared to the official "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google protobuf implementation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"guidelines-for-protobuf-message-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-protobuf-message-definitions"}},[e._v("#")]),e._v(" Guidelines for protobuf message definitions")]),e._v(" "),t("p",[e._v("In addition to "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#simple",target:"_blank",rel:"noopener noreferrer"}},[e._v("following official Protocol Buffer guidelines"),t("OutboundLink")],1),e._v(", we recommend using these annotations in .proto files when dealing with interfaces:")]),e._v(" "),t("ul",[t("li",[e._v("use "),t("code",[e._v("cosmos_proto.accepts_interface")]),e._v(" to annote fields that accept interfaces")]),e._v(" "),t("li",[e._v("pass the same fully qualified name as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])]),e._v(" "),t("li",[e._v("annotate interface implementations with "),t("code",[e._v("cosmos_proto.implements_interface")])]),e._v(" "),t("li",[e._v("pass the same fully qualified name as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])])]),e._v(" "),t("h3",{attrs:{id:"transaction-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-encoding"}},[e._v("#")]),e._v(" Transaction Encoding")]),e._v(" "),t("p",[e._v("Another important use of Protobuf is the encoding and decoding of\n"),t("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(". Transactions are defined by the application or\nthe SDK but are then passed to the underlying consensus engine to be relayed to\nother peers. Since the underlying consensus engine is agnostic to the application,\nthe consensus engine accepts only transactions in the form of raw bytes.")],1),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("TxEncoder")]),e._v(" object performs the encoding.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("TxDecoder")]),e._v(" object performs the decoding.")])]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHhEZWNvZGVyIHVubWFyc2hhbHMgdHJhbnNhY3Rpb24gYnl0ZXMKdHlwZSBUeERlY29kZXIgZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKFR4LCBlcnJvcikKCi8vIFR4RW5jb2RlciBtYXJzaGFscyB0cmFuc2FjdGlvbiB0byBieXRlcwp0eXBlIFR4RW5jb2RlciBmdW5jKHR4IFR4KSAoW11ieXRlLCBlcnJvcik="}})],1),e._v(" "),t("p",[e._v("A standard implementation of both these objects can be found in the "),t("RouterLink",{attrs:{to:"/x/auth/spec/"}},[t("code",[e._v("auth")]),e._v(" module")]),e._v(":")],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMvdW5rbm93bnByb3RvJnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJc2RrZXJyb3JzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvZXJyb3JzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCi8vIERlZmF1bHRUeERlY29kZXIgcmV0dXJucyBhIGRlZmF1bHQgcHJvdG9idWYgVHhEZWNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIuCmZ1bmMgRGVmYXVsdFR4RGVjb2RlcihjZGMgY29kZWMuUHJvdG9Db2RlY01hcnNoYWxlcikgc2RrLlR4RGVjb2RlciB7CglyZXR1cm4gZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKHNkay5UeCwgZXJyb3IpIHsKCQl2YXIgcmF3IHR4LlR4UmF3CgoJCS8vIHJlamVjdCBhbGwgdW5rbm93biBwcm90byBmaWVsZHMgaW4gdGhlIHJvb3QgVHhSYXcKCQllcnIgOj0gdW5rbm93bnByb3RvLlJlamVjdFVua25vd25GaWVsZHNTdHJpY3QodHhCeXRlcywgJmFtcDtyYXcsIGNkYy5JbnRlcmZhY2VSZWdpc3RyeSgpKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJZXJyID0gY2RjLlVubWFyc2hhbEJpbmFyeUJhcmUodHhCeXRlcywgJmFtcDtyYXcpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIGVycgoJCX0KCgkJdmFyIGJvZHkgdHguVHhCb2R5CgoJCS8vIGFsbG93IG5vbi1jcml0aWNhbCB1bmtub3duIGZpZWxkcyBpbiBUeEJvZHkKCQl0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzLCBlcnIgOj0gdW5rbm93bnByb3RvLlJlamVjdFVua25vd25GaWVsZHMocmF3LkJvZHlCeXRlcywgJmFtcDtib2R5LCB0cnVlLCBjZGMuSW50ZXJmYWNlUmVnaXN0cnkoKSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCWVyciA9IGNkYy5Vbm1hcnNoYWxCaW5hcnlCYXJlKHJhdy5Cb2R5Qnl0ZXMsICZhbXA7Ym9keSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCXZhciBhdXRoSW5mbyB0eC5BdXRoSW5mbwoKCQkvLyByZWplY3QgYWxsIHVua25vd24gcHJvdG8gZmllbGRzIGluIEF1dGhJbmZvCgkJZXJyID0gdW5rbm93bnByb3RvLlJlamVjdFVua25vd25GaWVsZHNTdHJpY3QocmF3LkF1dGhJbmZvQnl0ZXMsICZhbXA7YXV0aEluZm8sIGNkYy5JbnRlcmZhY2VSZWdpc3RyeSgpKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJZXJyID0gY2RjLlVubWFyc2hhbEJpbmFyeUJhcmUocmF3LkF1dGhJbmZvQnl0ZXMsICZhbXA7YXV0aEluZm8pCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQl0aGVUeCA6PSAmYW1wO3R4LlR4ewoJCQlCb2R5OiAgICAgICAmYW1wO2JvZHksCgkJCUF1dGhJbmZvOiAgICZhbXA7YXV0aEluZm8sCgkJCVNpZ25hdHVyZXM6IHJhdy5TaWduYXR1cmVzLAoJCX0KCgkJcmV0dXJuICZhbXA7d3JhcHBlcnsKCQkJdHg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlVHgsCgkJCWJvZHlCejogICAgICAgICAgICAgICAgICAgICAgIHJhdy5Cb2R5Qnl0ZXMsCgkJCWF1dGhJbmZvQno6ICAgICAgICAgICAgICAgICAgIHJhdy5BdXRoSW5mb0J5dGVzLAoJCQl0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzOiB0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzLAoJCX0sIG5pbAoJfQp9CgovLyBEZWZhdWx0SlNPTlR4RGVjb2RlciByZXR1cm5zIGEgZGVmYXVsdCBwcm90b2J1ZiBKU09OIFR4RGVjb2RlciB1c2luZyB0aGUgcHJvdmlkZWQgTWFyc2hhbGVyLgpmdW5jIERlZmF1bHRKU09OVHhEZWNvZGVyKGNkYyBjb2RlYy5Qcm90b0NvZGVjTWFyc2hhbGVyKSBzZGsuVHhEZWNvZGVyIHsKCXJldHVybiBmdW5jKHR4Qnl0ZXMgW11ieXRlKSAoc2RrLlR4LCBlcnJvcikgewoJCXZhciB0aGVUeCB0eC5UeAoJCWVyciA6PSBjZGMuVW5tYXJzaGFsSlNPTih0eEJ5dGVzLCAmYW1wO3RoZVR4KQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJcmV0dXJuICZhbXA7d3JhcHBlcnsKCQkJdHg6ICZhbXA7dGhlVHgsCgkJfSwgbmlsCgl9Cn0K"}})],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9wcm90byZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7Cgl0eHR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvdHgmcXVvdDsKKQoKLy8gRGVmYXVsdFR4RW5jb2RlciByZXR1cm5zIGEgZGVmYXVsdCBwcm90b2J1ZiBUeEVuY29kZXIgdXNpbmcgdGhlIHByb3ZpZGVkIE1hcnNoYWxlcgpmdW5jIERlZmF1bHRUeEVuY29kZXIoKSBzZGsuVHhFbmNvZGVyIHsKCXJldHVybiBmdW5jKHR4IHNkay5UeCkgKFtdYnl0ZSwgZXJyb3IpIHsKCQl0eFdyYXBwZXIsIG9rIDo9IHR4Ligqd3JhcHBlcikKCQlpZiAhb2sgewoJCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90O2V4cGVjdGVkICVULCBnb3QgJVQmcXVvdDssICZhbXA7d3JhcHBlcnt9LCB0eCkKCQl9CgoJCXJhdyA6PSAmYW1wO3R4dHlwZXMuVHhSYXd7CgkJCUJvZHlCeXRlczogICAgIHR4V3JhcHBlci5nZXRCb2R5Qnl0ZXMoKSwKCQkJQXV0aEluZm9CeXRlczogdHhXcmFwcGVyLmdldEF1dGhJbmZvQnl0ZXMoKSwKCQkJU2lnbmF0dXJlczogICAgdHhXcmFwcGVyLnR4LlNpZ25hdHVyZXMsCgkJfQoKCQlyZXR1cm4gcHJvdG8uTWFyc2hhbChyYXcpCgl9Cn0KCi8vIERlZmF1bHRKU09OVHhFbmNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIEpTT04gVHhFbmNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIuCmZ1bmMgRGVmYXVsdEpTT05UeEVuY29kZXIoY2RjIGNvZGVjLlByb3RvQ29kZWNNYXJzaGFsZXIpIHNkay5UeEVuY29kZXIgewoJcmV0dXJuIGZ1bmModHggc2RrLlR4KSAoW11ieXRlLCBlcnJvcikgewoJCXR4V3JhcHBlciwgb2sgOj0gdHguKCp3cmFwcGVyKQoJCWlmIG9rIHsKCQkJcmV0dXJuIGNkYy5NYXJzaGFsSlNPTih0eFdyYXBwZXIudHgpCgkJfQoKCQlwcm90b1R4LCBvayA6PSB0eC4oKnR4dHlwZXMuVHgpCgkJaWYgb2sgewoJCQlyZXR1cm4gY2RjLk1hcnNoYWxKU09OKHByb3RvVHgpCgkJfQoKCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90O2V4cGVjdGVkICVULCBnb3QgJVQmcXVvdDssICZhbXA7d3JhcHBlcnt9LCB0eCkKCgl9Cn0K"}})],1),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR-020")]),e._v(" for details of how a transaction is encoded.")],1),e._v(" "),t("h3",{attrs:{id:"interface-encoding-and-usage-of-any"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-encoding-and-usage-of-any"}},[e._v("#")]),e._v(" Interface Encoding and Usage of "),t("code",[e._v("Any")])]),e._v(" "),t("p",[e._v("The Protobuf DSL is strongly typed, which can make inserting variable-typed fields difficult. Imagine we want to create a "),t("code",[e._v("Profile")]),e._v(" protobuf message that serves as a wrapper over "),t("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("an account")]),e._v(":")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBQcm9maWxlIHsKICAvLyBhY2NvdW50IGlzIHRoZSBhY2NvdW50IGFzc29jaWF0ZWQgdG8gYSBwcm9maWxlLgogIGNvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQgYWNjb3VudCA9IDE7CiAgLy8gYmlvIGlzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIGFjY291bnQuCiAgc3RyaW5nIGJpbyA9IDQ7Cn0K"}}),e._v(" "),t("p",[e._v("In this "),t("code",[e._v("Profile")]),e._v(" example, we hardcoded "),t("code",[e._v("account")]),e._v(" as a "),t("code",[e._v("BaseAccount")]),e._v(". However, there are several other types of "),t("RouterLink",{attrs:{to:"/x/auth/spec/05_vesting.html"}},[e._v("user accounts related to vesting")]),e._v(", such as "),t("code",[e._v("BaseVestingAccount")]),e._v(" or "),t("code",[e._v("ContinuousVestingAccount")]),e._v(". All of these accounts are different, but they all implement the "),t("code",[e._v("AccountI")]),e._v(" interface. How would you create a "),t("code",[e._v("Profile")]),e._v(" that allows all these types of accounts with an "),t("code",[e._v("account")]),e._v(" field that accepts an "),t("code",[e._v("AccountI")]),e._v(" interface?")],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSXQgcHJlc3VtZXMgYSBub3Rpb24gb2Ygc2VxdWVuY2UgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24sCi8vIGEgbm90aW9uIG9mIGFjY291bnQgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24gZm9yIHByZXZpb3VzbHkgcHJ1bmVkIGFjY291bnRzLAovLyBhbmQgYSBwdWJrZXkgZm9yIGF1dGhlbnRpY2F0aW9uIHB1cnBvc2VzLgovLwovLyBNYW55IGNvbXBsZXggY29uZGl0aW9ucyBjYW4gYmUgdXNlZCBpbiB0aGUgY29uY3JldGUgc3RydWN0IHdoaWNoIGltcGxlbWVudHMgQWNjb3VudEkuCnR5cGUgQWNjb3VudEkgaW50ZXJmYWNlIHsKCXByb3RvLk1lc3NhZ2UKCglHZXRBZGRyZXNzKCkgc2RrLkFjY0FkZHJlc3MKCVNldEFkZHJlc3Moc2RrLkFjY0FkZHJlc3MpIGVycm9yIC8vIGVycm9ycyBpZiBhbHJlYWR5IHNldC4KCglHZXRQdWJLZXkoKSBjcnlwdG90eXBlcy5QdWJLZXkgLy8gY2FuIHJldHVybiBuaWwuCglTZXRQdWJLZXkoY3J5cHRvdHlwZXMuUHViS2V5KSBlcnJvcgoKCUdldEFjY291bnROdW1iZXIoKSB1aW50NjQKCVNldEFjY291bnROdW1iZXIodWludDY0KSBlcnJvcgoKCUdldFNlcXVlbmNlKCkgdWludDY0CglTZXRTZXF1ZW5jZSh1aW50NjQpIGVycm9yCgoJLy8gRW5zdXJlIHRoYXQgYWNjb3VudCBpbXBsZW1lbnRzIHN0cmluZ2VyCglTdHJpbmcoKSBzdHJpbmcKfQo="}})],1),e._v(" "),t("p",[e._v("In "),t("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR-019")]),e._v(", it has been decided to use "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Any")]),t("OutboundLink")],1),e._v("s to encode interfaces in protobuf. An "),t("code",[e._v("Any")]),e._v(" contains an arbitrary serialized message as bytes, along with a URL that acts as a globally unique identifier for and resolves to that message's type. This strategy allows us to pack arbitrary Go types inside protobuf messages. Our new "),t("code",[e._v("Profile")]),e._v(" then looks like:")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBQcm9maWxlIHsKICAvLyBhY2NvdW50IGlzIHRoZSBhY2NvdW50IGFzc29jaWF0ZWQgdG8gYSBwcm9maWxlLgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgYWNjb3VudCA9IDEgWwogICAgKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtBY2NvdW50SSZxdW90OzsgLy8gQXNzZXJ0cyB0aGF0IHRoaXMgZmllbGQgb25seSBhY2NlcHRzIEdvIHR5cGVzIGltcGxlbWVudGluZyBgQWNjb3VudElgLiBJdCBpcyBwdXJlbHkgaW5mb3JtYXRpb25hbCBmb3Igbm93LgogIF07CiAgLy8gYmlvIGlzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIGFjY291bnQuCiAgc3RyaW5nIGJpbyA9IDQ7Cn0K"}}),e._v(" "),t("p",[e._v('To add an account inside a profile, we need to "pack" it inside an '),t("code",[e._v("Any")]),e._v(" first, using "),t("code",[e._v("codectypes.NewAnyWithValue")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIG15QWNjb3VudCBBY2NvdW50SQpteUFjY291bnQgPSAuLi4gLy8gQ2FuIGJlIGEgQmFzZUFjY291bnQsIGEgQ29udGludW91c1Zlc3RpbmdBY2NvdW50IG9yIGFueSBzdHJ1Y3QgaW1wbGVtZW50aW5nIGBBY2NvdW50SWAKCi8vIFBhY2sgdGhlIGFjY291bnQgaW50byBhbiBBbnkKYWNjQW55LCBlcnIgOj0gY29kZWN0eXBlcy5OZXdBbnlXaXRoVmFsdWUobXlBY2NvdW50KQppZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gbmlsLCBlcnIKfQoKLy8gQ3JlYXRlIGEgbmV3IFByb2ZpbGUgd2l0aCB0aGUgYW55Lgpwcm9maWxlIDo9IFByb2ZpbGUgewogIEFjY291bnQ6IGFjY0FueSwKICBCaW86ICZxdW90O3NvbWUgYmlvJnF1b3Q7LAp9CgovLyBXZSBjYW4gdGhlbiBtYXJzaGFsIHRoZSBwcm9maWxlIGFzIHVzdWFsLgpieiwgZXJyIDo9IGNkYy5NYXJzaGFsQmluYXJ5QmFyZShwcm9maWxlKQpqc29uQnosIGVyciA6PSBjZGMuTWFyc2hhbEpTT04ocHJvZmlsZSkK"}}),e._v(" "),t("p",[e._v("To summarize, to encode an interface, you must 1/ pack the interface into an "),t("code",[e._v("Any")]),e._v(" and 2/ marshal the "),t("code",[e._v("Any")]),e._v(". For convenience, the SDK provides a "),t("code",[e._v("MarshalInterface")]),e._v(" method to bundle these two steps. Have a look at "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.1/x/auth/keeper/keeper.go#L218-L221",target:"_blank",rel:"noopener noreferrer"}},[e._v("a real-life example in the x/auth module"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The reverse operation of retrieving the concrete Go type from inside an "),t("code",[e._v("Any")]),e._v(', called "unpacking", is done with the '),t("code",[e._v("GetCachedValue()")]),e._v(" on "),t("code",[e._v("Any")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cHJvZmlsZUJ6IDo9IC4uLiAvLyBUaGUgcHJvdG8tZW5jb2RlZCBieXRlcyBvZiBhIFByb2ZpbGUsIGUuZy4gcmV0cmlldmVkIHRocm91Z2ggZ1JQQy4KdmFyIG15UHJvZmlsZSBQcm9maWxlCi8vIFVubWFyc2hhbCB0aGUgYnl0ZXMgaW50byB0aGUgbXlQcm9maWxlIHN0cnVjdC4KZXJyIDo9IGNkYy5Vbm1hcnNoYWxCaW5hcnlCYXJlKHByb2ZpbGVieiwgJmFtcDtteVByb2ZpbGUpCgovLyBMZXQncyBzZWUgdGhlIHR5cGVzIG9mIHRoZSBBY2NvdW50IGZpZWxkLgpmbXQuUHJpbnRmKCZxdW90OyVUXG4mcXVvdDssIG15UHJvZmlsZS5BY2NvdW50KSAgICAgICAgICAgICAgICAgIC8vIFByaW50cyAmcXVvdDtBbnkmcXVvdDsKZm10LlByaW50ZigmcXVvdDslVFxuJnF1b3Q7LCBteVByb2ZpbGUuQWNjb3VudC5HZXRDYWNoZWRWYWx1ZSgpKSAvLyBQcmludHMgJnF1b3Q7QmFzZUFjY291bnQmcXVvdDssICZxdW90O0NvbnRpbnVvdXNWZXN0aW5nQWNjb3VudCZxdW90OyBvciB3aGF0ZXZlciB3YXMgaW5pdGlhbGx5IHBhY2tlZCBpbiB0aGUgQW55LgoKLy8gR2V0IHRoZSBhZGRyZXNzIG9mIHRoZSBhY2NvdW50dC4KYWNjQWRkciA6PSBteVByb2ZpbGUuQWNjb3VudC5HZXRDYWNoZWRWYWx1ZSgpLihBY2NvdW50SSkuR2V0QWRkcmVzcygpCg=="}}),e._v(" "),t("p",[e._v("It is important to note that for "),t("code",[e._v("GetCachedValue()")]),e._v(" to work, "),t("code",[e._v("Profile")]),e._v(" (and any other structs embedding "),t("code",[e._v("Profile")]),e._v(") must implement the "),t("code",[e._v("UnpackInterfaces")]),e._v(" method:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocCAqUHJvZmlsZSkgVW5wYWNrSW50ZXJmYWNlcyh1bnBhY2tlciBjb2RlY3R5cGVzLkFueVVucGFja2VyKSBlcnJvciB7CiAgaWYgcC5BY2NvdW50ICE9IG5pbCB7CiAgICB2YXIgYWNjb3VudCBBY2NvdW50SQogICAgcmV0dXJuIHVucGFja2VyLlVucGFja0FueShwLkFjY291bnQsICZhbXA7YWNjb3VudCkKICB9CgogIHJldHVybiBuaWwKfQo="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("UnpackInterfaces")]),e._v(" gets called recursively on all structs implementing this method, to allow all "),t("code",[e._v("Any")]),e._v("s to have their "),t("code",[e._v("GetCachedValue()")]),e._v(" correctly populated.")]),e._v(" "),t("p",[e._v("For more information about interface encoding, and especially on "),t("code",[e._v("UnpackInterfaces")]),e._v(" and how the "),t("code",[e._v("Any")]),e._v("'s "),t("code",[e._v("type_url")]),e._v(" gets resolved using the "),t("code",[e._v("InterfaceRegistry")]),e._v(", please refer to "),t("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR-019")]),e._v(".")],1),e._v(" "),t("h4",{attrs:{id:"any-encoding-in-the-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#any-encoding-in-the-sdk"}},[e._v("#")]),e._v(" "),t("code",[e._v("Any")]),e._v(" Encoding in the SDK")]),e._v(" "),t("p",[e._v("The above "),t("code",[e._v("Profile")]),e._v(" example is a fictive example used for educational purposes. In the SDK, we use "),t("code",[e._v("Any")]),e._v(" encoding in several places (non-exhaustive list):")]),e._v(" "),t("ul",[t("li",[e._v("the "),t("code",[e._v("cryptotypes.PubKey")]),e._v(" interface for encoding different types of public keys,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("sdk.Msg")]),e._v(" interface for encoding different "),t("code",[e._v("Msg")]),e._v("s in a transaction,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("AccountI")]),e._v(" interface for encodinig different types of accounts (similar to the above example) in the x/auth query responses,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("Evidencei")]),e._v(" interface for encoding different types of evidences in the x/evidence module,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("AuthorizationI")]),e._v(" interface for encoding different types of x/authz authorizations.")])]),e._v(" "),t("p",[e._v("A real-life example of encoding the pubkey as "),t("code",[e._v("Any")]),e._v(" inside the Validator struct in x/staking is shown in the following example:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3VmFsaWRhdG9yIGNvbnN0cnVjdHMgYSBuZXcgVmFsaWRhdG9yCi8vbm9saW50OmludGVyZmFjZXIKZnVuYyBOZXdWYWxpZGF0b3Iob3BlcmF0b3Igc2RrLlZhbEFkZHJlc3MsIHB1YktleSBjcnlwdG90eXBlcy5QdWJLZXksIGRlc2NyaXB0aW9uIERlc2NyaXB0aW9uKSAoVmFsaWRhdG9yLCBlcnJvcikgewoJcGtBbnksIGVyciA6PSBjb2RlY3R5cGVzLk5ld0FueVdpdGhWYWx1ZShwdWJLZXkpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gVmFsaWRhdG9ye30sIGVycgoJfQoKCXJldHVybiBWYWxpZGF0b3J7CgkJT3BlcmF0b3JBZGRyZXNzOiAgIG9wZXJhdG9yLlN0cmluZygpLAoJCUNvbnNlbnN1c1B1YmtleTogICBwa0FueSwKCQlKYWlsZWQ6ICAgICAgICAgICAgZmFsc2UsCgkJU3RhdHVzOiAgICAgICAgICAgIFVuYm9uZGVkLAoJCVRva2VuczogICAgICAgICAgICBzZGsuWmVyb0ludCgpLAoJCURlbGVnYXRvclNoYXJlczogICBzZGsuWmVyb0RlYygpLAoJCURlc2NyaXB0aW9uOiAgICAgICBkZXNjcmlwdGlvbiwKCQlVbmJvbmRpbmdIZWlnaHQ6ICAgaW50NjQoMCksCgkJVW5ib25kaW5nVGltZTogICAgIHRpbWUuVW5peCgwLCAwKS5VVEMoKSwKCQlDb21taXNzaW9uOiAgICAgICAgTmV3Q29tbWlzc2lvbihzZGsuWmVyb0RlYygpLCBzZGsuWmVyb0RlYygpLCBzZGsuWmVyb0RlYygpKSwKCQlNaW5TZWxmRGVsZWdhdGlvbjogc2RrLk9uZUludCgpLAoJfSwgbmlsCn0="}})],1),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("ol",[t("li",[e._v("How to create modules using protobuf encoding?")])]),e._v(" "),t("p",[t("strong",[e._v("Defining module types")])]),e._v(" "),t("p",[e._v("Protobuf types can be defined to encode:")]),e._v(" "),t("ul",[t("li",[e._v("state")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[t("code",[e._v("Msg")]),e._v("s")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("Query services")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/genesis.html"}},[e._v("genesis")])],1)]),e._v(" "),t("p",[t("strong",[e._v("Naming and conventions")])]),e._v(" "),t("p",[e._v("We encourage developers to follow industry guidelines: "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/style",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers style guide"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://buf.build/docs/style-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),t("OutboundLink")],1),e._v(", see more details in "),t("RouterLink",{attrs:{to:"/architecture/adr-023-protobuf-naming.html"}},[e._v("ADR 023")])],1),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("How to update modules to protobuf encoding?")])]),e._v(" "),t("p",[e._v("If modules do not contain any interfaces (e.g. "),t("code",[e._v("Account")]),e._v(" or "),t("code",[e._v("Content")]),e._v("), then they\nmay simply migrate any existing types that\nare encoded and persisted via their concrete Amino codec to Protobuf (see 1. for further guidelines) and accept a "),t("code",[e._v("Marshaler")]),e._v(" as the codec which is implemented via the "),t("code",[e._v("ProtoCodec")]),e._v("\nwithout any further customization.")]),e._v(" "),t("p",[e._v("However, if a module type composes an interface, it must wrap it in the "),t("code",[e._v("skd.Any")]),e._v(" (from "),t("code",[e._v("/types")]),e._v(" package) type. To do that, a module-level .proto file must use "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("google.protobuf.Any")]),t("OutboundLink")],1),e._v(" for respective message type interface types.")]),e._v(" "),t("p",[e._v("For example, in the "),t("code",[e._v("x/evidence")]),e._v(" module defines an "),t("code",[e._v("Evidence")]),e._v(" interface, which is used by the "),t("code",[e._v("MsgSubmitEvidence")]),e._v(". The structure definition must use "),t("code",[e._v("sdk.Any")]),e._v(" to wrap the evidence file. In the proto file we define it as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gcHJvdG8vY29zbW9zL2V2aWRlbmNlL3YxYmV0YTEvdHgucHJvdG8KCm1lc3NhZ2UgTXNnU3VibWl0RXZpZGVuY2UgewogIHN0cmluZyAgICAgICAgICAgICAgc3VibWl0dGVyID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IGV2aWRlbmNlICA9IDIgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RXZpZGVuY2UmcXVvdDtdOwp9Cg=="}}),e._v(" "),t("p",[e._v("The SDK "),t("code",[e._v("codec.Marshaler")]),e._v(" interface provides support methods "),t("code",[e._v("MarshalInterface")]),e._v(" and "),t("code",[e._v("UnmarshalInterface")]),e._v(" to easy encoding of state to "),t("code",[e._v("Any")]),e._v(".")]),e._v(" "),t("p",[e._v("Module should register interfaces using "),t("code",[e._v("InterfaceRegistry")]),e._v(" which provides a mechanism for registering interfaces: "),t("code",[e._v("RegisterInterface(protoName string, iface interface{})")]),e._v(" and implementations: "),t("code",[e._v("RegisterImplementations(iface interface{}, impls ...proto.Message)")]),e._v(" that can be safely unpacked from Any, similarly to type registration with Amino:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW50ZXJmYWNlUmVnaXN0cnkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHJlZ2lzdGVyaW5nIGludGVyZmFjZXMgYW5kCi8vIGltcGxlbWVudGF0aW9ucyB0aGF0IGNhbiBiZSBzYWZlbHkgdW5wYWNrZWQgZnJvbSBBbnkKdHlwZSBJbnRlcmZhY2VSZWdpc3RyeSBpbnRlcmZhY2UgewoJQW55VW5wYWNrZXIKCWpzb25wYi5BbnlSZXNvbHZlcgoKCS8vIFJlZ2lzdGVySW50ZXJmYWNlIGFzc29jaWF0ZXMgcHJvdG9OYW1lIGFzIHRoZSBwdWJsaWMgbmFtZSBmb3IgdGhlCgkvLyBpbnRlcmZhY2UgcGFzc2VkIGluIGFzIGlmYWNlLiBUaGlzIGlzIHRvIGJlIHVzZWQgcHJpbWFyaWx5IHRvIGNyZWF0ZQoJLy8gYSBwdWJsaWMgZmFjaW5nIHJlZ2lzdHJ5IG9mIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbnMgZm9yIGNsaWVudHMuCgkvLyBwcm90b05hbWUgc2hvdWxkIGJlIGEgd2VsbC1jaG9zZW4gcHVibGljIGZhY2luZyBuYW1lIHRoYXQgcmVtYWlucyBzdGFibGUuCgkvLyBSZWdpc3RlckludGVyZmFjZSB0YWtlcyBhbiBvcHRpb25hbCBsaXN0IG9mIGltcGxzIHRvIGJlIHJlZ2lzdGVyZWQKCS8vIGFzIGltcGxlbWVudGF0aW9ucyBvZiBpZmFjZS4KCS8vCgkvLyBFeDoKCS8vICAgcmVnaXN0cnkuUmVnaXN0ZXJJbnRlcmZhY2UoJnF1b3Q7Y29zbW9zLmJhc2UudjFiZXRhMS5Nc2cmcXVvdDssICgqc2RrLk1zZykobmlsKSkKCVJlZ2lzdGVySW50ZXJmYWNlKHByb3RvTmFtZSBzdHJpbmcsIGlmYWNlIGludGVyZmFjZXt9LCBpbXBscyAuLi5wcm90by5NZXNzYWdlKQoKCS8vIFJlZ2lzdGVySW1wbGVtZW50YXRpb25zIHJlZ2lzdGVycyBpbXBscyBhcyBjb25jcmV0ZSBpbXBsZW1lbnRhdGlvbnMgb2YKCS8vIHRoZSBpbnRlcmZhY2UgaWZhY2UuCgkvLwoJLy8gRXg6CgkvLyAgcmVnaXN0cnkuUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMoKCpzZGsuTXNnKShuaWwpLCAmYW1wO01zZ1NlbmR7fSwgJmFtcDtNc2dNdWx0aVNlbmR7fSkKCVJlZ2lzdGVySW1wbGVtZW50YXRpb25zKGlmYWNlIGludGVyZmFjZXt9LCBpbXBscyAuLi5wcm90by5NZXNzYWdlKQoKCS8vIFJlZ2lzdGVyQ3VzdG9tVHlwZVVSTCBhbGxvd3MgYSBwcm90b2J1ZiBtZXNzYWdlIHRvIGJlIHJlZ2lzdGVyZWQgYXMgYQoJLy8gZ29vZ2xlLnByb3RvYnVmLkFueSB3aXRoIGEgY3VzdG9tIHR5cGVVUkwgKGJlc2lkZXMgaXRzIG93biBjYW5vbmljYWwKCS8vIHR5cGVVUkwpLiBpZmFjZSBzaG91bGQgYmUgYW4gaW50ZXJmYWNlIGFzIHR5cGUsIGFzIGluIFJlZ2lzdGVySW50ZXJmYWNlCgkvLyBhbmQgUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMuCgkvLwoJLy8gRXg6CgkvLyBUaGlzIHdpbGwgYWxsb3cgdXMgdG8gcGFjayBzZXJ2aWNlIG1ldGhvZHMgaW4gQW55J3MgdXNpbmcgdGhlIGZ1bGwgbWV0aG9kIG5hbWUKCS8vIGFzIHRoZSB0eXBlIFVSTCBhbmQgdGhlIHJlcXVlc3QgYm9keSBhcyB0aGUgdmFsdWUsIGFuZCBhbGxvdyB1cyB0byB1bnBhY2sKCS8vIHN1Y2ggcGFja2VkIG1ldGhvZHMgdXNpbmcgdGhlIG5vcm1hbCBVbnBhY2tBbnkgbWV0aG9kIGZvciB0aGUgaW50ZXJmYWNlIGlmYWNlLgoJUmVnaXN0ZXJDdXN0b21UeXBlVVJMKGlmYWNlIGludGVyZmFjZXt9LCB0eXBlVVJMIHN0cmluZywgaW1wbCBwcm90by5NZXNzYWdlKQoKCS8vIExpc3RBbGxJbnRlcmZhY2VzIGxpc3QgdGhlIHR5cGUgVVJMcyBvZiBhbGwgcmVnaXN0ZXJlZCBpbnRlcmZhY2VzLgoJTGlzdEFsbEludGVyZmFjZXMoKSBbXXN0cmluZwoKCS8vIExpc3RJbXBsZW1lbnRhdGlvbnMgbGlzdHMgdGhlIHZhbGlkIHR5cGUgVVJMcyBmb3IgdGhlIGdpdmVuIGludGVyZmFjZSBuYW1lIHRoYXQgY2FuIGJlIHVzZWQKCS8vIGZvciB0aGUgcHJvdmlkZWQgaW50ZXJmYWNlIHR5cGUgVVJMLgoJTGlzdEltcGxlbWVudGF0aW9ucyhpZmFjZVR5cGVVUkwgc3RyaW5nKSBbXXN0cmluZwp9"}})],1),e._v(" "),t("p",[e._v("In addition, an "),t("code",[e._v("UnpackInterfaces")]),e._v(" phase should be introduced to deserialization to unpack interfaces before they're needed. Protobuf types that contain a protobuf "),t("code",[e._v("Any")]),e._v(" either directly or via one of their members should implement the "),t("code",[e._v("UnpackInterfacesMessage")]),e._v(" interface:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVbnBhY2tJbnRlcmZhY2VzTWVzc2FnZSBpbnRlcmZhY2UgewogIFVucGFja0ludGVyZmFjZXMoSW50ZXJmYWNlVW5wYWNrZXIpIGVycm9yCn0K"}}),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC, REST and other endpoints")])],1)],1)}),[],!1,null,null,null);o.default=n.exports}}]);