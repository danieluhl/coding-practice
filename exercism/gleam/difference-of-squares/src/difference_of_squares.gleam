import gleam/io

pub fn main() {
  let result = sum_of_squares(10)
  io.debug(result)
}

pub fn get_sum(n: Int) -> Int {
  case n {
    1 -> n
    _ -> n + get_sum(n - 1)
  }
}

pub fn square_of_sum(n: Int) -> Int {
  let sum = get_sum(n)
  sum * sum
}

pub fn sum_of_squares(n: Int) -> Int {
  case n {
    1 -> 1
    _ -> n * n + sum_of_squares(n - 1)
  }
}

pub fn difference(n: Int) -> Int {
  square_of_sum(n) - sum_of_squares(n)
}
