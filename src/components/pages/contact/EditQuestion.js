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

const Answer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10px 15px;
  gap: 15px;
  width: 1003px;
  background: var(--green);
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 0;
`;

const AnswerInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  width: 983px;
  background: ${(props) => props.theme.infoBody};
  border-radius: 8px;
  border-style: none;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.infoTitle};
`;

const AnswerSubmitFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
  width: 983px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const AnswerSubmit = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  width: 171px;
  height: 56px;
  background: ${(props) => props.theme.primary};
  border-radius: 8px;
  border-style: none;
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.secondary};
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

function EditQuestion({
  id,
  question,
  onUpdateQuestion,
  editType,
  onCancelEdit,
}) {
  const [editContent, setEditContent] = useState({
    questionEdit: question,
    answerEdit: "",
  });

  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setEditContent({
      ...editContent,
      [name]: value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const answerUpdate =
      editContent.answerEdit.length > 0 ? editContent.answerEdit : null;

    fetch(`http://localhost:9292/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: editContent.questionEdit,
        answer: answerUpdate,
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }

  return (
    <>
      {editType === "edit" ? (
        <EditForm onSubmit={handleFormSubmit}>
          <EditInput
            type="textarea"
            name="questionEdit"
            autoComplete="off"
            value={editContent.questionEdit}
            onChange={handleFormChange}
          />
          <EditSubmitFrame>
            <InputSubmit type="submit" value="Save"></InputSubmit>
            <InputSubmit
              type="button"
              value="Cancel"
              onClick={onCancelEdit}
            ></InputSubmit>
          </EditSubmitFrame>
        </EditForm>
      ) : (
        <Answer onSubmit={handleFormSubmit}>
          <AnswerInput
            type="textarea"
            name="answerEdit"
            autoComplete="off"
            value={editContent.answerEdit}
            placeholder="Enter Answer to Question"
            onChange={handleFormChange}
          />
          <AnswerSubmitFrame>
            <AnswerSubmit type="submit" value="Save"></AnswerSubmit>
            <AnswerSubmit
              type="button"
              value="Cancel"
              onClick={onCancelEdit}
            ></AnswerSubmit>
          </AnswerSubmitFrame>
        </Answer>
      )}
    </>
  );
}

export default EditQuestion;
