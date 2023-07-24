import React from 'react';
import { styled } from '@mui/material';
import img from '../image/indian-169928_960_720.jpg';
const HomeSection = styled('section')`
  background-color: #f8f8f8;
  padding: 50px;
  text-align: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const Title = styled('h1')`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

const Content = styled('p')`
font-size: 18px;
  color: #555555;
  margin-top: 20px;
`;

const Home = () => {
  
  const imageUrl=`${img}`;
  return (
    <HomeSection imageUrl={imageUrl}>
      <Title>Welcome to Our BengalTechAcademy</Title>
      <Content>
      Bengal Tech Academy provides technical education and training in various fields, equipping students with the skills needed to thrive in today's evolving technological landscape. With experienced instructors, a wide range of courses, and a focus on project-based learning, students gain practical experience and develop a strong foundation in their chosen area of study. The academy fosters a supportive and collaborative learning environment, encouraging discussions, collaboration, and networking. Through workshops, seminars, and industry partnerships, students stay updated with the latest trends and technologies. Bengal Tech Academy empowers students to succeed in the technology industry, offering a comprehensive learning environment for career growth.
    </Content>
    </HomeSection>
  );
};

export default Home;



