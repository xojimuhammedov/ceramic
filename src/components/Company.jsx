import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import HomeVideo from "../assets/video.mp4";

function Company() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <Box>
      <Box className="container">
        <Heading {...css.title}>О производстве</Heading>
        <video
          className="home-video"
          ref={videoRef}
          loop
          muted
          width="100%"
          controls>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <Text {...css.text}>
          Ташкентское предприятие «Orient Ceramic» производит керамические
          изделия более 1000 видов по передовым технологиям международного
          стандарта качества.
        </Text>
        <Text {...css.text}>
          Предприятие «Orient Ceramic» в данное время имеет годовую мощность
          производства более 1000 моделей керамогранита на 10,8 млн м2 и 600
          видов керамической плитки на 7,2млн м2. Кроме того, предприятие
          «Orient Ceramic» уже более 6 лет занимает достойное место на
          международном рынке керамических материалов. Среднегодовой объем
          экспорта керамогранита составляет 12,5 млн долларов США, а на
          керамическую плитку 8,2 млн долларов США. На предприятиях работает
          более 1200 квалифицированных специалистов, а также созданы все условия
          для развития уровня квалификации новых молодых работников.
        </Text>
        <Text {...css.text}>
          При производстве используются передовые зарубежные технологии компании
          DLT и KEDA, что является гарантией качества строительного материала.
          Отдельно стоит отметить экологичность и содержание только природных
          компонентов и различных сортов глины.
        </Text>
        <Text {...css.text}>
          Керамогранит и керамическая плитка комфортабельна, долговечна,
          обладает повышенной прочностью, теплоустойчивыми и морозоустойчивыми
          свойствами, и поэтому прослужит вашему офису и дому многолетиями,
          сохраняя свое первозданное качество.
        </Text>
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
