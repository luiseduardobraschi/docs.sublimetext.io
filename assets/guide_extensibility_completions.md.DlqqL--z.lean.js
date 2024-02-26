import{_ as a,E as n,c as l,m as e,a as t,J as i,a4 as s,o as r}from"./chunks/framework.e0tDGBa7.js";const c="/assets/completions_hint.C4BtHFfV.png",p="/assets/completions_contents.D7lWr3jh.gif",$=JSON.parse('{"title":"Completions","description":"","frontmatter":{"title":"Completions"},"headers":[],"relativePath":"guide/extensibility/completions.md","filePath":"guide/extensibility/completions.md","lastUpdated":1708976204000}'),h={name:"guide/extensibility/completions.md"},d=e("h1",{id:"completions",tabindex:"-1"},[t("Completions "),e("a",{class:"header-anchor",href:"#completions","aria-label":'Permalink to "Completions"'},"​")],-1),m=e("p",null,"In the spirit of IDEs, Sublime Text suggests completions that aggregate code or content while writing by catching everything that you have written, like variable names.",-1),u=e("p",null,"There are however several ways to extend the list of completions (for example, depending on the current syntax).",-1),f=e("p",null,"This topic deals with how completions are used and where they come from.",-1),g=e("h2",{id:"how-to-use-completions",tabindex:"-1"},[t("How to Use Completions "),e("a",{class:"header-anchor",href:"#how-to-use-completions","aria-label":'Permalink to "How to Use Completions"'},"​")],-1),_=e("p",null,"There are two methods for using completions. Even though, when screening them, the priority given to completions always stays the same, the two methods produce different results.",-1),b=e("p",null,"Completions can be inserted in two ways:",-1),y=e("h3",{id:"the-completions-list",tabindex:"-1"},[t("The Completions List "),e("a",{class:"header-anchor",href:"#the-completions-list","aria-label":'Permalink to "The Completions List"'},"​")],-1),w=e("p",null,"To use the completions list:",-1),x=e("em",null,"up",-1),k=e("em",null,"down",-1),T=e("code",null,"auto_complete_commit_on_tab",-1),C=s("",18),v={id:"completed-completions",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#completed-completions","aria-label":'Permalink to "<Key k="tab" />-Completed Completions"'},"​",-1),S=e("p",null,[t("If you want to be able to tab-complete completions, the setting "),e("code",null,"tab_completion"),t(" must be set to "),e("code",null,"true"),t(" (default). Snippet tab-completion is unaffected by this setting: They will always be completed according to their tab trigger.")],-1),q=e("code",null,"tab_completion",-1),I=e("h4",{id:"inserting-a-literal-tab-character",tabindex:"-1"},[t("Inserting a Literal tab Character "),e("a",{class:"header-anchor",href:"#inserting-a-literal-tab-character","aria-label":'Permalink to "Inserting a Literal tab Character"'},"​")],-1),A=e("code",null,"tab_completion",-1),N=s("",12);function V(W,B,E,F,H,z){const o=n("Key");return r(),l("div",null,[d,m,u,f,g,_,b,e("ul",null,[e("li",null,[t("through the completions list ("),i(o,{k:"ctrl+space"}),t("), or")]),e("li",null,[t("by pressing "),i(o,{k:"tab"}),t(".")])]),y,w,e("ol",null,[e("li",null,[t("Press "),i(o,{k:"ctrl+space"}),t(" or just type something.")]),e("li",null,[t("Optionally, press "),i(o,{k:"ctrl+space"}),t(" again to select the next entry or use "),x,t(" and "),k,t(" arrow keys.")]),e("li",null,[t("Press "),i(o,{k:"enter"}),t(" or "),i(o,{k:"tab"}),t(" to validate selection (depending on the "),T,t(" setting).")]),e("li",null,[t("Optionally, press "),i(o,{k:"tab"}),t(" repeatedly to insert the next available completion.")])]),C,e("h3",v,[i(o,{k:"tab"}),t("-Completed Completions "),P]),S,e("p",null,[t("With "),q,t(" enabled, completion of items is always automatic. This means, unlike the case of the completions list, that Sublime Text will always make the decision for you. The rules for selecting the best completion are the same as described above, but in case of ambiguity, Sublime Text will insert the item it deems most suitable. You can press the "),i(o,{k:"tab"}),t(" key multiple times to walk through other available options.")]),I,e("p",null,[t("When "),A,t(" is enabled, you can press "),i(o,{k:"shift+tab"}),t(" to insert a literal tab character.")]),N])}const j=a(h,[["render",V]]);export{$ as __pageData,j as default};