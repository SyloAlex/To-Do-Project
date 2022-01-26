import React from "react";
import { useStorageListener } from "./useStorageListener";
import './changeAlert.css';

function ChangeAlert({ sinc }) {
    const { show, toggleShow } = useStorageListener(sinc);
    if (show) {
        return (
            <div className="html-mask">
                <div className="change-container">
                    <p className="change-paragraph">Your list is not up to date!</p>
                    <button className="change-button"
                        onClick={() => toggleShow(false)}
                    >
                        Refresh Data
                    </button>
            </div>
            </div>
        )
    } else {
        return null;
    }
};

export { ChangeAlert };