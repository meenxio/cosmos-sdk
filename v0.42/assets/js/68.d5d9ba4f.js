(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{728:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-004-split-denomination-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-004-split-denomination-keys"}},[e._v("#")]),e._v(" ADR 004: Split Denomination Keys")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-01-08: Initial version")]),e._v(" "),a("li",[e._v("2020-01-09: Alterations to handle vesting accounts")]),e._v(" "),a("li",[e._v("2020-01-14: Updates from review feedback")]),e._v(" "),a("li",[e._v("2020-01-30: Updates from implementation")])]),e._v(" "),a("h3",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("denom / denomination key -- unique token identifier.")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("With permissionless IBC, anyone will be able to send arbitrary denominations to any other account. Currently, all non-zero balances are stored along with the account in an "),a("code",[e._v("sdk.Coins")]),e._v(" struct, which creates a potential denial-of-service concern, as too many denominations will become expensive to load & store each time the account is modified. See issues "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5467",target:"_blank",rel:"noopener noreferrer"}},[e._v("5467"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/4982",target:"_blank",rel:"noopener noreferrer"}},[e._v("4982"),a("OutboundLink")],1),e._v(" for additional context.")]),e._v(" "),a("p",[e._v("Simply rejecting incoming deposits after a denomination count limit doesn't work, since it opens up a griefing vector: someone could send a user lots of nonsensical coins over IBC, and then prevent the user from receiving real denominations (such as staking rewards).")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Balances shall be stored per-account & per-denomination under a denomination- and account-unique key, thus enabling O(1) read & write access to the balance of a particular account in a particular denomination.")]),e._v(" "),a("h3",{attrs:{id:"account-interface-x-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-interface-x-auth"}},[e._v("#")]),e._v(" Account interface (x/auth)")]),e._v(" "),a("p",[a("code",[e._v("GetCoins()")]),e._v(" and "),a("code",[e._v("SetCoins()")]),e._v(" will be removed from the account interface, since coin balances will\nnow be stored in & managed by the bank module.")]),e._v(" "),a("p",[e._v("The vesting account interface will replace "),a("code",[e._v("SpendableCoins")]),e._v(" in favor of "),a("code",[e._v("LockedCoins")]),e._v(" which does\nnot require the account balance anymore. In addition, "),a("code",[e._v("TrackDelegation()")]),e._v("  will now accept the\naccount balance of all tokens denominated in the vesting balance instead of loading the entire\naccount balance.")]),e._v(" "),a("p",[e._v("Vesting accounts will continue to store original vesting, delegated free, and delegated\nvesting coins (which is safe since these cannot contain arbitrary denominations).")]),e._v(" "),a("h3",{attrs:{id:"bank-keeper-x-bank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bank-keeper-x-bank"}},[e._v("#")]),e._v(" Bank keeper (x/bank)")]),e._v(" "),a("p",[e._v("The following APIs will be added to the "),a("code",[e._v("x/bank")]),e._v(" keeper:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GetAllBalances(ctx Context, addr AccAddress) Coins")])]),e._v(" "),a("li",[a("code",[e._v("GetBalance(ctx Context, addr AccAddress, denom string) Coin")])]),e._v(" "),a("li",[a("code",[e._v("SetBalance(ctx Context, addr AccAddress, coin Coin)")])]),e._v(" "),a("li",[a("code",[e._v("LockedCoins(ctx Context, addr AccAddress) Coins")])]),e._v(" "),a("li",[a("code",[e._v("SpendableCoins(ctx Context, addr AccAddress) Coins")])])]),e._v(" "),a("p",[e._v("Additional APIs may be added to facilitate iteration and auxiliary functionality not essential to\ncore functionality or persistence.")]),e._v(" "),a("p",[e._v("Balances will be stored first by the address, then by the denomination (the reverse is also possible,\nbut retrieval of all balances for a single account is presumed to be more frequent):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dmFyIEJhbGFuY2VzUHJlZml4ID0gW11ieXRlKCZxdW90O2JhbGFuY2VzJnF1b3Q7KQoKZnVuYyAoayBLZWVwZXIpIFNldEJhbGFuY2UoY3R4IENvbnRleHQsIGFkZHIgQWNjQWRkcmVzcywgYmFsYW5jZSBDb2luKSBlcnJvciB7CiAgaWYgIWJhbGFuY2UuSXNWYWxpZCgpIHsKICAgIHJldHVybiBlcnIKICB9CgogIHN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCiAgYmFsYW5jZXNTdG9yZSA6PSBwcmVmaXguTmV3U3RvcmUoc3RvcmUsIEJhbGFuY2VzUHJlZml4KQogIGFjY291bnRTdG9yZSA6PSBwcmVmaXguTmV3U3RvcmUoYmFsYW5jZXNTdG9yZSwgYWRkci5CeXRlcygpKQoKICBieiA6PSBNYXJzaGFsKGJhbGFuY2UpCiAgYWNjb3VudFN0b3JlLlNldChbXWJ5dGUoYmFsYW5jZS5EZW5vbSksIGJ6KQoKICByZXR1cm4gbmlsCn0K"}}),e._v(" "),a("p",[e._v("This will result in the balances being indexed by the byte representation of\n"),a("code",[e._v("balances/{address}/{denom}")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("DelegateCoins()")]),e._v(" and "),a("code",[e._v("UndelegateCoins()")]),e._v(" will be altered to only load each individual\naccount balance by denomination found in the (un)delegation amount. As a result,\nany mutations to the account balance by will made by denomination.")]),e._v(" "),a("p",[a("code",[e._v("SubtractCoins()")]),e._v(" and "),a("code",[e._v("AddCoins()")]),e._v(" will be altered to read & write the balances\ndirectly instead of calling "),a("code",[e._v("GetCoins()")]),e._v(" / "),a("code",[e._v("SetCoins()")]),e._v(" (which no longer exist).")]),e._v(" "),a("p",[a("code",[e._v("trackDelegation()")]),e._v(" and "),a("code",[e._v("trackUndelegation()")]),e._v(" will be altered to no longer update\naccount balances.")]),e._v(" "),a("p",[e._v("External APIs will need to scan all balances under an account to retain backwards-compatibility. It\nis advised that these APIs use "),a("code",[e._v("GetBalance")]),e._v(" and "),a("code",[e._v("SetBalance")]),e._v(" instead of "),a("code",[e._v("GetAllBalances")]),e._v(" when\npossible as to not load the entire account balance.")]),e._v(" "),a("h3",{attrs:{id:"supply-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supply-module"}},[e._v("#")]),e._v(" Supply module")]),e._v(" "),a("p",[e._v("The supply module, in order to implement the total supply invariant, will now need\nto scan all accounts & call "),a("code",[e._v("GetAllBalances")]),e._v(" using the "),a("code",[e._v("x/bank")]),e._v(" Keeper, then sum\nthe balances and check that they match the expected total supply.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("O(1) reads & writes of balances (with respect to the number of denominations for\nwhich an account has non-zero balances). Note, this does not relate to the actual\nI/O cost, rather the total number of direct reads needed.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Slightly less efficient reads/writes when reading & writing all balances of a\nsingle account in a transaction.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("None in particular.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("Ref: https://github.com/cosmos/cosmos-sdk/issues/4982")]),e._v(" "),a("li",[e._v("Ref: https://github.com/cosmos/cosmos-sdk/issues/5467")]),e._v(" "),a("li",[e._v("Ref: https://github.com/cosmos/cosmos-sdk/issues/5492")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);