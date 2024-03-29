pub fn divmod(dividend: i16, divisor: i16) -> (i16, i16) {
    return (dividend / divisor, dividend % divisor);
}

pub fn evens<T>(iter: impl Iterator<Item = T>) -> impl Iterator<Item = T> {
    // return iter
    //     .enumerate()
    //     .filter(|(i, _)| i % 2 == 0)
    //     .map(|(_, val)| val);
    // iter.step_by(2)
    iter.enumerate().filter_map(|(i, val)| {
        if i % 2 == 0 {
            return Some(val);
        }
        return None;
    })
}

pub struct Position(pub i16, pub i16);
impl Position {
    pub fn manhattan(&self) -> i16 {
        let Position(x, y) = &self;
        x.abs() + y.abs()
    }
}
