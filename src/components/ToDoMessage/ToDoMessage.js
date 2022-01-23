import React from "react";
import { ToDoContext } from "../../ToDoContext/ToDoContext";
import './NewToDoNotice.css';

function ToDoMessage() {
    const { loading, error } = React.useContext(ToDoContext);
    return(
        <div className="new-to-do">
            {(error && (!!loading || !loading)) && <p>{error}</p>}
            {(!!loading && !error) && <p>Cargando!</p>}
            {(!loading && !error) && <p>Add a new To-Do!</p>}
        </div>
    );
};

export { ToDoMessage };