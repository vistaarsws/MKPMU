import linkedinIcon from "../../assets/images/linkedin.png";
import { teamMemberDetails_array } from "../../utils/Constant";
import Team_section from "../../components/layout/TeamSection/TeamSection";
import { Link } from "react-router-dom";
import useUrlToGetPage from "../../hooks/useUrlToGetPage";
import "./MemberProfile.css";

export default function MemberProfile() {
  const currentPage = useUrlToGetPage();

  const memberProfile = teamMemberDetails_array.find((m) => {
    const memberName = m.fullName.split(" ").join("_");

    return memberName === currentPage;
  });

  // Component to render the nested structure
  const NestedList = ({ data }) => {
    return (
      <ul>
        {data?.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "0.1rem 0",
              listStyle: "none",
              marginLeft: "1rem",
            }}
          >
            {/* Display main data */}
            <span style={{ fontWeight: 400, fontSize: "1.2rem" }}>
              {item.data}
            </span>
            {/* Check for and render subData recursively */}
            {item.subData && item.subData.length > 0 && (
              <NestedList data={item.subData} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="memberProfile_container">
      <section>
        <figure>
          <img src={memberProfile.profilePicture} alt="Profile Picture" />
        </figure>
        <article className="memberProfile_article">
          <div>
            <div>
              <h1>{memberProfile.fullName}</h1>
              <p>{memberProfile.designation}</p>
            </div>
            <div>
              <Link to={memberProfile?.linkedinUrl} target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
          {memberProfile.profile_description.map((para, index) => {
            return (
              <>
                <p key={index}>{para}</p>
                <br />
              </>
            );
          })}

          <h2>Experience</h2>
          <ul>
            {memberProfile.experience.map((exp, index) => {
              return (
                <li key={index}>
                  <h3>
                    {exp.position} <em>({exp.duration})</em>
                  </h3>
                  <h4>{exp.department}</h4>
                  <h5>
                    <NestedList data={exp.description} />
                  </h5>
                </li>
              );
            })}
          </ul>

          {memberProfile.achievements && (
            <>
              <h2>Achievements</h2>
              <ul>
                {memberProfile.achievements.map((ach, index) => {
                  return <li style={{ fontSize: "1.5rem" }}>{ach.data}</li>;
                })}
              </ul>
            </>
          )}
          {/* 
          {memberProfile.keySkills && (
            <>
              <h2 style={{ marginBottom: "2rem" }}>Key Skills</h2>
              <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {memberProfile.keySkills.map((skill, index) => {
                  return (
                    <span
                      style={{
                        fontSize: "1.4rem",
                        borderRadius: "2rem",
                        color: "white",
                        backgroundColor: "#ff6b00",
                        padding: "1rem 1.5rem",
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </ul>
            </>
          )} */}
        </article>
      </section>
      <article>
        <Team_section disableMember={memberProfile.fullName} />
      </article>
    </div>
  );
}
