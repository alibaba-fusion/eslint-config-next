# @alifd/eslint-config-next
`@alifd/eslint-config-next` 是 Next 组件库默认的 [eslint](http://eslint.org/) 配置。

## 代码风格指南

* [javascript](./docs/code-guide/javascript.md)
* [jsx](./docs/code-guide/jsx.md)

## 规则配置原则

* **browser**，目前配置的规则主要针对浏览器端代码的检查
* **es6+**，支持对es6+语法规则的检查
* **react**，扩展对jsx语法规则的检查
* **ie9+**，不包括对兼容ie低版本特殊代码书写方式规则的检查

## 常见代码风格配置

* 缩进使用4个空格 `"indent": [2, 4, { "SwitchCase": 1 }]`,
* 使用单引号 `"quotes": [2, "single"]`
* 语句结尾保有分号 `"semi": 2`

## IDE 配置

* [Atom](./docs/ide-usage/atom.md)
* [Sublime](./docs/ide-usage/sublime.md)
* [VSCode](./docs/ide-usage/vscode.md)
* [WebStorm](./docs/ide-usage/webstorm.md)

## 参考

* [eslint rules](http://eslint.org/docs/rules/)
* [eslint rules (中文)](http://eslint.cn/docs/rules/)
* [eslint-plugin-import rules](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-react rules](https://github.com/yannickcr/eslint-plugin-react)
