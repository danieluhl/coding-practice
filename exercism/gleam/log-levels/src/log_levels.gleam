import gleam/string
import gleam/result

fn parts(log_line: String) -> #(String, String) {
  let #(l, m) =
    log_line
    |> string.split_once(on: " ")
    // passing in the defaults
    |> result.unwrap(#("default level", "default message"))

  #(string.trim(l), string.trim(m))
}

pub fn message(log_line: String) -> String {
  let #(_, m) = parts(log_line)
  m
}

pub fn log_level(log_line: String) -> String {
  let #(l, _) = parts(log_line)
  l
  // drop "["
  |> string.drop_left(up_to: 1)
  // drop "]:"
  |> string.drop_right(up_to: 2)
  |> string.lowercase
}

pub fn reformat(log_line: String) -> String {
  message(log_line) <> " (" <> log_level(log_line) <> ")"
}
