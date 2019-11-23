export const addItems = feature => {
  return {
    type: ADD_FEATURES,
    payload: feature
  };
};

export const removeItems = feature => {
  return {
    type: REMOVE_FEATURES,
    payload: feature
  };
};

export const updatePrice = total => {
  return {
    type: UPDATE_TOTAL,
    payload: total
  };
};

export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
