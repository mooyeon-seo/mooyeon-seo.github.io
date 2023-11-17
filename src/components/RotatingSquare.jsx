import { motion, useTime, useTransform } from "framer-motion";

export default function RotatingSquare() {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    const styles = {
        body: {
            width: "200px",
            height: "200px",
            background: "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
            overflow: "hidden",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
        },
        exampleContainer: {
            div: {
                background: "white",
                borderRadius: "30px",
                width: "100px",
                height: "100px",
            },
        },
        refresh: {
            // padding: "10px",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
            width: "20px",
            height: "20px",
            // top: "10px",
            // right: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        },
    };

    return (
        <div style={styles.body}>
            <motion.div style={{ ...styles.exampleContainer.div, rotate }} />
        </div>
    );
}