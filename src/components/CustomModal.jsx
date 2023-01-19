import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ContactDetails from "./ContactDetails";

const BASE_URL = "https://contact.mediusware.com/api/";

function CustomModal({ isShow, onShowModal, onNavigate }) {
  const [data, setData] = useState([]);
  const [openModalC, setOpenModalC] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [contact, setContact] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const modalBodyRef = useRef();

  const { path } = useParams();
  const navigate = useNavigate();

  function closeNavigate() {
    onShowModal(false);
    navigate("/problem-2");
  }

  function getUrl(path) {
    const allPath = BASE_URL + "contacts/";
    const usPath = BASE_URL + "country-contacts/United%20States/";
    return path === "all" ? allPath : "us" ? usPath : null;
  }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleContactDetails = (contact) => {
    setOpenModalC(true);
    setContact(contact);
  };

  useEffect(() => {
    fetch(getUrl(path))
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [path]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/?search=" +
        searchQuery
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [searchQuery]);

  function handleScroll() {
    console.log("Hello");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const filteredData = isChecked
    ? data.filter((contact, idx) => idx % 2)
    : data;
  return (
    <>
      <Modal show={isShow}>
        <Modal.Header>
          <Modal.Title>
            <Button
              style={{ backgroundColor: "#46139f" }}
              onClick={() => onNavigate("all")}
            >
              All Contacts
            </Button>
            <Button
              style={{ backgroundColor: "#ff7f50" }}
              onClick={() => onNavigate("us")}
            >
              US Contacts
            </Button>
            <Button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #46139f",
                color: "#444",
              }}
              onClick={closeNavigate}
            >
              Close
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: "40vh", overflowY: "auto" }}
          ref={modalBodyRef}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={searchQuery}
              onChange={handleSearchQuery}
              placeholder="Search for Contact"
              aria-label="Search for Contact"
              aria-describedby="search-input"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search-input"
            >
              Search
            </button>
          </div>
          <div className="form-check">
            <input
              classname="form-check-input"
              type="checkbox"
              id="check-even"
              name="topping"
              value="even"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <label classname="form-check-label" htmlFor="check-even">
              Default checkbox
            </label>
          </div>
          <div className="mt-5">
            <ul class="list-group">
              {filteredData?.map((contact, idx) => (
                <li
                  class="list-group-item"
                  key={contact.id}
                  onClick={() => handleContactDetails(contact)}
                  style={{ cursor: "pointer" }}
                >
                  <p>
                    {contact.id} : {contact.country.name} - {contact.phone}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>Ohh boy !!</Modal.Footer>
      </Modal>
      <ContactDetails
        isShow={openModalC}
        onShow={setOpenModalC}
        contact={contact}
      />
    </>
  );
}
export default CustomModal;
