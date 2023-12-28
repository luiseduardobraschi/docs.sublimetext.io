import{_ as e,o as t,c as i,R as s}from"./chunks/framework.e02z-eDF.js";const y=JSON.parse('{"title":"Key Bindings","description":"","frontmatter":{"title":"Key Bindings"},"headers":[],"relativePath":"reference/key_bindings.md","filePath":"reference/key_bindings.md","lastUpdated":1703773698000}'),a={name:"reference/key_bindings.md"},o=s(`<h1 id="key-bindings" tabindex="-1">Key Bindings <a class="header-anchor" href="#key-bindings" aria-label="Permalink to &quot;Key Bindings&quot;">​</a></h1><p>Key bindings map key presses to commands.</p><div class="info custom-block"><p class="custom-block-title">See Also</p><p><a href="https://www.sublimetext.com/docs/key_bindings.html" target="_blank" rel="noreferrer">Official documentation for Key Bindings</a></p></div><h2 id="file-format" tabindex="-1">File Format <a class="header-anchor" href="#file-format" aria-label="Permalink to &quot;File Format&quot;">​</a></h2><p>Key bindings are stored in <code>.sublime-keymap</code> files and defined in JSON. Keymap files may be located anywhere in a package.</p><h3 id="naming-keymap-files" tabindex="-1">Naming Keymap Files <a class="header-anchor" href="#naming-keymap-files" aria-label="Permalink to &quot;Naming Keymap Files&quot;">​</a></h3><p>Any keymap named <code>Default.sublime-keymap</code> will always be applied in all platforms.</p><p>Additionally, each platform can optionally have its own keymap:</p><ul><li><code>Default (Windows).sublime-keymap</code></li><li><code>Default (OSX).sublime-keymap</code></li><li><code>Default (Linux).sublime-keymap</code></li></ul><p>Sublime Text will ignore any <code>.sublime-keymap</code> file whose name doesn&#39;t follow the patterns just described.</p><h3 id="structure-of-a-key-binding" tabindex="-1">Structure of a Key Binding <a class="header-anchor" href="#structure-of-a-key-binding" aria-label="Permalink to &quot;Structure of a Key Binding&quot;">​</a></h3><p>Keymaps are arrays of key bindings. These are all valid elements in a key binding:</p><p><code>keys</code> : An array of case-sensitive keys. Modifiers can be specified with the <code>+</code> sign. You can build chords by adding elements to the array (for example, <code>[&quot;ctrl+k&quot;,&quot;ctrl+j&quot;]</code>). Ambiguous chords are resolved with a timeout.</p><p><code>command</code> : Name of the command to be executed.</p><p><code>args</code> : Dictionary of arguments to be passed to <code>command</code>. Keys must be names of parameters to <code>command</code>.</p><p><code>context</code> : Array of conditions that determine a particular <em>context</em>. All conditions must evaluate to <code>true</code> for the context to be active. See <a href="#structure-of-a-context">Structure of a Context</a> below for more information.</p><p>Here&#39;s an example:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;keys&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shift+enter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;insert_snippet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;contents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setting.auto_indent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;equal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;selection_empty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;equal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;match_all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preceding_text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;regex_contains&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;match_all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;following_text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;regex_contains&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;match_all&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="structure-of-a-context" tabindex="-1">Structure of a Context <a class="header-anchor" href="#structure-of-a-context" aria-label="Permalink to &quot;Structure of a Context&quot;">​</a></h3><p><code>key</code> : Name of the context whose value you want to query.</p><p><code>operator</code> : Type of test to perform against <code>key</code>&#39;s value. Defaults to <code>equal</code>.</p><p><code>operand</code> : The result returned by <code>key</code> is tested against this value.</p><p><code>match_all</code> : Requires the test to succeed for all selections. Defaults to <code>false</code>.</p><h4 id="context-keys" tabindex="-1">Context Keys <a class="header-anchor" href="#context-keys" aria-label="Permalink to &quot;Context Keys&quot;">​</a></h4><p>Arbitrary keys may be provided by plugins. Thus, this section only features keys provided by Sublime Text itself.</p><p><code>auto_complete_visible</code> : Returns <code>true</code> if the autocomplete list is visible.</p><p><code>has_next_field</code> : Returns <code>true</code> if a next snippet field is available.</p><p><code>has_prev_field</code> : Returns <code>true</code> if a previous snippet field is available.</p><p><code>last_command</code> : Returns the name of the last command run.</p><p><code>num_selections</code> : Returns the number of selections.</p><p><code>overlay_visible</code> : Returns <code>true</code> if any overlay is visible.</p><p><code>panel_visible</code> : Returns <code>true</code> if any panel is visible.</p><p><code>following_text</code> : Test against the selected text and the text following it until the end of the line.</p><p><code>preceding_text</code> : Test against the text on the line up to and including the selection.</p><p><code>selection_empty</code> : Returns <code>true</code> if the selection is an empty region.</p><p><code>setting.x</code> : Returns the value of the <code>x</code> setting. <code>x</code> can be any string.</p><p><code>text</code> : Restricts the test to the selected text.</p><p><code>selector</code> : Returns the name of the current scope.</p><p><code>panel_has_focus</code> : Returns <code>true</code> if a panel has input focus.</p><p><code>panel</code> : Returns <code>true</code> if the panel given as <code>operand</code> is visible.</p><h4 id="context-operators" tabindex="-1">Context Operators <a class="header-anchor" href="#context-operators" aria-label="Permalink to &quot;Context Operators&quot;">​</a></h4><p><code>equal</code>, <code>not_equal</code> : Test for equality.</p><p><code>regex_match</code>, <code>not_regex_match</code> : Match against a regular expression (full match).</p><p><code>regex_contains</code>, <code>not_regex_contains</code> : Match against a regular expression (partial match).</p><h2 id="bindable-keys" tabindex="-1">Bindable Keys <a class="header-anchor" href="#bindable-keys" aria-label="Permalink to &quot;Bindable Keys&quot;">​</a></h2><p>Keys in key bindings may be specified literally by symbol or by a name for a special key. Symbols cannot be combined with modifiers. For example, <code>B</code> will catch any key sequence inserting a <code>B</code> glyph, but <code>ctrl+B</code> is invalid and needs to be written as <code>ctrl+shift+b</code> instead.</p><p>Here&#39;s the list of the names for special keys:</p><table><thead><tr><th>Keys</th><th></th><th></th></tr></thead><tbody><tr><td><code>up</code></td><td><code>keypad0</code></td><td><code>f1</code></td></tr><tr><td><code>down</code></td><td><code>keypad1</code></td><td><code>f2</code></td></tr><tr><td><code>right</code></td><td><code>keypad2</code></td><td><code>f3</code></td></tr><tr><td><code>left</code></td><td><code>keypad3</code></td><td><code>f4</code></td></tr><tr><td><code>insert</code></td><td><code>keypad4</code></td><td><code>f5</code></td></tr><tr><td><code>home</code></td><td><code>keypad5</code></td><td><code>f6</code></td></tr><tr><td><code>end</code></td><td><code>keypad6</code></td><td><code>f7</code></td></tr><tr><td><code>pageup</code></td><td><code>keypad7</code></td><td><code>f8</code></td></tr><tr><td><code>pagedown</code></td><td><code>keypad8</code></td><td><code>f9</code></td></tr><tr><td><code>backspace</code></td><td><code>keypad9</code></td><td><code>f10</code></td></tr><tr><td><code>delete</code></td><td><code>keypad_period</code></td><td><code>f11</code></td></tr><tr><td><code>tab</code></td><td><code>keypad_divide</code></td><td><code>f12</code></td></tr><tr><td><code>enter</code></td><td><code>keypad_multiply</code></td><td><code>f13</code></td></tr><tr><td><code>pause</code></td><td><code>keypad_minus</code></td><td><code>f14</code></td></tr><tr><td><code>escape</code></td><td><code>keypad_plus</code></td><td><code>f15</code></td></tr><tr><td><code>space</code></td><td><code>keypad_enter</code></td><td><code>f16</code></td></tr><tr><td><code>clear</code></td><td></td><td><code>f17</code></td></tr><tr><td><code>sysreq</code></td><td><code>browser_back</code></td><td><code>f18</code></td></tr><tr><td><code>break</code></td><td><code>browser_forward</code></td><td><code>f19</code></td></tr><tr><td><code>context_menu</code></td><td><code>browser_refresh</code></td><td><code>f20</code></td></tr><tr><td></td><td><code>browser_stop</code></td><td><code>f21</code></td></tr><tr><td></td><td><code>browser_search</code></td><td><code>f22</code></td></tr><tr><td></td><td><code>browser_favorites</code></td><td><code>f23</code></td></tr><tr><td></td><td><code>browser_home</code></td><td><code>f24</code></td></tr></tbody></table><h3 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h3><ul><li><code>shift</code></li><li><code>ctrl</code> or <code>control</code></li><li><code>alt</code></li><li><code>super</code> (<strong>Windows</strong>: Windows key, <strong>MacOS</strong>: Command Key)</li><li><code>primary</code> (<strong>Windows</strong>: Control key, <strong>MacOS</strong>: Command Key)</li><li><code>command</code> (<strong>MacOS only</strong>)</li><li><code>option</code> (<strong>MacOS only</strong>: same as <code>alt</code>)</li></ul><h3 id="the-any-character-binding" tabindex="-1">The Any Character Binding <a class="header-anchor" href="#the-any-character-binding" aria-label="Permalink to &quot;The Any Character Binding&quot;">​</a></h3><p>Adding a binding for <code>&lt;character&gt;</code> (with the angled brackets and no modifiers) causes Sublime Text to bind the given command for <strong>all</strong> glyphs provided to it. You should thus only use this binding with an accompanying context filter.</p><p>The specified command will then receive an additional <code>character</code> argument containing the glyph that was captured.</p><h3 id="warning-about-bindable-keys" tabindex="-1">Warning about Bindable Keys <a class="header-anchor" href="#warning-about-bindable-keys" aria-label="Permalink to &quot;Warning about Bindable Keys&quot;">​</a></h3><p>If you&#39;re developing a package, keep this in mind:</p><ul><li><kbd>Ctrl+Alt+&lt;alphanum&gt;</kbd> should never be used in any Windows key bindings.</li><li><kbd>Option+&lt;alphanum&gt;</kbd> should never be used in any macOS key bindings.</li></ul><p>In both cases, the user&#39;s ability to insert non-ASCII characters would be compromised otherwise.</p><p>End-users are free to remap any key combination.</p><h2 id="command-mode" tabindex="-1">Command Mode <a class="header-anchor" href="#command-mode" aria-label="Permalink to &quot;Command Mode&quot;">​</a></h2><p>Sublime Text provides a <code>command_mode</code> setting to prevent key presses from being sent to the buffer. This is useful, for example, to emulate Vim&#39;s modal behavior.</p><p>Key bindings not intended for command mode (generally, all of them) should include a context like this:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setting.command_mode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;operand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>This way, plugins legitimately using command mode will be able to define appropriate key bindings without interference.</p><h2 id="order-of-preference-for-key-bindings" tabindex="-1">Order of Preference for Key Bindings <a class="header-anchor" href="#order-of-preference-for-key-bindings" aria-label="Permalink to &quot;Order of Preference for Key Bindings&quot;">​</a></h2><p>Key bindings in a keymap file are evaluated from the bottom to the top. The first matching context wins.</p><h2 id="keeping-keymaps-organized" tabindex="-1">Keeping Keymaps Organized <a class="header-anchor" href="#keeping-keymaps-organized" aria-label="Permalink to &quot;Keeping Keymaps Organized&quot;">​</a></h2><p>Sublime Text ships with default keymaps under <code>Packages/Default</code>. Other packages may include keymap files of their own.</p><p>The recommended storage location for your personal keymap files is <code>Packages/User</code>.</p><div class="info custom-block"><p class="custom-block-title">See Also</p><p><a href="/guide/extensibility/packages.html#merging-and-order-of-precedence">Merging and Order of Precedence</a></p></div><h2 id="international-keyboards" tabindex="-1">International Keyboards <a class="header-anchor" href="#international-keyboards" aria-label="Permalink to &quot;International Keyboards&quot;">​</a></h2><p>Due to the way Sublime Text maps key names to physical keys, key names may not correspond to physical keys in keyboard layouts other than US English.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>To enable logging related to keymaps, <a href="https://www.sublimetext.com/docs/api_reference.html" target="_blank" rel="noreferrer">see the documentation</a> for:</p><ul><li>sublime.log_commands(flag)</li><li>sublime.log_input(flag)</li></ul><p>These may help with debugging keymaps. When a key chord does not trigger an input log, another application or your operating system is likely grabbing the key before it can reach Sublime Text.</p>`,75),d=[o];function n(r,l,h,c,p,k){return t(),i("div",null,d)}const g=e(a,[["render",n]]);export{y as __pageData,g as default};
