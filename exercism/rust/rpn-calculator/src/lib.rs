#[derive(Debug)]
pub enum CalculatorInput {
    Add,
    Subtract,
    Multiply,
    Divide,
    Value(i32),
}


pub fn evaluate(inputs: &[CalculatorInput]) -> Option<i32> {
    let mut val1 = 0;
    let mut val2 = 0;
    let mut result = 0;
    for token in inputs {
        result = match token {
            CalculatorInput.Add => val1 + val2,
            CalculatorInput.Subtract => val1 - val2,
            CalculatorInput.Multiply => val1 * val2,
            CalculatorInput.Divide => val1 / val2,
            CalculatorInput.Value(n) => {
                if v
            }


        };
        return result;
    }
}
