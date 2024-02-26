import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.e0tDGBa7.js";const i="/assets/console.TOV4Dfu5.png",b=JSON.parse('{"title":"Basic Concepts","description":"","frontmatter":{"title":"Basic Concepts"},"headers":[],"relativePath":"guide/getting-started/basic-concepts.md","filePath":"guide/getting-started/basic-concepts.md","lastUpdated":1708975850000}'),r={name:"guide/getting-started/basic-concepts.md"},s=o('<h1 id="basic-concepts" tabindex="-1">Basic Concepts <a class="header-anchor" href="#basic-concepts" aria-label="Permalink to &quot;Basic Concepts&quot;">​</a></h1><p>To fully understand the rest of this guide, you need to be familiar with the concepts presented on this page.</p><h2 id="general-conventions" tabindex="-1">General Conventions <a class="header-anchor" href="#general-conventions" aria-label="Permalink to &quot;General Conventions&quot;">​</a></h2><p>This guide is written from the perspective of a Windows user. Most instructions will only require trivial changes to work on other platforms.</p><p>Unless otherwise noted, relative paths (for example, <code>Packages/User</code>) start at the <a href="#the-data-directory">Data Directory</a>.</p><p>We assume default key bindings when indicating keyboard shortcuts. If you are using a non-US-English keyboard layout, some key bindings may not match your layout. This is due to the way Sublime Text processes key strokes internally.</p><h2 id="mastering-sublime-text-takes-time" tabindex="-1">Mastering Sublime Text Takes Time <a class="header-anchor" href="#mastering-sublime-text-takes-time" aria-label="Permalink to &quot;Mastering Sublime Text Takes Time&quot;">​</a></h2><p>Mastering Sublime Text requires time and practice. Luckily, it&#39;s built around a handful of concepts that make for a consistent system once all the pieces come together.</p><p>This guide will teach you how to use and configure Sublime Text.</p><p>Sublime Text is a versatile editor for programmers, but you don&#39;t need to be one in order to use it, and you don&#39;t need to configure it extensively to be productive – it&#39;s an efficient tool out of the box! Hackers, however, will appreciate all the customization and extensibility opportunities.</p><p>In the following paragraphs, we&#39;ll outline key aspects that you&#39;ll get familiar with after you&#39;ve spent some time using the editor.</p><h2 id="the-data-directory" tabindex="-1">The <code>Data</code> Directory <a class="header-anchor" href="#the-data-directory" aria-label="Permalink to &quot;The `Data` Directory&quot;">​</a></h2><p>Nearly all of the interesting files for users live under the <em>data directory</em>. The data directory is a platform-dependent location:</p><ul><li><strong>Windows</strong>: <code>%APPDATA%\\Sublime Text</code></li><li><strong>macOS</strong>: <code>~/Library/Application Support/Sublime Text</code></li><li><strong>Linux</strong>: <code>~/.config/sublime-text</code></li></ul><p>If you&#39;re using the <strong>portable version</strong> (Windows only), look for <code>Application/Data</code>. Here, <code>Application</code> refers to the directory to which you&#39;ve extracted the compressed portable files and where the executable resides.</p><p>Note that the <code>Data</code> directory only exists with that name in the portable version. In full installations, it is one of the locations indicated above.</p><h2 id="the-packages-directory" tabindex="-1">The <em>Packages</em> Directory <a class="header-anchor" href="#the-packages-directory" aria-label="Permalink to &quot;The *Packages* Directory&quot;">​</a></h2><p>This is a key directory located under the data directory. All resources for supported programming and markup languages are stored here.</p><p>(More on <em>packages</em> and <em>resources</em> <a href="./../extensibility/packages.html">later</a>.)</p><p>You can access the packages directory from the main menu (<strong>Preferences → Browse Packages...</strong>), by means of an API call (<code>sublime.packages_path()</code>), and by other means that will be explained in later topics.</p><p>In this guide, we refer to the packages folder as <em>Packages</em>, <em>packages path</em>, <em>packages folder</em>, or <em>packages directory</em>.</p><h3 id="the-user-package" tabindex="-1">The <em>User</em> Package <a class="header-anchor" href="#the-user-package" aria-label="Permalink to &quot;The *User* Package&quot;">​</a></h3><p><code>Packages/User</code> is a catch-all directory for custom plugins, snippets, macros, etc. Consider it your personal area in the packages folder. Additionally, it will contain most of your personal application or plugin settings.</p><p>Updates to Sublime Text will never overwrite the contents of <code>Packages/User</code>.</p><h2 id="sublime-text-is-programmable" tabindex="-1">Sublime Text is Programmable <a class="header-anchor" href="#sublime-text-is-programmable" aria-label="Permalink to &quot;Sublime Text is Programmable&quot;">​</a></h2><p>This information is useful for programmers. Other users just need to know that Sublime Text enables users with programming skills to add their own features to the editor.</p><p>Sublime Text exposes its internals via an Application Programming Interface (API) that programmers can interact with using the <a href="https://www.python.org/" target="_blank" rel="noreferrer">Python programming language</a>.</p><h3 id="the-console" tabindex="-1">The Console <a class="header-anchor" href="#the-console" aria-label="Permalink to &quot;The Console&quot;">​</a></h3><p>Sublime Text and plugins push debug information to the <em>console</em>. To open the console, press <kbd>Ctrl+`</kbd> or select <strong>View → Show Console</strong> from the main menu.</p><p>Here&#39;s the Python console in Sublime Text:</p><p><img src="'+i+'" alt="Console"></p><p>An embedded Python interpreter is included in the editor. The embedded interpreter is useful to inspect the editor&#39;s settings and to quickly test API calls while developing plugins.</p><h3 id="your-system-s-python-vs-the-sublime-text-embedded-python" tabindex="-1">Your System&#39;s Python vs the Sublime Text Embedded Python <a class="header-anchor" href="#your-system-s-python-vs-the-sublime-text-embedded-python" aria-label="Permalink to &quot;Your System&#39;s Python vs the Sublime Text Embedded Python&quot;">​</a></h3><p>Sublime Text comes with its own embedded Python interpreter that&#39;s separate from your system&#39;s Python interpreter (<em>if available</em>).</p><p>The embedded interpreter is only intended to interact with the plugin API, not for general development.</p><h2 id="packages-plugins-resources-and-other-terms" tabindex="-1">Packages, Plugins, Resources and Other Terms <a class="header-anchor" href="#packages-plugins-resources-and-other-terms" aria-label="Permalink to &quot;Packages, Plugins, Resources and Other Terms&quot;">​</a></h2><p>Almost every aspect of Sublime Text can be extended or customized. You can modify the editor&#39;s behavior, add macros and snippets, extend menus and much more. You can even create whole new features using the editor&#39;s API to build complex plugins.</p><p>Sublime Text&#39;s vast flexibility is the reason why you will learn about so many configuration files: there simply must be a place to specify all available preferences and settings.</p><p>Configuration files in Sublime Text are text files that conform to a predefined structure or <em>format</em>: JSON predominates, but you&#39;ll find XML and YAML files, too. For the more advanced extensibility options, Python source code files are used.</p><p>In this guide, for brevity, we sometimes refer collectively to all these disparate configuration files as <em>resources</em>.</p><p>Sublime Text will look for resources inside the packages folder. We&#39;ll talk at length about <em>packages</em> later, but the short version is that, to keep things tidy, Sublime Text has a notion of a <em>package</em>, that is, a folder (or zip archive) that contains resources that belong together. (Maybe they help compose emails faster, write HTML efficiently, enhance the coding experience for C, Ruby, Go, …).</p><h2 id="textmate-compatibility" tabindex="-1">Textmate Compatibility <a class="header-anchor" href="#textmate-compatibility" aria-label="Permalink to &quot;Textmate Compatibility&quot;">​</a></h2><p><a href="https://macromates.com/" target="_blank" rel="noreferrer">TextMate</a> is an editor for the Mac.</p><p>Since Sublime Text was heavily inspired by TextMate 1, it supports most of the extensions provided in TextMate bundles, notably excluding <code>.tmCommands</code> and <code>.tmSnippets</code> files and any other configuration in <code>.plist</code> files. While most of the older formats are recognized by Sublime Text, e.g. <code>.tmLanguage</code> and <code>.tmTheme</code>, new formats using <code>.sublime-*</code> extensions have been added that provide a superset of the old functionality or are simply replacements for TextMate&#39;s formats.</p><h2 id="vi-vim-emulation" tabindex="-1">vi/Vim Emulation <a class="header-anchor" href="#vi-vim-emulation" aria-label="Permalink to &quot;vi/Vim Emulation&quot;">​</a></h2><p>vi is an ancient modal editor that lets the user perform all operations from the keyboard. Vim, a modern version of vi, is still in widespread use.</p><p>Sublime Text provides vi emulation through the <a href="https://www.sublimetext.com/docs/vintage.html" target="_blank" rel="noreferrer">Vintage</a> package. The Vintage package is <em>ignored</em> by default and needs to be enabled by the user. Learn more about <a href="https://www.sublimetext.com/docs/vintage.html" target="_blank" rel="noreferrer">Vintage</a> in the official documentation.</p><p>Several third-party packages have been developed to implement to supplement or replace the built-in vi emulation. We will cover installation and usage of third-party packages later.</p><h2 id="emacs-emulation" tabindex="-1">emacs Emulation <a class="header-anchor" href="#emacs-emulation" aria-label="Permalink to &quot;emacs Emulation&quot;">​</a></h2><p>emacs is another popular editor for programmers.</p><p>Sublime Text does not offer any built-in emacs emulation, but you can try third-party packages created by other Sublime Text users. As with third-party packages for vi emulation, we will cover installation and usage of these later.</p>',51),n=[s];function l(c,d,h,m,p,u){return a(),t("div",null,n)}const f=e(r,[["render",l]]);export{b as __pageData,f as default};
