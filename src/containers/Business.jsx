import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";
import Title from "../components/Title";
import Navigation from "../components/Navigation";

const BusinessSection = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

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
  gridTemplateColumns: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  gridTemplateRows: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  alignItems: "center",
  justifyContent: "baseline",
  gap: UI.gap,
  padding: UI.padding,
});

const BusinessDescription = ({ description }) => {
  const Content = styled("div")({
    backgroundColor: "#dc143c",
    borderRadius: UI.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  });
  return (
    <Content>
      <Typography variant="h5" align="center" color="white" fontFamily={"anton"}>
        {description}
      </Typography>
    </Content>
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
  return (
    <Content>
    </Content>
  );
};

export default function Business() {
  return (
    <BusinessSection>
      <Title title="Business" />
      <BusinessContent>
              <EmptyDescription />
        <BusinessDescription description={"Products"} />
        <EmptyDescription />

        <BusinessDescription description={"Web Development"} />
        <BusinessLogoContainer>
          <motion.div whileHover={{ scale: 1.015 }}>
            <BusinessLogo
              src="/assets/businesslogo.svg"
              alt="Raspberry Sherbet Logo"
              onClick={() => {
                window.open("https://raspberrysherbet.ca", "_blank");
              }}
            />
          </motion.div>
        </BusinessLogoContainer>
        <BusinessDescription description={"Digital Marketing"} />

        <EmptyDescription />
        <BusinessDescription description={"Shipping"} />
        <EmptyDescription />
      </BusinessContent>
    </BusinessSection>
  );
}
