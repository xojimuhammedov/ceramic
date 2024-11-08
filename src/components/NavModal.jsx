import {
  Flex,
  Link,
  Modal,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function NavModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <button onClick={onOpen} className="modal-open-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="25"
          viewBox="0 0 27 25">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M2.5 0h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5zm0 10h22a2.5 2.5 0 1 1 0 5h-22a2.5 2.5 0 1 1 0-5z"></path>
        </svg>
      </button>

      <Modal {...css.list} isOpen={isOpen} onClose={onClose}>
        <ModalContent {...css.box}>
          <button onClick={onClose} className="modal-close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 14 14">
              <path
                fill="none"
                fillRule="evenodd"
                stroke="#FFFFFF"
                strokeWidth="2.8"
                d="M7 7L1 1l6 6 6-6-6 6zm0 0l-6 6 6-6 6 6-6-6z"></path>
            </svg>
          </button>
          <Flex mt="50px" gap="25px" flexDirection="column">
            <Link {...css.link} href="/about">
              {t("nav")}
            </Link>
            <Link {...css.link} href="/company">
              {t("nav1")}
            </Link>
            <Link {...css.link} href="/services">
              {t("nav2")}
            </Link>
            <Link {...css.link} href="/product">
              {t("nav3")}
            </Link>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavModal;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontWeight: "400",
    color: "#fff",
  },
  box: {
    background: "#111",
    height: "100vh !important",
    width: "100%",
    top: "-65px",
    right: 0,
    padding: "20px 0 0 40px",
    position: "fixed",
  },
  list: {
    right: 0,
  },
};
