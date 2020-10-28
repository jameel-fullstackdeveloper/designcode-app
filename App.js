import React from 'react';
import { SafeAreaView,ScrollView } from 'react-native';
import styled from 'styled-components/native'
import Card from './components/Card';
import Logo from './components/Logo'
import Course from './components/Course';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
      <Titlebar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Jameel</Name>
        <Ionicons  
          name ="ios-notifications"
          size={32}
          color="#4775f2"
          style= {{ position : "absolute", right:20, top:5}}
        />
      </Titlebar>

    <ScrollView 
      horizontal={true}
      style={{flexDirection:"row", padding:20, paddingLeft:12, paddingTop:30}}
      showsHorizontalScrollIndicator={false}
     >
      
      {logos.map((logo,index) => (
      <Logo
          key={index}
          image={logo.image}
          text={logo.text}
      />
      ))}
     </ScrollView> 

      <SubTitle>Learning Continue...</SubTitle>

      <ScrollView horizontal={true} 
      style={{paddingBottom:10}} 
      showsHorizontalScrollIndicator={false}>

      {cards.map((card,index) => (
          <Card 
          key={index}
          image={card.image} 
          title={card.title}
          logo={card.logo}
          caption={card.caption}
          subtitle={card.subtitle}
          
          ></Card>
        

      ))}

        </ScrollView>


        <SubTitle>Popular Courses...</SubTitle>

        {courses.map((course, index) => (
  
  <Course
    key={index}
    image={course.image}
    title={course.title}
    subtitle={course.subtitle}
    logo={course.logo}
    author={course.author}
    avatar={course.avatar}
    caption={course.caption}
  />
))}


      </ScrollView>
    </SafeAreaView>
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
  margin-top:20px;
  margin-left:20px;
`

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];


const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
