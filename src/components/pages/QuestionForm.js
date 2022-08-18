//DONE - Needs CSS
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 42px 64px;
  gap: 24px;
  width: 792px;
  height: 570px;
  background: var(--green);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NameSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 29px;
  width: 664px;
  height: 84px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 317.5px;
  height: 84px;
  flex: none;
  order: 0;
  flex-grow: 1;
  label {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.infoBody};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    width: 317.5px;
    height: 56px;
    background: ${(props) => props.theme.infoBody};
    border-radius: 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const LastName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 317.5px;
  height: 84px;
  flex: none;
  order: 1;
  flex-grow: 1;
  label {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.infoBody};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    width: 317.5px;
    height: 56px;
    background: ${(props) => props.theme.infoBody};
    border-radius: 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const EmailSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 664px;
  height: 84px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  label {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.infoBody};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 8px;
    width: 664px;
    height: 56px;
    background: ${(props) => props.theme.infoBody};
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const QuestionArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 664px;
  height: 190px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  label {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.infoBody};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 8px;
    width: 664px;
    height: 162px;
    background: ${(props) => props.theme.infoBody};
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  width: 257px;
  height: 56px;
  background: ${(props) => props.theme.primary};
  border-radius: 8px;
  border-style: none;
  flex: none;
  order: 3;
  flex-grow: 0;
  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.secondary};
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

function QuestionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).get("/db", async (req, res) => {
      try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM test_table");
        const results = { results: result ? result.rows : null };
        res.render("pages/db", results);
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      question: "",
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <NameSection>
        <FirstName>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First Name"
          ></input>
        </FirstName>
        <LastName>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last Name"
          ></input>
        </LastName>
      </NameSection>
      <EmailSection>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
        ></input>
      </EmailSection>
      <QuestionArea>
        <label>Your Message</label>
        <input
          type="textarea"
          name="question"
          onChange={handleChange}
          value={formData.question}
          placeholder="Ask away..."
        ></input>
      </QuestionArea>
      <SubmitButton type="submit">Submit Message</SubmitButton>
    </Form>
  );
}

export default QuestionForm;
