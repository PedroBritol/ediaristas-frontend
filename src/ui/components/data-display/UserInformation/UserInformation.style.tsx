import { styled } from "@mui/material/styles";
import { Avatar, Rating } from "@mui/material";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-auto-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${(props) => props.theme.palette.grey[50]};
  padding: ${(props) => props.theme.spacing(3)};
  align-items: center;
  gap: ${(props) => props.theme.spacing(0.5) + " " + props.theme.spacing(2)};
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${(props) => props.theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  font-size: 14px;
  grid-area: rating;
`;
