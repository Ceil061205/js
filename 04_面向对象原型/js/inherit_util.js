/**
 * 寄生组合式继承（最理想的继承方式）
 * @param {Function} Subtype 子类
 * @param {Function} Supertype 父类
 */
function inherit(Subtype, Supertype) {
  // 1. 创建父类原型的副本（寄生：不创建多余的构造函数实例）
  const prototype = Object.create(Supertype.prototype);
  // 2. 修正子类原型的 constructor 指向（不可枚举，符合原生规范）
  Object.defineProperty(prototype, 'constructor', {
    enumerable: false, // 原生 constructor 不可枚举，避免 for-in 遍历到
    writable: true,
    configurable: true,
    value: Subtype     // 指向子类本身
  });
  // 3. 将子类原型指向这个副本
  Subtype.prototype = prototype;
}