import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { motion } from "framer-motion";
import RotatingSquare from "../components/RotatingSquare";
import { UI } from "../constants/ui";

const HeroSection = styled("section")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: UI.gap,
});

const HeroContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: UI.gap,
});

const Arrow = styled("div")({
  width: 0,
  height: 0,
  color: "black",
  borderTop: "solid 20px transparent",
  borderBottom: "solid 20px transparent",
  borderLeft: "solid 20px white",
  cursor: "pointer",
});

function ItemWithMotion({ heading, initialX }) {
  return (
    <motion.div
    initial={{ x: initialX }}
    whileInView={{ x: 0 }}
    transition={{ duration: 1.2 }}
    >
      <Typography variant="h4" align="center">
        {heading}
      </Typography>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <RotatingSquare />
        <TextContainer className="text-container">
          <Typography variant="h4" align="center">
            My name is
          </Typography>
          <motion.div
            initial={{ scale: 0.88 }}
            whileInView={{ scale: 1.0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                background:
                  "-webkit-linear-gradient(45deg, #E30B5C 10%, #ffcccc 90%)",
                  // "-webkit-linear-gradient(45deg, rgb(211, 9, 225) 10%, #6f2da8 90%)",
                  
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mooyeon Seo
            </Typography>
          </motion.div>
          <List>
            <ListItem>
              <ItemWithMotion
                heading="Full Stack Software Developer"
                initialX={50}
              />
            </ListItem>
            <ListItem>
              <ItemWithMotion
                heading="Recent Graduate From University Of Waterloo"
                initialX={80}
              />
            </ListItem>
          </List>
        </TextContainer>
      </HeroContent>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        component={Arrow}
      />
    </HeroSection>
  );
}
