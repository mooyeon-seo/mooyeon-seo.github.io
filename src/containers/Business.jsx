import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";
import Title from "../components/Title";

const BusinessSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const BusinessLogoContainer = styled("div")({
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
});

const BusinessLogo = styled("img")({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  borderRadius: "20px",
});

const BusinessContent = styled("div")({
  height: "100%",
  display: "grid",
  gridTemplateColumns: `${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  gridTemplateRows: `${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  alignItems: "center",
  justifyContent: "baseline",
  gap: UI.gap,
  padding: UI.padding,
});

const DescriptionBlock = ({ description }) => {
  const Content = styled("div")({
    backgroundColor: description.backgroundColor,
    borderRadius: UI.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    gap: UI.gap,
  });
  return (
    <motion.div whileHover={{ scale: 1.025 }} style={{height: "100%", width:"100^"}}>
      <Content>
        {description.title && description.backgroundColor && (
          <Typography
            variant="h6"
            align="center"
            color="white"
            fontFamily={"anton"}
          >
            {description.title}
          </Typography>
        )}
      </Content>
    </motion.div>
  );
};

const EmptyDescription = () => {
  const Content = styled("div")({
    backgroundColor: "white",
    // borderRadius: UI.borderRadius,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  });
  return <Content></Content>;
};

export default function Business() {
  return (
    <BusinessSection>
      <Title title="Business" />
      <BusinessContent>
        <BusinessLogoContainer>
          <motion.div whileHover={{ scale: 1.025 }}>
            <BusinessLogo
              src="/assets/businesslogo.svg"
              alt="Raspberry Sherbet Logo"
              onClick={() => {
                window.open("https://raspberrysherbet.ca", "_blank");
              }}
            />
          </motion.div>
        </BusinessLogoContainer>
        {[
          { title: "Full Stack Development", backgroundColor: "#ffcccc" },
          { title: "Digital Marketing", backgroundColor: "#cf838d" },
          { title: "Manufacturing and Shipping", backgroundColor: "#980036" },
        ].map((description) => (
          <DescriptionBlock description={description} />
        ))}
        <EmptyDescription />
        <EmptyDescription />
        <EmptyDescription />
        <EmptyDescription />
        <EmptyDescription />
      </BusinessContent>
    </BusinessSection>
  );
}
