import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";
import QuestionsAnswersSection from "./QuestionsAnswersSection";

const Contact = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  gap: 50px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 1278px;
  height: 570px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  gap: 25px;
  width: 496px;
  height: 454px;
  background: ${(props) => props.theme.primary};
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px -10px;
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 80px;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 456px;
    height: 164.5px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    h3 {
      font-family: "Martel";
      font-style: normal;
      font-weight: 300;
      font-size: 46px;
      line-height: 54px;
      color: ${(props) => props.theme.secondary};
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    hr {
      width: 456px;
      height: 0px;
      border: 10px solid #fdfaf0;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0px;
      gap: 10px;
      width: 456px;
      height: 90.5px;
      flex: none;
      order: 2;
      align-self: stretch;
      flex-grow: 1;
      h4 {
        font-family: "Martel";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: ${(props) => props.theme.secondary};
        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;
  background: var(--green);
  border-radius: 16px;
  width: 792px;
  height: 570px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

function ContactPage() {
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/questions")
      .then((r) => r.json())
      .then((data) => setQuestionsData(data));
  }, []);

  if (!questionsData) return <h2 className="display-text">Loading...</h2>;

  function handleAddQuestion(newQuestion) {
    setQuestionsData([...questionsData, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questionsData.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestionsData(updatedQuestions);
  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questionsData.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestionsData(updatedQuestions);
  }

  return (
    <Contact>
      <Top>
        <Info>
          <h2>CONTACT ME</h2>
          <div>
            <h3>Casey Tansey</h3>
            <hr />
            <div>
              <h4>(901)282-6233</h4>
              <h4>ctansey12600@outlook.com</h4>
            </div>
          </div>
        </Info>
        <ContactForm>
          <QuestionForm handleAddQuestion={handleAddQuestion} />
        </ContactForm>
      </Top>
      <QuestionsAnswersSection
        handleDeleteQuestion={handleDeleteQuestion}
        questionsData={questionsData}
        onUpdateQuestion={handleUpdateQuestion}
      />
    </Contact>
  );
}

export default ContactPage;
