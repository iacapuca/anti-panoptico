import React, { useCallback, useEffect, useRef } from "react";

const InputModal = ({
  showModal,
  setShowModal,
  location,
  address,
}): JSX.Element => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className="w-full h-full fixed flex justify-center items-center background--modal-transparent z-10"
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            style={{
              width: "800px",
              height: "500px",
              boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
              background: "#fff",
              color: "#000",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              position: "relative",
              zIndex: 11,
            }}
          >
            <div className="modal-content p-8">
              <form>
                <label className="flex">
                  Local:
                  <input
                    type="text"
                    name="location"
                    value={`${address?.road}, ${address?.house_number}, ${address?.city} - ${address?.state}`}
                  />
                </label>
                <label>
                  Tipo de CCTV:
                  <select>
                    <option value="">Nenhuma das opções</option>
                    <option value="anpr">ANPR</option>
                    <option value="dome">Domo</option>
                    <option value="bullet">Bullet</option>
                    <option value="ptz">PTZ</option>
                    <option value="themal">Thermal</option>
                    <option value="noturna">Noturna</option>
                  </select>
                </label>
                <label>
                  Ângulo visual:
                  <input type="number" name="angle" min="0" max="360" />
                </label>
                <div>
                  <label>
                    Filiação:
                    <input
                      type="radio"
                      name="filiation"
                      value="public"
                      checked={true}
                    />
                    Pública
                  </label>
                  <label>
                    <input type="radio" name="filiation" value="private" />
                    Privada
                  </label>
                </div>
                <p>
                  Longitude:{location?.lng}, Latitude:{location?.lat}
                </p>
                <div>
                  <button>Cancelar</button>
                  <button>Enviar</button>
                </div>
              </form>
            </div>
            <div
              className="modal-close-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InputModal;
