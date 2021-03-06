module.exports = {
  base: '/typescript/',
  title: 'TypeScript Handbook（中文版）',
  description: '《TypeScript Handbook》（中文版）TypeScript使用手册',
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: false,
    nav: [
      { text: 'github', link: 'https://github.com/zhongsp/TypeScript'},
      {
        text: '新增功能',
        items: [
          { text: 'TypeScript 4.0', link: '/release-notes/typescript-4.0.md' },
          { text: 'TypeScript 3.9', link: '/release-notes/typescript-3.9.md' },
          { text: 'TypeScript 3.8', link: '/release-notes/typescript-3.8.md' },
          { text: 'TypeScript 3.7', link: '/release-notes/typescript-3.7.md' },
          { text: 'TypeScript 3.6', link: '/release-notes/typescript-3.6.md' },
          { text: 'TypeScript 3.5', link: '/release-notes/typescript-3.5.md' },
          { text: 'TypeScript 3.4', link: '/release-notes/typescript-3.4.md' },
          { text: 'TypeScript 3.3', link: '/release-notes/typescript-3.3.md' },
          { text: 'TypeScript 3.2', link: '/release-notes/typescript-3.2.md' },
          { text: 'TypeScript 3.1', link: '/release-notes/typescript-3.1.md' },
          { text: 'TypeScript 3.0', link: '/release-notes/typescript-3.0.md' },
          { text: 'TypeScript 2.9', link: '/release-notes/typescript-2.9.md' },
          { text: 'TypeScript 2.8', link: '/release-notes/typescript-2.8.md' },
          { text: 'TypeScript 2.7', link: '/release-notes/typescript-2.7.md' },
          { text: 'TypeScript 2.6', link: '/release-notes/typescript-2.6.md' },
          { text: 'TypeScript 2.5', link: '/release-notes/typescript-2.5.md' },
          { text: 'TypeScript 2.4', link: '/release-notes/typescript-2.4.md' },
          { text: 'TypeScript 2.3', link: '/release-notes/typescript-2.3.md' },
          { text: 'TypeScript 2.2', link: '/release-notes/typescript-2.2.md' },
          { text: 'TypeScript 2.1', link: '/release-notes/typescript-2.1.md' },
          { text: 'TypeScript 2.0', link: '/release-notes/typescript-2.0.md' },
          { text: 'TypeScript 1.8', link: '/release-notes/typescript-1.8.md' },
          { text: 'TypeScript 1.7', link: '/release-notes/typescript-1.7.md' },
          { text: 'TypeScript 1.6', link: '/release-notes/typescript-1.6.md' },
          { text: 'TypeScript 1.5', link: '/release-notes/typescript-1.5.md' },
          { text: 'TypeScript 1.4', link: '/release-notes/typescript-1.4.md' },
          { text: 'TypeScript 1.3', link: '/release-notes/typescript-1.3.md' },
          { text: 'TypeScript 1.1', link: '/release-notes/typescript-1.1.md' },
        ]
      },
      {
        text: 'Breaking Changes',
        items: [
          {text: 'TypeScript 3.6', link: '/breaking-changes/typescript-3.6.md'},
          {text: 'TypeScript 3.5', link: '/breaking-changes/typescript-3.5.md'},
          {text: 'TypeScript 3.4', link: '/breaking-changes/typescript-3.4.md'},
          {text: 'TypeScript 3.2', link: '/breaking-changes/typescript-3.2.md'},
          {text: 'TypeScript 3.1', link: '/breaking-changes/typescript-3.1.md'},
          {text: 'TypeScript 3.0', link: '/breaking-changes/typescript-3.0.md'},
          {text: 'TypeScript 2.9', link: '/breaking-changes/typescript-2.9.md'},
          {text: 'TypeScript 2.8', link: '/breaking-changes/typescript-2.8.md'},
          {text: 'TypeScript 2.7', link: '/breaking-changes/typescript-2.7.md'},
          {text: 'TypeScript 2.6', link: '/breaking-changes/typescript-2.6.md'},
          {text: 'TypeScript 2.4', link: '/breaking-changes/typescript-2.4.md'},
          {text: 'TypeScript 2.3', link: '/breaking-changes/typescript-2.3.md'},
          {text: 'TypeScript 2.2', link: '/breaking-changes/typescript-2.2.md'},
          {text: 'TypeScript 2.1', link: '/breaking-changes/typescript-2.1.md'},
          {text: 'TypeScript 2.0', link: '/breaking-changes/typescript-2.0.md'},
          {text: 'TypeScript 1.8', link: '/breaking-changes/typescript-1.8.md'},
          {text: 'TypeScript 1.7', link: '/breaking-changes/typescript-1.7.md'},
          {text: 'TypeScript 1.6', link: '/breaking-changes/typescript-1.6.md'},
          {text: 'TypeScript 1.5', link: '/breaking-changes/typescript-1.5.md'},
          {text: 'TypeScript 1.4', link: '/breaking-changes/typescript-1.4.md'},
        ]
      },
      {
        text: '其它',
        items: [
          { text: 'TypeScript手册（英文版）', link: 'http://www.typescriptlang.org/docs/home.html'},
          { text: 'TypeScript语言规范', link: 'https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md'},
        ]
      }
    ],
    sidebar: [
      '/',
      {
        title: '快速上手',
        path: '/tutorials',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/tutorials/typescript-in-5-minutes.md', '5分钟了解TypeScript'],
          ['/tutorials/asp.net-core.md', 'ASP.NET Core'],
          ['/tutorials/asp.net-4.md', 'ASP.NET 4'],
          ['/tutorials/gulp.md', 'Gulp'],
          ['/tutorials/knockout.md', 'Knockout.js'],
          ['/tutorials/react-and-webpack.md', 'React与webpack'],
          ['/tutorials/react.md', 'React'],
          ['/tutorials/angular-2.md', 'Angular 2'],
          ['/tutorials/migrating-from-javascript.md', '从JavaScript迁移到TypeScript'],
        ]
      },
      {
        title: '手册',
        path: '/handbook',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/handbook/basic-types.md', '基础类型'],
          ['/handbook/variable-declarations.md', '变量声明'],
          ['/handbook/interfaces.md', '接口'],
          ['/handbook/classes.md', '类'],
          ['/handbook/functions.md', '函数'],
          ['/handbook/literal-types.md', '字面量类型'],
          ['/handbook/generics.md', '泛型'],
          ['/handbook/enums.md', '枚举'],
          ['/handbook/type-inference.md', '类型推论'],
          ['/handbook/type-compatibility.md', '类型兼容性'],
          ['/handbook/advanced-types.md', '高级类型'],
          ['/handbook/symbols.md', 'Symbols'],
          ['/handbook/iterators-and-generators.md', 'Iterators 和 Generators'],
          ['/handbook/modules.md', '模块'],
          ['/handbook/namespaces.md', '命名空间'],
          ['/handbook/namespaces-and-modules.md', '命名空间和模块'],
          ['/handbook/module-resolution.md', '模块解析'],
          ['/handbook/declaration-merging.md', '声明合并'],
          ['/handbook/jsx.md', 'JSX'],
          ['/handbook/decorators.md', 'Decorators'],
          ['/handbook/mixins.md', '混入'],
          ['/handbook/triple-slash-directives.md', '三斜线指令'],
          ['/handbook/type-checking-javascript-files.md', 'JavaScript文件里的类型检查'],
          ['/handbook/utility-types.md', '实用工具类型'],
        ]
      },
      {
        title: '声明文件',
        path: '/introduction',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/introduction/library-structures', '库结构'],
          ['/introduction/by-example.md', '举例'],
          ['/introduction/do-s-and-don-ts.md', '最佳实践'],
          ['/introduction/deep-dive.md', '深入'],
          ['/introduction/templates.md','模板'],
          ['/introduction/publishing.md','发布'],
          ['/introduction/consumption.md','使用'],
        ]
      },
      {
        title: '工程配置',
        path: '/tsconfig.json',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/tsconfig.json/tsconfig.json.md', 'tsconfig.json'],
          ['/tsconfig.json/project-references.md', '工程引用'],
          ['/tsconfig.json/typings-for-npm-packages.md', 'NPM包的类型'],
          ['/tsconfig.json/compiler-options.md', '编译选项'],
          ['/tsconfig.json/configuring-watch.md', '配置 Watch'],
          ['/tsconfig.json/compiler-options-in-msbuild.md', '在MSBuild里使用编译选项'],
          ['/tsconfig.json/integrating-with-build-tools.md', '与其它构建工具整合'],
          ['/tsconfig.json/nightly-builds.md', '使用TypeScript的每日构建版本'],
        ]
      },
      {
        title: 'wiki',
        path: '/wiki',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/wiki/this-in-typescript.md', 'TypeScript里的this'],
          ['/wiki/coding_guidelines.md', '编码规范'],
          ['/wiki/common-errors.md', '常见编译错误'],
          ['/wiki/typescript-editor-support.md', '支持TypeScript的编辑器'],
          ['/wiki/using-typescript-with-asp.net-5.md', '结合ASP.NET v5使用TypeScript'],
          ['/wiki/architectural-overview.md', '架构概述'],
          ['/wiki/roadmap.md', '发展路线图'],
        ]
      }
    ]
  }
}
