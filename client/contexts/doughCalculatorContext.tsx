import React from "react";

interface DoughCalculatorInput {
  pantryCheck: {
    hasBreadFlour: boolean;
    hasCaputo: boolean;
    hasWheat: boolean;
    hasSourdough: boolean;
  };
}

export const defaultDoughCalculatorInput: DoughCalculatorInput = {
  pantryCheck: {
    hasBreadFlour: false,
    hasCaputo: false,
    hasWheat: false,
    hasSourdough: false,
  },
};

type Action =
  | { type: "setPantry"; payload: DoughCalculatorInput["pantryCheck"] }
  | { type: "changeme" };
type Dispatch = (action: Action) => void;
type State = DoughCalculatorInput;
type DoughCalculatorInputProviderProps = { children: React.ReactNode };
const DoughCalculatorInputStateContext = React.createContext<State | undefined>(
  defaultDoughCalculatorInput
);
const DoughCalculatorInputDispatchContext = React.createContext<
  Dispatch | undefined
>(undefined);
function doughCalculatorInputReducer(state: State, action: Action) {
  switch (action.type) {
    case "setPantry": {
      return { pantryCheck: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function DoughCalculatorInputProvider({
  children,
}: DoughCalculatorInputProviderProps) {
  const [state, dispatch] = React.useReducer(
    doughCalculatorInputReducer,
    defaultDoughCalculatorInput
  );
  return (
    <DoughCalculatorInputStateContext.Provider value={state}>
      <DoughCalculatorInputDispatchContext.Provider value={dispatch}>
        {children}
      </DoughCalculatorInputDispatchContext.Provider>
    </DoughCalculatorInputStateContext.Provider>
  );
}
function useDoughCalculatorInputState() {
  const context = React.useContext(DoughCalculatorInputStateContext);
  if (context === undefined) {
    throw new Error(
      "useDoughCalculatorInputState must be used within a DoughCalculatorInputProvider"
    );
  }
  return context;
}
function useDoughCalculatorInputDispatch() {
  const context = React.useContext(DoughCalculatorInputDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDoughCalculatorInputDispatch must be used within a DoughCalculatorInputProvider"
    );
  }
  return context;
}
export {
  DoughCalculatorInputProvider,
  useDoughCalculatorInputState,
  useDoughCalculatorInputDispatch,
};
