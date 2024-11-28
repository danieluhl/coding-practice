import gleam/string

// | M    | D   | C   | L   | X   | V   | I   |
// | ---- | --- | --- | --- | --- | --- | --- |
// | 1000 | 500 | 100 | 50  | 10  | 5   | 1   |

// 2461 MM CD LX I

pub type Roman {
  Roman(
    numeral: String,
    decimal: Int,
    ten_numeral: String,
    five_numeral: String,
  )
}

// fn build_numeral(number, numeral, result) {
//   let numeral_count = number / numeral
//   let next_number = number % numeral

//   let next_result = case numeral {
//     1000 -> {
//       build_numeral(next_number, 100, string.repeat("M", numeral_count))
//     }
//     100 -> {
//       case numeral_count {
//         9 -> build_numeral(number - 900, 100, "CM")
//         n if n >= 5 -> build_numeral(number - 500, 100, "D")
//         4 -> build_numeral(next_number, 10, "CD")
//         _ -> build_numeral(next_number, 10, string.repeat("C", numeral_count))
//       }
//     }
//     10 -> {
//       case numeral_count {
//         9 -> build_numeral(number - 90, 10, "XC")
//         n if n >= 5 -> build_numeral(number - 50, 10, "L")
//         4 -> build_numeral(next_number, 1, "XL")
//         _ -> build_numeral(next_number, 1, string.repeat("X", numeral_count))
//       }
//     }
//     1 -> {
//       case numeral_count {
//         9 -> "IX"
//         n if n >= 5 -> build_numeral(number - 5, 1, "V")
//         4 -> "IV"
//         _ -> string.repeat("I", number)
//       }
//     }
//     _ -> result
//   }

//   string.append(result, next_result)
// }

// fn build_numeral(number: Int, romans: List(Roman)) {
//   case romans {
//     [first, ..rest] -> {
//       let numeral_count = number / first.decimal
//       let next_number = number % first.decimal

//       case numeral_count {
//         9 -> {
//           first.numeral
//           |> string.append(first.ten_numeral)
//           |> string.append(build_numeral(number - { 9 * first.decimal }, romans))
//         }
//         n if n >= 5 -> {
//           first.five_numeral
//           |> string.append(build_numeral(number - { 5 * first.decimal }, romans))
//         }
//         4 -> {
//           first.numeral
//           |> string.append(first.five_numeral)
//           |> string.append(build_numeral(next_number, rest))
//         }
//         n if n > 0 && n < 5 -> {
//           first.numeral
//           |> string.repeat(numeral_count)
//           |> string.append(build_numeral(next_number, rest))
//         }
//         _ -> build_numeral(next_number, rest)
//       }
//     }
//     [] -> ""
//   }
// }

// optimizing for tail calls
fn build_numeral(number: Int, romans: List(Roman), numeral_accumulator: String) {
  case romans {
    [first, ..rest] -> {
      let numeral_count = number / first.decimal
      let next_number = number % first.decimal
      let prepend_accumulator = string.append(numeral_accumulator, _)

      case numeral_count {
        9 -> {
          build_numeral(
            number - { 9 * first.decimal },
            romans,
            first.numeral
              |> string.append(first.ten_numeral)
              |> prepend_accumulator(),
          )
        }
        n if n >= 5 -> {
          build_numeral(
            number - { 5 * first.decimal },
            romans,
            first.five_numeral |> prepend_accumulator(),
          )
        }
        4 -> {
          build_numeral(
            next_number,
            rest,
            first.numeral
              |> string.append(first.five_numeral)
              |> prepend_accumulator(),
          )
        }
        n if n > 0 -> {
          build_numeral(
            next_number,
            rest,
            first.numeral
              |> string.repeat(numeral_count)
              |> prepend_accumulator(),
          )
        }
        _ -> build_numeral(next_number, rest, numeral_accumulator)
      }
    }
    [] -> numeral_accumulator
  }
}

pub fn convert(number: Int) -> String {
  let romans = [
    Roman("M", 1000, "", ""),
    Roman("C", 100, "M", "D"),
    Roman("X", 10, "C", "L"),
    Roman("I", 1, "X", "V"),
  ]
  // divide by the largest, pass the remainder to recurse
  build_numeral(number, romans, "")
}
