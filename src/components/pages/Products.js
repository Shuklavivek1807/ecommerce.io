import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container,Col,Row, Form,Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [aorder, setAOrder] = useState("ASC");
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3004/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
       Loading..
    </>
    );
  };

  const filterProduct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }
  const filterDelivery = (col) => {
    const updatedList = data.filter((x)=>x.delivery === col);
    setFilter(updatedList)
}

const filterStock = (col) => {
  const updatedList = data.filter((x)=>x.stock === col);
  setFilter(updatedList)
}
const filterStar = (col) => {
  const updatedList = data.filter((x)=>x.rating === col);
  setFilter(updatedList)
}
const sorting = (col) => {
  if (aorder == "ASC") {
    const sorted = [...filter].sort((a,b)=>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setFilter(sorted)
    setAOrder("DSC")
  }
  if (aorder == "DSC") {
    const sorted = [...filter].sort((a,b)=>
    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setFilter(sorted)
    setAOrder("ASC")
  }
}
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text lead fw-bold">
                      <BiRupee/>{product.price}
                    </p>
            {/* <Button className="btn btn-light btn-outline-dark" href={`/products/${product.id}`} disabled={product.stock == "Out"}>{product.stock == "Out" ? "Out of Stock" : "Add to Cart"}</Button> */}
            {product.stock == "Out" ? <span className="btn btn-light btn-outline-dark disabled">Out of Stock</span> : <NavLink to={`/products/${product.id}`} className="btn btn-light btn-outline-dark" > Add to Cart </NavLink>}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (

    <Container>
    <div className="row py-4">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
  <Row>
    <Col sm={2}><div className=" filter">
<span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          onChange={() =>
            sorting("title")
          }
        />
      </span><br/>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          onChange={() =>
            sorting("title")
          }
        />
      </span><br/>
      <span>
      <Form.Check
          inline
          label="Fast Delivery"
          name="group2"
          type="checkbox"
          onChange={() =>
            filterDelivery("fast")
          }
        />
      </span><br/>
      <span>
      <Form.Check
          inline
          label="In Stock"
          name="group2"
          type="checkbox"
          onChange={() =>
            filterStock("In")
          }
        />
      </span><br/>
      <span>
      Rating &nbsp;
      <button className="btn buttonCart py-1 btn-outline-dark me-2" onClick={()=>filterStar(1)}>1 <AiFillStar/></button><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn buttonCart btn-outline-dark me-2" onClick={()=>filterStar(2)}>2 <AiFillStar/></button><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn buttonCart btn-outline-dark me-2" onClick={()=>filterStar(3)}>3 <AiFillStar/></button><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn buttonCart btn-outline-dark me-2" onClick={()=>filterStar(4)}>4 <AiFillStar/></button><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn buttonCart btn-outline-dark me-2" onClick={()=>filterStar(5)}>5 <AiFillStar/></button><br/><br/>
      </span>
        </div></Col>
    <Col sm={10}> <div>
      <div className="container ">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div></Col>
  </Row>
</Container>
  );
};

export default Products;