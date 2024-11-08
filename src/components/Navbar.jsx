import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo1.png";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"}>
          <Link to="/">
            <Image {...css.logo} src={Logo} />
          </Link>
          <Flex align={"center"} gap={"24px"}>
            <Link to="/about">
              <Text {...css.link}>{t("nav")}</Text>
            </Link>
            <Link to="/company">
              <Text {...css.link}>{t("nav1")}</Text>
            </Link>
            <Link to="/services">
              <Text {...css.link}>{t("nav2")}</Text>
            </Link>
            <Link to="/product">
              <Text {...css.link}>{t("nav3")}</Text>
            </Link>
            <Language />
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          mt={"16px"}
          display={{ base: "flex", md: "none" }}>
          <Link to="/about">
            <Text {...css.links}>{t("nav")}</Text>
          </Link>
          <Link to="/company">
            <Text {...css.links}>{t("nav1")}</Text>
          </Link>
          <Link to="/services">
            <Text {...css.links}>{t("nav2")}</Text>
          </Link>
          <Link to="/product">
            <Text {...css.links}>{t("nav3")}</Text>
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
    fontSize: "12px",
    lineHeight: "22px",
  },
};
