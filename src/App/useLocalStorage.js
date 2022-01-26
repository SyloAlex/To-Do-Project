import React from "react";

function useLocalStorage(itemName, initialValue) {
  //Loading and error state
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  //Creates item's state
  const [item, setItem] = React.useState(initialValue);
  
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

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  });

  //Function to save new changes of the state in local storage
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch(error) {
      setError(error)
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
};

export { useLocalStorage };