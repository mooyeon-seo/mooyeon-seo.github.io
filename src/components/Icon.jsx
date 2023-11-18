import { styled } from "@mui/system";
import { UI } from "../constants/ui";


const IconWrapper = styled("div")({
  marginLeft: UI.margin,
  "&:hover img": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
});

const IconImage = styled("img")({
  width: (props) => props.width || UI.iconSize,
  height: (props) => props.height || UI.iconSize,
});

export default function Icon({
  alt,
  src,
  link,
  width = UI.iconSize,
  height = UI.iconSize,
}) {
  const renderIcon = (link) => {
    if (link) {
      return (
        <a href={link}>
          <IconImage src={src} alt={alt} width={width} height={height} />
        </a>
      );
    }
    return <IconImage src={src} alt={alt} width={width} height={height} />;
  };

  return <IconWrapper>{renderIcon(link)}</IconWrapper>;
}
