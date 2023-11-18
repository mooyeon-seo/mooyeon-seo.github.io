import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { motion } from "framer-motion";
import RotatingSquare from "../components/RotatingSquare";

const HeroSection = styled("section")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 15,
});

const HeroContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 25,
});

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 15,
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
                  "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mooyeon Seo
            </Typography>
          </motion.div>

          <List>
            <ListItem>
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" align="center">
                  I'm a Full-Stack Software Developer
                </Typography>
              </motion.div>
            </ListItem>
            <ListItem>
              <motion.div
                initial={{ x: 80 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" align="center">
                  I'm a Recent Graduate from University of Waterloo
                </Typography>
              </motion.div>
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
