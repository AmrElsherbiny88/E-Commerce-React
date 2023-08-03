import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';
const ProductsDisplay = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)

      })
  })

  return (
    <>


      <Container>
        <Row>
          {products && products.map((product) => (


            <Col xl="3">

              <Card className='mb-5' style={{ height: "300px" }}>
                <Card.Img className='text-center m-auto' variant="top" style={{ height: "150px", width: "150px" }} src={product.image} />
                <Card.Body>
                  <h6>{product.title}</h6>
                  <p >
                    price: ${product.price}
                  </p>
                  <p className='cat-p'>
                    category: {product.category}
                  </p>
                </Card.Body>
              </Card>

            </Col>




          ))}
        </Row>
      </Container>


    </>
  )
}

export default ProductsDisplay