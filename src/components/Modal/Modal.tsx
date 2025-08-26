import { useEffect } from "react";
import "./Modal.scss";
import type { FormType } from "../Form/Form";
import { createPortal } from "react-dom";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: FormType;
};

function Modal({ showModal, setShowModal, data }: ModalProps) {
  //Scroll manager
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; //Turns off scroll if the modal is open
    } else {
      document.body.style.overflow = ""; //Turns on scroll when closing modal
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  //ESC handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal, showModal]);

  //This validates if the element in this component is not null, if it isn't then it creates the reference for the portal
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return createPortal(
    <>
      <div className="background_modal" onClick={() => setShowModal(false)} />
      <div role="dialog" aria-modal="true" className="modal">
        <h1>
          Registration completed
        </h1>
        <p>Congratulations {data.firstName} {data.lastName}, you can continue to select your events</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </>,
  portalElement
  );
}

export default Modal;
