import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'

const Container=styled.div`
  width:800px;
  height:400px;
  background-color:blue;
  margin:25px auto auto auto;
  text-align:center;
  padding: 25px;
  color:white;
  
  `

const Card = () => {
  //everytime the page is rendered data from the API is fetched
  useEffect(() => {
    getPost();
  }, []);
  //setting the state variable.The posts will be used in our UI while the setPost will be used to update the state of the data gotten from the API
  const [posts, setPost] = useState([]);

  //fetching data from the API using promise
  const getPost = async () => {
    const reply = await fetch("https://api.chucknorris.io/jokes/random");
    //converting the API response to JSON
    const data = await reply.json();
    //to see the json data in console
    console.log(data);
    //updating the state
    setPost(data);
  };

  return (
    <Container>
      <h1>id:{posts.id}</h1>
      <h1>url:{posts.url}</h1>
      <h1>age:{posts.updated_at}</h1>
      <button onClick={getPost}> See new info </button>
    </Container>
  );
}

export default Card