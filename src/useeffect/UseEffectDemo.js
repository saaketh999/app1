import React, { useEffect, useState } from "react";
/** Always write inline comments for the fuctions you create */
function UseEffectDemo() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("Component render");
  /** use effect is for loading initial data of the resource type */
  /** Template literals declaration 
  let a = `Hi Welcome ${resourceType}`;
  console.log("data:", a);*/

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  /** Syntax for didmount and didupdate of component 
  //component didmount
  useEffect(() => {}, []);
  //component didupdate
  useEffect(() => {}, [resourceType]);*/
  /** Fucntion is to show the post related data */
  const setPosts = () => {
    setResourceType("post");
  };
  /** Fucntion is to show the comments related data */
  const setComments = () => {
    setResourceType("comments");
  };
  /** Fucntion is to show the user related data */
  const setUsers = () => {
    setResourceType("users");
  };
  return (
    <div>
      <h4>Demo</h4>
      <div>
        <button onClick={setPosts}>Posts</button>
        <button onClick={setComments}>Comments</button>
        <button onClick={setUsers}>Users</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <prev>{JSON.stringify(item)}</prev>;
      })}
    </div>
  );
}

export default UseEffectDemo;
