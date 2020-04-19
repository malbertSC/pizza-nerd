import { useDoughCalculatorInputState } from "../../contexts/doughCalculatorContext";

function PizzaStyle() {
  const doughCalculatorInputState = useDoughCalculatorInputState();
  return (
    <div>
      <div>Selections</div>
      <div>
        Caputo: {doughCalculatorInputState.pantryCheck.hasCaputo ? "yes" : "no"}
      </div>
    </div>
  );
}

export default PizzaStyle;
