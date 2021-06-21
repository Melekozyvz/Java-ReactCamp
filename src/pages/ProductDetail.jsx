import React, { useEffect, useState } from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import { useParams } from "react-router";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../store/actions/CartActions";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setproduct] = useState({})

  useEffect(()=>{
      let productService=new ProductService();
      productService.getProductById(id).then(result=>setproduct(result.data.data));
  },[])
  const dispatch = useDispatch()
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.productName} Sepete Eklendi.`)
}
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={()=>handleAddToCart(product)}>
                Add To Cart
              </Button>
              <Button basic color="red" >
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>     
      </Card.Group>
    </div>
  );
}
