import { useTranslation } from "react-i18next";
import UzbekImage from "../assets/uzbek.png";
import RussianImage from "../assets/russian.png";
import EnglishImage from "../assets/english.png";
import { Image, Text } from "@chakra-ui/react";

const languageData = [
  {
    id: 1,
    image: UzbekImage,
    value: "uz",
  },
  {
    id: 2,
    image: RussianImage,
    value: "ru",
  },
  {
    id: 3,
    image: EnglishImage,
    value: "en",
  },
];

function Language() {
  const { i18n } = useTranslation();

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const languageImage =
    i18n?.language === "uz"
      ? UzbekImage
      : i18n?.language === "ru"
      ? RussianImage
      : EnglishImage;

  const data = languageData?.filter((item) => item?.value != i18n.language);

  return (
    <>
      <div className="dropdown">
        <Text className="dropbtn">
          <Image
            className={"language-image"}
            src={languageImage}
            alt="Language"
          />
        </Text>
        <div className="dropdown-content">
          {data?.map((item, index) => (
            <div key={index} onClick={() => onChangeLanguage(item.value)}>
              <Image
                className={"language-image"}
                src={item.image}
                alt="English"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Language;
