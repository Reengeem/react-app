import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardData } from "../data";

function BasicExample() {
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        <h4 className="container justify-content-center">
          We Get You Covered in all You need, Just take Tour on our Packages
        </h4>
        {cardData.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.dataImg} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.details}</Card.Text>
              <Button variant="primary">Take a tour</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
