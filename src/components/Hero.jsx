import { Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Box p={"24px 0"}>
      <Box className="container">
        <Heading {...css.title}>Дизайн:</Heading>
        <Text {...css.text}>
          Оrient Сегаmic создаёт коллекции для жизнерадостных, энергичных,
          уверенных в себе, нежных, улыбчивых, шумных, тихих, спокойных — таких
          разных, но их объединяет стремление создать для себя индивидуальный
          интерьер. Ваши помещения наполнятся ритмом большого города или
          безмятежностью природы, свежестью холодных гор или теплотой солнечного
          побережья, познакомят с современными трендами и откроют классику с
          НОВОЙ стороны.
        </Text>
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
