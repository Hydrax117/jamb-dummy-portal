import { useState } from "react";
import { TextField } from "@mui/material";
import "../forms/login.css";
import { Form, Btn, ErrorMsg, ErrorMsgContainer, TxtField } from "../form";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (`${email}` === "" || `${password}` === "") {
      document.getElementById("errorContainer").style.display = "block";
      document.getElementById("error").innerHTML = "* please fill in the above";
    } else {
      if (`${email}`.includes("@")) {
        alert(`The email you entered was: ${email}`);
      }
    }
  };

  return (
    <>
      <div className="container">
        <Form class="form">
          <div class="login">
            <TxtField
              className="txt"
              label="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                document.getElementById("errorContainer").style.display =
                  "none";
              }}
            />
            <br /> <br />
            <TxtField
              className="txt"
              label="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                document.getElementById("errorContainer").style.display =
                  "none";
              }}
            />
            <br /> <br />
            <ErrorMsgContainer id="errorContainer">
              <ErrorMsg id="error">something happed</ErrorMsg>
            </ErrorMsgContainer>
            <br /> <br />
            <Btn onClick={handleSubmit}>Submit</Btn>
          </div>
        </Form>
      </div>
    </>
  );
};
