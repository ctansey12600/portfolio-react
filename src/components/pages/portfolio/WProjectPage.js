//Needs to shuffle through development photos
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WebsiteContext } from "../../context/websites";
// import PhotoCarousel from "../../shared/PhotoCarousel";
import BackButton from "../../shared/BackButton";

function WProjectPage() {
  const webData = useContext(WebsiteContext);
  const { id } = useParams();
  const numId = parseInt(id);

  if (!webData) return <h2 className="display-text">Loading...</h2>;

  const renderWebProject = webData.find((element) => element.id === numId);

  if (!renderWebProject) return <h2 className="display-text">Loading...</h2>;

  return (
    <div className="website-project-page">
      <section className="page-header">
        <BackButton routingData="/websites" />
        <h1 className="display-text">{renderWebProject.name}</h1>
      </section>
      <section className="info-section">
        <div className="basic-info">
          <div className="project-image">
            <img
              src={renderWebProject.previewPhoto}
              alt="screenshot of website"
            />
          </div>
          <div className="info-card">
            <div className="info-card-text">
              <div className="info-card-text-top">
                <h2 className="regular-text">MORE INFO</h2>
                <hr />
                <h4 className="regular-text">
                  Year Made: {renderWebProject.yearMade}
                  <br />
                  Programs Used: {renderWebProject.languages}
                </h4>
              </div>
              <div className="info-card-text-btm">
                <h4 className="regular-text">
                  Links:
                  <br />
                  Website: {renderWebProject.url}
                  <br />
                  Github: {renderWebProject.github}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="purpose-info">
            <div className="purpose-info-frame">
              <div className="purpose-info-text">
                <h2 className="regular-text">THE PURPOSE</h2>
                <hr />
                <h4 className="regular-text">{renderWebProject.purpose}</h4>
              </div>
            </div>
          </div>
          <div className="process-info">
            <h2 className="regular-text">
              DOCUMENTING
              <br />
              THE PROCESS
            </h2>
            {/* <div className="process-photo-shuffle">
              <PhotoCarousel photoData={renderWebProject.developmentPhotos} />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WProjectPage;
