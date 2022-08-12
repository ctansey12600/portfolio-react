//Needs to shuffle through development photos
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GraphicContext } from "../../context/graphics";
// import PhotoCarousel from "../../../Elements/PhotoCarousel";
import BackButton from "../../shared/BackButton";

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
    <div className="graphic-project-page">
      <section className="page-header">
        <BackButton routingData="/graphics" />
        <h1 className="display-text">{renderGraphicProject.name}</h1>
      </section>
      <section className="info-section">
        <div className="basic-info">
          <div className="project-image">
            <img src={renderGraphicProject.src} alt="screenshot of graphic" />
          </div>
          <div className="info-card">
            <div className="info-card-text">
              <div className="info-card-text-top">
                <h2 className="regular-text">MORE INFO</h2>
                <hr />
                <h4 className="regular-text">
                  Purpose: {renderGraphicProject.purpose}
                </h4>
              </div>
              <div className="info-card-text-btm">
                <h4 className="regular-text">
                  <br />
                  Year Made: {renderGraphicProject.yearMade}
                  <br />
                  Programs Used: {renderGraphicProject.programs}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="purpose-info">
            <div className="purpose-info-frame">
              <div className="purpose-info-text">
                <hr />
                <h2 className="regular-text">
                  DOCUMENTING
                  <br />
                  THE PROGRESS
                </h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="process-info">
            <div className="process-photo-shuffle">
              {/* <PhotoCarousel
                photoData={renderGraphicProject.developmentPhotos}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GProjectPage;
