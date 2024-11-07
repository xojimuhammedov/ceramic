import { useParams } from "react-router-dom";
import { productData } from "../data";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function ProductAbout() {
  const { id } = useParams();
  const data = productData.find((item) => item.id === Number(id));
  return (
    <Box pb={"36px"}>
      <Box className="container">
        <Heading {...css.title}>Модель {data?.title}</Heading>
        <Flex mt={"24px"} justifyContent={"space-between"}>
          <Image {...css.image} src={data?.image} alt={data?.title} />
          <Box>
            <Heading {...css.name}>Характеристики:</Heading>
            <Text
              {...css.text}
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductAbout;

const css = {
  image: {
    objectFit: "cover",
    height: "450px",
    width: "550px",
  },
  title: {
    color: "#efdfb9",
    fontSize: "40px",
    lineHeight: "48px",
  },
  name: {
    color: "#efdfb9",
    fontSize: "34px",
    lineHeight: "42px",
    margin: "12px 0",
  },
  text: {
    color: "#efdfb9",
    fontSize: "18px",
    lineHeight: "30px",
    margin: "24px 0",
  },
};
