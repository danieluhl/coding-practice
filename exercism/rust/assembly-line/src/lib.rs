// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

const COUNT_PER_HOUR: f64 = 221.0;
pub fn production_rate_per_hour(speed: u8) -> f64 {
    let max_production = speed as f64 * COUNT_PER_HOUR;
    match speed {
        // 100
        s if s < 5 => max_production,
        // 90
        s if s < 9 => 0.9 * max_production,
        // 77
        _ => 0.77 * max_production,
    }
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    return production_rate_per_hour(speed) as u32 / 60;
}
