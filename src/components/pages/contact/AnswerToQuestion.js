import React from "react";
import styled from "styled-components";

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

function AnswerToQuestion({ answerData }) {
  return (
    <Reply>
      <DisplayReply>Answer: </DisplayReply>
      <RegReply>{answerData}</RegReply>
    </Reply>
  );
}

export default AnswerToQuestion;
