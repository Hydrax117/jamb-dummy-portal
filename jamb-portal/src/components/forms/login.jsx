import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const signin_img = require("./images/signin-image.jpg");
export const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`);
  };

  return (
    <>
      <div class="main">
        <Button variant="contained">Hello World</Button>
      </div>
    </>
  );
};
