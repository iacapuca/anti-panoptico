import React, { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const InputModal = ({
  showModal,
  setShowModal,
  location,
  address,
}): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
              display: "flex",
              alignItems: "center",
              boxShadow: "0 5px 16px rgba(0,0,0,0.2)",
              background: "#fff",
              color: "#000",
              position: "relative",
              zIndex: 11,
              border: "red solid 2px",
            }}
          >
            <div className="modal-content p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="flex mb-4">
                  Endereço:
                  <input
                    className="ml-4"
                    type="text"
                    name="address"
                    defaultValue={`${address?.road}, ${address?.house_number}, ${address?.city} - ${address?.state}`}
                    ref={register({ required: true })}
                  />
                  {errors.address && (
                    <span>É necessário preencher o endereço</span>
                  )}
                </label>
                <label className="flex mb-4">
                  Tipo de CCTV:
                  <select ref={register} name="type" className="ml-4">
                    <option value="">Nenhuma das opções</option>
                    <option value="anpr">ANPR</option>
                    <option value="dome">Domo</option>
                    <option value="bullet">Bullet</option>
                    <option value="ptz">PTZ</option>
                    <option value="themal">Thermal</option>
                    <option value="noturna">Noturna</option>
                  </select>
                </label>
                <label className="flex mb-4">
                  Ângulo visual:
                  <input
                    className="ml-4"
                    type="number"
                    name="angle"
                    defaultValue="0"
                    min="0"
                    max="360"
                    step="1"
                    ref={register({ min: 0, max: 360 })}
                  />
                </label>
                <div>
                  <label className="flex mb-4">
                    Filiação:
                    <label className="ml-4">
                      <input
                        name="filiation"
                        type="radio"
                        value="public"
                        ref={register({ required: true })}
                      />
                      Pública
                    </label>
                    <label className="ml-4">
                      <input
                        name="filiation"
                        type="radio"
                        value="private"
                        ref={register({ required: true })}
                      />
                      Privada
                    </label>
                  </label>
                </div>
                <p>
                  Longitude:{location?.lng}, Latitude:{location?.lat}
                </p>
                <input type="submit" />
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
