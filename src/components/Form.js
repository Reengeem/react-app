import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function TextControlsExample() {
  return (
    <Container>
      <div className="container mb-5 mt-5 ">
        <Container>
          <h2 className="display-4 mt-3 text-center">Get in Touch</h2>
        </Container>
        <Form className="container m-3t form-area">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label className="form-control">Your Name</Form.Label> */}
            <Form.Control type="email" placeholder="Enter Your Name" />
            <Form.Control type="email" placeholder="Email" />
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} />
            <input
              class="btn btn-primary mt-3"
              type="submit"
              value="Submit"
              placeholder="Please type your message here"
            ></input>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default TextControlsExample;
