import{_ as l,E as s,c as i,m as e,J as o,a as n,a4 as a,o as r}from"./chunks/framework.e0tDGBa7.js";const c="/assets/goto.Cks-Bajm.png",d="/assets/goto-details.DdlTwlxl.png",ee=JSON.parse('{"title":"Navigation","description":"","frontmatter":{"title":"Navigation"},"headers":[],"relativePath":"guide/usage/file-management/navigation.md","filePath":"guide/usage/file-management/navigation.md","lastUpdated":1708975850000}'),h={name:"guide/usage/file-management/navigation.md"},u=a('<h1 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-label="Permalink to &quot;Navigation&quot;">​</a></h1><h2 id="goto-anything" tabindex="-1">Goto Anything <a class="header-anchor" href="#goto-anything" aria-label="Permalink to &quot;Goto Anything&quot;">​</a></h2><p>Using Goto Anything, you can <strong>navigate your project&#39;s files</strong> swiftly.</p><p><img src="'+c+'" alt="Goto Anything"></p><p>Keyboard shortcuts related to Goto Anything:</p>',5),p=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),m=e("td",null,[e("strong",null,"Open Goto Anything")],-1),_=e("td",null,"Open current item",-1),g=e("td",null,"Open current item and keep panel open",-1),b=e("td",null,"Close Goto Anything",-1),f=a('<p>As you type into Goto Anything&#39;s input area, names of files in the current project will be searched, and a preview of the best match will be shown. This preview is <em>transient</em>; that is, it won&#39;t become the actual active view until you perform some operation on it. You will find transient views in other situations, for example, after clicking on a file in the sidebar.</p><p>Goto Anything lives up to its name – there&#39;s more to it than locating files.</p><h3 id="goto-anything-operators" tabindex="-1">Goto Anything Operators <a class="header-anchor" href="#goto-anything-operators" aria-label="Permalink to &quot;Goto Anything Operators&quot;">​</a></h3><p>Goto Anything accepts several operators. All of them can be used on their own or after the search term.</p><p><strong>Example:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>models:100</span></span></code></pre></div><p>This instructs Sublime Text to first search for a file whose path matches <code>models</code>, and then to go to line 100 in said file.</p><h4 id="supported-operators" tabindex="-1">Supported Operators <a class="header-anchor" href="#supported-operators" aria-label="Permalink to &quot;Supported Operators&quot;">​</a></h4><p><code>@symbol</code> : Searches the active file for the symbol named <code>symbol</code>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Symbols usually include class and function names.</p><p>Symbol searches will only yield results if the active file type has symbols defined for it. For more information about symbols, see <a href="/reference/symbols.html">Symbols</a>.</p></div><p><code>#term</code> : Performs a fuzzy search of the <code>term</code> search term and highlights all matches.</p><p><code>:line_number</code> : Goes to the specified <code>line_number</code>, or to the end of the file if <code>line_number</code> is larger that the file&#39;s line count.</p><p>The Goto Anything operators are bound to the following shortcuts:</p>',13),y=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),v=e("td",null,[e("strong",null,"@")],-1),w=e("td",null,[e("strong",null,"#")],-1),k=e("td",null,[e("strong",null,":")],-1),T=e("h3",{id:"goto-symbol-in-project",tabindex:"-1"},[n("Goto Symbol In Project "),e("a",{class:"header-anchor",href:"#goto-symbol-in-project","aria-label":'Permalink to "Goto Symbol In Project"'},"​")],-1),A=e("em",null,"current",-1),S=e("em",null,"every file",-1),G=e("h2",{id:"sidebar",tabindex:"-1"},[n("Sidebar "),e("a",{class:"header-anchor",href:"#sidebar","aria-label":'Permalink to "Sidebar"'},"​")],-1),P=e("p",null,[n("The sidebar provides an overview of the active project (more on projects later). Files and folders in the sidebar will be available in "),e("a",{href:"#goto-anything"},"Goto Anything"),n(" and project-wide actions like, for example, project-wide searches.")],-1),x=e("p",null,"Projects and the sidebar are closely related. It's important to note that there's always an active project; if you haven't opened a project file, an anonymous project will be used instead.",-1),j=e("p",null,"The sidebar provides basic file management operations through its context menu.",-1),N=e("p",null,"These are common keyboard shortcuts related to the side bar:",-1),C=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),I=e("td",null,[e("strong",null,"Toggle side bar")],-1),V=e("td",null,"Give the focus to the side bar",-1),q=e("td",null,"Return the focus to the view",-1),D=e("tr",null,[e("td",null,"Navigate side bar"),e("td",null,"Arrow keys")],-1),O=e("p",null,[n("Files opened from the sidebar create "),e("em",null,"semi-transient"),n(" views. Unlike transient views, semi-transient views show up as a new tab. The tab title of semi-transient views appears in italics. Before a new semi-transient view is opened, any other pre-existing semi-transient view in the same pane gets automatically closed.")],-1),B=e("p",null,"Here's an example showing a normal view, a transient view, and a semi-transient view. Notice that the transient view has no tab:",-1),E=e("p",null,[e("img",{src:d,alt:"Goto Anything - Transient Views"})],-1),F=e("h2",{id:"panes",tabindex:"-1"},[n("Panes "),e("a",{class:"header-anchor",href:"#panes","aria-label":'Permalink to "Panes"'},"​")],-1),$=e("p",null,"Panes are groups of views. In Sublime Text, you can have multiple panes open at the same time.",-1),K=e("p",null,"Main keyboard shortcuts related to panes:",-1),R=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),U=e("td",null,"Create new pane",-1),z=e("td",null,"Close active pane",-1),J=e("p",null,[n("Further pane management commands can be found under "),e("strong",null,"View → Layout"),n(" and related submenus.")],-1);function H(L,M,Y,Q,W,X){const t=s("Key");return r(),i("div",null,[u,e("table",null,[p,e("tbody",null,[e("tr",null,[m,e("td",null,[o(t,{k:"ctrl+p"})])]),e("tr",null,[_,e("td",null,[o(t,{k:"enter"})])]),e("tr",null,[g,e("td",null,[o(t,{k:"right"})])]),e("tr",null,[b,e("td",null,[o(t,{k:"escape"})])])])]),f,e("table",null,[y,e("tbody",null,[e("tr",null,[v,e("td",null,[o(t,{k:"ctrl+r"})])]),e("tr",null,[w,e("td",null,[o(t,{k:"ctrl+;"})])]),e("tr",null,[k,e("td",null,[o(t,{k:"ctrl+g"})])])])]),T,e("p",null,[n("The Goto Anything shortcuts navigate the "),A,n(" file. If you have a project open, you can press "),o(t,{k:"ctrl+shift+r"}),n(" to launch Goto Anything In Project. This command will search for symbols across "),S,n(" in your project.")]),G,P,x,j,N,e("table",null,[C,e("tbody",null,[e("tr",null,[I,e("td",null,[o(t,{k:"ctrl+k, ctrl+b"})])]),e("tr",null,[V,e("td",null,[o(t,{k:"ctrl+0"})])]),e("tr",null,[q,e("td",null,[o(t,{k:"escape"})])]),D])]),O,B,E,F,$,K,e("table",null,[R,e("tbody",null,[e("tr",null,[U,e("td",null,[o(t,{k:"ctrl+k, ctrl+up"})])]),e("tr",null,[z,e("td",null,[o(t,{k:"ctrl+k, ctrl+down"})])])])]),J])}const te=l(h,[["render",H]]);export{ee as __pageData,te as default};
