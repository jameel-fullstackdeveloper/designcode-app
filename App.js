import React from 'react';
import { ScrollView} from 'react-native';
import styled from 'styled-components/native'
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

      <ScrollView horizontal={true} style={{paddingBottom:10}} showsHorizontalScrollIndicator={false}>
        <Card 
          image={require('./assets/background2.jpg')} 
          title="Styled Components"
          logo={require("./assets/logo-react.png")}
          caption="React"
          subtitle="SECTION 1 OF 10 "
          
          ></Card>
        <Card 
           image={require('./assets/background5.jpg')}
           title="Swift Componen"
           logo={require("./assets/logo-figma.png")}
           caption="Figma"
           subtitle="SECTION 2 OF 10 "
        
           ></Card>
      </ScrollView>

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


