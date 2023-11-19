import { motion, useTime, useTransform } from "framer-motion";
import { styled } from "@mui/system";

const StyledBackground = styled("div")({
  width: "300px",
  height: "300px",
  background: "linear-gradient(180deg, #E30B5C 0%, #ffcccc 100%)",
  overflow: "hidden",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px",
});

const StyledRotatingSquare = styled("div")({
  background: "white",
  borderRadius: "45px",
  width: "150px",
  height: "150px",
});

export default function RotatingSquare() {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <StyledBackground>
      <motion.div style={{ rotate }}>
        <StyledRotatingSquare />
      </motion.div>
    </StyledBackground>
  );
}
