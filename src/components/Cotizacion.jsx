import React from 'react'
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color:#fff;
    font-family: Arial, Helvetica, san-serif;
`
const Precio = styled.p`
    font-size: 30px;
    font-weight: bold
`
const Info = styled.p`
    font-size:18px;
`
const Span = styled.span`
    font-weight: bold;
`

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;

    return (
        <ResultadoDiv>
            <Precio>El precio es : <Span>{resultado.PRICE}</Span></Precio>
            <Info>El precio mas alto del dia es : <Span>{resultado.HIGHDAY}</Span></Info>
            <Info>El precio mas bajo del dia es : <Span>{resultado.LOWDAY}</Span></Info>
            <Info>Variación en las últimas 24 horas: <Span>{resultado.CHANGEPCT24HOUR}</Span></Info>
            <Info>Ultima actualización: <Span>{resultado.LASTUPDATE}</Span></Info>
        </ResultadoDiv>
    )
}

export default Cotizacion
