import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Navigation({title, link}) {
    return (
        <Link href={link} underline="hover" color="#E30B5C">
            <Typography variant="h6">{title}</Typography>
        </Link>
    )
}