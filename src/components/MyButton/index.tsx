import React from "react";
import styled from "styled-components";
import IMyButton from "./interface";

const Button = styled.button`
    border: 1px solid blue;
    margin-bottom: 8px;
    border-radius: 5px;
    color: black;
    height: 30px;
    width: 150px;
`

function MyButton(props: IMyButton) {
    return (
        <Button>{props.chldren || "Botao"}</Button>
    )
}

export default MyButton;