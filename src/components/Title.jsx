import { Typography } from "@mui/material";

export default function TitleComponent({ title, theme }) {
  return (
    <Typography variant="h2" align="center" margin="15px" fontFamily={"Anton"}>
      {title.toUpperCase()}
    </Typography>
  );
}
