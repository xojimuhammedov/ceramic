import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("heroTitle")}</Heading>
        <Text {...css.text}>{t("heroText")}</Text>
      </Box>
    </Box>
  );
}

export default Hero;

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
