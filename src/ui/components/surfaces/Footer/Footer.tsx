import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            harum blanditiis dolor ratione numquam veritatis nobis
            exercitationem! Facere maxime expedita ipsam, unde nisi dolorum,
            molestias nesciunt dolores id voluptates impedit.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"nooper noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt="App store" />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"nooper noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt="Google Play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
