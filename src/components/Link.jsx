import Button from "@material-ui/core/Button";

export default function Link({title, link}) {
    return (
        <Button color="inherit" href={link}>
            {title}
        </Button>
    )
}