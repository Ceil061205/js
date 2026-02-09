var name = 'xuy';

var person = {
  name: 'y',
  age: 20,
  sayName: function() {
    console.log(this.name);
  }
}

function sayName() {
  var sss = person.sayName;
  sss();// 默认绑定,这里的this指向全局对象window --> 'xuy'
  person.sayName();//隐式绑定,这里的this指向person对象 --> 'y'
  (person.sayName)();//隐式绑定,这里的this指向person对象 --> 'y'
  (b = person.sayName)();//间接函数引用,这里的this指向全局对象window --> 'xuy'
}

sayName();