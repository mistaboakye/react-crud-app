import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUser from "./EditUser";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteuser(props.user.id);
  };

  return (
    <>
      <div className="col-md-2">{props.user.name}</div>
      <div className="col-md-3">{props.user.email}</div>
      <div className="col-md-2">{props.user.country}</div>
      <div className="col-md-5">
        <button className="btn btn-success" href="#" onClick={handleShow}>
          Edit
        </button>

        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUser
              userinfo={props.user}
              updateUser={props.updateUser}
              closeModal={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default User;
