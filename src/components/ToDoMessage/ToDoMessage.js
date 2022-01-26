import React from "react";
import './NewToDoNotice.css';

function ToDoMessage({ loading, error }) {
    return(
        <div className="new-to-do">
            {(error && (!!loading || !loading)) && <p>{error}</p>}
            {(!!loading && !error) && <p>Cargando!</p>}
            {(!loading && !error) && <p>Add a new To-Do!</p>}
        </div>
    );
};

export { ToDoMessage };