import "./Modal.css";

interface ModalProps {
  handleCloseClick: () => void;
}
const Modal: React.FC<ModalProps> = ({ handleCloseClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>Modal</p>
        <button type="button" onClick={handleCloseClick}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
