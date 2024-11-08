import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Banner from "../assets/photo.jpg";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <Box p={{ base: "12px 0", md: "48px 0" }}>
      <Box className="container">
        <Heading {...css.title}>{t("nav")}</Heading>
        <Text {...css.text}>{t("text")}</Text>
        <Text {...css.text}>{t("text1")}</Text>
        <Text {...css.text}>{t("text2")}</Text>
        <Text {...css.text}>{t("text3")}</Text>
        <Image {...css.image} src={Banner} alt="Banner" />
      </Box>
    </Box>
  );
}

export default AboutUs;

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
  image: {
    width: "100%",
    objectFit: "cover",
  },
};
