import { styled } from "@mui/material";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${(props) => props.theme.palette.grey[50]};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.grey[100]};
  }
`;
