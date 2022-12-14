/*
  静态属性:
    静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
*/

/* class Foo {

}

Foo.prop = 1;   //
Foo.prop;   // 1

console.log(Foo.prop);
 */


// Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上static关键字。
/* class Foo {
  static prop = 1;
}

console.log(Foo.prop); */

