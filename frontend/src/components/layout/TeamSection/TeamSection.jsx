import { teamMemberDetails_array } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import Card from "../../ui/Cards/Card/Card";
import PropTypes from "prop-types";
import "./TeamSection.css";

export default function Team_section({ disableMember = "" }) {
  const navigate = useNavigate();

  const teamMemberDetails = teamMemberDetails_array
    .filter((e) => e.fullName !== disableMember)
    .map((member, index) => {
      const memberName = member.fullName.split(" ").join("_");
      return (
        <div
          key={index}
          className="TeamMemberCard"
          onClick={() => navigate(`/team/${memberName}`)}
        >
          <Card
            card={{
              image: { src: member.profilePicture },
              color: {
                bgColor: member.bgColor,
                textColor: [member.titleColor, "", ""],
              },
              text: {
                content: ["", member.fullName, member.designation],
                justify: ["", "center", "center"],
              },
              // dimensions: { maxHeight: "26rem", maxWidth: "36rem" },
              padding: "2.4rem",
            }}
            // imgHeight={"42rem"}
            // imgWidth={"42rem"}
          />
        </div>
      );
    });

  return (
    <div>
      <section className="mkpmuTeam_container">
        <h1>Mohanpura Kundalia Project Management Unit</h1>
        <p>Team that made the impossible, possible.</p>
        <div className="TeamMemberCard_container">
          {teamMemberDetails_array
            .filter((e) => e.fullName !== disableMember)
            .map((member, index) => {
              const memberName = member.fullName.split(" ").join("_");
              return (
                <div
                  key={index}
                  className="TeamMemberCard"
                  onClick={() => navigate(`/team/${memberName}`)}
                >
                  <Card
                    card={{
                      image: { src: member.profilePicture },
                      color: {
                        bgColor: member.bgColor,
                        textColor: [member.titleColor, "", ""],
                      },
                      text: {
                        content: ["", member.fullName, member.designation],
                        justify: ["", "center", "center"],
                      },
                      // dimensions: { maxHeight: "26rem", maxWidth: "36rem" },
                      padding: "1rem",
                    }}
                    // imgHeight={"42rem"}
                    // imgWidth={"42rem"}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

Team_section.propTypes = {
  disableMember: PropTypes.string,
};
