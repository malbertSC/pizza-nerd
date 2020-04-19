import React from "react";
import Router from "next/router";
import {
  useDoughCalculatorInputState,
  useDoughCalculatorInputDispatch,
} from "../../contexts/doughCalculatorContext";

function PantryCheck() {
  const doughCalculatorInputState = useDoughCalculatorInputState();
  const doughCalculatorInputDispatch = useDoughCalculatorInputDispatch();
  const [hasBreadFlour, setBreadFlour] = React.useState<boolean>(
    doughCalculatorInputState.pantryCheck.hasBreadFlour
  );
  const [hasCaputo, setCaputo] = React.useState<boolean>(
    doughCalculatorInputState.pantryCheck.hasCaputo
  );
  const [hasWheat, setWheat] = React.useState<boolean>(
    doughCalculatorInputState.pantryCheck.hasWheat
  );
  const [hasSourdough, setSourdough] = React.useState<boolean>(
    doughCalculatorInputState.pantryCheck.hasSourdough
  );

  const onNext = (e: React.MouseEvent) => {
    e.preventDefault();
    doughCalculatorInputDispatch({
      type: "setPantry",
      payload: {
        hasBreadFlour,
        hasCaputo,
        hasWheat,
        hasSourdough,
      },
    });
    Router.push("/wizard/pizza-style");
  };
  return (
    <div>
      <div>
        Let's check out what we're working with here. Check off all of the
        ingredients that you either have or you can get.
      </div>
      <form>
        <label>
          Bread Flour
          <input
            name="hasBreadFlour"
            type="checkbox"
            checked={hasBreadFlour}
            onChange={(e) => setBreadFlour(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Caputo 00 Flour
          <input
            name="hasCaputo"
            type="checkbox"
            checked={hasCaputo}
            onChange={(e) => setCaputo(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Wheat Flour
          <input
            name="hasWheatFlour"
            type="checkbox"
            checked={hasWheat}
            onChange={(e) => setWheat(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Sourdough Starter
          <input
            name="hasSourdough"
            type="checkbox"
            checked={hasSourdough}
            onChange={(e) => setSourdough(e.target.checked)}
          />
        </label>
        <button type="submit" onClick={(e) => onNext(e)}>
          Next
        </button>
      </form>
    </div>
  );
}

export default PantryCheck;
