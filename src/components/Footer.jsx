import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
            <Heading {...css.title}>О нас</Heading>
            <Text {...css.text}>{t("text4")}</Text>
          </Box>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Heading {...css.title}>О нас</Heading>
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
          <Flex flexDirection={"column"} gap={"12px"}>
            <Heading {...css.title}>О нас</Heading>
            <Link {...css.link} href="tel:+998773197177">
              +998 77 319 71 77
            </Link>
            <Link {...css.link} href="mailto:orientceramic@mail.ru">
              orientceramic@mail.ru
            </Link>
            <Link {...css.link} href="/services">
              Ташкент г, Сергелийский р, улица Нилуфар – 50.
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
