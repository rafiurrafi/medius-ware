import { Modal, Button } from "react-bootstrap";
const ContactDetails = ({ isShow, onShow, contact }) => {
  return (
    <Modal
      show={isShow}
      onHide={() => onShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact -details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{contact?.country?.name}</h1>
        <p>{contact?.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactDetails;
