import React from 'react'
import styled from 'styled-components'

const Card = (props) => (
    <Container>
            <Title>i am box</Title>
    </Container>
)

export default Card;

const Container = styled.View`
    width: 315px;
    height:280px;
    border-radius: 14px;
    background-color:white;
    margin-left:20px;
    margin-top:20px;
`
const Title = styled.Text`
    color:red;
`