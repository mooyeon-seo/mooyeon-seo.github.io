import { Typography, Grid, Paper } from "@material-ui/core";
import "./Card.css";

export default function Card({ description, link }) {
    return (
        <img src={link} alt={description} className="card"/>
    );
}
