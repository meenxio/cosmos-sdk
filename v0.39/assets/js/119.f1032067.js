(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{683:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"module-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-manager"}},[e._v("#")]),e._v(" Module Manager")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Cosmos SDK modules need to implement the "),o("a",{attrs:{href:"#application-module-interfaces"}},[o("code",[e._v("AppModule")]),e._v(" interfaces")]),e._v(", in order to be managed by the application's "),o("a",{attrs:{href:"#module-manager"}},[e._v("module manager")]),e._v(". The module manager plays an important role in "),o("RouterLink",{attrs:{to:"/core/baseapp.html#routing"}},[o("code",[e._v("message")]),e._v(" and "),o("code",[e._v("query")]),e._v(" routing")]),e._v(", and allows application developers to set the order of execution of a variety of functions like "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#begingblocker-and-endblocker"}},[o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")])]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Introduction to SDK Modules")])],1)]),e._v(" "),o("h2",{attrs:{id:"application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-module-interfaces"}},[e._v("#")]),e._v(" Application Module Interfaces")]),e._v(" "),o("p",[e._v("Application module interfaces exist to facilitate the composition of modules together to form a functional SDK application. There are 3 main application module interfaces:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#appmodulebasic"}},[o("code",[e._v("AppModuleBasic")])]),e._v(" for independent module functionalities.")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" for inter-dependent module functionalities (except genesis-related functionalities).")]),e._v(" "),o("li",[o("a",{attrs:{href:"#appmodulegenesis"}},[o("code",[e._v("AppModuleGenesis")])]),e._v(" for inter-dependent genesis-related module functionalities.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface exists to define independent methods of the module, i.e. those that do not depend on other modules in the application. This allows for the construction of the basic application structure early in the application definition, generally in the "),o("code",[e._v("init()")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[e._v("main application file")]),e._v(".")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface exists to define inter-dependent module methods. Many modules need to interract with other modules, typically through "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")]),e._v("s")]),e._v(", which means there is a need for an interface where modules list their "),o("code",[e._v("keeper")]),e._v("s and other methods that require a reference to another module's object. "),o("code",[e._v("AppModule")]),e._v(" interface also enables the module manager to set the order of execution between module's methods like "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(", which is important in cases where the order of execution between modules matters in the context of the application.")],1),e._v(" "),o("p",[e._v("Lastly the interface for genesis functionality "),o("code",[e._v("AppModuleGenesis")]),e._v(" is separated out from full module functionality "),o("code",[e._v("AppModule")]),e._v(" so that modules which\nare only used for genesis can take advantage of the "),o("code",[e._v("Module")]),e._v(" patterns without having to define many placeholder functions.")]),e._v(" "),o("h3",{attrs:{id:"appmodulebasic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulebasic"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleBasic")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleBasic")]),e._v(" interface defines the independent methods modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlQmFzaWMgaXMgdGhlIHN0YW5kYXJkIGZvcm0gZm9yIGJhc2ljIG5vbi1kZXBlbmRhbnQgZWxlbWVudHMgb2YgYW4gYXBwbGljYXRpb24gbW9kdWxlLgp0eXBlIEFwcE1vZHVsZUJhc2ljIGludGVyZmFjZSB7CglOYW1lKCkgc3RyaW5nCglSZWdpc3RlckxlZ2FjeUFtaW5vQ29kZWMoKmNvZGVjLkxlZ2FjeUFtaW5vKQoJUmVnaXN0ZXJJbnRlcmZhY2VzKGNvZGVjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpCgoJRGVmYXVsdEdlbmVzaXMoY29kZWMuSlNPTk1hcnNoYWxlcikganNvbi5SYXdNZXNzYWdlCglWYWxpZGF0ZUdlbmVzaXMoY29kZWMuSlNPTk1hcnNoYWxlciwgY2xpZW50LlR4RW5jb2RpbmdDb25maWcsIGpzb24uUmF3TWVzc2FnZSkgZXJyb3IKCgkvLyBjbGllbnQgZnVuY3Rpb25hbGl0eQoJUmVnaXN0ZXJSRVNUUm91dGVzKGNsaWVudC5Db250ZXh0LCAqbXV4LlJvdXRlcikKCVJlZ2lzdGVyR1JQQ1JvdXRlcyhjbGllbnQuQ29udGV4dCwgKnJ1bnRpbWUuU2VydmVNdXgpCglHZXRUeENtZCgpICpjb2JyYS5Db21tYW5kCglHZXRRdWVyeUNtZCgpICpjb2JyYS5Db21tYW5kCn0="}})],1),e._v(" "),o("p",[e._v("Let us go through the methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Name()")]),e._v(": Returns the name of the module as a "),o("code",[e._v("string")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("RegisterLegacyAminoCodec(*codec.LegacyAmino)")]),e._v(": Registers the "),o("code",[e._v("amino")]),e._v(" codec for the module, which is used to marshal and unmarshal structs to/from "),o("code",[e._v("[]byte")]),e._v(" in order to persist them in the module's "),o("code",[e._v("KVStore")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("RegisterInterfaces(codectypes.InterfaceRegistry)")]),e._v(": Registers a module's interface types and their concrete implementations as "),o("code",[e._v("proto.Message")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis(codec.JSONMarshaler)")]),e._v(": Returns a default "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#genesisstate"}},[o("code",[e._v("GenesisState")])]),e._v(" for the module, marshalled to "),o("code",[e._v("json.RawMessage")]),e._v(". The default "),o("code",[e._v("GenesisState")]),e._v(" need to be defined by the module developer and is primarily used for testing.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(codec.JSONMarshaler, client.TxEncodingConfig, json.RawMessage)")]),e._v(": Used to validate the "),o("code",[e._v("GenesisState")]),e._v(" defined by a module, given in its "),o("code",[e._v("json.RawMessage")]),e._v(" form. It will usually unmarshall the "),o("code",[e._v("json")]),e._v(" before running a custom "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis")])]),e._v(" function defined by the module developer.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRESTRoutes(client.Context, *mux.Router)")]),e._v(": Registers the REST routes for the module. These routes will be used to map REST request to the module in order to process them. See [../interfaces/rest.md] for more.")]),e._v(" "),o("li",[o("code",[e._v("RegisterGRPCGatewayRoutes(client.Context, *runtime.ServeMux)")]),e._v(": Registers gRPC routes for the module.")]),e._v(" "),o("li",[o("code",[e._v("GetTxCmd()")]),e._v(": Returns the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#tx"}},[o("code",[e._v("Tx")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new transactions containing "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" defined in the module.")],1),e._v(" "),o("li",[o("code",[e._v("GetQueryCmd()")]),e._v(": Return the root "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#query"}},[o("code",[e._v("query")]),e._v(" command")]),e._v(" for the module. The subcommands of this root command are used by end-users to generate new queries to the subset of the state defined by the module.")],1)]),e._v(" "),o("p",[e._v("All the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application are managed by the "),o("a",{attrs:{href:"#basicmanager"}},[o("code",[e._v("BasicManager")])]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"appmodulegenesis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodulegenesis"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModuleGenesis")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface is a simple embedding of the "),o("code",[e._v("AppModuleBasic")]),e._v(" interface with two added methods.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXBwTW9kdWxlR2VuZXNpcyBpcyB0aGUgc3RhbmRhcmQgZm9ybSBmb3IgYW4gYXBwbGljYXRpb24gbW9kdWxlIGdlbmVzaXMgZnVuY3Rpb25zCnR5cGUgQXBwTW9kdWxlR2VuZXNpcyBpbnRlcmZhY2UgewoJQXBwTW9kdWxlQmFzaWMKCglJbml0R2VuZXNpcyhzZGsuQ29udGV4dCwgY29kZWMuSlNPTk1hcnNoYWxlciwganNvbi5SYXdNZXNzYWdlKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlCglFeHBvcnRHZW5lc2lzKHNkay5Db250ZXh0LCBjb2RlYy5KU09OTWFyc2hhbGVyKSBqc29uLlJhd01lc3NhZ2UKfQ=="}})],1),e._v(" "),o("p",[e._v("Let us go through the two added methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("InitGenesis(sdk.Context, codec.JSONMarshaler, json.RawMessage)")]),e._v(": Initializes the subset of the state managed by the module. It is called at genesis (i.e. when the chain is first started).")]),e._v(" "),o("li",[o("code",[e._v("ExportGenesis(sdk.Context, codec.JSONMarshaler)")]),e._v(": Exports the latest subset of the state managed by the module to be used in a new genesis file. "),o("code",[e._v("ExportGenesis")]),e._v(" is called for each module when a new chain is started from the state of an existing chain.")])]),e._v(" "),o("p",[e._v("It does not have its own manager, and exists separately from "),o("a",{attrs:{href:"#appmodule"}},[o("code",[e._v("AppModule")])]),e._v(" only for modules that exist only to implement genesis functionalities, so that they can be managed without having to implement all of "),o("code",[e._v("AppModule")]),e._v("'s methods. If the module is not only used during genesis, "),o("code",[e._v("InitGenesis(sdk.Context, codec.JSONMarshaler, json.RawMessage)")]),e._v(" and "),o("code",[e._v("ExportGenesis(sdk.Context, codec.JSONMarshaler)")]),e._v(" will generally be defined as methods of the concrete type implementing hte "),o("code",[e._v("AppModule")]),e._v(" interface.")]),e._v(" "),o("h3",{attrs:{id:"appmodule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodule"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModule")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("AppModule")]),e._v(" interface defines the inter-dependent methods modules need to implement.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGUgaW50ZXJmYWNlIHsKCUFwcE1vZHVsZUdlbmVzaXMKCgkvLyByZWdpc3RlcnMKCVJlZ2lzdGVySW52YXJpYW50cyhzZGsuSW52YXJpYW50UmVnaXN0cnkpCgoJLy8gcm91dGVzCglSb3V0ZSgpIHNkay5Sb3V0ZQoKCS8vIERlcHJlY2F0ZWQ6IHVzZSBSZWdpc3RlclNlcnZpY2VzCglRdWVyaWVyUm91dGUoKSBzdHJpbmcKCgkvLyBEZXByZWNhdGVkOiB1c2UgUmVnaXN0ZXJTZXJ2aWNlcwoJTGVnYWN5UXVlcmllckhhbmRsZXIoKmNvZGVjLkxlZ2FjeUFtaW5vKSBzZGsuUXVlcmllcgoKCS8vIFJlZ2lzdGVyU2VydmljZXMgYWxsb3dzIGEgbW9kdWxlIHRvIHJlZ2lzdGVyIHNlcnZpY2VzCglSZWdpc3RlclNlcnZpY2VzKENvbmZpZ3VyYXRvcikKCgkvLyBBQkNJCglCZWdpbkJsb2NrKHNkay5Db250ZXh0LCBhYmNpLlJlcXVlc3RCZWdpbkJsb2NrKQoJRW5kQmxvY2soc2RrLkNvbnRleHQsIGFiY2kuUmVxdWVzdEVuZEJsb2NrKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlCn0K"}})],1),e._v(" "),o("p",[o("code",[e._v("AppModule")]),e._v("s are managed by the "),o("a",{attrs:{href:"#manager"}},[e._v("module manager")]),e._v(". This interface embeds the "),o("code",[e._v("AppModuleGenesis")]),e._v(" interface so that the manager can access all the independent and genesis inter-dependent methods of the module. This means that a concrete type implementing the "),o("code",[e._v("AppModule")]),e._v(" interface must either implement all the methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" (and by extension "),o("code",[e._v("AppModuleBasic")]),e._v("), or include a concrete type that does as parameter.")]),e._v(" "),o("p",[e._v("Let us go through the methods of "),o("code",[e._v("AppModule")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("RegisterInvariants(sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[o("code",[e._v("invariants")])]),e._v(" of the module. If the invariants deviates from its predicted value, the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html#registry"}},[o("code",[e._v("InvariantRegistry")])]),e._v(" triggers appropriate logic (most often the chain will be halted).")],1),e._v(" "),o("li",[o("code",[e._v("Route()")]),e._v(": Returns the route for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("message")]),e._v("s")]),e._v(" to be routed to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[o("code",[e._v("BaseApp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("QuerierRoute()")]),e._v(" (deprecated): Returns the name of the module's query route, for "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[o("code",[e._v("queries")])]),e._v(" to be routes to the module by "),o("RouterLink",{attrs:{to:"/core/baseapp.html#query-routing"}},[o("code",[e._v("BaseApp")])]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("LegacyQuerierHandler(*codec.LegacyAmino)")]),e._v(" (deprecated): Returns a "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[o("code",[e._v("querier")])]),e._v(" given the query "),o("code",[e._v("path")]),e._v(", in order to process the "),o("code",[e._v("query")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterServices(Configurator)")]),e._v(": Allows a module to register services.")]),e._v(" "),o("li",[o("code",[e._v("BeginBlock(sdk.Context, abci.RequestBeginBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the beginning of each block. Implement empty if no logic needs to be triggered at the beginning of each block for this module.")]),e._v(" "),o("li",[o("code",[e._v("EndBlock(sdk.Context, abci.RequestEndBlock)")]),e._v(": This method gives module developers the option to implement logic that is automatically triggered at the end of each block. This is also where the module can inform the underlying consensus engine of validator set changes (e.g. the "),o("code",[e._v("staking")]),e._v(" module). Implement empty if no logic needs to be triggered at the end of each block for this module.")])]),e._v(" "),o("h3",{attrs:{id:"implementing-the-application-module-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementing-the-application-module-interfaces"}},[e._v("#")]),e._v(" Implementing the Application Module Interfaces")]),e._v(" "),o("p",[e._v("Typically, the various application module interfaces are implemented in a file called "),o("code",[e._v("module.go")]),e._v(", located in the module's folder (e.g. "),o("code",[e._v("./x/module/module.go")]),e._v(").")]),e._v(" "),o("p",[e._v("Almost every module needs to implement the "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(" interfaces. If the module is only used for genesis, it will implement "),o("code",[e._v("AppModuleGenesis")]),e._v(" instead of "),o("code",[e._v("AppModule")]),e._v(". The concrete type that implements the interface can add parameters that are required for the implementation of the various methods of the interface. For example, the "),o("code",[e._v("Route()")]),e._v(" function often calls a "),o("code",[e._v("NewHandler(k keeper)")]),e._v(" function defined in "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html#handler-type"}},[o("code",[e._v("handler.go")])]),e._v(" and therefore needs to pass the module's "),o("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[o("code",[e._v("keeper")])]),e._v(" as a parameter.")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZXhhbXBsZQp0eXBlIEFwcE1vZHVsZSBzdHJ1Y3QgewoJQXBwTW9kdWxlQmFzaWMKCWtlZXBlciAgICAgICBLZWVwZXIKfQo="}}),e._v(" "),o("p",[e._v("In the example above, you can see that the "),o("code",[e._v("AppModule")]),e._v(" concrete type references an "),o("code",[e._v("AppModuleBasic")]),e._v(", and not an "),o("code",[e._v("AppModuleGenesis")]),e._v(". That is because "),o("code",[e._v("AppModuleGenesis")]),e._v(" only needs to be implemented in modules that focus on genesis-related functionalities. In most modules, the concrete "),o("code",[e._v("AppModule")]),e._v(" type will have a reference to an "),o("code",[e._v("AppModuleBasic")]),e._v(" and implement the two added methods of "),o("code",[e._v("AppModuleGenesis")]),e._v(" directly in the "),o("code",[e._v("AppModule")]),e._v(" type.")]),e._v(" "),o("p",[e._v("If no parameter is required (which is often the case for "),o("code",[e._v("AppModuleBasic")]),e._v("), just declare an empty concrete type like so:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGVCYXNpYyBzdHJ1Y3R7fQo="}}),e._v(" "),o("h2",{attrs:{id:"module-managers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-managers"}},[e._v("#")]),e._v(" Module Managers")]),e._v(" "),o("p",[e._v("Module managers are used to manage collections of "),o("code",[e._v("AppModuleBasic")]),e._v(" and "),o("code",[e._v("AppModule")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"basicmanager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basicmanager"}},[e._v("#")]),e._v(" "),o("code",[e._v("BasicManager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("BasicManager")]),e._v(" is a structure that lists all the "),o("code",[e._v("AppModuleBasic")]),e._v(" of an application:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQmFzaWNNYW5hZ2VyIGlzIGEgY29sbGVjdGlvbiBvZiBBcHBNb2R1bGVCYXNpYwp0eXBlIEJhc2ljTWFuYWdlciBtYXBbc3RyaW5nXUFwcE1vZHVsZUJhc2lj"}})],1),e._v(" "),o("p",[e._v("It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewBasicManager(modules ...AppModuleBasic)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(" and builds a new "),o("code",[e._v("BasicManager")]),e._v(". This function is generally called in the "),o("code",[e._v("init()")]),e._v(" function of "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[o("code",[e._v("app.go")])]),e._v(" to quickly initialize the independent elements of the application's modules (click "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/master/app/app.go#L59-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to see an example).")],1),e._v(" "),o("li",[o("code",[e._v("RegisterLegacyAminoCodec(cdc *codec.LegacyAmino)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/core/encoding.html#amino"}},[o("code",[e._v("codec.LegacyAmino")]),e._v("s")]),e._v(" of each of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(". This function is usually called early on in the "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor"}},[e._v("application's construction")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterInterfaces(registry codectypes.InterfaceRegistry)")]),e._v(": Registers interface types and implementations of each of the application's "),o("code",[e._v("AppModuleBasic")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("DefaultGenesis(cdc codec.JSONMarshaler)")]),e._v(": Provides default genesis information for modules in the application by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#defaultgenesis"}},[o("code",[e._v("DefaultGenesis(cdc codec.JSONMarshaler)")])]),e._v(" function of each module. It is used to construct a default genesis file for the application.")],1),e._v(" "),o("li",[o("code",[e._v("ValidateGenesis(cdc codec.JSONMarshaler, txEncCfg client.TxEncodingConfig, genesis map[string]json.RawMessage)")]),e._v(": Validates the genesis information modules by calling the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#validategenesis"}},[o("code",[e._v("ValidateGenesis(codec.JSONMarshaler, client.TxEncodingConfig, json.RawMessage)")])]),e._v(" function of each module.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRESTRoutes(ctx client.Context, rtr *mux.Router)")]),e._v(": Registers REST routes for modules by calling the "),o("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#register-routes"}},[o("code",[e._v("RegisterRESTRoutes")])]),e._v(" function of each module. This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterGRPCGatewayRoutes(clientCtx client.Context, rtr *runtime.ServeMux)")]),e._v(": Registers gRPC routes for modules.")]),e._v(" "),o("li",[o("code",[e._v("AddTxCommands(rootTxCmd *cobra.Command)")]),e._v(": Adds modules' transaction commands to the application's "),o("RouterLink",{attrs:{to:"/interfaces/cli.html#transaction-commands"}},[o("code",[e._v("rootTxCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("AddQueryCommands(rootQueryCmd *cobra.Command)")]),e._v(": Adds modules' query commands to the application's "),o("RouterLink",{attrs:{to:"/interfaces/cli.html#query-commands"}},[o("code",[e._v("rootQueryCommand")])]),e._v(". This function is usually called function from the "),o("code",[e._v("main.go")]),e._v(" function of the "),o("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("application's command-line interface")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manager"}},[e._v("#")]),e._v(" "),o("code",[e._v("Manager")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Manager")]),e._v(" is a structure that holds all the "),o("code",[e._v("AppModule")]),e._v(" of an application, and defines the order of execution between several key components of these modules:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWFuYWdlciBkZWZpbmVzIGEgbW9kdWxlIG1hbmFnZXIgdGhhdCBwcm92aWRlcyB0aGUgaGlnaCBsZXZlbCB1dGlsaXR5IGZvciBtYW5hZ2luZyBhbmQgZXhlY3V0aW5nCi8vIG9wZXJhdGlvbnMgZm9yIGEgZ3JvdXAgb2YgbW9kdWxlcwp0eXBlIE1hbmFnZXIgc3RydWN0IHsKCU1vZHVsZXMgICAgICAgICAgICBtYXBbc3RyaW5nXUFwcE1vZHVsZQoJT3JkZXJJbml0R2VuZXNpcyAgIFtdc3RyaW5nCglPcmRlckV4cG9ydEdlbmVzaXMgW11zdHJpbmcKCU9yZGVyQmVnaW5CbG9ja2VycyBbXXN0cmluZwoJT3JkZXJFbmRCbG9ja2VycyAgIFtdc3RyaW5nCn0="}})],1),e._v(" "),o("p",[e._v("The module manager is used throughout the application whenever an action on a collection of modules is required. It implements the following methods:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewManager(modules ...AppModule)")]),e._v(": Constructor function. It takes a list of the application's "),o("code",[e._v("AppModule")]),e._v("s and builds a new "),o("code",[e._v("Manager")]),e._v(". It is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderInitGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module will be called when the application is first started. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderExportGenesis(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module will be called in case of an export. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderBeginBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("BeginBlock()")]),e._v(" function of each module will be called at the beginning of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("SetOrderEndBlockers(moduleNames ...string)")]),e._v(": Sets the order in which the "),o("code",[e._v("EndBlock()")]),e._v(" function of each module will be called at the end of each block. This function is generally called from the application's main "),o("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor function")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("RegisterInvariants(ir sdk.InvariantRegistry)")]),e._v(": Registers the "),o("RouterLink",{attrs:{to:"/building-modules/invariants.html"}},[e._v("invariants")]),e._v(" of each module.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterRoutes(router sdk.Router, queryRouter sdk.QueryRouter, legacyQuerierCdc *codec.LegacyAmino)")]),e._v(": Registers legacy "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[o("code",[e._v("Msg")])]),e._v(" and "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html#legacy-queriers"}},[o("code",[e._v("querier")])]),e._v(" routes.")],1),e._v(" "),o("li",[o("code",[e._v("RegisterServices(cfg Configurator)")]),e._v(": Registers all module services.")]),e._v(" "),o("li",[o("code",[e._v("InitGenesis(ctx sdk.Context, cdc codec.JSONMarshaler, genesisData map[string]json.RawMessage)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#initgenesis"}},[o("code",[e._v("InitGenesis")])]),e._v(" function of each module when the application is first started, in the order defined in "),o("code",[e._v("OrderInitGenesis")]),e._v(". Returns an "),o("code",[e._v("abci.ResponseInitChain")]),e._v(" to the underlying consensus engine, which can contain validator updates.")],1),e._v(" "),o("li",[o("code",[e._v("ExportGenesis(ctx sdk.Context, cdc codec.JSONMarshaler)")]),e._v(": Calls the "),o("RouterLink",{attrs:{to:"/building-modules/genesis.html#exportgenesis"}},[o("code",[e._v("ExportGenesis")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderExportGenesis")]),e._v(". The export constructs a genesis file from a previously existing state, and is mainly used when a hard-fork upgrade of the chain is required.")],1),e._v(" "),o("li",[o("code",[e._v("BeginBlock(ctx sdk.Context, req abci.RequestBeginBlock)")]),e._v(": At the beginning of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[o("code",[e._v("BaseApp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("BeginBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderBeginBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseBeginBlock")]),e._v(" which contains the aforementioned events.")],1),e._v(" "),o("li",[o("code",[e._v("EndBlock(ctx sdk.Context, req abci.RequestEndBlock)")]),e._v(": At the end of each block, this function is called from "),o("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[o("code",[e._v("BaseApp")])]),e._v(" and, in turn, calls the "),o("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[o("code",[e._v("EndBlock")])]),e._v(" function of each module, in the order defined in "),o("code",[e._v("OrderEndBlockers")]),e._v(". It creates a child "),o("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")]),e._v(" with an event manager to aggregate "),o("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" emitted from all modules. The function returns an "),o("code",[e._v("abci.ResponseEndBlock")]),e._v(" which contains the aforementioned events, as well as validator set updates (if any).")],1)]),e._v(" "),o("p",[e._v("Here's an example of a concrete integration within an application:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIE5PVEU6IEFueSBtb2R1bGUgaW5zdGFudGlhdGVkIGluIHRoZSBtb2R1bGUgbWFuYWdlciB0aGF0IGlzIGxhdGVyIG1vZGlmaWVkCgkvLyBtdXN0IGJlIHBhc3NlZCBieSByZWZlcmVuY2UgaGVyZS4KCWFwcC5tbSA9IG1vZHVsZS5OZXdNYW5hZ2VyKAoJCWdlbnV0aWwuTmV3QXBwTW9kdWxlKAoJCQlhcHAuQWNjb3VudEtlZXBlciwgYXBwLlN0YWtpbmdLZWVwZXIsIGFwcC5CYXNlQXBwLkRlbGl2ZXJUeCwKCQkJZW5jb2RpbmdDb25maWcuVHhDb25maWcsCgkJKSwKCQlhdXRoLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkFjY291bnRLZWVwZXIsIGF1dGhzaW1zLlJhbmRvbUdlbmVzaXNBY2NvdW50cyksCgkJdmVzdGluZy5OZXdBcHBNb2R1bGUoYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyKSwKCQliYW5rLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkJhbmtLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyKSwKCQljYXBhYmlsaXR5Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgKmFwcC5DYXBhYmlsaXR5S2VlcGVyKSwKCQljcmlzaXMuTmV3QXBwTW9kdWxlKCZhbXA7YXBwLkNyaXNpc0tlZXBlciksCgkJZ292Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLkdvdktlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyKSwKCQltaW50Lk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLk1pbnRLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyKSwKCQlzbGFzaGluZy5OZXdBcHBNb2R1bGUoYXBwQ29kZWMsIGFwcC5TbGFzaGluZ0tlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyLCBhcHAuU3Rha2luZ0tlZXBlciksCgkJZGlzdHIuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuRGlzdHJLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyLCBhcHAuQmFua0tlZXBlciwgYXBwLlN0YWtpbmdLZWVwZXIpLAoJCXN0YWtpbmcuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuU3Rha2luZ0tlZXBlciwgYXBwLkFjY291bnRLZWVwZXIsIGFwcC5CYW5rS2VlcGVyKSwKCQl1cGdyYWRlLk5ld0FwcE1vZHVsZShhcHAuVXBncmFkZUtlZXBlciksCgkJZXZpZGVuY2UuTmV3QXBwTW9kdWxlKGFwcC5FdmlkZW5jZUtlZXBlciksCgkJaWJjLk5ld0FwcE1vZHVsZShhcHAuSUJDS2VlcGVyKSwKCQlwYXJhbXMuTmV3QXBwTW9kdWxlKGFwcC5QYXJhbXNLZWVwZXIpLAoJCXRyYW5zZmVyTW9kdWxlLAoJKQoKCS8vIER1cmluZyBiZWdpbiBibG9jayBzbGFzaGluZyBoYXBwZW5zIGFmdGVyIGRpc3RyLkJlZ2luQmxvY2tlciBzbyB0aGF0CgkvLyB0aGVyZSBpcyBub3RoaW5nIGxlZnQgb3ZlciBpbiB0aGUgdmFsaWRhdG9yIGZlZSBwb29sLCBzbyBhcyB0byBrZWVwIHRoZQoJLy8gQ2FuV2l0aGRyYXdJbnZhcmlhbnQgaW52YXJpYW50LgoJLy8gTk9URTogc3Rha2luZyBtb2R1bGUgaXMgcmVxdWlyZWQgaWYgSGlzdG9yaWNhbEVudHJpZXMgcGFyYW0gJmd0OyAwCglhcHAubW0uU2V0T3JkZXJCZWdpbkJsb2NrZXJzKAoJCXVwZ3JhZGV0eXBlcy5Nb2R1bGVOYW1lLCBtaW50dHlwZXMuTW9kdWxlTmFtZSwgZGlzdHJ0eXBlcy5Nb2R1bGVOYW1lLCBzbGFzaGluZ3R5cGVzLk1vZHVsZU5hbWUsCgkJZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBzdGFraW5ndHlwZXMuTW9kdWxlTmFtZSwgaWJjaG9zdC5Nb2R1bGVOYW1lLAoJKQoJYXBwLm1tLlNldE9yZGVyRW5kQmxvY2tlcnMoY3Jpc2lzdHlwZXMuTW9kdWxlTmFtZSwgZ292dHlwZXMuTW9kdWxlTmFtZSwgc3Rha2luZ3R5cGVzLk1vZHVsZU5hbWUpCgoJLy8gTk9URTogVGhlIGdlbnV0aWxzIG1vZHVsZSBtdXN0IG9jY3VyIGFmdGVyIHN0YWtpbmcgc28gdGhhdCBwb29scyBhcmUKCS8vIHByb3Blcmx5IGluaXRpYWxpemVkIHdpdGggdG9rZW5zIGZyb20gZ2VuZXNpcyBhY2NvdW50cy4KCS8vIE5PVEU6IENhcGFiaWxpdHkgbW9kdWxlIG11c3Qgb2NjdXIgZmlyc3Qgc28gdGhhdCBpdCBjYW4gaW5pdGlhbGl6ZSBhbnkgY2FwYWJpbGl0aWVzCgkvLyBzbyB0aGF0IG90aGVyIG1vZHVsZXMgdGhhdCB3YW50IHRvIGNyZWF0ZSBvciBjbGFpbSBjYXBhYmlsaXRpZXMgYWZ0ZXJ3YXJkcyBpbiBJbml0Q2hhaW4KCS8vIGNhbiBkbyBzbyBzYWZlbHkuCglhcHAubW0uU2V0T3JkZXJJbml0R2VuZXNpcygKCQljYXBhYmlsaXR5dHlwZXMuTW9kdWxlTmFtZSwgYXV0aHR5cGVzLk1vZHVsZU5hbWUsIGJhbmt0eXBlcy5Nb2R1bGVOYW1lLCBkaXN0cnR5cGVzLk1vZHVsZU5hbWUsIHN0YWtpbmd0eXBlcy5Nb2R1bGVOYW1lLAoJCXNsYXNoaW5ndHlwZXMuTW9kdWxlTmFtZSwgZ292dHlwZXMuTW9kdWxlTmFtZSwgbWludHR5cGVzLk1vZHVsZU5hbWUsIGNyaXNpc3R5cGVzLk1vZHVsZU5hbWUsCgkJaWJjaG9zdC5Nb2R1bGVOYW1lLCBnZW51dGlsdHlwZXMuTW9kdWxlTmFtZSwgZXZpZGVuY2V0eXBlcy5Nb2R1bGVOYW1lLCBpYmN0cmFuc2ZlcnR5cGVzLk1vZHVsZU5hbWUsCgkpCgoJYXBwLm1tLlJlZ2lzdGVySW52YXJpYW50cygmYW1wO2FwcC5DcmlzaXNLZWVwZXIpCglhcHAubW0uUmVnaXN0ZXJSb3V0ZXMoYXBwLlJvdXRlcigpLCBhcHAuUXVlcnlSb3V0ZXIoKSwgZW5jb2RpbmdDb25maWcuQW1pbm8pCglhcHAubW0uUmVnaXN0ZXJTZXJ2aWNlcyhtb2R1bGUuTmV3Q29uZmlndXJhdG9yKGFwcC5HUlBDUXVlcnlSb3V0ZXIoKSkp"}})],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn more about "),o("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[o("code",[e._v("message")]),e._v("s and "),o("code",[e._v("queries")])])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);