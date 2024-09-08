import { createPortal } from "react-dom";
import { ReactNode, useState } from "react";
import Modal from "./Modal";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  // クエリセレクタで取得した要素が null の場合も考慮
  const target = document.querySelector(
    ".container.start"
  ) as HTMLElement | null;

  // target が null の場合は何もレンダリングしない
  if (!target) {
    return null;
  }

  return createPortal(children, target);
};
const CreatePortalSample = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1>CreatePortalSample</h1>
      <div className="container start"></div>

      <button type="button" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      {modalOpen && (
        <ModalPortal>
          <Modal handleCloseClick={() => setModalOpen(false)}></Modal>
        </ModalPortal>
      )}
    </div>
  );
};

export default CreatePortalSample;
