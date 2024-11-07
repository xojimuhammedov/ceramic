import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import CertificateOne from "../assets/sertifikat.jpg";
import CertificateTwo from "../assets/sertifikat1.jpg";
import CertificateThree from "../assets/sertifikat2.jpg";
import CertificateFour from "../assets/sertifikat3.jpg";

function Statistic() {
  return (
    <Box p={'36px 0'}>
      <Box className="container">
        <SimpleGrid gap={"24px"} columns={{ base: 1, md: 2, lg: 3 }}>
          <Image {...css.image} src={CertificateOne} />
          <Image {...css.image} src={CertificateTwo} />
          <Image {...css.image} src={CertificateThree} />
          <Image {...css.image} src={CertificateFour} />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Statistic;

const css = {
  image: {
    width: "100%",
    height: "480px",
    objectFit: "cover",
  },
};
