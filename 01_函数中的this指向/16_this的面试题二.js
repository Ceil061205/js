var name = 'window';


// 对象是没有作用域的概念
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => {
    console.log(this.name);//直接在这里就能看出来一直指向window，因为箭头函数没有自己的this，它会捕获其所在上下文的 this 值作为自己的 this 值。
  },
  foo3: function () {
    return function () {
      console.log(this.name);
    }
  },
  foo4: function () {
    console.log(this);//第一个this指向person1
    // 第二个this:person2
    // 3:person1

    return () => {
      console.log(this.name);//1然后往上找this:person1
      // 2:上层person2
      // 3:上层person1
    }
  }
};

var person2 = { name: 'person2' };

person1.foo1(); // 隐person1
person1.foo1.call(person2); // 显>隐所以person2

// 箭头函数没有自己的this，它会捕获其所在上下文的 this 值作为自己的 this 值。
person1.foo2(); // 上层window
person1.foo2.call(person2); // 上层window

person1.foo3()(); // 默认绑定: window
person1.foo3.call(person2)(); // 默window
person1.foo3().call(person2); // 显person2

person1.foo4()(); // person1
person1.foo4.call(person2); // person2
person1.foo4().call(person2); // 上层person1,因为call的绑定对于箭头函数无效

