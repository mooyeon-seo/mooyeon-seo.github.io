import "./Timeline.css";
import Paper from "@material-ui/core/Paper";
export default function TimeLine({ timeline, location }) {
  return (
    <div className="timeline-section">
      <p>{timeline}</p>
      <p>{location}</p>
    </div>
  );
}
