use std::fmt::Debug;

#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq + Debug>(_first_list: &[T], _second_list: &[T]) -> Comparison {
    let first_len = _first_list.len();
    let second_len = _second_list.len();
    // define largest, smallest
    if first_len < second_len && is_sublist(&_first_list, &_second_list) {
        return Comparison::Sublist;
    } else if second_len < first_len && is_sublist(&_second_list, &_first_list) {
        return Comparison::Superlist;
    } else if is_sublist(&_second_list, &_first_list) {
        return Comparison::Equal;
    }

    return Comparison::Unequal;
}

fn is_sublist<T: PartialEq + Debug>(small: &[T], large: &[T]) -> bool {
    if small.len() == 0 {
        return true;
    }
    let small_end = small.len() - 1;
    let large_end = large.len() - 1;
    for i in 0..(large_end + 1) {
        let end = i + small_end;
        if end > large_end {
            return false;
        }
        let slice = &large[i..(end + 1)];
        if slice == small {
            return true;
        }
    }
    return false;
}
