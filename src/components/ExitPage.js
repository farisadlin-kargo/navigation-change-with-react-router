import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const ExitPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <h1>You have been successfully exited from main page</h1>
        <Button onClick={() => history.push("/")}>Go Back To Home Page</Button>
      </Row>
    </Container>
  );
};

export default ExitPage;
