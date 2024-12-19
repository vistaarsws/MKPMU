import Team_section from "../../components/layout/TeamSection/TeamSection";
import "./Team.css";

export default function Team() {
  const otherTeams = [
    {
      members: 1000,
      designation: "Engineers",
    },
    {
      members: 1000,
      designation: "Engineers",
    },
    {
      members: 1000,
      designation: "Engineers",
    },
    {
      members: 1000,
      designation: "Engineers",
    },
    {
      members: 1000,
      designation: "Engineers",
    },
  ];

  return (
    <div className="otherTeams__container">
      <Team_section />
      <section>
        <h1>Other Team Members</h1>
        <article>
          {otherTeams.map((otherTeam) => {
            return (
              <div>
                <h2>{otherTeam.members}+</h2>
                <p>{otherTeam.designation}</p>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
}
