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
              <Link to={memberProfile.linkedinUrl} target="_blank">
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
                  <h3>{exp.position}</h3>
                  <h4>{exp.department}</h4>
                  <em>{exp.duration}</em>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <article>
        <Team_section disableMember={memberProfile.fullName} />
      </article>
    </div>
  );
}
