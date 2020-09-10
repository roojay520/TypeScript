(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{505:function(t,s,r){"use strict";r.r(s);var e=r(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"结合asp-net-v5使用typescript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结合asp-net-v5使用typescript"}},[t._v("#")]),t._v(" 结合ASP.NET v5使用TypeScript")]),t._v(" "),r("p",[t._v("与ASP.NET v5一起使用TypeScript需要你用特定的方式来设置你的工程。 更多关于ASP.NET v5的详细信息请查看"),r("a",{attrs:{href:"http://docs.asp.net/en/latest/conceptual-overview/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASP.NET v5 文档"),r("OutboundLink")],1),t._v(" 在Visual Studio的工程里支持当前的tsconfig.json还在开发之中，可以在这里查看进度"),r("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/3983",target:"_blank",rel:"noopener noreferrer"}},[t._v("#3983"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"工程设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工程设置"}},[t._v("#")]),t._v(" 工程设置")]),t._v(" "),r("p",[t._v("我们就以在Visual Studio 2015里创建一个空的ASP.NET v5工程开始，如果你对ASP.NET v5还不熟悉，可以查看"),r("a",{attrs:{href:"http://docs.asp.net/en/latest/tutorials/your-first-aspnet-application.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个教程"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/new-project.png",alt:"新创建一个空的工程"}})]),t._v(" "),r("p",[t._v("然后在工程根目录下添加一个"),r("code",[t._v("scripts")]),t._v("目录。 这就是我们将要添加TypeScript文件和"),r("RouterLink",{attrs:{to:"/tsconfig.json/tsconfig.json.html"}},[r("code",[t._v("tsconfig.json")])]),t._v("文件来设置编译选项的地方。 请注意目录名和路径都必须这样才能正常工作。 添加"),r("code",[t._v("tsconfig.json")]),t._v("文件，右键点击"),r("code",[t._v("scripts")]),t._v("目录，选择"),r("code",[t._v("Add")]),t._v("，"),r("code",[t._v("New Item")]),t._v("。 在"),r("code",[t._v("Client-side")]),t._v("下，你能够找到它，如下所示。")],1),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/add-tsconfig.png",alt:"在 Visual Studio 里添加'tsconfig.json'文件"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/project.png",alt:"A project in Visual Studio's Solution Explorer"}})]),t._v(" "),r("p",[t._v("最后我们还要将下面的选项添加到"),r("code",[t._v("tsconfig.json")]),t._v("文件的"),r("code",[t._v('"compilerOptions"')]),t._v("节点里，让编译器输出重定向到"),r("code",[t._v("wwwroot")]),t._v("文件夹：")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outDir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../wwwroot/"')]),t._v("\n")])])]),r("p",[t._v("下面是配置好"),r("code",[t._v("tsconfig.json")]),t._v("后可能的样子")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compilerOptions"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noImplicitAny"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noEmitOnError"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"removeComments"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceMap"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outDir"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../wwwroot"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("现在如果我们构建这个工程，你就会注意到"),r("code",[t._v("app.js")]),t._v("和"),r("code",[t._v("app.js.map")]),t._v("文件被创建在"),r("code",[t._v("wwwroot")]),t._v("目录里。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/postbuild.png",alt:"构建后的文件"}})]),t._v(" "),r("h3",{attrs:{id:"工程与虚拟工程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工程与虚拟工程"}},[t._v("#")]),t._v(" 工程与虚拟工程")]),t._v(" "),r("p",[t._v("当添加了一个"),r("code",[t._v("tsconfig.json")]),t._v("文件，你要明白很重要的一点是我们创建了一个虚拟TypeScript工程，在包含"),r("code",[t._v("tsconfig.json")]),t._v("文件的目录下。 被当作这个虚拟工程一部分的TypeScript文件是不会在保存的时候编译的。 在包含"),r("code",[t._v("tsconfig.json")]),t._v("文件的目录_外层_里存在的TypeScript文件_不会_被当作虚拟工程的一部分。 下图中，可以见到这个虚拟工程，在红色矩形里。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/virtual-project.png",alt:"A virtual project in Visual Studio's Solution Explorer"}})]),t._v(" "),r("h3",{attrs:{id:"保存时编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#保存时编译"}},[t._v("#")]),t._v(" 保存时编译")]),t._v(" "),r("p",[t._v("想要启用ASP.NET v5项目的_保存时编译_功能，你必须为不是虚拟TypeScript工程一部分的TypeScript文件启用_保存时编译_功能。 如果工程里存在"),r("code",[t._v("tsconfig.json")]),t._v("文件，那么模块类型选项的设置会被忽略。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/Microsoft/TypeScript/aspnet-screenshots/compile-on-save.png",alt:"Compile on Save"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);