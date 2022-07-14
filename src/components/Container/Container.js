import React from "react";
import "./Container.css";
import "../Tipografia/tipografia.css";

function Container(props) {
    return (
        <div className="bigcard-container">
            <img src={props.imagem} />
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </div>
    );
}

export default Container;
