import Link from "@mui/material/Link";

export default function Navigation({title, link}) {
    return (
        <Link color="inherit" href={link} className="titleNavigation">
            {title}
        </Link>
    )
}