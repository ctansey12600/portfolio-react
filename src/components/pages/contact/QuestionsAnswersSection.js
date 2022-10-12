import React from "react";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";

const Btm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 0px;
  gap: 45px;
  width: 1157px;
  flex: none;
  order: 1;
  flex-grow: 0;
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 80px;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const QuestionsAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 47px;
  gap: 30px;
  width: 1147px;
  background: ${(props) => props.theme.secondary};
  border-radius: 16px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

function QuestionsAnswersSection({
  handleDeleteQuestion,
  questionsData,
  onUpdateQuestion,
}) {
  const renderQuestions = questionsData.map((question) => {
    return (
      <QuestionCard
        key={question.id}
        questionData={question}
        handleDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestion={onUpdateQuestion}
      />
    );
  });

  return (
    <Btm>
      <h2>Questions & Answers</h2>
      <QuestionsAnswers>{renderQuestions}</QuestionsAnswers>
    </Btm>
  );
}

export default QuestionsAnswersSection;
