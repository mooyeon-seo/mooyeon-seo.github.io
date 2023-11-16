import { Typography } from "@material-ui/core";
export default function Description({ descriptions }) {
  return (
    <>
      {descriptions &&
        descriptions.map((description) => (
          <Typography variant="subtitle1" component="p">
            {description}
          </Typography>
        ))}
    </>
  );
}
