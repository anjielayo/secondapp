import React,{useEffect,useState} from 'react';
import axios from "axios";

//baseURL contains the first post from the /posts endpoint
const baseURL = "https://jsonplaceholder.typicode.com/posts";

const NewCard = () => {
  //setting the state variable.The posts will be used in our UI while the setPost will be used to update the state of the data gotten from the API
  const [post, setPost] = useState([]);

  //everytime the page is rendered data from the API is fetched. This involves importing Axios, using the .get() method to make a GET request to your endpoint, and using a .then() callback to get back all of the response data.
  // The response is returned as an object. The data (which is in this case a post with id, title, and body properties) is put in a piece of state called post which is displayed in the component.
  // setPost() updates the state
  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  //if nothing return no post
  if (!post) return 'No post';

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default NewCard