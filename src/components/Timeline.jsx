import Typography from "@mui/material/Typography";
import "./Timeline.css";
export default function TimeLine({ timeline, location }) {
  return (
    <div className="timelineSection">
      <Typography variant="subtitle1">{timeline}</Typography>
      <Typography variant="subtitle2">{location}</Typography>      
    </div>
  );
}
