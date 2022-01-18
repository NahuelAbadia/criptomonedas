import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    text-tranform: uppercase;
    text-align: center;
`

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error
