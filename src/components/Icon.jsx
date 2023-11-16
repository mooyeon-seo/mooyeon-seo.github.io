import { makeStyles } from "@mui/styles";

const iconSize = 45;
const useStyles = makeStyles((theme) => ({
  icon: {
    "marginLeft": 15,
    "&:hover img": {
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    },
  },
}));

export default function Icon({
  alt,
  src,
  link,
  width = iconSize,
  height = iconSize,
}) {
  const classes = useStyles();

  const renderIcon = (link) => {
    if (link) {
      return (
        <a href={link} className={classes.icon}>
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={classes.icon}
      />
    );
  };

  return renderIcon(link);
}
