import * as React from "react";
import TeamMember, { TeamMemberProps } from "./TeamMember";
import "./index.css";

type TeamListProps = {
  members: TeamMemberProps[];
};

const TeamList: React.FC<TeamListProps> = ({ members }) => {
  return (
    <div className="TeamList">
      {members.map((member, i) => (
        <div
          className={`w-full flex ${
            i % 2 == 0 ? "justify-start" : "justify-end"
          }`}
        >
          <TeamMember key={i} {...member} invertAlign={i % 2 !== 0} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
