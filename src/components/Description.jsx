import { Typography } from "@mui/material";
export default function Description({ descriptions }) {
  return (
    <>
      {descriptions &&
        descriptions.map((description) => (
          <Typography variant="subtitle1">{description}</Typography>
        ))}
    </>
  );
}
