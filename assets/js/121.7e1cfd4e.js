(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{486:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[s._v("#")]),s._v(" tsconfig.json")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("如果一个目录下存在一个"),a("code",[s._v("tsconfig.json")]),s._v("文件，那么它意味着这个目录是TypeScript项目的根目录。 "),a("code",[s._v("tsconfig.json")]),s._v("文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：")]),s._v(" "),a("h2",{attrs:{id:"使用tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用tsconfig-json"}},[s._v("#")]),s._v(" 使用tsconfig.json")]),s._v(" "),a("ul",[a("li",[s._v("不带任何输入文件的情况下调用"),a("code",[s._v("tsc")]),s._v("，编译器会从当前目录开始去查找"),a("code",[s._v("tsconfig.json")]),s._v("文件，逐级向上搜索父目录。")]),s._v(" "),a("li",[s._v("不带任何输入文件的情况下调用"),a("code",[s._v("tsc")]),s._v("，且使用命令行参数"),a("code",[s._v("--project")]),s._v("（或"),a("code",[s._v("-p")]),s._v("）指定一个包含"),a("code",[s._v("tsconfig.json")]),s._v("文件的目录。")])]),s._v(" "),a("p",[s._v("当命令行上指定了输入文件时，"),a("code",[s._v("tsconfig.json")]),s._v("文件会被忽略。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[a("code",[s._v("tsconfig.json")]),s._v("示例文件:")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v('"files"')]),s._v("属性")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preserveConstEnums"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sys.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scanner.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parser.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilities.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binder.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checker.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emitter.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"program.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commandLineParser.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"diagnosticInformationMap.generated.ts"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("使用"),a("code",[s._v('"include"')]),s._v("和"),a("code",[s._v('"exclude"')]),s._v("属性")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preserveConstEnums"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../built/local/tsc.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.spec.ts"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[s._v("#")]),s._v(" 细节")]),s._v(" "),a("p",[a("code",[s._v('"compilerOptions"')]),s._v("可以被忽略，这时编译器会使用默认值。在这里查看完整的"),a("RouterLink",{attrs:{to:"/tsconfig.json/compiler-options.html"}},[s._v("编译器选项")]),s._v("列表。")],1),s._v(" "),a("p",[a("code",[s._v('"files"')]),s._v("指定一个包含相对或绝对文件路径的列表。 "),a("code",[s._v('"include"')]),s._v("和"),a("code",[s._v('"exclude"')]),s._v("属性指定一个文件glob匹配模式列表。 支持的glob通配符有：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("*")]),s._v(" 匹配0或多个字符（不包括目录分隔符）")]),s._v(" "),a("li",[a("code",[s._v("?")]),s._v(" 匹配一个任意字符（不包括目录分隔符）")]),s._v(" "),a("li",[a("code",[s._v("**/")]),s._v(" 递归匹配任意子目录")])]),s._v(" "),a("p",[s._v("如果一个glob模式里的某部分只包含"),a("code",[s._v("*")]),s._v("或"),a("code",[s._v(".*")]),s._v("，那么仅有支持的文件扩展名类型被包含在内（比如默认"),a("code",[s._v(".ts")]),s._v("，"),a("code",[s._v(".tsx")]),s._v("，和"),a("code",[s._v(".d.ts")]),s._v("， 如果"),a("code",[s._v("allowJs")]),s._v("设置能"),a("code",[s._v("true")]),s._v("还包含"),a("code",[s._v(".js")]),s._v("和"),a("code",[s._v(".jsx")]),s._v("）。")]),s._v(" "),a("p",[s._v("如果"),a("code",[s._v('"files"')]),s._v("和"),a("code",[s._v('"include"')]),s._v("都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（"),a("code",[s._v(".ts")]),s._v(", "),a("code",[s._v(".d.ts")]),s._v(" 和 "),a("code",[s._v(".tsx")]),s._v("），排除在"),a("code",[s._v('"exclude"')]),s._v("里指定的文件。JS文件（"),a("code",[s._v(".js")]),s._v("和"),a("code",[s._v(".jsx")]),s._v("）也被包含进来如果"),a("code",[s._v("allowJs")]),s._v("被设置成"),a("code",[s._v("true")]),s._v("。 如果指定了"),a("code",[s._v('"files"')]),s._v("或"),a("code",[s._v('"include"')]),s._v("，编译器会将它们结合一并包含进来。 使用"),a("code",[s._v('"outDir"')]),s._v("指定的目录下的文件永远会被编译器排除，除非你明确地使用"),a("code",[s._v('"files"')]),s._v("将其包含进来（这时就算用"),a("code",[s._v("exclude")]),s._v("指定也没用）。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v('"include"')]),s._v("引入的文件可以使用"),a("code",[s._v('"exclude"')]),s._v("属性过滤。 然而，通过"),a("code",[s._v('"files"')]),s._v("属性明确指定的文件却总是会被包含在内，不管"),a("code",[s._v('"exclude"')]),s._v("如何设置。 如果没有特殊指定，"),a("code",[s._v('"exclude"')]),s._v("默认情况下会排除"),a("code",[s._v("node_modules")]),s._v("，"),a("code",[s._v("bower_components")]),s._v("，"),a("code",[s._v("jspm_packages")]),s._v("和"),a("code",[s._v("<outDir>")]),s._v("目录。")]),s._v(" "),a("p",[s._v("任何被"),a("code",[s._v('"files"')]),s._v("或"),a("code",[s._v('"include"')]),s._v("指定的文件所引用的文件也会被包含进来。 "),a("code",[s._v("A.ts")]),s._v("引用了"),a("code",[s._v("B.ts")]),s._v("，因此"),a("code",[s._v("B.ts")]),s._v("不能被排除，除非引用它的"),a("code",[s._v("A.ts")]),s._v("在"),a("code",[s._v('"exclude"')]),s._v("列表中。")]),s._v(" "),a("p",[s._v("需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了"),a("code",[s._v("index.ts")]),s._v("，那么"),a("code",[s._v("index.d.ts")]),s._v("和"),a("code",[s._v("index.js")]),s._v("会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。")]),s._v(" "),a("p",[a("code",[s._v("tsconfig.json")]),s._v("文件可以是个空文件，那么所有默认的文件（如上面所述）都会以默认配置选项编译。")]),s._v(" "),a("p",[s._v("在命令行上指定的编译选项会覆盖在"),a("code",[s._v("tsconfig.json")]),s._v("文件里的相应选项。")]),s._v(" "),a("h2",{attrs:{id:"types-typeroots和types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-typeroots和types"}},[s._v("#")]),s._v(" "),a("code",[s._v("@types")]),s._v("，"),a("code",[s._v("typeRoots")]),s._v("和"),a("code",[s._v("types")])]),s._v(" "),a("p",[s._v('默认所有_可见的_"'),a("code",[s._v("@types")]),s._v('"包会在编译过程中被包含进来。 '),a("code",[s._v("node_modules/@types")]),s._v("文件夹下以及它们子文件夹下的所有包都是_可见的_； 也就是说，"),a("code",[s._v("./node_modules/@types/")]),s._v("，"),a("code",[s._v("../node_modules/@types/")]),s._v("和"),a("code",[s._v("../../node_modules/@types/")]),s._v("等等。")]),s._v(" "),a("p",[s._v("如果指定了"),a("code",[s._v("typeRoots")]),s._v("，"),a("em",[s._v("只有")]),a("code",[s._v("typeRoots")]),s._v("下面的包才会被包含进来。 比如：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typeRoots"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./typings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这个配置文件会包含_所有_"),a("code",[s._v("./typings")]),s._v("下面的包，而不包含"),a("code",[s._v("./node_modules/@types")]),s._v("里面的包。")]),s._v(" "),a("p",[s._v("如果指定了"),a("code",[s._v("types")]),s._v("，只有被列出来的包才会被包含进来。 比如：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这个"),a("code",[s._v("tsconfig.json")]),s._v("文件将_仅会_包含 "),a("code",[s._v("./node_modules/@types/node")]),s._v("，"),a("code",[s._v("./node_modules/@types/lodash")]),s._v("和"),a("code",[s._v("./node_modules/@types/express")]),s._v("。/@types/。 "),a("code",[s._v("node_modules/@types/*")]),s._v("里面的其它包不会被引入进来。")]),s._v(" "),a("p",[s._v("指定"),a("code",[s._v('"types": []')]),s._v("来禁用自动引入"),a("code",[s._v("@types")]),s._v("包。")]),s._v(" "),a("p",[s._v("注意，自动引入只在你使用了全局的声明（相反于模块）时是重要的。 如果你使用"),a("code",[s._v('import "foo"')]),s._v("语句，TypeScript仍然会查找"),a("code",[s._v("node_modules")]),s._v("和"),a("code",[s._v("node_modules/@types")]),s._v("文件夹来获取"),a("code",[s._v("foo")]),s._v("包。")]),s._v(" "),a("h2",{attrs:{id:"使用extends继承配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用extends继承配置"}},[s._v("#")]),s._v(" 使用"),a("code",[s._v("extends")]),s._v("继承配置")]),s._v(" "),a("p",[a("code",[s._v("tsconfig.json")]),s._v("文件可以利用"),a("code",[s._v("extends")]),s._v("属性从另一个配置文件里继承配置。")]),s._v(" "),a("p",[a("code",[s._v("extends")]),s._v("是"),a("code",[s._v("tsconfig.json")]),s._v("文件里的顶级属性（与"),a("code",[s._v("compilerOptions")]),s._v("，"),a("code",[s._v("files")]),s._v("，"),a("code",[s._v("include")]),s._v("，和"),a("code",[s._v("exclude")]),s._v("一样）。 "),a("code",[s._v("extends")]),s._v("的值是一个字符串，包含指向另一个要继承文件的路径。")]),s._v(" "),a("p",[s._v("在原文件里的配置先被加载，然后被来自继承文件里的配置重写。 如果发现循环引用，则会报错。")]),s._v(" "),a("p",[s._v("来自所继承配置文件的"),a("code",[s._v("files")]),s._v("，"),a("code",[s._v("include")]),s._v("和"),a("code",[s._v("exclude")]),s._v("_覆盖_源配置文件的属性。")]),s._v(" "),a("p",[s._v("配置文件里的相对路径在解析时相对于它所在的文件。")]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),a("p",[a("code",[s._v("configs/base.json")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("tsconfig.json")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./configs/base"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"supplemental.ts"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("tsconfig.nostrictnull.json")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./tsconfig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"compileonsave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compileonsave"}},[s._v("#")]),s._v(" "),a("code",[s._v("compileOnSave")])]),s._v(" "),a("p",[s._v("在最顶层设置"),a("code",[s._v("compileOnSave")]),s._v("标记，可以让IDE在保存文件的时候根据"),a("code",[s._v("tsconfig.json")]),s._v("重新生成文件。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compileOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装"),a("a",{attrs:{href:"https://github.com/TypeStrong/atom-typescript#compile-on-save",target:"_blank",rel:"noopener noreferrer"}},[s._v("atom-typescript"),a("OutboundLink")],1),s._v("插件。")]),s._v(" "),a("h2",{attrs:{id:"模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[s._v("#")]),s._v(" 模式")]),s._v(" "),a("p",[s._v("到这里查看模式: "),a("a",{attrs:{href:"http://json.schemastore.org/tsconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://json.schemastore.org/tsconfig"),a("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);