import React from "react";

interface Props {
  children: string;
  click: string;
  onBtn: () => void;
}
const ExpandableText = ({ children, onBtn, click }: Props) => {
  return (
    <div>
      <h1>ExpandableText</h1>
      <p>
        {children}
        <button onClick={onBtn}>{click}</button>
      </p>
    </div>
  );
};

export default ExpandableText;
