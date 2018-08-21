# JSX代码风格指南

## 目录
1. [基本](#basic)
1. [组件](#components)
1. [PropTypes/DefaultProps](#proptypes-defaultprops)
1. [State](#state)
1. [命名](#naming)
1. [引号](#quotes)
1. [空格](#whitespace)
1. [属性](#properties)
1. [括号](#brackets)
1. [标签](#tags)
1. [方法](#methods)

<a name="basic"></a>
## 基本

### 1.1
每个文件只写一个组件，但是多个无状态组件可以放在单个文件中。[`"react/no-multi-comp": [2, { "ignoreStateless": true }]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

<a name="components"></a>
## 组件

### 2.1
有内部状态，方法或者是要对外暴露ref的组件，使用ES6 Class写法。[`"react/prefer-es6-class": [2, "always"]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

``` js
// bad
const Listing = React.createClass({
    // ...
    render() {
        return <div>{this.state.hello}</div>;
    }
});

// good
class Listing extends React.Component {
    // ...
    render() {
        return <div>{this.state.hello}</div>;
    }
}
```

### 2.2
没有内部状态，方法或者是无需对外暴露ref的组件，使用函数写法。[`"react/prefer-stateless-function": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

``` js
// bad
class Listing extends React.Component {
    render() {
        return <div>{this.props.hello}</div>;
    }
}

// good
const Listing = ({ hello }) => (
    <div>{hello}</div>
);
```

<a name="proptypes-defaultprops"></a>
## PropTypes/DefaultProps

### 3.1
有内部状态，方法或者是要对外暴露ref的组件，使用ES7类静态属性提案写法

``` js
class Button extends Component {
    static propTypes = {
        size: React.PropTypes.oneOf(['large', 'normal', 'small']),
        shape: React.PropTypes.oneOf(['default', 'primary', 'ghost'])
        disabled: React.PropTypes.bool
    };

    static defaultProps = {
        size: 'normal',
        shape: 'default',
        disabled: false
    };

    render() {
        // ....
    }
}
```

### 3.2
没有内部状态，方法或者无需对外暴露ref的组件，使用类静态属性写法

``` js
const HelloMessage = ({ name }) => {
    return <div>Hello {name}</div>;
};

HelloMessage.propTypes = {
    name: React.PropTypes.string
};

HelloMessage.defaultProps = {
    name: 'vic'
};
```

### 3.3
PropTypes必须。[`"react/prop-types": [2, { "ignore": [], "customValidators": [] }]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

<a name="state"></a>
## State

### 4.1
使用ES7实例属性提案声明写法或者构造函数声明写法，后者适合需要进行一定计算后才能初始化state的情况。

``` js
class Some extends Component {
    state = {
        foo: 'bar'
    };

    // ....
}

class Some extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar'
        };
    }

    // ....
}
```

### 4.2
禁止对`this.state`进行赋值。[`"react/no-direct-mutation-state": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

``` js
// bad
this.state.name = this.props.name.toUpperCase();

// good
this.setState({
  name: this.props.name.toUpperCase();
});
```

<a name="naming"></a>
## 命名

### 5.1
扩展名: React组件文件使用`.jsx`扩展名。[`"react/jsx-filename-extension": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

### 5.2
文件名: 文件名使用驼峰式命名，首字母大写，如`ReservationCard.jsx`。

### 5.3
引用命名: React组件名使用驼峰式命名，首字母大写，实例名也使用驼峰式命名，但首字母小写。[`"react/jsx-pascal-case": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

``` js
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

<a name="quotes"></a>
## 引号

### 6.1
对于JSX属性值总是使用双引号`"`, 其他均使用单引号`'`。[`"jsx-quotes": [2, "prefer-double"]`](http://eslint.org/docs/rules/jsx-quotes)

``` js
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

<a name="whitespace"></a>
## 空格

### 7.1
总是在自闭合的标签`/>`前加一个空格。

``` js
// bad
<Foo/>

// very bad
<Foo                 />

// good
<Foo />
```

### 7.2
不要在JSX`{}`引用括号里两边加空格。[`"react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

``` js
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### 7.3
不要在JSX props属性`=`两边加空格。[`"react/jsx-equals-spacing": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

``` js
// bad
<Hello name = {firstname} />;

// good
<Hello name={firstname} />;
```

<a name="properties"></a>
## 属性

### 8.1
JSX属性名总是使用驼峰式风格。

``` js
// bad
<Foo UserName="hello" phone_number={12345678} />

// good
<Foo userName="hello" phoneNumber={12345678} />
```

### 8.2
如果属性值为`true`, 可以直接省略。[`"react/jsx-boolean-value": [2, "never"]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

``` js
// bad
<Foo hidden={true} />

// good
<Foo hidden />
```

### 8.3
数组中或者遍历中输出相同的React组件，属性`key`必需。[`"react/jsx-key": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

``` js
// bad
[<Hello />, <Hello />, <Hello />];

data.map(x => <Hello>x</Hello>);

// good
[<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];

data.map((x, i) => <Hello key={i}>x</Hello>);
```

### 8.4
`class`以及`for`等关键字不允许作为属性名。[`"react/no-unknown-property": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

``` js
// bad
<div class="hello">Hello World</div>;

// good
<div className="hello">Hello World</div>;
```

### 8.5
属性名不允许重复声明。[`"react/jsx-no-duplicate-props": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

``` js
// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
```

<a name="brackets"></a>
## 括号

### 9.1

将多行的JSX标签写在`()`里，单行可以省略`()`。[`        "react/wrap-multilines": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

``` js
// bad
render() {
    return <MyComponent className="long body" foo="bar">
               <MyChild />
           </MyComponent>;
}

// good
render() {
    return (
        <MyComponent className="long body" foo="bar">
            <MyChild />
        </MyComponent>
    );
}

// good
render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
}
```

<a name="tags"></a>
## 标签

### 10.1
对于没有子元素的标签来说总是闭合的。[`"react/self-closing-comp": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

``` js
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

<a name="methods"></a>
## 方法

### 11.1
`render`方法必须有值返回。[`"react/require-render-return": 2`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

### 11.2
按照以下顺序排序内部方法。[`"react/sort-comp": 1`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

    1. static methods and properties
    2. lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics,defaultProps, constructor, getDefaultProps, getInitialState, state, getChildContext, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount (in this order).
    3. custom methods
    4. render method`

### 11.3
不要在`componentDidMount`以及`componentDidUpdate`中调用`setState`，除非是在绑定的回调函数中设置State。[`"react/no-did-mount-set-state": [2, "allow-in-func"]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)，[`"react/no-did-update-set-state": [2, "allow-in-func"]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

``` js
// bad
class Hello extends Component {
    componentDidMount() {
        this.setState({
            name: this.props.name.toUpperCase()
        });
    }
    render() {
        return <div>Hello {this.state.name}</div>;
    }
}

// good
class Hello extends Component {
    componentDidMount() {
        this.onMount(newName => {
            this.setState({
                name: newName
            });
        });
    }
    render() {
        return <div>Hello {this.state.name}</div>;
    }
}
```
