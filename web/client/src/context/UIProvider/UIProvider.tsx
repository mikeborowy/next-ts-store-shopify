import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const ACTIONS = {
  OPEN_SIDEBAR: "OPEN_SIDEBAR",
  CLOSE_SIDEBAR: "CLOSE_SIDEBAR",
} as const;

const initialState = { isSidebarOpen: false };

const stateModifiers = {
  onOpenSidebar: () => {},
  onCloseSidebar: () => {},
};

type ActionType = keyof typeof ACTIONS;

type Action = { type: ActionType };
// type Dispatch = (action: Action) => void;
// type UIStateContextType = { state: State; dispatch: Dispatch };

export type State = typeof initialState;
export type StateModifiers = typeof stateModifiers;

type UIStateContextType = State & StateModifiers;

const UIContext = createContext<UIStateContextType>({
  ...stateModifiers,
  ...initialState,
});
UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
  }
}

type UIProviderType = {
  children: ReactNode;
};

const UIProvider = ({ children }: UIProviderType) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const onOpenSidebar = useCallback(
    () => dispatch({ type: "OPEN_SIDEBAR" }),
    []
  );

  const onCloseSidebar = useCallback(
    () => dispatch({ type: "CLOSE_SIDEBAR" }),
    []
  );

  const value = useMemo(() => {
    return {
      ...state,
      onOpenSidebar,
      onCloseSidebar,
    };
  }, [state.isSidebarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }

  return context;
};

export { UIProvider, useUI };
