import { styled } from "@mui/material/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.background.default};
  text-align: right;
  padding: ${(props) => props.theme.spacing(2)} 0;
  font-size: 12px;
`;
