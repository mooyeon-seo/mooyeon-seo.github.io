import Link from "@material-ui/core/Link";

export default function Navigation({title, link}) {
    return (
        <Link color="inherit" href={link} className="titleNavigation">
            {title}
        </Link>
    )
}