pub type Approval {
  Yes
  No
  Maybe
}

pub type Cuisine {
  Korean
  Turkish
}

pub type Genre {
  Crime
  Romance
  Horror
  Thriller
}

pub type Activity {
  BoardGame
  Chill
  Movie(Genre)
  Restaurant(Cuisine)
  Walk(Int)
}

pub fn rate_activity(activity: Activity) -> Approval {
  // - Playing a board game: no.
  // - Chill out: no.
  // - Watch a movie: yes if it is a romantic movie; otherwise, no.
  // - Go to a restaurant: yes if the cuisine is Korean, maybe if it is Turkish.
  // - Take a walk: yes if the walk is more than eleven kilometers; maybe if it is more than six kilometers; otherwise, no.
  case activity {
    Movie(Romance) -> Yes
    Restaurant(Korean) -> Yes
    Restaurant(Turkish) -> Maybe
    Walk(d) if d > 11 -> Yes
    Walk(d) if d > 6 -> Maybe
    _ -> No
  }
}
