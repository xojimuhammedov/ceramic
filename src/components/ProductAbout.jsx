import { Link, useParams } from "react-router-dom";
import { productData } from "../data";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function ProductAbout() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const data = productData.find((item) => item.id === Number(id));
  return (
    <Box pb={"36px"}>
      <Box className="container">
        <Heading {...css.title}>
          {t("model")} {data?.title}
        </Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={"24px"}
          justifyContent={"space-between"}>
          <Image {...css.image} src={data?.image} alt={data?.title} />
          <Box>
            <Heading {...css.name}>{t("statistic")}:</Heading>
            <Text
              {...css.text}
              dangerouslySetInnerHTML={{
                __html: data[`description_${i18n?.language}`],
              }}
            />
          </Box>
        </Flex>
        <SimpleGrid mt={"24px"} gap={"12px"} columns={{ base: 2, lg: 4 }}>
          {data?.images?.map((item, index) => (
            <Image key={index} {...css.img} src={item} alt={""} />
          ))}
        </SimpleGrid>
        <Heading mt={"36px"} {...css.title}>
          {t("Other Products")}
        </Heading>
        <SimpleGrid
          mt={"24px"}
          gap={"36px"}
          columns={{ base: 1, md: 2, lg: 3 }}>
          {productData.map((item, index) => (
            <Link key={index} to={`/product/${item.id}`}>
              <Box {...css.box}>
                <Image {...css.images} src={item?.image} alt={item?.title} />
                <Heading {...css.names}>{item?.title}</Heading>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
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
  box: {
    background: "#fff",
    borderRadius: "20px",
  },
  images: {
    padding: "16px",
    borderRadius: "20px !important",
    objectFit: "cover",
    height: "350px",
    width: "100%",
  },
  names: {
    color: "#111",
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "center",
    paddingBottom: "12px",
  },
  img: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
  },
};
