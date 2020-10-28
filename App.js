import React from 'react';
import styled from 'styled-components'
import Card from './components/Card';

export default function App() {
  return (
    <Container>
      <Titlebar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Jameel</Name>
      </Titlebar>
      <SubTitle>Learning Continue...</SubTitle>

      <Card></Card>

    </Container>
  );
}

const Container = styled.View`
  flex:1;
  background-color:#f0f3f5;
  
`
const Titlebar = styled.View`
  width:100%;
  margin-top:50px;
  padding-left:80px;
`

const Avatar = styled.Image`
    width:44px;
    height:44px;
    border-radius:22px;
    margin-left:20px;
    position:absolute;
    top:0px;
    left:0px;
`
const Title = styled.Text`
  font-size: 16px;
  font-weight:500;
  color:#b8bece;
`

const Name = styled.Text`
  font-size: 20px;
  font-weight:bold;
  color:#3c4560;
  
`
const SubTitle = styled.Text`
  font-size:15px;
  text-transform:uppercase;
  color:#b8bece;
  font-weight:600;
  margin-top:50px;
  margin-left:20px;
`


