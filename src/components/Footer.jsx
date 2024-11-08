import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as ALink } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Flex
          flexWrap={{ base: "wrap", xl: "no-wrap" }}
          gap={{ base: "24px", xl: "0" }}
          justifyContent={"space-between"}>
          <Box>
            <Heading {...css.title}>{t("nav")}</Heading>
            <Text {...css.text}>{t("text4")}</Text>
          </Box>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Heading {...css.title}>{t("Links")}</Heading>
            <ALink to="/about">
              <Text {...css.link}>{t("nav")}</Text>
            </ALink>
            <ALink to="/company">
              <Text {...css.link}>{t("nav1")}</Text>
            </ALink>
            <ALink to="/services">
              <Text {...css.link}>{t("nav2")}</Text>
            </ALink>
            <ALink to="/product">
              <Text {...css.link}>{t("nav3")}</Text>
            </ALink>
          </Flex>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Heading {...css.title}>{t("Location")}</Heading>
            <Link {...css.link} href="tel:+998773197177">
              +998 77 319 71 77
            </Link>
            <Link {...css.link} href="mailto:orientceramic@mail.ru">
              orientceramic@mail.ru
            </Link>
            <Link {...css.link} href="/services">
              {t("location")}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  link: {
    color: "#efdfb9",
    fontSize: "18px",
    lineHeight: "24px",
  },
  text: {
    color: "#efdfb9",
    fontSize: "16px",
    lineHeight: "30px",
    margin: "12px 0",
    width: "300px",
  },
  title: {
    color: "#efdfb9",
    fontSize: "25px",
    lineHeight: "30px",
  },
};
