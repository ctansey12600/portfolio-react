//Needs Styling
//Needs to shuffle through development photos
import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { WebsiteContext } from "../../context/websites";
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

function WProjectPage() {
  const webData = useContext(WebsiteContext);
  const { id } = useParams();
  const numId = parseInt(id);

  if (!webData) return <h2 className="display-text">Loading...</h2>;

  const renderWebProject = webData.find((element) => element.id === numId);

  if (!renderWebProject) return <h2 className="display-text">Loading...</h2>;

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
              src={renderWebProject.projectPhoto}
              alt="screenshot of website"
            />
          </ProjectImg>
          <InfoCard>
            <MoreInfo>
              <MoreInfoTop>
                <h2>MORE INFO</h2>
                <hr />
                <h4>
                  Year Made: {renderWebProject.yearMade}
                  <br />
                  Programs Used: {renderWebProject.languages}
                </h4>
              </MoreInfoTop>
              <MoreInfoBtm>
                <h4>
                  Website: {renderWebProject.url}
                  <br />
                  Github: {renderWebProject.github}
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
          <MyGallery photoData={renderWebProject.developmentPhotos} />
        </Process>
      </InfoSection>
    </WebsiteProject>
  );
}

export default WProjectPage;
