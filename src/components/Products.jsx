import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { productData } from "../data";
import { Link } from "react-router-dom";

function Products() {
  return (
    <Box pb={"36px"}>
      <Box className="container">
        <Heading {...css.title}>Продукция</Heading>
        <SimpleGrid
          mt={"24px"}
          gap={"36px"}
          columns={{ base: 1, md: 2, lg: 3 }}>
          {productData.map((item, index) => (
            <Link key={index} to={`/product/${item.id}`}>
              <Box {...css.box}>
                <Image {...css.image} src={item?.image} alt={item?.title} />
                <Heading {...css.name}>{item?.title}</Heading>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Products;

const css = {
  title: {
    color: "#efdfb9",
    fontSize: "40px",
    lineHeight: "48px",
  },
  box: {
    background: "#fff",
    borderRadius: "20px",
  },
  image: {
    padding: "16px",
    borderRadius: "20px !important",
    objectFit: "cover",
    height: "350px",
    width: "100%",
  },
  name: {
    color: "#111",
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "center",
    paddingBottom: "12px",
  },
};
