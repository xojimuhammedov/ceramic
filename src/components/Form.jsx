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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4935650251427!2d69.24745957586927!3d41.21101347132282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae60e8bb54cecb%3A0xef1a6253f161df48!2sNilufar%20St%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1730994409889!5m2!1sen!2s"
                // width="600"
                // height="450"
                // style="border:0;"
                style={{ border: 0 }}
                allowfullscreen=""
                className="form-map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
