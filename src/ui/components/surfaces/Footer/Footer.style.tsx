import { styled } from "@mui/material";
import { Container, Typography } from "@mui/material";

export const FooterStyled = styled("footer")`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) =>
    props.theme.palette.getContrastText(props.theme.palette.primary.main)};
  padding: ${(props) => props.theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  list-style-type: none;
  display: flex;
  padding: 0;
  gap: ${(props) => props.theme.spacing()};

  img {
    width: 122px;
  }
`;
