import * as React from "react";
import "./styles/Paragraph.css";
import { Link } from "react-router-dom";

type ParagraphProps = {
  title: string;
  hierarchy: 0 | 1 | 2;
  content: React.ReactNode;
};

const convertTitleToID = (title: string): string => {
  // Remove special characters using regex
  const processedString = title.replace(/[^\w\s]/g, "").toLowerCase();
  // Replace spaces with '-'
  const id = processedString.replace(/\s+/g, "-");
  return id;
};

const Paragraph: React.FC<ParagraphProps> = ({ title, hierarchy, content }) => {
  const id = convertTitleToID(title);

  return (
    <div id={id} className="Paragraph" data-hierarchy={hierarchy}>
      <div className="title">
        <Link to={`#${id}`}>{title}</Link>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Paragraph;
