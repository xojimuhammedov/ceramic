import { Link, useParams } from "react-router-dom";
import { productData } from "../data";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Share from "yet-another-react-lightbox/plugins/share";
import React from "react";

function ProductAbout() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
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
          <Image
            onClick={() => setOpen(true)}
            {...css.image}
            src={data?.image}
            alt={data?.title}
          />
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
        <Heading m={"24px 0"} {...css.title}>
          {t("Размеры и стоимость:")}
        </Heading>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={headerStyle}>{t("Артикул")}</th>
              <th style={headerStyle}>{t("Размеры, мм")}</th>
              <th style={headerStyle}>{t("Тип поверхности")}</th>
              <th style={headerStyle}>{t("количество в коробке/шт")}</th>
            </tr>
          </thead>
          <tbody>
            {data?.service?.map((item) => (
              <tr key={item.id}>
                <td style={cellStyle}>{item.id}</td>
                <td style={cellStyle}>{item.size}</td>
                <td style={cellStyle}>{item.surfaceType}</td>
                <td style={cellStyle}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Heading m={"24px 0"} {...css.title}>
          {t("gallery")}
        </Heading>
        <SimpleGrid mt={"24px"} gap={"12px"} columns={{ base: 2, lg: 4 }}>
          {data?.images?.map((item, index) => (
            <Image
              onClick={() => setOpen(true)}
              key={index}
              {...css.img}
              src={item}
              alt={""}
            />
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
            <Link
              onClick={() => window.scrollTo({ top: 0 })}
              key={index}
              to={`/product/${item.id}`}>
              <Box {...css.box}>
                <Image {...css.images} src={item?.image} alt={item?.title} />
                <Heading {...css.names}>{item?.title}</Heading>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Share]}
        slides={data?.images?.map((item) => ({ src: item }))}
      />
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
    fontSize: {
      base: "24px",
      md: "40px",
    },
    lineHeight: {
      base: "28px",
      md: "48px",
    },
  },
  name: {
    color: "#efdfb9",
    fontSize: {
      base: "20px",
      md: "34px",
    },
    lineHeight: {
      base: "25px",
      md: "42px",
    },
    margin: "12px 0",
  },
  text: {
    color: "#efdfb9",
    fontSize: {
      base: "16px",
      md: "18px",
    },
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
    height: {
      base: "250px",
      md: "350px",
    },
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
    height: {
      base: "200px",
      md: "280px",
    },
    objectFit: "cover",
  },
};

const headerStyle = {
  padding: "10px",
  color: "#d8c189",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "1px solid #d8c189",
};

const cellStyle = {
  padding: "10px",
  textAlign: "left",
  color: "#d8c189",
  borderBottom: "1px solid #d8c189",
};
