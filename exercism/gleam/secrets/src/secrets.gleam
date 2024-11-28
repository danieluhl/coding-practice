pub fn secret_add(secret: Int) -> fn(Int) -> Int {
  let add = fn(x) { x + secret }
  add
}

pub fn secret_subtract(secret: Int) -> fn(Int) -> Int {
  let sub = fn(x) { x - secret }
  sub
}

pub fn secret_multiply(secret: Int) -> fn(Int) -> Int {
  fn(x) { x * secret }
}

pub fn secret_divide(secret: Int) -> fn(Int) -> Int {
  fn(x) { x / secret }
}

pub fn secret_combine(
  secret_function1: fn(Int) -> Int,
  secret_function2: fn(Int) -> Int,
) -> fn(Int) -> Int {
  fn(x) { secret_function2(secret_function1(x)) }
}
