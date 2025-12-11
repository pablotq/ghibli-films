import React from "react";
import "./leaves.css";

export const Background: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
    return (
        <div className="bg-wrapper">
            <div id="leaves">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="bg-content">
                {children}
            </div>
        </div>
    );
}