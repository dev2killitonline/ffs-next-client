import { useEffect } from "react";
import Services from "../../../../services/services";
import State from "../../../../services/state";
const { teamarray } = State;
function OurTeam() {
  useEffect(() => {
    if (teamarray !== undefined) {
      console.log(teamarray);
    }
  });
  return (
    <section className="ourteam-comp">
      <h2 className="txt-burg">Flood & Fire Solutions Management Team</h2>
      {teamarray
        ? teamarray.map(function (
            { name, imageSrc, imageAlt, title, bio },
            index
          ) {
            return (
              <div key={index} className="team-bio">
                <div className="team-bio__wrapper">
                  <img
                    className="team-bio__image"
                    alt={imageAlt}
                    src={imageSrc}
                  />
                </div>
                <div className="team-bio__content">
                  <header className="team-bio__header">
                    <h3 className="team-bio__name">{name}</h3>
                  </header>
                  <p className="team-bio__title">{title}</p>
                  <hr />
                  <div className="team-bio__biocontent">
                    <p>{bio}</p>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </section>
  );
}

export default OurTeam;
