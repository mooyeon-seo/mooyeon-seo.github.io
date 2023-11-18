import { styled } from "@mui/system";

const iconSize = 45;

const IconWrapper = styled("div")({
  marginLeft: 15,
  "&:hover img": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
});

const IconImage = styled("img")({
  width: (props) => props.width || iconSize,
  height: (props) => props.height || iconSize,
});

export default function Icon({
  alt,
  src,
  link,
  width = iconSize,
  height = iconSize,
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
