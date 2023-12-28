import{_ as n,D as l,o as p,c as o,k as s,a as e,I as i,R as a}from"./chunks/framework.e02z-eDF.js";const S=JSON.parse('{"title":"Snippets","description":"","frontmatter":{"title":"Snippets"},"headers":[],"relativePath":"guide/extensibility/snippets.md","filePath":"guide/extensibility/snippets.md","lastUpdated":1703773698000}'),r={name:"guide/extensibility/snippets.md"},h=a(`<h1 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-label="Permalink to &quot;Snippets&quot;">​</a></h1><p>Whether you are coding or writing the next vampire best-seller, you&#39;re likely to need certain short fragments of text again and again. Use snippets to save yourself tedious typing. Snippets are smart templates that will insert text for you and adapt it to their context.</p><p>To create a new snippet, select <strong>Tools | Developer | New Snippet...</strong> Sublime Text will present you with a skeleton for it.</p><p>Snippets can be stored under any package&#39;s folder, but to keep it simple while you&#39;re learning, you can save them to your <code>Packages/User</code> folder.</p><h2 id="snippets-file-format" tabindex="-1">Snippets File Format <a class="header-anchor" href="#snippets-file-format" aria-label="Permalink to &quot;Snippets File Format&quot;">​</a></h2><p>Snippets typically live in a Sublime Text package. They are simplified XML files with the extension <code>.sublime-snippet</code>. For instance, you could have a <code>greeting.sublime-snippet</code> inside an <em>Email</em> package.</p><p>The structure of a typical snippet is as follows (including the default hints Sublime Text inserts for your convenience):</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">snippet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;![CDATA[Type your snippet here]]&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Optional: Tab trigger to activate the snippet --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tabTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;xyzzy&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tabTrigger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Optional: Scope the tab trigger will be active in --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;source.python&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Optional: Description to show in the menu --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;My Fancy Snippet&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">snippet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>The <code>snippet</code> element contains all the information Sublime Text needs in order to know <em>what</em> to insert, <em>whether</em> to insert and <em>when</em>. Let&#39;s look at each of these parts in turn.</p><p><code>content</code> : The actual snippet. Snippets can range from simple to fairly complex templates. We&#39;ll look at examples of both later.</p><p>Keep the following in mind when writing your own snippets:</p><ul><li><p>If you want to get a literal <code>$</code>, you have to escape it like this: <code>\\$</code>.</p></li><li><p>When writing a snippet that contains indentation, always use tabs. When the snippet is inserted, the tabs will be transformed into spaces if the option <code>translate_tabs_to_spaces</code> is <code>true</code>.</p></li><li><p>The <code>content</code> must be included in a <code>&lt;![CDATA[…]]&gt;</code> section. Snippets won&#39;t work if you don&#39;t do this!</p></li><li><p>The <code>content</code> of your snippet must not contain <code>]]&gt;</code> because this string of characters will prematurely close the <code>&lt;![CDATA[…]]&gt;</code> section, resulting in an XML error. To work around this pitfall, you can insert an undefined variable into the string like this: <code>]]$NOT_DEFINED&gt;</code>. This modified string passes through the XML parser without closing the content element&#39;s <code>&lt;![CDATA[…]]&gt;</code> section, but Sublime Text will replace <code>$NOT_DEFINED</code> with an empty string before inserting the snippet into your file. In other words, <code>]]$NOT_DEFINED&gt;</code> in your snippet file <code>content</code> will be written as <code>]]&gt;</code> when you trigger the snippet.</p></li></ul>`,12),d=s("code",null,"tabTrigger",-1),c=a(`<p><code>scope</code> : Scope selector determining the context where the snippet will be active. See <a href="/guide/extensibility/syntaxdefs.html#scopes">Scopes</a> for more information.</p><p><code>description</code> : Used when showing the snippet in the Snippets menu. If not present, Sublime Text defaults to the file name of the snippet.</p><p>With this information, you can start writing your own snippets as described in the next sections.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>In the interest of brevity, we&#39;re only including the <code>content</code> element&#39;s text in examples unless otherwise noted.</p></div><h2 id="snippet-features" tabindex="-1">Snippet Features <a class="header-anchor" href="#snippet-features" aria-label="Permalink to &quot;Snippet Features&quot;">​</a></h2><h3 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment Variables&quot;">​</a></h3><p>Snippets have access to contextual information in the form of environment variables. The values of the variables listed below are set automatically by Sublime Text.</p><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>$PARAM1 .. $PARAMn</code></td><td>Arguments passed to the <code>insert_snippet</code> command. (Not covered here.)</td></tr><tr><td><code>$SELECTION</code></td><td>The text that was selected when the snippet was triggered.</td></tr><tr><td><code>$TM_CURRENT_LINE</code></td><td>Content of the cursor&#39;s line when the snippet was triggered.</td></tr><tr><td><code>$TM_CURRENT_WORD</code></td><td>Word under the cursor when the snippet was triggered.</td></tr><tr><td><code>$TM_DIRECTORY</code></td><td>Directory name of the file being edited. (since 3154)</td></tr><tr><td><code>$TM_FILENAME</code></td><td>Name of the file being edited, including extension.</td></tr><tr><td><code>$TM_FILEPATH</code></td><td>Path to the file being edited.</td></tr><tr><td><code>$TM_FULLNAME</code></td><td>User&#39;s user name.</td></tr><tr><td><code>$TM_LINE_INDEX</code></td><td>Column where the snippet is being inserted, 0 based.</td></tr><tr><td><code>$TM_LINE_NUMBER</code></td><td>Row where the snippet is being inserted, 1 based.</td></tr><tr><td><code>$TM_SELECTED_TEXT</code></td><td>An alias for <strong>$SELECTION</strong>.</td></tr><tr><td><code>$TM_SCOPE</code></td><td>The scope of the beginning of each selected region. (since 3154)</td></tr><tr><td><code>$TM_SOFT_TABS</code></td><td><code>YES</code> if <code>translate_tabs_to_spaces</code> is true, otherwise <code>NO</code>.</td></tr><tr><td><code>$TM_TAB_SIZE</code></td><td>Spaces per-tab (controlled by the <code>tab_size</code> option).</td></tr></tbody></table><p>Let&#39;s see a simple example of a snippet using variables:</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USER NAME:          $TM_FULLNAME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FILE NAME:          $TM_FILENAME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TAB SIZE:          $TM_TAB_SIZE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SOFT TABS:          $TM_SOFT_TABS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=============================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">USER NAME:          guillermo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FILE NAME:          test.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TAB SIZE:          4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SOFT TABS:          YES</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=============================</span></span></code></pre></div><h3 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;Fields&quot;">​</a></h3>`,11),k=a(`<div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">First Name: $1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Second Name: $2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Address: $3</span></span></code></pre></div>`,1),E=s("code",null,"$1",-1),g=s("code",null,"$2",-1),u=s("p",null,"end of the snippet's content so that you can resume normal editing.",-1),y=s("p",null,[e("If you want to control where the exit point should be, use the "),s("code",null,"$0"),e(" mark. By default, this is the end of the snippet.")],-1),m=a(`<h3 id="mirrored-fields" tabindex="-1">Mirrored Fields <a class="header-anchor" href="#mirrored-fields" aria-label="Permalink to &quot;Mirrored Fields&quot;">​</a></h3><p>Identical field markers mirror each other: when you edit the first one, the rest will be populated in real time with the same value.</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">First Name: $1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Second Name: $2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Address: $3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User name: $1</span></span></code></pre></div><p>In this example, &quot;User name&quot; will be filled out with the same value as &quot;First Name&quot;.</p><h3 id="placeholders" tabindex="-1">Placeholders <a class="header-anchor" href="#placeholders" aria-label="Permalink to &quot;Placeholders&quot;">​</a></h3><p>By expanding the field syntax a little bit, you can define default values for a field. Placeholders are useful whenever there&#39;s a general case for your snippet, but you still want to keep it customizable.</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">First Name: \${1:Guillermo}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Second Name: \${2:López}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Address: \${3:Main Street 1234}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User name: $1</span></span></code></pre></div><p>Variables can be used as placeholders:</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">First Name: \${1:Guillermo}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Second Name: \${2:López}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Address: \${3:Main Street 1234}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User name: \${4:$TM_FULLNAME}</span></span></code></pre></div><p>And you can nest placeholders within other placeholders too:</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Test: \${1:Nested \${2:Placeholder}}</span></span></code></pre></div><h3 id="substitutions" tabindex="-1">Substitutions <a class="header-anchor" href="#substitutions" aria-label="Permalink to &quot;Substitutions&quot;">​</a></h3><p>In addition to the place holder syntax, tab stops can specify more complex operations with substitutions. Use substitutions to dynamically generate text based on a mirrored tab stop. Of course, the tab stop you want to use as variable has to be mirrored somewhere else in the snippet.</p><p>The substitution syntax has the following syntaxes:</p><ul><li><code>\${var_name/regex/format_string/}</code></li><li><code>\${var_name/regex/format_string/options}</code></li></ul><p><strong>var_name</strong> : The variable name: <code>1</code>, <code>2</code>… or an environment variable such as <code>TM_FILENAME</code> or <code>SELECTION</code>.</p><p><strong>regex</strong> : Perl-style regular expression: See the <a href="https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html" target="_blank" rel="noreferrer">Boost library documentation for regular expressions</a>.</p><p><strong>format_string</strong> : See the <a href="https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/boost_format_syntax.html" target="_blank" rel="noreferrer">Boost library documentation for format strings</a>.</p><p><strong>options</strong> : Optional. May be any of the following:</p><p><strong>i</strong> : Case-insensitive regex.</p><p><strong>g</strong> : Replace all occurrences of <code>regex</code>.</p><p><strong>m</strong> : Don&#39;t ignore newlines in the string.</p><p>With substitutions you can, for instance, underline text effortlessly:</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Original: \${1:Hey, Joe!}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: \${1/./=/g}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Original: Hey, Joe!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: =========</span></span></code></pre></div><p>Another more complex example can translate snail_case to Tile Case With Spaces. Basically, it combines two separate expressions and replaces into one. It also illustrates that replaces may occur before the actual tabstop.</p><pre class="language-perl line-numbers"><code>
Transformation: \${1/^(\\w)|(?:_(\\w))/(?1\\u$1:)(?2 \\u$2:)/g}
      Original: \${1:text_in_snail_case}

# Output:

Transformation: Text In Snail Case
      Original: text_in_snail_case
</code>
</pre><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: \${1/^(\\w)|(?:_(\\w))/(?1\\u$1:)(?2 \\u$2:)/g}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Original: \${1:text_in_snail_case}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: Text In Snail Case</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Original: text_in_snail_case</span></span></code></pre></div><p>You can also use environment variables with substitutions:</p><div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In file MyModule.js:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: \${TM_FILENAME/(\\w+)\\.js/\\1/g}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Output:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Transformation: MyModule</span></span></code></pre></div>`,29);function b(_,f,T,v,w,A){const t=l("Key");return p(),o("div",null,[h,s("p",null,[d,e(" : Defines the sequence of keys that must be pressed to insert this snippet. After typing this sequence, the snippet will kick in as soon as you hit the "),i(t,{k:"tab"}),e(" key.")]),c,s("p",null,[e("With the help of field markers, you can cycle through positions within the snippet by pressing the "),i(t,{k:"tab"}),e(" key. Fields are used to walk you through the customization of a snippet after it's been inserted.")]),k,s("p",null,[e("In the example above, the cursor will jump to "),E,e(" if you press "),i(t,{k:"tab"}),e(" once. If you press "),i(t,{k:"tab"}),e(" a second time, it will advance to "),g,e(", etc. You can also move backwards in the series with "),i(t,{k:"shift+tab"}),e(". If you press")]),i(t,{k:"tab"}),e(" after the highest tab stop, Sublime Text will place the cursor at the"),u,y,s("p",null,[e("You can break out of the field cycle any time by pressing "),i(t,{k:"escape"}),e(".")]),m])}const $=n(r,[["render",b]]);export{S as __pageData,$ as default};
