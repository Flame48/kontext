import { Stack, Card, Container, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import API_ROOT_URL from "../../tmpAPI";

function BookCard({title, author, publishDate, img, id}) {
  const nav = useNavigate();
  return <Card
    onClick={(e) => {
      console.log(e);
      nav(`${id}`)
    }}
    style={{cursor: 'pointer'}}
  >
    <Card.Img variant="top" src={API_ROOT_URL+img.src} style={{maxHeight: '10rem', objectFit: 'cover'}} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Author: {author}
        <br />
        Published: {publishDate}
      </Card.Text>
    </Card.Body>
  </Card>
}

function BookList({bookData}) {
  return <Container>
    <h2 style={{margin: '1rem 0'}}>Books:</h2>
    <Row>
      {Object.keys(bookData).map(key => (
        <Col key={key} xs={12/1} sm={12/1} md={12/2} lg={12/3} xl={12/4}>
          <BookCard {...bookData[key]} id={key}/>
        </Col>
      ))}
    </Row>
  </Container>
}

export default BookList