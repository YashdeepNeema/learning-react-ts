interface Props {
  showAlert: Boolean;
  handleCross: () => void;
}
const Alert1 = ({ showAlert, handleCross }: Props) => {
  return (
    <>
      {showAlert && (
        <div className="alert alert-primary alert-dismissible" role="alert">
          My Alert
          <button
            onClick={handleCross}
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default Alert1;
