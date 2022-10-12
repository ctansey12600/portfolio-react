import React, { useState } from "react";
import styled from "styled-components";

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 27px;
  gap: 20px;
  width: 1053px;
  background: ${(props) => props.theme.primary};
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: -15px 0px;
  z-index: 1;
`;

const EditInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  width: 999px;
  background: ${(props) => props.theme.secondary};
  border-radius: 8px;
  border-style: none;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.primary};
`;

const EditSubmitFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
  width: 999px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const InputSubmit = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  width: 171px;
  height: 56px;
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  border-style: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.color};
  &:hover {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

function EditQuestion({ id, question, onUpdateQuestion }) {
  const [questionEdit, setQuestionEdit] = useState(question);

  function handleFormChange(event) {
    setQuestionEdit(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:9292/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: questionEdit,
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }

  return (
    <EditForm onSubmit={handleFormSubmit}>
      <EditInput
        type="textarea"
        name="question"
        autoComplete="off"
        value={questionEdit}
        onChange={handleFormChange}
      />
      <EditSubmitFrame>
        <InputSubmit type="submit" value="Save" />
      </EditSubmitFrame>
    </EditForm>
  );
}

export default EditQuestion;
