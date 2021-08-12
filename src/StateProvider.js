import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const StateContext = createContext();

//used to wrap app to provide data to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);
