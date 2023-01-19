import { createContext } from "react";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: () => null,
});
const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const value = { showModal, setShowModal };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
