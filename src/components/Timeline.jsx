import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const TimeLineSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontSize: 14,
  gap: 10, /* add a gap between the timeline and the content */    
  padding: 10,

  "@media (max-width: 600px)": {
    width: 300, /* adjust width for smallest screens */
  }
});

export default function TimeLine({ timeline, location }) {
  return (
    <TimeLineSection>
      <Typography variant="subtitle1">{timeline}</Typography>
      <Typography variant="subtitle2">{location}</Typography>      
    </TimeLineSection>
  );
}
