function random(max) {
  return Math.floor(Math.random() * max) + 1
}

class Dice {
  constructor(size) {
    this.size = size;
  }

  throw(times) {
    if (times == undefined || times == 1) {
      return random(this.size);
    }

    let throws = [];
    for (let i = 0; i < times; i++) {
      throws.push(random(this.size));
    }

    return throws;
  }
}

let dice = new Dice(7);

export { dice, Dice, random };