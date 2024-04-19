import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export const FourNotFour = () => {
  return (
    <>
    <section className="page-not-found section-ptb" style={{
      backgroundImage:"url('./img/404-page.avif')",
      backgroundPosition:"center",
      backgroundSize:"cover",
      height:"auto",
      minHeight:"500px"
    }}>
  <Container>
    <Row>
      <Col>
        <div className="search-error-wrapper">
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>

          <h2>
            <span>Page</span>
            <span>not</span>
            <span>be</span>
            <span>found</span>
          </h2>
          
          
          <p className="home-link">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
          

		      
          <a className="btn btn-style1" href="/" data-text="Go to home page">Go to home page</a>
          
        </div>
      </Col>
    </Row>
  </Container>
</section>
    </>
  )
}

