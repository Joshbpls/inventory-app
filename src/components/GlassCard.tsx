import {Card, withStyles} from "@material-ui/core";


export const GlassCard = withStyles({
    root: {
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(12.0px)",
        borderRadius: 10,
        border: "1px solid rgba(255, 255, 255, 0.18)"
    }
})(Card)