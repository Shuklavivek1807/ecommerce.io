import {useState} from 'react';
import validation from './ValidationForm';
import {Form,Button} from 'react-bootstrap';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddUser(){
    let navigate = useNavigate();
const[data,setData] = useState({
    title:'',price: '', category: '',description:'',image:'',rating:Number(''),stock:''
});
const {title, price, category, description,stock} = data;

const[errors,setErrors] = useState({});
const[correctData,setcorrectData] = useState(false);

const onInputChange = e =>{
    setData({...data,[e.target.name]:e.target.value});
}
const handleSubmit=(event)=>{
      setData({...data,[event.target.name]: (event.target.value)});
}
const submitHandler= async event=>{
    event.preventDefault();
    setErrors(validation(data));
    setcorrectData(true);
    if(Object.keys(errors).length === 0 && correctData){
        await Axios.post("http://localhost:3004/products",data);
        navigate("/adminpage");}
} 
const handleImage = (event) => {
    console.log(event.target.value.replace(/C:\\fakepath\\/g, "images/"));
    setData({ ...data, [event.target.name]: event.target.value.replace(/C:\\fakepath\\/g, "images/") });
};
    return(
        <>

<Form onSubmit={submitHandler} className="py-3 my-3 form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Title</Form.Label>
    <Form.Control name="title" value={title} id="title" onChange={handleSubmit} placeholder="Enter product title" />
    {errors.title && <p classname='error'>{errors.title}</p>}

    <Form.Label>Product Category</Form.Label>
    <Form.Control name="category" id="category" value={category} onChange={handleSubmit} placeholder="Enter product category" />
    {errors.category && <p className='error'>{errors.category}</p>}

    <Form.Label>Price</Form.Label>
    <Form.Control name="price" id="price" value={price} onChange={handleSubmit} placeholder=" ₹ Price" />
    {errors.price && <p className='error'>{errors.price}</p>}

    <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Product image</Form.Label>
    <Form.Control  type="file" name='image' onChange={handleImage} />
  </Form.Group>
  
  <Form.Label>Product rating</Form.Label>
  <Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name="rating" value='1' onChange={onInputChange}
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="rating" value='2' onChange={onInputChange}
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="rating" value='3' onChange={onInputChange}
        label="3"
        type={type}
        id={`inline-${type}-3`}
      />
      <Form.Check
        inline
        name="rating" value='4' onChange={onInputChange}
        label="4"
        type={type}
        id={`inline-${type}-4`}
      />
      <Form.Check
        inline
        name="rating" value='5' onChange={onInputChange}
        label="5"
        type={type}
        id={`inline-${type}-5`}
      />
    </div>
  ))}
</Form>
 <Form.Label>Product Description</Form.Label>
    <Form.Control id="description" name="description"  value={description} onChange={handleSubmit} placeholder="Enter product description" />
    {errors.description && <p className='error'>{errors.description}</p>}  <br/>
    

    <Form.Label>Product Stock</Form.Label>
  <Form>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="In"
        name="stock" value='In' onChange={handleSubmit}
        type={type}
        id={`inline-${type}-In`}
      />
      <Form.Check
        inline
        label="Out"
        name="stock" value='Out' onChange={handleSubmit}
        type={type}
        id={`inline-${type}-Out`}
      />
      </div>
  ))}
</Form>
  <Button variant="primary" type="reset" value="Reset">
    Reset
  </Button>&nbsp;&nbsp;
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
        </>
    )
}
export default AddUser;