import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { ModalContext } from "./context/modal-context";
import CustomModal from "./CustomModal";
const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  function handleNavigate(path) {
    setShowModal(path);
    navigate("/problem-2/" + path);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => {
                handleNavigate("all");
              }}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                handleNavigate("us");
              }}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      <CustomModal
        isShow={showModal === "all"}
        onShowModal={setShowModal}
        onNavigate={handleNavigate}
      />
      <CustomModal
        isShow={showModal === "us"}
        onShowModal={setShowModal}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default Problem2;
