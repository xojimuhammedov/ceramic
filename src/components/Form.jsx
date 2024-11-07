import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box className="container">
        <Box {...css.form}>
          <Box className="container-mix">
            <Heading {...css.title}>
              {t("Here you get all our attention")}
            </Heading>
            <Text {...css.text}>{t("contactText")}</Text>

            <Text m={"24px 0"} {...css.text}>
              {t("Do you have any questions or suggestions?")}
            </Text>
            <Text mb={"24px"} {...css.text}>
              {t("contactText1")}
            </Text>

            <form action="">
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="24px">
                <label className="form-label" htmlFor="">
                  {t("First name*")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Last name*")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Company*")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("email*")}
                  <Input {...css.input} type="email" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Street")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Location / Town")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Country")}
                  <Input {...css.input} type="text" />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Phone number")}
                  <Input {...css.input} type="text" />
                </label>
              </SimpleGrid>
              <Button type="submit" {...css.button}>
                {t("Submit")}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  form: {
    padding: "36px 0",
  },
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    color: "#efdfb9",
    marginBottom: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#efdfb9",
  },
  input: {
    padding: "8px 12px",
    outline: "none",
    border: "1px solid #efdfb9",

    _focus: {
      border: "1px solid #efdfb9",
    },
  },
  button: {
    background: "#333",
    color: "#efdfb9",
    height: "40px",
    width: "170px",
    fontSize: "16px",
    lineHeight: "25px",
    borderRadius: "33px",
    marginTop: "24px",
    cursor: "pointer",
    transition: "0.3s all",

    _hover: {
      background: "#efdfb9",
      color: "#333",
    },
  },
};
