import React, { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const InputModal = ({
  showModal,
  setShowModal,
  location,
  address,
}): JSX.Element => {
  const { register, handleSubmit, watch, errors, clearErrors } = useForm();
  const onSubmit = (data) => console.log(data);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      clearErrors();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        clearErrors();
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
          className="w-full h-full fixed flex justify-center items-center bg-black bg-opacity-50 z-10"
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
            }}
          >
            <div className="mx-auto">
              <div>
                <h1 className="font-bold text-gray-800 text-3xl flex-grow">
                  Adicione uma câmera
                </h1>
              </div>
              <div className="border-solid border-b border-gray-400 mb-4" />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                <div>
                  <label className="block font-bold">Endereço:</label>
                  <input
                    className="w-full"
                    type="text"
                    name="address"
                    defaultValue={`${address?.road}, ${address?.house_number}, ${address?.city} - ${address?.state}`}
                    ref={register({ required: true })}
                  />
                  {errors.address && (
                    <span className="text-red-600">
                      É necessário preencher o endereço
                    </span>
                  )}
                </div>
                <label className="block font-bold">
                  Tipo de CCTV:
                  <select ref={register} name="type" className="w-full">
                    <option value="">Nenhuma das opções</option>
                    <option value="anpr">ANPR</option>
                    <option value="dome">Domo</option>
                    <option value="bullet">Bullet</option>
                    <option value="ptz">PTZ</option>
                    <option value="themal">Thermal</option>
                    <option value="noturna">Noturna</option>
                  </select>
                </label>
                <div className="flex items-center">
                  <label className="block font-bold">Ângulo visual:</label>
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
                </div>
                <div>
                  <div className="flex">
                    <label className="block font-bold">Filiação:</label>
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
                  </div>
                </div>
                <div>
                  <p>
                    <strong>Longitude:</strong>
                    {location?.lng}
                  </p>
                  <p>
                    <strong>Latitude:</strong>
                    {location?.lat}
                  </p>
                </div>
                <input type="submit" />
              </form>
            </div>
            <div
              className="modal-close-button"
              aria-label="Close modal"
              onClick={() => {
                setShowModal((prev) => !prev);
                clearErrors();
              }}
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
