//Needs Styling
//Needs to shuffle through development photos
import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GraphicContext } from "../../context/graphics";
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

function GProjectPage() {
  const graphicData = useContext(GraphicContext);
  const { id } = useParams();
  const numId = parseInt(id);

  if (!graphicData) return <h2 className="display-text">Loading...</h2>;

  const renderGraphicProject = graphicData.find(
    (element) => element.id === numId
  );

  if (!renderGraphicProject)
    return <h2 className="display-text">Loading...</h2>;

  return (
    <GraphicProject>
      <HeaderSection>
        <BackButton routingData="/graphics" />
        <h1>{renderGraphicProject.name}</h1>
      </HeaderSection>
      <InfoSection>
        <BasicInfo>
          <ProjectImg>
            <img src={renderGraphicProject.src} alt="screenshot of graphic" />
          </ProjectImg>
          <InfoCard>
            <MoreInfo>
              <MoreInfoTop>
                <h2>MORE INFO</h2>
                <hr />
              </MoreInfoTop>
              <MoreInfoBtm>
                <h4>
                  Year Made: {renderGraphicProject.yearMade}
                  <br />
                  Programs Used: {renderGraphicProject.application}
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
          <MyGallery photoData={renderGraphicProject.developmentPhotos} />
        </Process>
      </InfoSection>
    </GraphicProject>
  );
}

export default GProjectPage;
