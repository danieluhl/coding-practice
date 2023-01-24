use enum_iterator::{all, cardinality, first, last, next, previous, reverse_all, Sequence};
use int_enum::IntEnum;

#[repr(u32)]
#[derive(Copy, Clone, Debug, PartialEq, Eq, IntEnum, Sequence)]
pub enum ResistorColor {
    Black = 0,
    Brown = 1,
    Red = 2,
    Orange = 3,
    Yellow = 4,
    Green = 5,
    Blue = 6,
    Violet = 7,
    Grey = 8,
    White = 9,
}

pub fn color_to_value(_color: ResistorColor) -> u32 {
    return _color.int_value();
    // match _color {
    //     ResistorColor::Black => 0,
    //     ResistorColor::Brown => 1,
    //     ResistorColor::Red => 2,
    //     ResistorColor::Orange => 3,
    //     ResistorColor::Yellow => 4,
    //     ResistorColor::Green => 5,
    //     ResistorColor::Blue => 6,
    //     ResistorColor::Violet => 7,
    //     ResistorColor::Grey => 8,
    //     ResistorColor::White => 9,
    // }
}

pub fn value_to_color_string(value: u32) -> String {
    match ResistorColor::from_int(value).unwrap() {
        ResistorColor::Black => String::from("Black"),
        ResistorColor::Brown => String::from("Brown"),
        ResistorColor::Red => String::from("Red"),
        ResistorColor::Orange => String::from("Orange"),
        ResistorColor::Yellow => String::from("Yellow"),
        ResistorColor::Green => String::from("Green"),
        ResistorColor::Blue => String::from("Blue"),
        ResistorColor::Violet => String::from("Violet"),
        ResistorColor::Grey => String::from("Grey"),
        ResistorColor::White => String::from("White"),
        // _ => String::from("value out of range"),
    }
}

pub fn colors() -> Vec<ResistorColor> {
    return all::<ResistorColor>().collect::<Vec<_>>();
}
