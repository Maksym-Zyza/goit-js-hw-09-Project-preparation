import b from './b'

console.log(b);

const a = 4;

class User {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

new User("Mango").showName();

export default a;