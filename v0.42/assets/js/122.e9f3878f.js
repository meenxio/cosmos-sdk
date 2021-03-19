(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{771:function(l,d,a){"use strict";a.r(d);var c=a(1),Z=Object(c.a)({},(function(){var l=this,d=l.$createElement,a=l._self._c||d;return a("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[a("h1",{attrs:{id:"module-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-simulation"}},[l._v("#")]),l._v(" Module Simulation")]),l._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[l._v("#")]),l._v(" Prerequisites")]),l._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/using-the-sdk/simulation.html"}},[l._v("Cosmos Blockchain Simulator")])],1)]),l._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[l._v("#")]),l._v(" Synopsis")]),l._v(" "),a("p",[l._v("This document details how to define each module simulation functions to be\nintegrated with the application "),a("code",[l._v("SimulationManager")]),l._v(".")]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#simulation-package"}},[l._v("Simulation package")]),l._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#store-decoders"}},[l._v("Store decoders")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#randomized-genesis"}},[l._v("Randomized genesis")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#randomized-parameters"}},[l._v("Randomized parameters")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#random-weighted-operations"}},[l._v("Random weighted operations")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#random-proposal-contents"}},[l._v("Random proposal contents")])])])]),l._v(" "),a("li",[a("a",{attrs:{href:"#registering-simulation-functions"}},[l._v("Registering the module simulation functions")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#app-simulator-manager"}},[l._v("App simulator manager")])]),l._v(" "),a("li",[a("a",{attrs:{href:"#simulation-tests"}},[l._v("Simulation tests")])])]),l._v(" "),a("h2",{attrs:{id:"simulation-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-package"}},[l._v("#")]),l._v(" Simulation package")]),l._v(" "),a("p",[l._v("Every module that implements the SDK simulator needs to have a "),a("code",[l._v("x/<module>/simulation")]),l._v("\npackage which contains the primary functions required by the fuzz tests: store\ndecoders, randomized genesis state and parameters, weighted operations and proposal\ncontents.")]),l._v(" "),a("h3",{attrs:{id:"store-decoders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-decoders"}},[l._v("#")]),l._v(" Store decoders")]),l._v(" "),a("p",[l._v("Registering the store decoders is required for the "),a("code",[l._v("AppImportExport")]),l._v(". This allows\nfor the key-value pairs from the stores to be decoded ("),a("em",[l._v("i.e")]),l._v(" unmarshalled)\nto their corresponding types. In particular, it matches the key to a concrete type\nand then unmarshals the value from the "),a("code",[l._v("KVPair")]),l._v(" to the type provided.")]),l._v(" "),a("p",[l._v("You can use the example "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.0/x/distribution/simulation/decoder.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1),l._v(" from the distribution module to implement your store decoders.")]),l._v(" "),a("h3",{attrs:{id:"randomized-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#randomized-genesis"}},[l._v("#")]),l._v(" Randomized genesis")]),l._v(" "),a("p",[l._v("The simulator tests different scenarios and values for genesis parameters\nin order to fully test the edge cases of specific modules. The "),a("code",[l._v("simulator")]),l._v(" package from each module must expose a "),a("code",[l._v("RandomizedGenState")]),l._v(" function to generate the initial random "),a("code",[l._v("GenesisState")]),l._v(" from a given seed.")]),l._v(" "),a("p",[l._v("Once the module genesis parameter are generated randomly (or with the key and\nvalues defined in a "),a("code",[l._v("params")]),l._v(" file), they are marshaled to JSON format and added\nto the app genesis JSON to use it on the simulations.")]),l._v(" "),a("p",[l._v("You can check an example on how to create the randomized genesis "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.0/x/staking/simulation/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1),l._v(".")]),l._v(" "),a("h3",{attrs:{id:"randomized-parameter-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#randomized-parameter-changes"}},[l._v("#")]),l._v(" Randomized parameter changes")]),l._v(" "),a("p",[l._v("The simulator is able to test parameter changes at random. The simulator package from each module must contain a "),a("code",[l._v("RandomizedParams")]),l._v(" func that will simulate parameter changes of the module throughout the simulations lifespan.")]),l._v(" "),a("p",[l._v("You can see how an example of what is needed to fully test parameter changes "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.0/x/staking/simulation/params.go",target:"_blank",rel:"noopener noreferrer"}},[l._v("here"),a("OutboundLink")],1)]),l._v(" "),a("h3",{attrs:{id:"random-weighted-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-weighted-operations"}},[l._v("#")]),l._v(" Random weighted operations")]),l._v(" "),a("p",[l._v("Operations are one of the crucial parts of the SDK simulation. They are the transactions\n("),a("code",[l._v("Msg")]),l._v(") that are simulated with random field values. The sender of the operation\nis also assigned randomly.")]),l._v(" "),a("p",[l._v("Operations on the simulation are simulated using the full "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[l._v("transaction cycle")]),l._v(" of a\n"),a("code",[l._v("ABCI")]),l._v(" application that exposes the "),a("code",[l._v("BaseApp")]),l._v(".")],1),l._v(" "),a("p",[l._v("Shown below is how weights are set:")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2ltdWxhdGlvbiBvcGVyYXRpb24gd2VpZ2h0cyBjb25zdGFudHMKY29uc3QgKAoJT3BXZWlnaHRNc2dDcmVhdGVWYWxpZGF0b3IgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX2NyZWF0ZV92YWxpZGF0b3ImcXVvdDsKCU9wV2VpZ2h0TXNnRWRpdFZhbGlkYXRvciAgID0gJnF1b3Q7b3Bfd2VpZ2h0X21zZ19lZGl0X3ZhbGlkYXRvciZxdW90OwoJT3BXZWlnaHRNc2dEZWxlZ2F0ZSAgICAgICAgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX2RlbGVnYXRlJnF1b3Q7CglPcFdlaWdodE1zZ1VuZGVsZWdhdGUgICAgICA9ICZxdW90O29wX3dlaWdodF9tc2dfdW5kZWxlZ2F0ZSZxdW90OwoJT3BXZWlnaHRNc2dCZWdpblJlZGVsZWdhdGUgPSAmcXVvdDtvcF93ZWlnaHRfbXNnX2JlZ2luX3JlZGVsZWdhdGUmcXVvdDsKKQoKLy8gV2VpZ2h0ZWRPcGVyYXRpb25zIHJldHVybnMgYWxsIHRoZSBvcGVyYXRpb25zIGZyb20gdGhlIG1vZHVsZSB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgd2VpZ2h0cwpmdW5jIFdlaWdodGVkT3BlcmF0aW9ucygKCWFwcFBhcmFtcyBzaW10eXBlcy5BcHBQYXJhbXMsIGNkYyBjb2RlYy5KU09OTWFyc2hhbGVyLCBhayB0eXBlcy5BY2NvdW50S2VlcGVyLAoJYmsgdHlwZXMuQmFua0tlZXBlciwgayBrZWVwZXIuS2VlcGVyLAopIHNpbXVsYXRpb24uV2VpZ2h0ZWRPcGVyYXRpb25zIHsKCXZhciAoCgkJd2VpZ2h0TXNnQ3JlYXRlVmFsaWRhdG9yIGludAoJCXdlaWdodE1zZ0VkaXRWYWxpZGF0b3IgICBpbnQKCQl3ZWlnaHRNc2dEZWxlZ2F0ZSAgICAgICAgaW50CgkJd2VpZ2h0TXNnVW5kZWxlZ2F0ZSAgICAgIGludAoJCXdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZSBpbnQKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnQ3JlYXRlVmFsaWRhdG9yLCAmYW1wO3dlaWdodE1zZ0NyZWF0ZVZhbGlkYXRvciwgbmlsLAoJCWZ1bmMoXyAqcmFuZC5SYW5kKSB7CgkJCXdlaWdodE1zZ0NyZWF0ZVZhbGlkYXRvciA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnQ3JlYXRlVmFsaWRhdG9yCgkJfSwKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnRWRpdFZhbGlkYXRvciwgJmFtcDt3ZWlnaHRNc2dFZGl0VmFsaWRhdG9yLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnRWRpdFZhbGlkYXRvciA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnRWRpdFZhbGlkYXRvcgoJCX0sCgkpCgoJYXBwUGFyYW1zLkdldE9yR2VuZXJhdGUoY2RjLCBPcFdlaWdodE1zZ0RlbGVnYXRlLCAmYW1wO3dlaWdodE1zZ0RlbGVnYXRlLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnRGVsZWdhdGUgPSBzaW1hcHBwYXJhbXMuRGVmYXVsdFdlaWdodE1zZ0RlbGVnYXRlCgkJfSwKCSkKCglhcHBQYXJhbXMuR2V0T3JHZW5lcmF0ZShjZGMsIE9wV2VpZ2h0TXNnVW5kZWxlZ2F0ZSwgJmFtcDt3ZWlnaHRNc2dVbmRlbGVnYXRlLCBuaWwsCgkJZnVuYyhfICpyYW5kLlJhbmQpIHsKCQkJd2VpZ2h0TXNnVW5kZWxlZ2F0ZSA9IHNpbWFwcHBhcmFtcy5EZWZhdWx0V2VpZ2h0TXNnVW5kZWxlZ2F0ZQoJCX0sCgkpCgoJYXBwUGFyYW1zLkdldE9yR2VuZXJhdGUoY2RjLCBPcFdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZSwgJmFtcDt3ZWlnaHRNc2dCZWdpblJlZGVsZWdhdGUsIG5pbCwKCQlmdW5jKF8gKnJhbmQuUmFuZCkgewoJCQl3ZWlnaHRNc2dCZWdpblJlZGVsZWdhdGUgPSBzaW1hcHBwYXJhbXMuRGVmYXVsdFdlaWdodE1zZ0JlZ2luUmVkZWxlZ2F0ZQoJCX0sCgkp"}})],1),l._v(" "),a("p",[l._v("As you can see, the weights are predefined in this case. Options exist to override this behavior with different weights. One option is to use "),a("code",[l._v("*rand.Rand")]),l._v(" to define a random weight for the operation, or you can inject your own predefined weights.")]),l._v(" "),a("p",[l._v("Here is how one can override the above package "),a("code",[l._v("simappparams")]),l._v(".")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"dGVzdC1zaW0tbm9uZGV0ZXJtaW5pc206CglAZWNobyAmcXVvdDtSdW5uaW5nIG5vbi1kZXRlcm1pbmlzbSB0ZXN0Li4uJnF1b3Q7CglAZ28gdGVzdCAtbW9kPXJlYWRvbmx5ICQoU0lNQVBQKSAtcnVuIFRlc3RBcHBTdGF0ZURldGVybWluaXNtIC1FbmFibGVkPXRydWUgXAoJCS1OdW1CbG9ja3M9MTAwIC1CbG9ja1NpemU9MjAwIC1Db21taXQ9dHJ1ZSAtUGVyaW9kPTAgLXYgLXRpbWVvdXQgMjRoCgp0ZXN0LXNpbS1jdXN0b20tZ2VuZXNpcy1mYXN0OgoJQGVjaG8gJnF1b3Q7UnVubmluZyBjdXN0b20gZ2VuZXNpcyBzaW11bGF0aW9uLi4uJnF1b3Q7CglAZWNobyAmcXVvdDtCeSBkZWZhdWx0LCAke0hPTUV9Ly5nYWlhZC9jb25maWcvZ2VuZXNpcy5qc29uIHdpbGwgYmUgdXNlZC4mcXVvdDsKCUBnbyB0ZXN0IC1tb2Q9cmVhZG9ubHkgJChTSU1BUFApIC1ydW4gVGVzdEZ1bGxHYWlhU2ltdWxhdGlvbiAtR2VuZXNpcz0ke0hPTUV9Ly5nYWlhZC9jb25maWcvZ2VuZXNpcy5qc29uIFwKCQktRW5hYmxlZD10cnVlIC1OdW1CbG9ja3M9MTAwIC1CbG9ja1NpemU9MjAwIC1Db21taXQ9dHJ1ZSAtU2VlZD05OSAtUGVyaW9kPTUgLXYgLXRpbWVvdXQgMjRoCgp0ZXN0LXNpbS1pbXBvcnQtZXhwb3J0OiBydW5zaW0KCUBlY2hvICZxdW90O1J1bm5pbmcgR2FpYSBpbXBvcnQvZXhwb3J0IHNpbXVsYXRpb24uIFRoaXMgbWF5IHRha2Ugc2V2ZXJhbCBtaW51dGVzLi4uJnF1b3Q7CglAJChCSU5ESVIpL3J1bnNpbSAtSm9icz00IC1TaW1BcHBQa2c9JChTSU1BUFApIDI1IDUgVGVzdEdhaWFJbXBvcnRFeHBvcnQ="}})],1),l._v(" "),a("p",[l._v("For the last test a tool called runsim  "),l._v(" is used, this is used to parallelize go test instances, provide info to Github and slack integrations to provide information to your team on how the simulations are running.")]),l._v(" "),a("h3",{attrs:{id:"random-proposal-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-proposal-contents"}},[l._v("#")]),l._v(" Random proposal contents")]),l._v(" "),a("p",[l._v("Randomized governance proposals are also supported on the SDK simulator. Each\nmodule must define the governance proposal "),a("code",[l._v("Content")]),l._v("s that they expose and register\nthem to be used on the parameters.")]),l._v(" "),a("h2",{attrs:{id:"registering-simulation-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registering-simulation-functions"}},[l._v("#")]),l._v(" Registering simulation functions")]),l._v(" "),a("p",[l._v("Now that all the required functions are defined, we need to integrate them into the module pattern within the "),a("code",[l._v("module.go")]),l._v(":")]),l._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBkaXN0cmlidXRpb24KCmltcG9ydCAoCgkmcXVvdDtjb250ZXh0JnF1b3Q7CgkmcXVvdDtlbmNvZGluZy9qc29uJnF1b3Q7CgkmcXVvdDtmbXQmcXVvdDsKCSZxdW90O21hdGgvcmFuZCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZ3JwYy1lY29zeXN0ZW0vZ3JwYy1nYXRld2F5L3J1bnRpbWUmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2dvcmlsbGEvbXV4JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL2NvYnJhJnF1b3Q7CglhYmNpICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKCglzZGtjbGllbnQgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCWNkY3R5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMvdHlwZXMmcXVvdDsKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL21vZHVsZSZxdW90OwoJc2ltdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9zaW11bGF0aW9uJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvZGlzdHJpYnV0aW9uL2NsaWVudC9jbGkmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24vY2xpZW50L3Jlc3QmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24va2VlcGVyJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvZGlzdHJpYnV0aW9uL3NpbXVsYXRpb24mcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24vdHlwZXMmcXVvdDsKCXN0YWtpbmdrZWVwZXIgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L3N0YWtpbmcva2VlcGVyJnF1b3Q7CikKCnZhciAoCglfIG1vZHVsZS5BcHBNb2R1bGUgICAgICAgICAgID0gQXBwTW9kdWxle30KCV8gbW9kdWxlLkFwcE1vZHVsZUJhc2ljICAgICAgPSBBcHBNb2R1bGVCYXNpY3t9CglfIG1vZHVsZS5BcHBNb2R1bGVTaW11bGF0aW9uID0gQXBwTW9kdWxle30KKQoKLy8gQXBwTW9kdWxlQmFzaWMgZGVmaW5lcyB0aGUgYmFzaWMgYXBwbGljYXRpb24gbW9kdWxlIHVzZWQgYnkgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCnR5cGUgQXBwTW9kdWxlQmFzaWMgc3RydWN0IHsKCWNkYyBjb2RlYy5NYXJzaGFsZXIKfQoKLy8gTmFtZSByZXR1cm5zIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlJ3MgbmFtZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIE5hbWUoKSBzdHJpbmcgewoJcmV0dXJuIHR5cGVzLk1vZHVsZU5hbWUKfQoKLy8gUmVnaXN0ZXJMZWdhY3lBbWlub0NvZGVjIHJlZ2lzdGVycyB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZSdzIHR5cGVzIGZvciB0aGUgZ2l2ZW4gY29kZWMuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBSZWdpc3RlckxlZ2FjeUFtaW5vQ29kZWMoY2RjICpjb2RlYy5MZWdhY3lBbWlubykgewoJdHlwZXMuUmVnaXN0ZXJMZWdhY3lBbWlub0NvZGVjKGNkYykKfQoKLy8gRGVmYXVsdEdlbmVzaXMgcmV0dXJucyBkZWZhdWx0IGdlbmVzaXMgc3RhdGUgYXMgcmF3IGJ5dGVzIGZvciB0aGUgZGlzdHJpYnV0aW9uCi8vIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIERlZmF1bHRHZW5lc2lzKGNkYyBjb2RlYy5KU09OTWFyc2hhbGVyKSBqc29uLlJhd01lc3NhZ2UgewoJcmV0dXJuIGNkYy5NdXN0TWFyc2hhbEpTT04odHlwZXMuRGVmYXVsdEdlbmVzaXNTdGF0ZSgpKQp9CgovLyBWYWxpZGF0ZUdlbmVzaXMgcGVyZm9ybXMgZ2VuZXNpcyBzdGF0ZSB2YWxpZGF0aW9uIGZvciB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIFZhbGlkYXRlR2VuZXNpcyhjZGMgY29kZWMuSlNPTk1hcnNoYWxlciwgY29uZmlnIHNka2NsaWVudC5UeEVuY29kaW5nQ29uZmlnLCBieiBqc29uLlJhd01lc3NhZ2UpIGVycm9yIHsKCXZhciBkYXRhIHR5cGVzLkdlbmVzaXNTdGF0ZQoJaWYgZXJyIDo9IGNkYy5Vbm1hcnNoYWxKU09OKGJ6LCAmYW1wO2RhdGEpOyBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZm10LkVycm9yZigmcXVvdDtmYWlsZWQgdG8gdW5tYXJzaGFsICVzIGdlbmVzaXMgc3RhdGU6ICV3JnF1b3Q7LCB0eXBlcy5Nb2R1bGVOYW1lLCBlcnIpCgl9CgoJcmV0dXJuIHR5cGVzLlZhbGlkYXRlR2VuZXNpcygmYW1wO2RhdGEpCn0KCi8vIFJlZ2lzdGVyUkVTVFJvdXRlcyByZWdpc3RlcnMgdGhlIFJFU1Qgcm91dGVzIGZvciB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIFJlZ2lzdGVyUkVTVFJvdXRlcyhjbGllbnRDdHggc2RrY2xpZW50LkNvbnRleHQsIHJ0ciAqbXV4LlJvdXRlcikgewoJcmVzdC5SZWdpc3RlckhhbmRsZXJzKGNsaWVudEN0eCwgcnRyKQp9CgovLyBSZWdpc3RlckdSUENHYXRld2F5Um91dGVzIHJlZ2lzdGVycyB0aGUgZ1JQQyBHYXRld2F5IHJvdXRlcyBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBSZWdpc3RlckdSUENHYXRld2F5Um91dGVzKGNsaWVudEN0eCBzZGtjbGllbnQuQ29udGV4dCwgbXV4ICpydW50aW1lLlNlcnZlTXV4KSB7Cgl0eXBlcy5SZWdpc3RlclF1ZXJ5SGFuZGxlckNsaWVudChjb250ZXh0LkJhY2tncm91bmQoKSwgbXV4LCB0eXBlcy5OZXdRdWVyeUNsaWVudChjbGllbnRDdHgpKQp9CgovLyBHZXRUeENtZCByZXR1cm5zIHRoZSByb290IHR4IGNvbW1hbmQgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgpmdW5jIChBcHBNb2R1bGVCYXNpYykgR2V0VHhDbWQoKSAqY29icmEuQ29tbWFuZCB7CglyZXR1cm4gY2xpLk5ld1R4Q21kKCkKfQoKLy8gR2V0UXVlcnlDbWQgcmV0dXJucyB0aGUgcm9vdCBxdWVyeSBjb21tYW5kIGZvciB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIEdldFF1ZXJ5Q21kKCkgKmNvYnJhLkNvbW1hbmQgewoJcmV0dXJuIGNsaS5HZXRRdWVyeUNtZCgpCn0KCi8vIFJlZ2lzdGVySW50ZXJmYWNlcyBpbXBsZW1lbnRzIEludGVyZmFjZU1vZHVsZQpmdW5jIChiIEFwcE1vZHVsZUJhc2ljKSBSZWdpc3RlckludGVyZmFjZXMocmVnaXN0cnkgY2RjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpIHsKCXR5cGVzLlJlZ2lzdGVySW50ZXJmYWNlcyhyZWdpc3RyeSkKfQoKLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fCgovLyBBcHBNb2R1bGUgaW1wbGVtZW50cyBhbiBhcHBsaWNhdGlvbiBtb2R1bGUgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgp0eXBlIEFwcE1vZHVsZSBzdHJ1Y3QgewoJQXBwTW9kdWxlQmFzaWMKCglrZWVwZXIgICAgICAgIGtlZXBlci5LZWVwZXIKCWFjY291bnRLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlcgoJYmFua0tlZXBlciAgICB0eXBlcy5CYW5rS2VlcGVyCglzdGFraW5nS2VlcGVyIHN0YWtpbmdrZWVwZXIuS2VlcGVyCn0KCi8vIE5ld0FwcE1vZHVsZSBjcmVhdGVzIGEgbmV3IEFwcE1vZHVsZSBvYmplY3QKZnVuYyBOZXdBcHBNb2R1bGUoCgljZGMgY29kZWMuTWFyc2hhbGVyLCBrZWVwZXIga2VlcGVyLktlZXBlciwgYWNjb3VudEtlZXBlciB0eXBlcy5BY2NvdW50S2VlcGVyLAoJYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLCBzdGFraW5nS2VlcGVyIHN0YWtpbmdrZWVwZXIuS2VlcGVyLAopIEFwcE1vZHVsZSB7CglyZXR1cm4gQXBwTW9kdWxlewoJCUFwcE1vZHVsZUJhc2ljOiBBcHBNb2R1bGVCYXNpY3tjZGM6IGNkY30sCgkJa2VlcGVyOiAgICAgICAgIGtlZXBlciwKCQlhY2NvdW50S2VlcGVyOiAgYWNjb3VudEtlZXBlciwKCQliYW5rS2VlcGVyOiAgICAgYmFua0tlZXBlciwKCQlzdGFraW5nS2VlcGVyOiAgc3Rha2luZ0tlZXBlciwKCX0KfQoKLy8gTmFtZSByZXR1cm5zIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlJ3MgbmFtZS4KZnVuYyAoQXBwTW9kdWxlKSBOYW1lKCkgc3RyaW5nIHsKCXJldHVybiB0eXBlcy5Nb2R1bGVOYW1lCn0KCi8vIFJlZ2lzdGVySW52YXJpYW50cyByZWdpc3RlcnMgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUgaW52YXJpYW50cy4KZnVuYyAoYW0gQXBwTW9kdWxlKSBSZWdpc3RlckludmFyaWFudHMoaXIgc2RrLkludmFyaWFudFJlZ2lzdHJ5KSB7CglrZWVwZXIuUmVnaXN0ZXJJbnZhcmlhbnRzKGlyLCBhbS5rZWVwZXIpCn0KCi8vIFJvdXRlIHJldHVybnMgdGhlIG1lc3NhZ2Ugcm91dGluZyBrZXkgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgpmdW5jIChhbSBBcHBNb2R1bGUpIFJvdXRlKCkgc2RrLlJvdXRlIHsKCXJldHVybiBzZGsuTmV3Um91dGUodHlwZXMuUm91dGVyS2V5LCBOZXdIYW5kbGVyKGFtLmtlZXBlcikpCn0KCi8vIFF1ZXJpZXJSb3V0ZSByZXR1cm5zIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlJ3MgcXVlcmllciByb3V0ZSBuYW1lLgpmdW5jIChBcHBNb2R1bGUpIFF1ZXJpZXJSb3V0ZSgpIHN0cmluZyB7CglyZXR1cm4gdHlwZXMuUXVlcmllclJvdXRlCn0KCi8vIExlZ2FjeVF1ZXJpZXJIYW5kbGVyIHJldHVybnMgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUgc2RrLlF1ZXJpZXIuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgTGVnYWN5UXVlcmllckhhbmRsZXIobGVnYWN5UXVlcmllckNkYyAqY29kZWMuTGVnYWN5QW1pbm8pIHNkay5RdWVyaWVyIHsKCXJldHVybiBrZWVwZXIuTmV3UXVlcmllcihhbS5rZWVwZXIsIGxlZ2FjeVF1ZXJpZXJDZGMpCn0KCi8vIFJlZ2lzdGVyU2VydmljZXMgcmVnaXN0ZXJzIG1vZHVsZSBzZXJ2aWNlcy4KZnVuYyAoYW0gQXBwTW9kdWxlKSBSZWdpc3RlclNlcnZpY2VzKGNmZyBtb2R1bGUuQ29uZmlndXJhdG9yKSB7Cgl0eXBlcy5SZWdpc3Rlck1zZ1NlcnZlcihjZmcuTXNnU2VydmVyKCksIGtlZXBlci5OZXdNc2dTZXJ2ZXJJbXBsKGFtLmtlZXBlcikpCgl0eXBlcy5SZWdpc3RlclF1ZXJ5U2VydmVyKGNmZy5RdWVyeVNlcnZlcigpLCBhbS5rZWVwZXIpCn0KCi8vIEluaXRHZW5lc2lzIHBlcmZvcm1zIGdlbmVzaXMgaW5pdGlhbGl6YXRpb24gZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLiBJdCByZXR1cm5zCi8vIG5vIHZhbGlkYXRvciB1cGRhdGVzLgpmdW5jIChhbSBBcHBNb2R1bGUpIEluaXRHZW5lc2lzKGN0eCBzZGsuQ29udGV4dCwgY2RjIGNvZGVjLkpTT05NYXJzaGFsZXIsIGRhdGEganNvbi5SYXdNZXNzYWdlKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlIHsKCXZhciBnZW5lc2lzU3RhdGUgdHlwZXMuR2VuZXNpc1N0YXRlCgljZGMuTXVzdFVubWFyc2hhbEpTT04oZGF0YSwgJmFtcDtnZW5lc2lzU3RhdGUpCglhbS5rZWVwZXIuSW5pdEdlbmVzaXMoY3R4LCBnZW5lc2lzU3RhdGUpCglyZXR1cm4gW11hYmNpLlZhbGlkYXRvclVwZGF0ZXt9Cn0KCi8vIEV4cG9ydEdlbmVzaXMgcmV0dXJucyB0aGUgZXhwb3J0ZWQgZ2VuZXNpcyBzdGF0ZSBhcyByYXcgYnl0ZXMgZm9yIHRoZSBkaXN0cmlidXRpb24KLy8gbW9kdWxlLgpmdW5jIChhbSBBcHBNb2R1bGUpIEV4cG9ydEdlbmVzaXMoY3R4IHNkay5Db250ZXh0LCBjZGMgY29kZWMuSlNPTk1hcnNoYWxlcikganNvbi5SYXdNZXNzYWdlIHsKCWdzIDo9IGFtLmtlZXBlci5FeHBvcnRHZW5lc2lzKGN0eCkKCXJldHVybiBjZGMuTXVzdE1hcnNoYWxKU09OKGdzKQp9CgovLyBCZWdpbkJsb2NrIHJldHVybnMgdGhlIGJlZ2luIGJsb2NrZXIgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgpmdW5jIChhbSBBcHBNb2R1bGUpIEJlZ2luQmxvY2soY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0QmVnaW5CbG9jaykgewoJQmVnaW5CbG9ja2VyKGN0eCwgcmVxLCBhbS5rZWVwZXIpCn0KCi8vIEVuZEJsb2NrIHJldHVybnMgdGhlIGVuZCBibG9ja2VyIGZvciB0aGUgZGlzdHJpYnV0aW9uIG1vZHVsZS4gSXQgcmV0dXJucyBubyB2YWxpZGF0b3IKLy8gdXBkYXRlcy4KZnVuYyAoQXBwTW9kdWxlKSBFbmRCbG9jayhfIHNkay5Db250ZXh0LCBfIGFiY2kuUmVxdWVzdEVuZEJsb2NrKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlIHsKCXJldHVybiBbXWFiY2kuVmFsaWRhdG9yVXBkYXRle30KfQoKLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fCgovLyBBcHBNb2R1bGVTaW11bGF0aW9uIGZ1bmN0aW9ucwoKLy8gR2VuZXJhdGVHZW5lc2lzU3RhdGUgY3JlYXRlcyBhIHJhbmRvbWl6ZWQgR2VuU3RhdGUgb2YgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZSkgR2VuZXJhdGVHZW5lc2lzU3RhdGUoc2ltU3RhdGUgKm1vZHVsZS5TaW11bGF0aW9uU3RhdGUpIHsKCXNpbXVsYXRpb24uUmFuZG9taXplZEdlblN0YXRlKHNpbVN0YXRlKQp9CgovLyBQcm9wb3NhbENvbnRlbnRzIHJldHVybnMgYWxsIHRoZSBkaXN0cmlidXRpb24gY29udGVudCBmdW5jdGlvbnMgdXNlZCB0bwovLyBzaW11bGF0ZSBnb3Zlcm5hbmNlIHByb3Bvc2Fscy4KZnVuYyAoYW0gQXBwTW9kdWxlKSBQcm9wb3NhbENvbnRlbnRzKHNpbVN0YXRlIG1vZHVsZS5TaW11bGF0aW9uU3RhdGUpIFtdc2ltdHlwZXMuV2VpZ2h0ZWRQcm9wb3NhbENvbnRlbnQgewoJcmV0dXJuIHNpbXVsYXRpb24uUHJvcG9zYWxDb250ZW50cyhhbS5rZWVwZXIpCn0KCi8vIFJhbmRvbWl6ZWRQYXJhbXMgY3JlYXRlcyByYW5kb21pemVkIGRpc3RyaWJ1dGlvbiBwYXJhbSBjaGFuZ2VzIGZvciB0aGUgc2ltdWxhdG9yLgpmdW5jIChBcHBNb2R1bGUpIFJhbmRvbWl6ZWRQYXJhbXMociAqcmFuZC5SYW5kKSBbXXNpbXR5cGVzLlBhcmFtQ2hhbmdlIHsKCXJldHVybiBzaW11bGF0aW9uLlBhcmFtQ2hhbmdlcyhyKQp9CgovLyBSZWdpc3RlclN0b3JlRGVjb2RlciByZWdpc3RlcnMgYSBkZWNvZGVyIGZvciBkaXN0cmlidXRpb24gbW9kdWxlJ3MgdHlwZXMKZnVuYyAoYW0gQXBwTW9kdWxlKSBSZWdpc3RlclN0b3JlRGVjb2RlcihzZHIgc2RrLlN0b3JlRGVjb2RlclJlZ2lzdHJ5KSB7CglzZHJbdHlwZXMuU3RvcmVLZXldID0gc2ltdWxhdGlvbi5OZXdEZWNvZGVTdG9yZShhbS5jZGMpCn0KCi8vIFdlaWdodGVkT3BlcmF0aW9ucyByZXR1cm5zIHRoZSBhbGwgdGhlIGdvdiBtb2R1bGUgb3BlcmF0aW9ucyB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgd2VpZ2h0cy4KZnVuYyAoYW0gQXBwTW9kdWxlKSBXZWlnaHRlZE9wZXJhdGlvbnMoc2ltU3RhdGUgbW9kdWxlLlNpbXVsYXRpb25TdGF0ZSkgW11zaW10eXBlcy5XZWlnaHRlZE9wZXJhdGlvbiB7CglyZXR1cm4gc2ltdWxhdGlvbi5XZWlnaHRlZE9wZXJhdGlvbnMoCgkJc2ltU3RhdGUuQXBwUGFyYW1zLCBzaW1TdGF0ZS5DZGMsIGFtLmFjY291bnRLZWVwZXIsIGFtLmJhbmtLZWVwZXIsIGFtLmtlZXBlciwgYW0uc3Rha2luZ0tlZXBlciwKCSkKfQo="}})],1),l._v(" "),a("h2",{attrs:{id:"app-simulator-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-simulator-manager"}},[l._v("#")]),l._v(" App Simulator manager")]),l._v(" "),a("p",[l._v("The following step is setting up the "),a("code",[l._v("SimulatorManager")]),l._v(" at the app level. This\nis required for the simulation test files on the next step.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDdXN0b21BcHAgc3RydWN0IHsKICAuLi4KICBzbSAqbW9kdWxlLlNpbXVsYXRpb25NYW5hZ2VyCn0K"}}),l._v(" "),a("p",[l._v("Then at the instantiation of the application, we create the "),a("code",[l._v("SimulationManager")]),l._v("\ninstance in the same way we create the "),a("code",[l._v("ModuleManager")]),l._v(" but this time we only pass\nthe modules that implement the simulation functions from the "),a("code",[l._v("AppModuleSimulation")]),l._v("\ninterface described above.")]),l._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdDdXN0b21BcHAoLi4uKSB7CiAgLy8gY3JlYXRlIHRoZSBzaW11bGF0aW9uIG1hbmFnZXIgYW5kIGRlZmluZSB0aGUgb3JkZXIgb2YgdGhlIG1vZHVsZXMgZm9yIGRldGVybWluaXN0aWMgc2ltdWxhdGlvbnMKICBhcHAuc20gPSBtb2R1bGUuTmV3U2ltdWxhdGlvbk1hbmFnZXIoCiAgICBhdXRoLk5ld0FwcE1vZHVsZShhcHAuYWNjb3VudEtlZXBlciksCiAgICBiYW5rLk5ld0FwcE1vZHVsZShhcHAuYmFua0tlZXBlciwgYXBwLmFjY291bnRLZWVwZXIpLAogICAgc3VwcGx5Lk5ld0FwcE1vZHVsZShhcHAuc3VwcGx5S2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciksCiAgICBvdi5OZXdBcHBNb2R1bGUoYXBwLmdvdktlZXBlciwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdXBwbHlLZWVwZXIpLAogICAgbWludC5OZXdBcHBNb2R1bGUoYXBwLm1pbnRLZWVwZXIpLAogICAgZGlzdHIuTmV3QXBwTW9kdWxlKGFwcC5kaXN0cktlZXBlciwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdXBwbHlLZWVwZXIsIGFwcC5zdGFraW5nS2VlcGVyKSwKICAgIHN0YWtpbmcuTmV3QXBwTW9kdWxlKGFwcC5zdGFraW5nS2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciwgYXBwLnN1cHBseUtlZXBlciksCiAgICBzbGFzaGluZy5OZXdBcHBNb2R1bGUoYXBwLnNsYXNoaW5nS2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciwgYXBwLnN0YWtpbmdLZWVwZXIpLAogICkKCiAgLy8gcmVnaXN0ZXIgdGhlIHN0b3JlIGRlY29kZXJzIGZvciBzaW11bGF0aW9uIHRlc3RzCiAgYXBwLnNtLlJlZ2lzdGVyU3RvcmVEZWNvZGVycygpCiAgLi4uCn0K"}})],1)}),[],!1,null,null,null);d.default=Z.exports}}]);