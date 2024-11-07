import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import HomeVideo from "../assets/video.mp4";
import { useTranslation } from "react-i18next";

function Company() {
  const videoRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <Box>
      <Box className="container">
        <Heading {...css.title}>{t("nav1")}</Heading>
        <video
          className="home-video"
          ref={videoRef}
          loop
          muted
          width="100%"
          controls>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <Text {...css.text}>{t("text4")}</Text>
        <Text {...css.text}>{t("text5")}</Text>
        <Text {...css.text}>{t("text6")}</Text>
        <Text {...css.text}>{t("text7")}</Text>
      </Box>
    </Box>
  );
}

export default Company;

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
