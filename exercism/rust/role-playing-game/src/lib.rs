use std::cmp::min;

pub struct Player {
    pub health: u32,
    pub mana: Option<u32>,
    pub level: u32,
}

impl Player {
    fn new(level: u32) -> Player {
        Self {
            health: 100,
            mana: if level >= 10 { Some(100) } else { None },
            level,
        }
    }

    pub fn revive(&self) -> Option<Player> {
        match self.health {
            0 => Some(Player::new(self.level)),
            _ => None,
        }
    }

    pub fn cast_spell(&mut self, mana_cost: u32) -> u32 {
        match self.mana {
            Some(m) => {
                if m >= mana_cost {
                    self.mana = Some(m - mana_cost);
                    return mana_cost * 2;
                } else {
                    0
                }
            }
            None => {
                self.health = self.health - min(self.health, mana_cost);
                0
            }
        }
    }
}
