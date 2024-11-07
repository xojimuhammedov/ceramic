import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/logo1.png";

function Navbar() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"}>
          <Link href="/">
            <Image {...css.logo} src={Logo} />
          </Link>
          <Flex align={"center"} gap={"24px"}>
            <Link {...css.link} href="/about">
              О компании
            </Link>
            <Link {...css.link} href="/company">
              О производстве
            </Link>
            <Link {...css.link} href="/services">
              Характеристики
            </Link>
            <Link {...css.link} href="/product">
              Продукция
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  logo: {
    width: "150px",
  },
  link: {
    color: "#efdfb9",
    fontSize: "18px",
    lineHeight: "24px",
  },
};
