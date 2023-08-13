import * as React from "react";
import "./TeamMember.css";

export type TeamMemberProps = {
  name: string;
  department: string;
  year: number;
  major: string;
  imageURL: string;
  bio: string;
  invertAlign?: boolean;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  bio,
  name,
  department,
  imageURL,
  major,
  year,
  invertAlign,
}) => {
  return (
    <div className={`TeamMember ${invertAlign && "invert_align"}`}>
      <div className="profile">
        <img src={imageURL} alt={name} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="info">
          <span className="department">{department}</span>
          <span className="year">Year {year}</span>
          <span className="major">{major}</span>
        </div>
        <div className="bio">{bio}</div>
      </div>
    </div>
  );
};

export default TeamMember;
