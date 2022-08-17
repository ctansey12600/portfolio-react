import styled from "styled-components";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 50px;
  isolation: isolate;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
  path {
    fill: ${(props) => props.theme.color};
  }
  h1 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 96px;
    line-height: 104px;
    text-align: center;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
  }
  &:hover {
    path {
      fill: var(--green);
    }
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 1048px;
  height: 1545px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 35px;
  width: 1048px;
  height: 379px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ProjectImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 35px;
  gap: 10px;
  width: 423px;
  height: 379px;
  background: ${(props) => props.theme.primary};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  img {
    width: 353px;
    height: 319px;
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 16px;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 23px 25px;
  gap: 10px;
  width: 590px;
  background: ${(props) => props.theme.secondary};
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 540px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const MoreInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 520px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  h2 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  hr {
    width: 520px;
    height: 0px;
    border: 10px solid ${(props) => props.theme.backgroundColor};
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  h4 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 2;
    flex-grow: 0;
  }
`;

const MoreInfoBtm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 520px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  h4 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Purpose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 75%;
  background: ${(props) => props.theme.infoBody};
  flex: none;
  order: 1;
  flex-grow: 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 25px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    h2 {
      font-family: "Martel";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      width: 100%;
      align-items: center;
      text-align: center;
      color: ${(props) => props.theme.infoTitle};
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 1;
    }
    hr {
      height: 0px;
      border: 10px solid ${(props) => props.theme.backgroundColor};
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
    h4 {
      font-family: "Martel";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: ${(props) => props.theme.infoTitle};
      flex: none;
      order: 2;
      flex-grow: 1;
    }
  }
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  min-width: 1048px;
  background: ${(props) => props.theme.primary};
  flex: none;
  order: 2;
  flex-grow: 0;
  h2 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: ${(props) => props.theme.secondary};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export {
  HeaderSection,
  InfoSection,
  BasicInfo,
  ProjectImg,
  InfoCard,
  MoreInfo,
  MoreInfoTop,
  MoreInfoBtm,
  Purpose,
  Process,
};
