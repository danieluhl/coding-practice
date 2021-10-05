export class Forth {
  constructor() {
    this._stack = []
    this.userCommands = {}
  }
  evaluate(input) {
    const tokens = input.toLowerCase().split(" ")
    while (tokens.length) {
      const token = tokens.shift()
      if (!isNaN(token)) {
        this._stack.push(Number(token))
      } else if (this.userCommands[token]) {
        for (const command of this.userCommands[token]) {
          this.evaluate(command)
        }
      } else {
        switch (token) {
          case "+":
            this.add()
            break
          case "-":
            this.subtract()
            break
          case "*":
            this.multiply()
            break
          case "/":
            this.divide()
            break
          case "dup":
            this.dup()
            break
          case "drop":
            this.drop()
            break
          case "swap":
            this.swap()
            break
          case "over":
            this.over()
            break
          case ":":
            const userCommand = tokens.shift()
            if (!isNaN(userCommand)){
              throw new Error('Invalid definition')
            }
            this.userCommands[userCommand] = []
            let nextToken = tokens.shift()
            while (nextToken !== ";") {
              this.userCommands[userCommand].push(nextToken)
              nextToken = tokens.shift()
            }
            break
          default:
            throw new Error('Unknown command')
        }
      }
    }
  }
  validateStack(min=2){
    if (this._stack.length < min) {
      throw new Error("Stack empty")
    }
  }
  popTwo(){
    this.validateStack()
    return [
        this._stack.pop(),
        this._stack.pop(),
    ]
  }
  add() {
    const [one, two] = this.popTwo()
    this._stack.push(one + two)
  }
  subtract() {
    const [one, two] = this.popTwo()
    this._stack.push(two - one)
  }
  multiply() {
    const [one, two] = this.popTwo()
    this._stack.push(two * one)
  }
  divide() {
    const [one, two] = this.popTwo()
    if (one === 0) {
      throw new Error("Division by zero")
    }
    this._stack.push(Math.floor(two / one))
  }
  dup() {
    this.validateStack(1)
    const one = this._stack.pop()
    this._stack.push(one)
    this._stack.push(one)
  }
  drop() {
    this.validateStack(1)
    const one = this._stack.pop()
  }
  swap() {
    const [one, two] = this.popTwo()
    this._stack.push(one)
    this._stack.push(two)
  }
  over() {
    const [one, two] = this.popTwo()
    this._stack.push(two)
    this._stack.push(one)
    this._stack.push(two)
  }
  get stack() {
    return this._stack
  }
}