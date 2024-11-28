import gleam/order
import gleam/string.{compare, ends_with, lowercase, trim, uppercase}

pub fn hey(remark: String) -> String {
  let is_question = ends_with(trim(remark), "?")
  let is_yelling = case
    compare(uppercase(remark), remark),
    compare(lowercase(remark), remark)
  {
    order.Eq, order.Eq -> False
    order.Eq, _ -> True
    _, _ -> False
  }
  let is_silence = case compare(trim(remark), "") {
    order.Eq -> True
    _ -> False
  }
  case remark {
    _ if is_question && is_yelling -> "Calm down, I know what I'm doing!"
    _ if is_question -> "Sure."
    _ if is_yelling -> "Whoa, chill out!"
    _ if is_silence -> "Fine. Be that way!"
    _ -> "Whatever."
  }
}
