import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const[data,setData] = useState({
      title:'',price: '', category: ' ',description:'',image:'',rating:[]
    });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/products/${id}`);
    setData(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">title: {data.title}</li>
        <li className="list-group-item">category: {data.category}</li>
        <li className="list-group-item">price: {data.price}</li>
        <li className="list-group-item">rating: {data.rating}</li>
        <li className="list-group-item">age: {data.age}</li>
        <li className="list-group-item">description: {data.description}</li>
      </ul>
    </div>
  );
};

export default View;