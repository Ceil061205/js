var name = 'window';

// new Person() 做了什么?
// 1.创建一个空对象
// 2.将空对象赋值给this
// 3.执行函数中的代码
// 4.将新对象默认返回

function Person (name) {
  this.name: name;,
  this.foo1 = function () {
    console.log(this.name);
  },
  this.foo2 = () => {
    console.log(this.name);
  },
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    }
  }
};

var person1 = new Person('person1');
var person2 = new Person('person2');

person1.foo1(); // 隐person1
person1.foo1.call(person2); // 显person2


person1.foo2(); // 上层person1
person1.foo2.call(person2); // 上层1

person1.foo3()(); // 默认绑定: window
person1.foo3.call(person2)(); // 默window
person1.foo3().call(person2); // 显person2

person1.foo4()(); // 上person1(隐)
person1.foo4.call(person2); // 上person2(显)
person1.foo4().call(person2); // 上person1(隐)

