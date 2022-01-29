import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
  const { sincItem, loading, error, item } = state;
  
  //Action creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  }
  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.success, payload: parsedItem });
  }
  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  }
  const onSinc = () => {
    dispatch({ type: actionTypes.sinc });
  }
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Gets info from local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        //Parse info from local storage
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        };
        onSuccess(parsedItem)
      } catch(error) {
        onError(error)
      }
    }, 3000);
  }, [sincItem]);

  //Function to save new changes of the state in local storage
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };

  const sincNewItems = () => {
    onSinc();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincNewItems
  };
};

//Use reduce funcions and initial state
const initialState = (initialValue) => ({
  sincItem: true, 
  loading: true, 
  error: false, 
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sinc: "SINC"
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {...state, error: true},
  [actionTypes.success]: {...state, loading: false, item: payload, sincItem: true},
  [actionTypes.save]: {...state, item: payload},
  [actionTypes.sinc]: {...state, sincItem: false, loading: true}
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };