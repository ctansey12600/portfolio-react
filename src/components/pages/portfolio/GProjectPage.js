//CONTAINS GRAPHIC CONTEXT
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

const GraphicProject = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 80px;
  gap: 24px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

function GProjectPage({ graphicData }) {
  const { id } = useParams();
  const numId = parseInt(id);

  const renderGraphicProject = graphicData.projects.find(
    (element) => element.id === numId
  );

  return (
    <GraphicProject>
      <HeaderSection>
        <BackButton routingData="/graphics" />
        <h1>{renderGraphicProject.name}</h1>
      </HeaderSection>
      <InfoSection>
        <BasicInfo>
          <ProjectImg>
            <img
              src={renderGraphicProject.photos[0].original}
              alt={renderGraphicProject.photos[0].alt}
            />
          </ProjectImg>
          <InfoCard>
            <MoreInfo>
              <MoreInfoTop>
                <h2>MORE INFO</h2>
                <hr />
              </MoreInfoTop>
              <MoreInfoBtm>
                <h4>
                  Year Made: {renderGraphicProject.date_made}
                  <br />
                  Programs Used: {renderGraphicProject.languages}
                </h4>
              </MoreInfoBtm>
            </MoreInfo>
          </InfoCard>
        </BasicInfo>
        <Purpose>
          <div>
            <h2>THE PURPOSE</h2>
            <hr />
            <h4>{renderGraphicProject.purpose}</h4>
          </div>
        </Purpose>
        <Process>
          <h2>DOCUMENTING THE PROGRESS</h2>
          <MyGallery photoData={renderGraphicProject.photos} />
        </Process>
      </InfoSection>
    </GraphicProject>
  );
}

export default GProjectPage;
