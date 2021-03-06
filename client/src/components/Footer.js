import React from "react";
import "../App.css";
import { Container, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import SnackBasket from "../assets/SnackBasket.png";
import axios from "axios";

const Footer = () => {
  const history = useHistory();

  const getRandom = () => {
    axios
      .get("/api/recipe/random")
      .then(({ data }) => {
        history.push(`/recipe/${data.recipes[0].id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      fluid
      className="main-footer d-flex justify-content-around text-center"
    >
      <div className="d-flex flex-column">
        <Link to={`/`}>
          <img className="logo" alt="logo" width="150px" src={SnackBasket} />
        </Link>
        <p>
          <em> Get your Snack on!</em>
        </p>
      </div>
      <div className="d-flex flex-column">
        <h4>Menu</h4>
        <Button
          variant="link"
          style={{ cursor: "pointer", color: "white" }}
          onClick={getRandom}
        >
          Random Recipe
        </Button>
        <Link to="/about">About</Link>
      </div>
      <div className="d-flex flex-column">
        <h4>Follow us:</h4>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/fmarq/"
        >
          Francesca
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/eawatkins/"
        >
          Liz
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/christopher-falcon/"
        >
          Chris
        </a>
      </div>
    </Container>
  );
};

export default Footer;
