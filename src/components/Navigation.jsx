import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Navigation({title, link}) {
    return (
        <Link href={link} underline="hover" color="#8f00ff">
            <Typography variant="h6">{title}</Typography>
        </Link>
    )
}