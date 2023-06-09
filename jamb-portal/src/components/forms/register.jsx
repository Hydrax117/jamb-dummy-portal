import { useState } from "react";
import { Form, ErrorMsg, ErrorMsgContainer, Btn, TxtField } from "../form";

export const Register = () => {
  const [crn, setCrn] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (`${crn}` === "" || `${password}` === "") {
      document.getElementById("errorContainer").style.display = "block";
      document.getElementById("error").innerHTML = "* please fill in the above";
    } else {
    }
  };

  return (
    <>
      <div className="container">
        <Form>
          <div class="login">
            <TxtField
              className="txt"
              label="CRN"
              name="crn"
              type="text"
              value={crn}
              onChange={(e) => {
                setCrn(e.target.value);
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
              <ErrorMsg id="error"> </ErrorMsg>
            </ErrorMsgContainer>
            <br /> <br />
            <Btn onClick={handleSubmit}>Submit</Btn>
          </div>
        </Form>
      </div>
    </>
  );
};
