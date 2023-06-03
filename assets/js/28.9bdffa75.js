(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{368:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Macros are a basic automation facility comprising sequences of commands. Use\nthem whenever you need to repeat the exact same steps to perform an operation.")]),t._v(" "),a("p",[t._v("Macro files are JSON files with the extension "),a("code",[t._v(".sublime-macro")]),t._v(". Sublime Text\nships with a few macros providing core functionality, such as line and word\ndeletion. You can find these under "),a("strong",[t._v("Tools | Macros")]),t._v(" or in\n"),a("code",[t._v("Packages/Default")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"how-to-record-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-record-macros"}},[t._v("#")]),t._v(" How to Record Macros")]),t._v(" "),a("p",[t._v("To start recording a macro, press "),a("Key",{attrs:{k:"ctrl+alt+q"}}),t._v(" and subsequently\nexecute the desired steps one by one. When you're done,\npress "),a("Key",{attrs:{k:"ctrl+alt+q"}}),t._v(" again to stop the macro recorder. Your new macro\nwon't be saved to a file, but kept in the macro buffer instead. Now you will be\nable to run the recorded macro by pressing "),a("Key",{attrs:{k:"ctrl+shift+alt+q"}}),t._v(",\nor save it to a file by selecting "),a("strong",[t._v("Tools | Save macro...")])],1),t._v(" "),a("p",[t._v("Note that the macro buffer will remember only the latest recorded macro. Also,\nmacros only record commands sent to the buffer: window-level\ncommands, such creating a new file, will be ignored.")]),t._v(" "),a("h2",{attrs:{id:"how-to-edit-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-edit-macros"}},[t._v("#")]),t._v(" How to Edit Macros")]),t._v(" "),a("p",[t._v("As an alternative to recording a macro, you can edit it by hand. Just save a new file\nwith the "),a("code",[t._v(".sublime-macro")]),t._v(" extension under "),a("code",[t._v("Packages/User")]),t._v(" and add\ncommands to it. Macro files have this format:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"move_to"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hardeol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"characters"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/reference/commands.html"}},[t._v("Commands")]),t._v(" section for more information on commands.")],1),t._v(" "),a("p",[t._v("If you're editing a macro by hand, you need to escape quotation marks,\nblank spaces and backslashes by preceding them with "),a("code",[t._v("\\")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"where-to-store-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-store-macros"}},[t._v("#")]),t._v(" Where to Store Macros")]),t._v(" "),a("p",[t._v("Macro files can be stored in any package folder, and then will show up\nunder "),a("strong",[t._v("Tools | Macros | <PackageName>")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"key-binding-for-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-binding-for-macros"}},[t._v("#")]),t._v(" Key Binding for Macros")]),t._v(" "),a("p",[t._v("Macro files can be bound to key combinations by passing the macro file path to the "),a("code",[t._v("run_macro_file")]),t._v(" command like so:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keys"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"super+alt+l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"run_macro_file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"res://Packages/User/Example.sublime-macro"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);