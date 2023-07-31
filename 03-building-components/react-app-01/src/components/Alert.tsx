import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = (props: Props) => {
  const [child, setChild] = useState(props.children);
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Alert!</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={props.onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
