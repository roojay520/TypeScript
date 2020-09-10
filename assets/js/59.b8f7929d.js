(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{424:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"命名空间和模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间和模块"}},[s._v("#")]),s._v(" 命名空间和模块")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("关于术语的一点说明:")]),s._v(" 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”，这是为了与"),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMAScript 2015"),a("OutboundLink")],1),s._v("里的术语保持一致，(也就是说 "),a("code",[s._v("module X {")]),s._v(" 相当于现在推荐的写法 "),a("code",[s._v("namespace X {")]),s._v(")。")])]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("这篇文章将概括介绍在TypeScript里使用模块与命名空间来组织代码的方法。 我们也会谈及命名空间和模块的高级使用场景，和在使用它们的过程中常见的陷阱。")]),s._v(" "),a("p",[s._v("查看"),a("RouterLink",{attrs:{to:"/handbook/modules.html"}},[s._v("模块")]),s._v("章节了解关于模块的更多信息。 查看"),a("RouterLink",{attrs:{to:"/handbook/namespaces.html"}},[s._v("命名空间")]),s._v("章节了解关于命名空间的更多信息。")],1),s._v(" "),a("h2",{attrs:{id:"使用命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用命名空间"}},[s._v("#")]),s._v(" 使用命名空间")]),s._v(" "),a("p",[s._v("命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象。 这令命名空间十分容易使用。 它们可以在多文件中同时使用，并通过"),a("code",[s._v("--outFile")]),s._v("结合在一起。 命名空间是帮你组织Web应用不错的方式，你可以把所有依赖都放在HTML页面的"),a("code",[s._v("<script>")]),s._v("标签里。")]),s._v(" "),a("p",[s._v("但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中。")]),s._v(" "),a("h2",{attrs:{id:"使用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用模块"}},[s._v("#")]),s._v(" 使用模块")]),s._v(" "),a("p",[s._v("像命名空间一样，模块可以包含代码和声明。 不同的是模块可以_声明_它的依赖。")]),s._v(" "),a("p",[s._v("模块会把依赖添加到模块加载器上（例如CommonJs / Require.js）。 对于小型的JS应用来说可能没必要，但是对于大型应用，这一点点的花费会带来长久的模块化和可维护性上的便利。 模块也提供了更好的代码重用，更强的封闭性以及更好的使用工具进行优化。")]),s._v(" "),a("p",[s._v("对于Node.js应用来说，模块是默认并推荐的组织代码的方式。")]),s._v(" "),a("p",[s._v("从ECMAScript 2015开始，模块成为了语言内置的部分，应该会被所有正常的解释引擎所支持。 因此，对于新项目来说推荐使用模块做为组织代码的方式。")]),s._v(" "),a("h2",{attrs:{id:"命名空间和模块的陷阱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间和模块的陷阱"}},[s._v("#")]),s._v(" 命名空间和模块的陷阱")]),s._v(" "),a("p",[s._v("这部分我们会描述常见的命名空间和模块的使用陷阱和如何去避免它们。")]),s._v(" "),a("h3",{attrs:{id:"对模块使用-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对模块使用-reference"}},[s._v("#")]),s._v(" 对模块使用"),a("code",[s._v("/// <reference>")])]),s._v(" "),a("p",[s._v("一个常见的错误是使用"),a("code",[s._v("/// <reference>")]),s._v("引用模块文件，应该使用"),a("code",[s._v("import")]),s._v("。 要理解这之间的区别，我们首先应该弄清编译器是如何根据"),a("code",[s._v("import")]),s._v("路径（例如，"),a("code",[s._v('import x from "...";')]),s._v("或"),a("code",[s._v('import x = require("...")')]),s._v("里面的"),a("code",[s._v("...")]),s._v("，等等）来定位模块的类型信息的。")]),s._v(" "),a("p",[s._v("编译器首先尝试去查找相应路径下的"),a("code",[s._v(".ts")]),s._v("，"),a("code",[s._v(".tsx")]),s._v("再或者"),a("code",[s._v(".d.ts")]),s._v("。 如果这些文件都找不到，编译器会查找_外部模块声明_。 回想一下，它们是在"),a("code",[s._v(".d.ts")]),s._v("文件里声明的。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("myModules.d.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// In a .d.ts file or .ts file that is not a module:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SomeModule"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("myOtherModule.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="myModules.d.ts" />')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SomeModule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这里的引用标签指定了外来模块的位置。 这就是一些TypeScript例子中引用"),a("code",[s._v("node.d.ts")]),s._v("的方法。")]),s._v(" "),a("h3",{attrs:{id:"不必要的命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不必要的命名空间"}},[s._v("#")]),s._v(" 不必要的命名空间")]),s._v(" "),a("p",[s._v("如果你想把命名空间转换为模块，它可能会像下面这个文件：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("shapes.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Shapes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Triangle")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Square")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("顶层的模块"),a("code",[s._v("Shapes")]),s._v("包裹了"),a("code",[s._v("Triangle")]),s._v("和"),a("code",[s._v("Square")]),s._v("。 对于使用它的人来说这是令人迷惑和讨厌的：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("shapeConsumer.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" shapes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./shapes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("shapes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Shapes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Triangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// shapes.Shapes?")]),s._v("\n")])])]),a("p",[s._v("TypeScript里模块的一个特点是不同的模块永远也不会在相同的作用域内使用相同的名字。 因为使用模块的人会为它们命名，所以完全没有必要把导出的符号包裹在一个命名空间里。")]),s._v(" "),a("p",[s._v("再次重申，不应该对模块使用命名空间，使用命名空间是为了提供逻辑分组和避免命名冲突。 模块文件本身已经是一个逻辑分组，并且它的名字是由导入这个模块的代码指定，所以没有必要为导出的对象增加额外的模块层。")]),s._v(" "),a("p",[s._v("下面是改进的例子：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("shapes.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Triangle")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Square")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("shapeConsumer.ts")])])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" shapes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./shapes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("shapes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Triangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"模块的取舍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的取舍"}},[s._v("#")]),s._v(" 模块的取舍")]),s._v(" "),a("p",[s._v("就像每个JS文件对应一个模块一样，TypeScript里模块文件与生成的JS文件也是一一对应的。 这会产生一种影响，根据你指定的目标模块系统的不同，你可能无法连接多个模块源文件。 例如当目标模块系统为"),a("code",[s._v("commonjs")]),s._v("或"),a("code",[s._v("umd")]),s._v("时，无法使用"),a("code",[s._v("outFile")]),s._v("选项，但是在TypeScript 1.8以上的版本"),a("RouterLink",{attrs:{to:"/doc/handbook/release notes/TypeScript 1.8.html#concatenate-amd-and-system-modules-with---outfile"}},[s._v("能够")]),s._v("使用"),a("code",[s._v("outFile")]),s._v("当目标为"),a("code",[s._v("amd")]),s._v("或"),a("code",[s._v("system")]),s._v("。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);