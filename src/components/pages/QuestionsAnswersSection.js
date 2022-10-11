import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";

const Btm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 0px;
  gap: 45px;
  width: 1157px;
  height: 1227px;
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
  height: 1082px;
  background: ${(props) => props.theme.secondary};
  border-radius: 16px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

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
  justify-content: flex-end;
  align-items: flex-end;
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
  width: 456px;
  height: 84px;
  flex: none;
  order: 1;
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

function QuestionsAnswersSection() {
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/questions")
      .then((r) => r.json())
      .then((data) => setQuestionsData(data));
  }, []);

  if (!questionsData) return <h2 className="display-text">Loading...</h2>;

  const renderQuestions = questionsData.map((question) => {
    return <QuestionCard />;
  });

  return (
    <Btm>
      <h2>Questions & Answers</h2>
      <QuestionsAnswers>
        <QuestionAnswer>
          <Question>
            <div>
              <DisplayQuestion></DisplayQuestion>
              <RegQuestion>
                What was the inspiration behide the graphic design project that
                features a movie poster for the movie Level 16?
              </RegQuestion>
            </div>
            <DropDown>
              <div>
                <select name="edit">
                  <option value="pleaseSelect">Please select</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
              <SubmitInput type="submit" value="Submit"></SubmitInput>
            </DropDown>
          </Question>
          <Reply>
            <DisplayReply>Answer: </DisplayReply>
            <RegReply>
              What was the inspiration behide the graphic design project that
              features a movie poster for the movie Level 16?
            </RegReply>
          </Reply>
        </QuestionAnswer>
      </QuestionsAnswers>
    </Btm>
  );
}

export default QuestionsAnswersSection;
