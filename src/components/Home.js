import React from 'react'
import styled from "styled-components";
import Employees from "../Employees.json";

const Mystyle = styled.h1`
  color: red;
  text-align: center;
`;
const Pastyle = styled.p`
  text-align: center;
`;

const Home = ({name}) => {
  return (
    <div>
      <Mystyle>Welcome {name}</Mystyle>
      {/*{console.log(Employees)}*/}
      <Pastyle>Hello {Employees[1].name}</Pastyle>
    </div>
  );
}

export default Home