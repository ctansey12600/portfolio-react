import React, { useState } from "react";
import styled from "styled-components";
import EditQuestion from "./EditQuestion";

const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  isolation: isolate;
  width: 1053px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 27px;
  width: 1053px;
  background: ${(props) => props.theme.primary};
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: -15px 0px;
  z-index: 1;
`;

const DropDown = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
  width: 999px;
  height: 84px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0px;
    gap: 4px;
    width: 275px;
    height: 84px;
    flex: none;
    order: 0;
    flex-grow: 0;
    select {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-style: none;
      padding: 0px 16px;
      gap: 8px;
      background: ${(props) => props.theme.color};
      width: 275px;
      height: 56px;
      border-radius: 8px;
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      font-family: "Martel";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      flex: none;
      order: 0;
      flex-grow: 0;
      color: ${(props) => props.theme.backgroundColor};
    }
  }
`;

const SubmitInput = styled.input`
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
  order: 1;
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

const DisplayQuestion = styled.h4`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: ${(props) => props.theme.secondary};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const RegQuestion = styled.h4`
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.secondary};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Reply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
  width: 1003px;
  height: 163px;
  background: ${(props) => props.theme.infoBody};
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 0;
`;

const DisplayReply = styled.h4`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: ${(props) => props.theme.infoTitle};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const RegReply = styled.h4`
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.infoTitle};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

function QuestionCard({
  question,
  answer,
  id,
  user,
  onDeleteQuestion,
  onUpdateQuestion,
}) {
  const [dropdownValue, setDropdownValue] = useState("Please select");
  const [isEditing, setIsEditing] = useState(false);

  const questionUser = user.charAt(0).toUpperCase() + user.slice(1);

  function handleDropdownChange(event) {
    setDropdownValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (dropdownValue === "Please select") {
      return;
    } else if (dropdownValue === "delete") {
      fetch(`http://localhost:9292/questions/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deletedQuestion) => onDeleteQuestion(deletedQuestion));
      setDropdownValue("Please select");
    } else if (dropdownValue === "edit" || "answer") {
      setIsEditing((isEditing) => !isEditing);
    } else {
      setDropdownValue("Please select");
    }
  }

  function handleCancelEdit() {
    setIsEditing((isEditing) => !isEditing);
    setDropdownValue("Please select");
  }

  function handleUpdateQuestion(updatedQuestion) {
    setIsEditing((isEditing) => !isEditing);
    setDropdownValue("Please select");
    onUpdateQuestion(updatedQuestion);
  }

  return (
    <>
      {isEditing && dropdownValue === "edit" ? (
        <EditQuestion
          id={id}
          question={question}
          onUpdateQuestion={handleUpdateQuestion}
          editType={dropdownValue}
          onCancelEdit={handleCancelEdit}
        />
      ) : (
        <QuestionAnswer>
          <Question>
            <DisplayQuestion>{questionUser} asked:</DisplayQuestion>
            <RegQuestion>{question}</RegQuestion>
            <DropDown onSubmit={handleSubmit}>
              <div>
                <select value={dropdownValue} onChange={handleDropdownChange}>
                  <option value="pleaseSelect">Please select</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                  {answer ? null : <option value="answer">Answer</option>}
                </select>
              </div>
              <SubmitInput type="submit" value="Submit"></SubmitInput>
            </DropDown>
          </Question>
          {isEditing && dropdownValue === "answer" ? (
            <EditQuestion
              id={id}
              question={question}
              onUpdateQuestion={handleUpdateQuestion}
              editType={dropdownValue}
              onCancelEdit={handleCancelEdit}
            />
          ) : answer ? (
            <Reply>
              <DisplayReply>Answer: </DisplayReply>
              <RegReply>{answer}</RegReply>
            </Reply>
          ) : null}
        </QuestionAnswer>
      )}
    </>
  );
}

export default QuestionCard;
