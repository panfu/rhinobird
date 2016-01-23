'use strict';

class Sheep {
  constructor(args) {
    this.hello = () => {
      console.log(args.hello || 'meeee!')
    }
  }
}

let sheep = new Sheep({ hello: 'miiii!' })
sheep.hello()