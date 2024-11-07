import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box p={"48px 0"}>
      <Box className="container">
        <Heading {...css.title}>О бренде</Heading>
        <Text {...css.text}>
          Изысканные коллекции керамогранитной плитки Оrient Сегаmic были
          созданы под вдохновением от современных трендов, популярных стилей и
          классики в мире дизайна.
        </Text>
        <Text {...css.text}>
          Керамогранит Оrient Сегаmic - это возможность создать индивидуальный
          интерьер, отражающий внутренний мир, чувства, эмоции, мечты,
          мировоззрение. Это не просто плитка - это пространство для
          самовыражения. Привнесите уют в интерьер и окружите себя красотой
          вместе с Оrient Сегаmic!
        </Text>
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
