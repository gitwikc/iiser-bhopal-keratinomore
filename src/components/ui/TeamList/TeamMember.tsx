import * as React from "react";
import "./TeamMember.css";
import ProfileImage from "./ProfileImage";

import "./TeamMember.css";
import ProfileContent from "./ProfileContent";

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
      <ProfileImage
        {...{ name, imageURL, invertAlign: invertAlign || false }}
      />
      <ProfileContent
        name={name}
        department={department}
        major={major}
        year={year}
        bio={bio}
        invertAlign={invertAlign || false}
      />
    </div>
  );
};

export default TeamMember;
