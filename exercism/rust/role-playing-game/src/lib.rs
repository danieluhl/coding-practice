// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

pub struct Player {
    pub health: u32,
    pub mana: Option<u32>,
    pub level: u32,
}

impl Player {
    pub fn revive(&self) -> Option<Player> {
        let ten: u32 = 10;
        match self {
            Player {
                health: 0,
                mana,
                level,
            } if level >= &ten => Some(Player {
                health: 100,
                mana: Some(100),
                level: *level,
            }),
            Player {
                health: 0,
                mana,
                level,
            } if level < &ten => Some(Player {
                health: 100,
                mana: None,
                level: *level,
            }),
            _ => None,
        }
    }

    pub fn cast_spell(&mut self, mana_cost: u32) -> u32 {
        match self {
            Player {
                health,
                mana: None,
                level,
            } => {
                self.health = if self.health <= mana_cost {
                    0
                } else {
                    self.health - mana_cost
                };
                return 0;
            }
            Player {
                health,
                mana: Some(m),
                level,
            } => {
                if let true = *m >= mana_cost {
                    self.mana = Some(*m - mana_cost);
                    return mana_cost * 2;
                }
                return 0;
            }
        }
    }
}
