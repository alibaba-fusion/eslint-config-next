# Sublime中配置ESLint

![](http://d.pr/i/10oU3+)

## 安装
通过Package Control安装[Summit​Linter](https://packagecontrol.io/packages/SummitLinter)和[Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

## 设置
Sublime Text -> Prefences -> Package Settings -> SublimeLinter -> Settings-User

![](http://d.pr/i/TtXN+)

打开文件后，修改paths属性对应平台的值来设置Node的安装路径。(可以通过`which node`命令来获取该路径。)

``` json
"paths": {
    "linux": [],
    "osx": [
        "/Users/wangjinliang/.nvm/versions/node/v4.3.2/bin"
    ],
    "windows": []
}
```

## 使用
* 在本地项目下安装eslint及其插件

    ```
    npm i --save-dev eslint [eslint-plugins]
    ```
* 添加.eslintrc文件
