import { Typography } from "@material-ui/core";

export default function TitleComponent({ title, theme }) {
  return (
    <Typography variant="h2" align="center">{title.toUpperCase()}</Typography>
  );
}
