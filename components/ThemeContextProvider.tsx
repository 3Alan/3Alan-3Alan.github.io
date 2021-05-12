import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext({});

// reducer
export const UPDATE_THEME = 'UPDATE_THEME';
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.value;
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, 'light');
  return <ThemeContext.Provider value={{ theme, dispatch }}>{children}</ThemeContext.Provider>;
};
