import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${(props) => props.theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
