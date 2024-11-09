import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function Form() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeCompany(item) {
    setCompany(item);
  }
  function changeCountry(item) {
    setCountry(item);
  }
  function changeLocation(item) {
    setLocation(item);
  }

  const handleClear = () => {
    setNameValue("");
    setNumberValue("");
    setTextValue("");
    setCompany("");
    setCountry("");
    setLocation("");
  };
  let bot = {
    TOKEN: "8050907392:AAGe_5c4l2KyI2l1cm9WM-oad3totFzUeVg",
    chatID: "-1002323257681",
    message: `
          Assalomu alaykum sizga yangi xabar!%0A
          %0AIsmi 👤: ${nameValue}; 
          %0ATelefon raqami ☎: ${numberValue};
          %0APochtasi ☎: ${textValue};
          `,
  };

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      () => {
        handleClear();
        // window.location.reload();
        toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
      },
      (error) => {
        console.log(error);
      }
    );
  }
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
                <label className="form-label" htmlFor="name">
                  {t("First name*")}
                  <Input
                    value={nameValue}
                    onChange={(e) => changeName(e.target.value)}
                    {...css.input}
                    name="name"
                    type="text"
                  />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Company*")}
                  <Input
                    value={company}
                    onChange={(e) => changeCompany(e.target.value)}
                    {...css.input}
                    type="text"
                  />
                </label>
                <label className="form-label" htmlFor="">
                  {t("email*")}
                  <Input
                    value={textValue}
                    onChange={(e) => changeText(e.target.value)}
                    {...css.input}
                    type="email"
                  />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Location / Town")}
                  <Input
                    value={location}
                    onChange={(e) => changeLocation(e.target.value)}
                    {...css.input}
                    type="text"
                  />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Country")}
                  <Input
                    value={country}
                    onChange={(e) => changeCountry(e.target.value)}
                    {...css.input}
                    type="text"
                  />
                </label>
                <label className="form-label" htmlFor="">
                  {t("Phone number")}
                  <Input
                    value={numberValue}
                    onChange={(e) => changeNumber(e.target.value)}
                    {...css.input}
                    type="text"
                  />
                </label>
              </SimpleGrid>
              <Button type="submit" onClick={sendMessage} {...css.button}>
                {t("Submit")}
              </Button>
            </form>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6002.6404858922715!2d69.2501422883606!3d41.21479120205732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61badf20ac1d%3A0x9a5393ee55928047!2sORIENT%20CERAMIC!5e0!3m2!1sen!2sus!4v1731148173336!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowfullscreen=""
              className="form-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4935650251427!2d69.24745957586927!3d41.21101347132282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae60e8bb54cecb%3A0xef1a6253f161df48!2sNilufar%20St%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1730994409889!5m2!1sen!2s"
              // width="600"
              // height="450"
              // style="border:0;"
              style={{ border: 0 }}
              allowfullscreen=""
              className="form-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
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
