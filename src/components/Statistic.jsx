import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import CertificateOne from "../assets/ser1.jpg";
import CertificateTwo from "../assets/ser2.jpg";
import CertificateThree from "../assets/ser3.jpg";
import CertificateFour from "../assets/ser4.jpg";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Share from "yet-another-react-lightbox/plugins/share";
import React from "react";

function Statistic() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td>
                <strong>{t("customer_name")}</strong>
              </td>
              <td>{t("customer_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("product_name")}</strong>
              </td>
              <td>
                {t("product_value_1")}
                <br />
                {t("product_value_2")}
                <br />
                {t("product_value_3")}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{t("sample_act")}</strong>
              </td>
              <td>{t("sample_act_date")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("attest_decision")}</strong>
              </td>
              <td>{t("attest_decision_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("sample_receipt_date")}</strong>
              </td>
              <td>{t("sample_receipt_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("test_end_date")}</strong>
              </td>
              <td>{t("test_end_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("product_standard")}</strong>
              </td>
              <td>{t("product_standard_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("test_method_standard")}</strong>
              </td>
              <td>{t("test_method_standard_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("product_description")}</strong>
              </td>
              <td>
                {t("product_value_1")}
                <br />
                {t("product_value_2")}
                <br />
                {t("product_value_3")}
                <br />
                {t("manufacturer")}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{t("test_conditions")}</strong>
              </td>
              <td>{t("test_conditions_value")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("equipment_info")}</strong>
              </td>
              <td>{t("equipment_info")}</td>
            </tr>
            <tr>
              <td>
                <strong>{t("external_results")}</strong>
              </td>
              <td>{t("external_results")}</td>
            </tr>
          </tbody>
        </table>

        <div className="statistic-list">
          <Heading {...css.title}>{t("title")}:</Heading>
          <Text {...css.text}>{t("description")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title1")}:</Heading>
          <Text {...css.text}>{t("description1")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title2")}:</Heading>
          <Text {...css.text}>{t("description2")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title3")}:</Heading>
          <Text {...css.text}>{t("description3")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title4")}:</Heading>
          <Text {...css.text}>{t("description4")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title5")}:</Heading>
          <Text {...css.text}>{t("description5")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title6")}:</Heading>
          <Text {...css.text}>{t("description6")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title7")}:</Heading>
          <Text {...css.text}>{t("description7")}</Text>
        </div>
        <div className="statistic-list">
          <Heading {...css.title}>{t("title8")}:</Heading>
          <Text {...css.text}>{t("description8")}</Text>
        </div>

        <Text {...css.text}>{t("text8")}</Text>
        <SimpleGrid gap={"24px"} columns={{ base: 1, md: 2, lg: 3 }}>
          <Image
            onClick={() => setOpen(true)}
            {...css.image}
            src={CertificateOne}
          />
          <Image
            onClick={() => setOpen(true)}
            {...css.image}
            src={CertificateTwo}
          />
          <Image
            onClick={() => setOpen(true)}
            {...css.image}
            src={CertificateThree}
          />
          <Image
            onClick={() => setOpen(true)}
            {...css.image}
            src={CertificateFour}
          />
        </SimpleGrid>
      </Box>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Share]}
        slides={[
          {
            src: CertificateOne,
          },
          {
            src: CertificateTwo,
          },
          {
            src: CertificateThree,
          },
          {
            src: CertificateFour,
          },
        ]}
      />
    </Box>
  );
}

export default Statistic;

const css = {
  image: {
    width: "100%",
    height: "520px",
    objectFit: "cover",
  },
  title: {
    color: "#efdfb9",
    fontSize: "25px",
    lineHeight: "30px",
  },
  text: {
    color: "#efdfb9",
    fontSize: "16px",
    lineHeight: "30px",
    margin: "12px 0",
  },
};
