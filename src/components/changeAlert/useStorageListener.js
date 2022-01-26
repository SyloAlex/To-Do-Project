import React from "react";

function useStorageListener(sinc) {
    const [stroageChange, setStorageChange] = React.useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'toDos_v1'){
            setStorageChange(true);
        }
    });
    const toggleShow = () => {
        sinc()
        setStorageChange(false);
    }
    
    return {
        show: stroageChange,
        toggleShow
    }
};

export { useStorageListener };