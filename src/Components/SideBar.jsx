import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="btn btn-primary" id="dropdown-basic">
          Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="driller">
            Crushers & Drillers
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="crane">
            Cranes & Lifts
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Loaders, Excavators & Tippers
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Road Equipment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default SideBar;
