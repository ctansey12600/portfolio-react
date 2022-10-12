import React, { useState } from "react";
import styled from "styled-components";
import AnswerToQuestion from "./AnswerToQuestion";
import EditQuestion from "./EditQuestion";

const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  isolation: isolate;
  width: 1053px;
  height: 332px;
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

function QuestionCard({
  questionData,
  handleDeleteQuestion,
  onUpdateQuestion,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    value: "pleaseSelect",
  });

  const user = questionData.user.first_name;

  const capUserName = user.charAt(0).toUpperCase() + user.slice(1);

  function handleChange(event) {
    setSelectedValue({ value: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedValue.value === "delete") {
      fetch(`http://localhost:9292/questions/${questionData.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((deletedQuestion) => handleDeleteQuestion(deletedQuestion));
    } else if (selectedValue.value === "edit") {
      setIsEditing((isEditing) => !isEditing);
    }

    setSelectedValue({ value: "pleaseSelect" });
  }

  function handleUpdateQuestion(updatedQuestion) {
    setIsEditing(false);
    onUpdateQuestion(updatedQuestion);
  }

  return (
    <QuestionAnswer>
      <Question>
        {isEditing ? (
          <EditQuestion
            id={questionData.id}
            question={questionData.question}
            onUpdateQuestion={handleUpdateQuestion}
          />
        ) : (
          <div>
            <DisplayQuestion>{capUserName} asked:</DisplayQuestion>
            <RegQuestion>{questionData.question}</RegQuestion>
            <DropDown onSubmit={handleSubmit} value={selectedValue.value}>
              <div>
                <select value={selectedValue.value} onChange={handleChange}>
                  <option value="pleaseSelect">Please select</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
              <SubmitInput type="submit" value="Submit"></SubmitInput>
            </DropDown>
          </div>
        )}
      </Question>
      {questionData.answer ? (
        <AnswerToQuestion answerData={questionData.answer} />
      ) : null}
    </QuestionAnswer>
  );
}

export default QuestionCard;
