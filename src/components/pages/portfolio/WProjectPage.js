//CONTAINS WEBSITE CONTEXT
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
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
} from "../../shared/ProjectStyles";
import MyGallery from "../../shared/MyGallery";
import BackButton from "../../shared/BackButton";

const WebsiteProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 80px;
  gap: 24px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

function WProjectPage({ websites }) {
  const { id } = useParams();
  const numId = parseInt(id);

  const renderWebProject = websites.find((element) => element.id === numId);

  return (
    <WebsiteProject>
      <HeaderSection>
        <BackButton routingData="/websites" />
        <h1>{renderWebProject.name}</h1>
      </HeaderSection>
      <InfoSection>
        <BasicInfo>
          <ProjectImg>
            <img
              src={renderWebProject.photos[0].original}
              alt={renderWebProject.photos[0].alt}
            />
          </ProjectImg>
          <InfoCard>
            <MoreInfo>
              <MoreInfoTop>
                <h2>MORE INFO</h2>
                <hr />
                <h4>
                  Year Made: {renderWebProject.date_made}
                  <br />
                  Programs Used: {renderWebProject.languages}
                </h4>
              </MoreInfoTop>
              <MoreInfoBtm>
                <h4>
                  Website: {renderWebProject.links[0].url}
                  <br />
                  Github: {renderWebProject.links[1].url}
                </h4>
              </MoreInfoBtm>
            </MoreInfo>
          </InfoCard>
        </BasicInfo>
        <Purpose>
          <div>
            <h2>THE PURPOSE</h2>
            <hr />
            <h4>{renderWebProject.purpose}</h4>
          </div>
        </Purpose>
        <Process>
          <h2>DOCUMENTING THE PROCESS</h2>
          <MyGallery photoData={renderWebProject.photos} />
        </Process>
      </InfoSection>
    </WebsiteProject>
  );
}

export default WProjectPage;
