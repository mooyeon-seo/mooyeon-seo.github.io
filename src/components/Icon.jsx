import { Typography, Grid, Paper } from "@material-ui/core";
import "./Icon.css";

export default function Icon({ description, link }) {
    return (
        <img src={link} alt={description} className="card"/>
    );
}
