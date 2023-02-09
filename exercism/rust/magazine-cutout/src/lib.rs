use std::collections::HashMap;

pub fn can_construct_note(magazine: &[&str], note: &[&str]) -> bool {
    // get count of each work in magazine
    let mut word_counts = HashMap::new();
    for word in magazine {
        word_counts
            .entry(word)
            .and_modify(|count| *count += 1)
            .or_insert(1);
    }

    for word in note {
        let word_count = word_counts.get(word);
        match word_count {
            Some(n) if *n > 0 => {
                word_counts.insert(word, n - 1);
            }
            _ => {
                return false;
            }
        };
    }
    return true;
}
