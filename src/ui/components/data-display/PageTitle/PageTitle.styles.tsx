import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  text-align: center;
  margin: ${(props) => props.theme.spacing(5) + "" + 0};
`;

export const PageTitleStyled = styled("div")`
  margin: 0;
  color: ${(props) => props.theme.palette.primary.main};
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: 600;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
`;

export const SubTitleStyled = styled("h3")`
  margin: ${(props) => props.theme.spacing(1.5) + "" + 0};
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  font-weight: normal;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
  }
`;
