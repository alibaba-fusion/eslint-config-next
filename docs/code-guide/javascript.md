# Javascript代码风格指南

## 目录
1. [变量](#variables)
1. [对象](#objects)
1. [数组](#arrays)
1. [解构](#destructuring)
1. [字符串](#strings)
1. [函数](#functions)
1. [箭头函数](#arrow-functions)
1. [类](#classes)
1. [模块](#modules)
1. [Generators](#generators)
1. [属性](#properties)
1. [比较运算符](#comparison-operators)
1. [代码块](#blocks)
1. [注释](#comments)
1. [空白](#whitespace)
1. [分号](#semicolons)
1. [命名](#naming)

<a name="variables"></a>
## 变量

### 1.1
对所有的变量使用`const`或`let`声明，不要使用`var`。[`"no-var": 2`](http://eslint.org/docs/rules/no-var.html)

``` js
// bad
var a = 1;

// good
const a = 1;
```

### 1.2
优先使用`const`声明变量, 除非如果你一定要改变它的值，那就使用`let`。[`"prefer-const": 1`](http://eslint.org/docs/rules/prefer-const.html), [`"no-const-assign": 2`](http://eslint.org/docs/rules/no-const-assign.html)

``` js
// bad
let a = 1;
const b = 1;
b = b + 1;

// good
const a = 1;
let b = 1;
b = b + 1;

// good
const a = { b: 1 };
a.b = 2;
```

### 1.3
对使用`const`和`let`声明的变量进行分组。

``` js
// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

<a name="objects"></a>
## 对象

### 2.1
创建有动态属性名的对象时，使用可被计算的属性名称。

> 为什么？因为这样可以让你在一个地方定义所有的对象属性。

``` js
function getKey(k) {
    return `a key named ${k}`;
}

// bad
const obj = {
    id: 5,
    name: 'San Francisco'
};
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true
};
```

### 2.2
使用对象方法的简写。

``` js
// bad
const atom = {
    value: 1,
    addValue: function (value) {
        return atom.value + value;
    }
};

// good
const atom = {
    value: 1,
    addValue(value) {
        return atom.value + value;
    }
};
```

### 2.3
使用对象属性值的简写。

> 为什么？因为这样更短更有描述性。

``` js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
    lukeSkywalker: lukeSkywalker
};

// good
const obj = {
    lukeSkywalker
};
```

### 2.4
在对象属性声明前把简写的属性分组。

> 为什么？因为这样能清楚地看出哪些属性使用了简写。

``` js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
    episodeOne: 1,
    twoJedisWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker
};

// good
const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJedisWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4
};
```

### 2.5
只有当属性名不合法时才用引号扩起来。[`"quote-props": [2, "as-needed"]`](http://eslint.org/docs/rules/quote-props.html)

> 为什么？一般情况下我们考虑它更容易阅读，另外它能提供语法高亮，以及更容易被许多JS引擎优化。

``` js
// bad
const bad = {
	'foo': 3,
	'bar': 4,
	'data-blah': 5
};

// good
const good = {
	foo: 3,
	bar: 4,
	'data-blah': 5
};
```
<a name="arrays"></a>
## 数组

### 3.1
使用拓展运算符`...`复制数组。

``` js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
	itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

### 3.2
使用`Array.from`把一个类数组对象转换成数组。

``` js
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

### 3.3
在数组方法的回调中使用return语句。[`"array-callback-return": 2`](http://eslint.org/docs/rules/array-callback-return)

``` js
// bad
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
	const flatten = memo.concat(item);
	flat[index] = flatten;
});

// good
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
	const flatten = memo.concat(item);
	flat[index] = flatten;
	return flatten;
});

// good
[1, 2, 3].map((x) => {
	const y = x + 1;
	return x * y;
});

// good
[1, 2, 3].map(x => x + 1);
```

<a name="destructuring"></a>
## 解构

### 4.1
使用解构存取和使用多属性对象。

> 为什么？因为解构能减少临时引用属性。

``` js
// bad
function getFullName(user) {
	const firstName = user.firstName;
	const lastName = user.lastName;

	return `${firstName} ${lastName}`;
}

// good
function getFullName(obj) {
	const { firstName, lastName } = obj;
	return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}
```

### 4.2
对数组使用解构赋值。

``` js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### 4.3
需要回传多个值时，使用对象解构，而不是数组解构。

> 为什么？增加属性或者改变排序不会改变调用时的位置。

``` js
// bad
function processInput(input) {
	return [left, right, top, bottom];
}

// 调用时需要考虑回调数据的顺序。
const [left, __, top] = processInput(input);

// good
function processInput(input) {
	return { left, right, top, bottom };
}

// 调用时只选择需要的数据
const { left, right } = processInput(input);
```

<a name="strings"></a>
## 字符串

### 5.1
字符串使用单引号`''`。[`"quotes": [2, "single"]`](http://eslint.org/docs/rules/quotes.html)

``` js
// bad
const name = "Capt. Janeway";

// good
const name = 'Capt. Janeway';
```

### 5.2
程序化生成字符串时，使用模板字符串代替字符串连接，并且模版字符串中的变量两边没有空格`${variable}`。[`"prefer-template": 1`](http://eslint.org/docs/rules/prefer-template.html)，[`"template-curly-spacing": 2`](http://eslint.org/docs/rules/template-curly-spacing)

> 为什么？模板字符串更为简洁，更具可读性。

``` js
// bad
function sayHi(name) {
	return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
	return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}


// good
function sayHi(name) {
	return `How are you, ${name}?`;
}
```

### 5.3
在字符串中不要使用不必要的转义字符。[`"no-useless-escape": 2`](http://eslint.org/docs/rules/no-useless-escape)

> 为什么？降低了可读性，只有在需要的时候使用它们。

``` js
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `'this' is "quoted"`;
```

<a name="functions"></a>
## 函数

### 6.1
永远不要在一个非函数代码块（if、while等）中声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但它们的解析表现不一致。

### 6.2
**注意:** ECMA-262把block定义为一组语句。函数声明不是语句。[阅读ECMA-262关于这个问题的说明](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97)。

``` js
// bad
if (currentUser) {
	function test() {
		console.log('Nope.');
	}
}

// good
let test;
if (currentUser) {
	test = () => {
		console.log('Yup.');
	};
}
```

### 6.3
不要使用`arguments`，可以选择rest语法`...`替代。

> 为什么？使用`...`能明确你要传入的参数。另外rest参数是一个真正的数组，而arguments`是一个类数组对象。

``` js
// bad
function concatenateAll() {
	const args = Array.prototype.slice.call(arguments);
	return args.join('');
}

// good
function concatenateAll(...args) {
	return args.join('');
}
```

### 6.4
直接给函数的参数指定默认值，不要使用一个变化的函数参数。

``` js
// bad
function handleThings(opts) {
	// 如果参数opts是false或者空字符串的话，它就会被设定为一个对象。
	opts = opts || {};
	// ...
}

// bad
function handleThings(opts) {
	if (!opts) {
		opts = {};
	}
	// ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

### 6.5
总是把有默认值的参数放在最后。

``` js
// bad
function handleThings(opts = {}, name) {
	// ...
}

// good
function handleThings(name, opts = {}) {
	// ...
}
```

### 6.6
不要使用Function构造函数来创建一个函数。

> 为什么？通过执行字符串这种方式创建函数就相当于调用`eval()`，会让代码变的脆弱。

``` js
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```

<a name="arrow-functions"></a>
## 箭头函数

### 7.1
`=>`前后保留空格。[`"arrow-spacing": 2`](http://eslint.org/docs/rules/arrow-spacing)

``` js
// bad
a =>{};
a=> {};

// good
a => {};
```

### 7.2
当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数。

> 为什么？因为箭头函数创造了新的一个this执行环境，通常情况下都能满足你的需求，而且这样的写法更为简洁。
>
> 为什么不？当回调函数作为参数传入另一个函数，并且这个函数内部修改了回调函数的this执行环境时，不要使用箭头函数。

``` js
// bad
[1, 2, 3].map(function (x) {
	return x * x;
});

// good
[1, 2, 3].map((x) => {
	return x * x;
});

// good
element.addEventListener('click', function() {
	// ...
});
```

### 7.3
如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和`return`都省略掉。如果不是，那就不要省略。**注意:**当你返回的是一个对象时，请在对象的大括号外加上小扩号`a => ({ x: 1 });`

> 为什么？语法糖。在链式调用中可读性很高。

``` js
// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].reduce((total, n) => {
	return total + n;
}, 0);

// good
a => ({ x: 1 });
```

<a name="classes"></a>
## 类

### 8.1
总是使用`class`，避免直接操作`prototype`。

> 为什么? 因为`class`语法更为简洁易读。

``` js
// bad
function Queue(contents = []) {
	this._queue = [...contents];
}
Queue.prototype.pop = function() {
	const value = this._queue[0];
	this._queue.splice(0, 1);
	return value;
}


// good
class Queue {
	constructor(contents = []) {
		this._queue = [...contents];
	}
	pop() {
	  const value = this._queue[0];
	  this._queue.splice(0, 1);
	  return value;
	}
}
```

### 8.2
使用`extends`继承。

``` js
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
	Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
	return this._queue[0];
}

// good
class PeekableQueue extends Queue {
	peek() {
	  return this._queue[0];
	}
}
```

### 8.3
`class`在不指定构造函数的情况下就拥有一个默认的构造函数，一个空的构造函数或者仅仅调用了`super`方法是没有必要的。[`"no-useless-constructor": 2`](http://eslint.org/docs/rules/no-useless-constructor)

``` js
// bad
class Jedi {
	constructor() {}

	getName() {
		return this.name;
	}
}

// bad
class Rey extends Jedi {
	constructor(...args) {
		super(...args);
	}
}

// good
class Rey extends Jedi {
	constructor(...args) {
		super(...args);
		this.name = 'Rey';
	}
}
```

### 8.4
不要出现重复命名的class的成员。[`"no-dupe-class-members": 2`](http://eslint.org/docs/rules/no-dupe-class-members)

> 为什么？重复命名的class成员默认后面的会生效，因此重复命名的情况基本可以认为是一个错误的书写。

``` js
// bad
class Foo {
	bar() { return 1; }
	bar() { return 2; }
}

// good
class Foo {
	bar() { return 1; }
}
```

### 8.5
不要修改`class`声明的变量。[`"no-class-assign": 2`](http://eslint.org/docs/rules/no-class-assign)

``` js
// bad
class A { }
A = 0;
```

<a name="modules"></a>
## 模块

### 9.1
总是使用模组ES6的模块系统(import/export)，而不是其他非标准模块系统。你可以编译为你喜欢的模块系统。

> 为什么？模块就是未来，让我们开始迈向未来吧。

``` js
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

### 9.2
对于一个路径只能import一次。[`"no-duplicate-imports": 2`](http://eslint.org/docs/rules/no-duplicate-imports)

``` js
// bad
import foo from 'foo';
// … some other imports … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';
```

### 9.3
import语句只能出现在文件头部，并且import绝对路径的语句（如node_modules下面的package）要放在import相对路径的语句前。[`"import/imports-first": [2, "absolute-first"]`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)

``` js
// bad
import foo from './foo';
initWith(foo);

import bar from './bar';

// good
import foo from './foo';
import bar from './bar';

initWith(foo);

// bad
import foo from 'foo';
import bar from './bar';

import * as _ from 'lodash';

// good
import foo from 'foo';
import * as _ from 'lodash';

import bar from './bar';
```

### 9.4
最后一条import语句下应该保留一个空行。[`"import/newline-after-import": 2`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

``` js
// bad
import defaultExport from './foo';
const FOO = 'BAR';

// good
import defaultExport from './foo';

const FOO = 'BAR';
```

### 9.5
不允许重复导出相同name的变量以及`default`。[`"import/export": 2`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

``` js
// bad
export const foo = function () { /*...*/ };

function bar() { /*...*/ }
export { bar as foo };

// bad
export default class MyClass { /*...*/ }

function makeClass() { return new MyClass(...arguments) }
export default makeClass;
```

### 9.6
不允许导出let修饰的变量。[`"import/no-mutable-exports": 2`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

``` js
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };
```

### 9.7
如果一个模块只对外导出一个变量，优先使用默认导出，而不是通过变量名导出。[`"import/prefer-default-export": 2`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

``` js
// There is only a single module export and its a named export.

// bad
export const foo = 'foo';

// good
const foo = 'foo';
export default foo;
```

<a name="generators"></a>
## Generator

### 10.1
generator的函数签名中空格的书写应为`function* () {}`。[`"generator-star-spacing": [2, "after"]`](http://eslint.org/docs/rules/generator-star-spacing)
> 为什么？`function`和`*`是generator函数关键字的一部分，不同于`function`，应该连在一起写。

``` js
// bad
function * foo() {}
function *foo() {}
function*foo() {}

const bar = function * () {};
const baz = function *() {};
const quux = function*() {};

// good
function* foo() {}

const bar = function* () {};
```

<a name="properties"></a>
## 属性

## 11.1
使用`.`来访问对象的属性。[`"dot-notation": 2`](http://eslint.org/docs/rules/dot-notation.html)

``` js
const luke = {
	jedi: true,
	age: 28
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```

## 11.2
当通过变量访问属性时使用中括号`[]`。

``` js
const luke = {
	jedi: true,
	age: 28
};

function getProp(prop) {
	return luke[prop];
}

const isJedi = getProp('jedi');
```

<a name="comparison-operators"></a>
## 比较操作符

### 12.1
优先使用`===`和`!==`，而不是`==`和`!=`。[`"eqeqeq": 2`](http://eslint.org/docs/rules/eqeqeq.html)

### 12.2
如果在`switch`的`case`和`default`从句中声明变量，从句最好被大括号包裹起来形成块级作用域。[`"no-case-declarations": 1`](http://eslint.org/docs/rules/no-case-declarations.html)

> 为什么？在`switch`的`case`和`default`从句中直接声明的变量，它们的作用域是整个switch语句，当我们尝试在多个`case`语句中定义相同名字的变量就会引起问题。

``` js
// bad
switch (foo) {
	case 1:
		let x = 1;
		break;
	case 2:
		const y = 2;
		break;
	case 3:
		function f() {}
		break;
	default:
		class C {}
}

// good
switch (foo) {
	case 1: {
		let x = 1;
		break;
	}
	case 2: {
  		const y = 2;
  		break;
	}
	case 3: {
		function f() {}
		break;
	}
	case 4:
		bar();
		break;
	default: {
		class C {}
	}
}
```

### 12.3
避免不必要的三元运算符。[`"no-unneeded-ternary": 2`](http://eslint.org/docs/rules/no-unneeded-ternary.html)

``` js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

<a name="blocks"></a>
## 代码块

### 13.1
使用大括号包裹代码块。

``` js
// bad
if (test)
  return false;

// bad
if (test) return false;

// good
if (test) {
  return false;
}
```

### 13.2
使用如下风格书写`if-else`，`try-catch`等语句。[`"brace-style": 2`](http://eslint.org/docs/rules/brace-style.html)

```js
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

<a name="comments"></a>
## 注释

### 14.1
使用`/** ... */`作为多行注释。包含描述、指定所有参数和返回值的类型和值。

``` js
// bad

// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

	// ...stuff...

	return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {

	// ...stuff...

	return element;
}
```
### 14.2
使用`//`作为单行注释。在评论对象上面另起一行使用单行注释。在注释前插入空行。

``` js
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
	console.log('fetching type...');
	// set the default type to 'no type'
	const type = this._type || 'no type';

	return type;
}

// good
function getType() {
	console.log('fetching type...');

	// set the default type to 'no type'
	const type = this._type || 'no type';

	return type;
}
```

### 14.3
给注释增加`FIXME`，`TODO`或者`XXX`的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。这将有别于常见的注释，因为它们是可操作的。`FIXME`表示有待修改，`TODO`表示有待实现，`XXX`表示hack逻辑，黑科技以及实现不够优雅等情况。

``` js
// good
class Calculator {
	constructor() {
		// FIXME: shouldn't use a global here
		total = 0;
	}
}

// good
class Calculator {
	constructor() {
		// TODO: total should be configurable by an options param
		this.total = 0;
	}
}
```

<a name="whitespace"></a>
## 空白

### 15.1
使用4个空格作为缩进。[`"indent": [2, 4, { "SwitchCase": 1 }]`](http://eslint.org/docs/rules/indent.html)

``` js
// bad
function() {
∙∙const name;
}

// good
function() {
∙∙∙∙const name;
}
```

### 15.2
在花括号前放一个空格。[`"space-before-blocks": 2`](http://eslint.org/docs/rules/space-before-blocks.html)

``` js
// bad
function test(){
	console.log('test');
}

// good
function test() {
	console.log('test');
}

// bad
dog.set('attr',{
	age: '1 year',
	breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
	age: '1 year',
	breed: 'Bernese Mountain Dog'
});
```

### 15.3
在控制语句（if、while等）的小括号前放一个空格。[`"keyword-spacing": 2`](http://eslint.org/docs/rules/keyword-spacing.html)

``` js
// bad
if(isJedi) {
	fight ();
}

// good
if (isJedi) {
	fight();
}
```

### 15.4
使用空格把运算符隔开。[`"space-infix-ops": 2`](http://eslint.org/docs/rules/space-infix-ops.html)

``` js
// bad
const x=y+5;

// good
const x = y + 5;
```

### 15.5
在文件末尾插入一个空行。[`"eol-last": 2`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

``` js
// bad
(function(global) {
	// ...stuff...
})(this);

// good
(function(global) {
	// ...stuff...
})(this);↵
```
### 15.6
在块末和新语句前插入空行。

``` js
// bad
if (foo) {
	return bar;
}
return baz;

// good
if (foo) {
	return bar;
}

return baz;

// bad
const obj = {
	foo() {
	},
	bar() {
	}
};
return obj;

// good
const obj = {
	foo() {
	},

	bar() {
	}
};

return obj;
```

### 15.7
大括号内的开始和结束处不要留有空行。

``` js
// bad
function bar() {

	console.log(foo);

}

// also bad
if (baz) {

	console.log(qux);
} else {
	console.log(foo);

}

// good
function bar() {
	console.log(foo);
}

// good
if (baz) {
	console.log(qux);
} else {
	console.log(foo);
}
```

### 15.8
不要在圆括号内加空格。["space-in-parens": 2](http://eslint.org/docs/rules/space-in-parens.html)

``` js
// bad
function bar( foo ) {
	return foo;
}

// good
function bar(foo) {
	return foo;
}

// bad
if ( foo ) {
	console.log(foo);
}

// good
if (foo) {
	console.log(foo);
}
```

<a name="semicolons"></a>
## 分号

### 16.1
使用分号。[`"semi": 2`](http://eslint.org/docs/rules/semi.html)

``` js
// bad
(function() {
	const name = 'Skywalker'
	return name
})()

// good
(() => {
	const name = 'Skywalker';
	return name;
})();

// good (防止函数在两个 IIFE 合并时被当成一个参数)
;(() => {
	const name = 'Skywalker';
	return name;
})();
```

<a name="naming"></a>
## 命名

### 17.1
避免单字母命名，命名应具备描述性。

``` js
// bad
function q() {
	// ...stuff...
}

// good
function query() {
	// ..stuff..
}
```

### 17.2
使用驼峰式命名对象、函数和引用。[`"camelcase": 2,`](http://eslint.org/docs/rules/camelcase.html)

``` js
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

### 17.3
使用帕斯卡式命名构造函数或类。["new-cap": [2, { "capIsNew": false }]](http://eslint.org/docs/rules/new-cap.html)

``` js
// bad
function user(options) {
	this.name = options.name;
}

const bad = new user({
	name: 'nope'
});

// good
class User {
	constructor(options) {
		this.name = options.name;
	}
}

const good = new User({
	name: 'yup'
});
```

### 17.4
不要保存`this`的引用。使用箭头函数或`Function#bind`。

``` js
// bad
function foo() {
	const self = this;
	return function() {
		console.log(self);
	};
}

// bad
function foo() {
	const that = this;
	return function() {
		console.log(that);
	};
}

// good
function foo() {
	return () => {
		console.log(this);
	};
}
```
