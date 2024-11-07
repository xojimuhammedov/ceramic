import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <Box p={"48px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("headerTitle")}</Heading>
        <Text {...css.text}>{t("headerText")}</Text>
        <Text {...css.text}>{t("headerText1")}</Text>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    color: "#efdfb9",
    fontSize: "40px",
    lineHeight: "48px",
  },
  text: {
    color: "#efdfb9",
    fontSize: "18px",
    lineHeight: "30px",
    margin: "24px 0",
  },
};
