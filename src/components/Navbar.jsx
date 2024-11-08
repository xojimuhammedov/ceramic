import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/logo1.png";
import Language from "./Language";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"}>
          <Link href="/">
            <Image {...css.logo} src={Logo} />
          </Link>
          <Flex align={"center"} gap={"24px"}>
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
            <Language />
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          mt={'16px'}
          display={{ base: "flex", md: "none" }}>
          <Link {...css.links} href="/about">
            {t("nav")}
          </Link>
          <Link {...css.links} href="/company">
            {t("nav1")}
          </Link>
          <Link {...css.links} href="/services">
            {t("nav2")}
          </Link>
          <Link {...css.links} href="/product">
            {t("nav3")}
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  logo: {
    width: {
      base: "100px",
      md: "150px",
    },
  },
  link: {
    color: "#efdfb9",
    fontSize: "18px",
    lineHeight: "24px",
    display: {
      base: "none",
      lg: "block",
    },
  },
  links: {
    color: "#efdfb9",
    fontSize: "14px",
    lineHeight: "24px",
  },
};
