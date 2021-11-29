function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(descriptor);
  const originalMethod = descriptor.value;

  const desc: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
  return desc;
}
class Person2 {
  message = "Hii Abhi";
  @Autobind
  getMessage() {
    console.log(this.message);
  }
}

const button = document.querySelector("button");
const p = new Person2();

button?.addEventListener("click", p.getMessage);

// button?.addEventListener("click", () => {
//   p.getMessage();
// });
