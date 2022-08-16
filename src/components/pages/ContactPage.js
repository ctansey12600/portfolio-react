import React from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";

const Contact = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 45px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 496px;
  height: 454px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px -75px;
`;

const InfoFrame = styled.div`
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

const ContactForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 792px;
  height: 570px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  flex: none;
  order: 1;
  flex-grow: 0;
`;

function ContactPage() {
  return (
    <Contact>
      <Info>
        <InfoFrame>
          <h2>CONTACT ME</h2>
          <div>
            <h3>Casey Tansey</h3>
            <hr />
            <div>
              <h4>(901)282-6233</h4>
              <h4>ctansey12600@outlook.com</h4>
            </div>
          </div>
        </InfoFrame>
      </Info>
      <ContactForm>
        <QuestionForm />
      </ContactForm>
    </Contact>
  );
}

export default ContactPage;
