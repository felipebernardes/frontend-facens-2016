import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 30
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "p": {
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "fontSize": 16
    },
    "*": {
        "boxSizing": "border-box"
    },
    "a": {
        "color": "#000",
        "textDecoration": "none"
    },
    "header": {
        "backgroundColor": "#30d5c6",
        "textAlign": "center",
        "color": "#FFF",
        "minHeight": 100 * vh,
        "display": "flex",
        "flexFlow": "column"
    },
    "header div": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "minWidth": 250
    },
    "header a": {
        "display": "block",
        "backgroundColor": "rgba(0,20,0,0.5)",
        "maxWidth": 160,
        "color": "#FFF",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "borderRadius": 4,
        "textTransform": "uppercase",
        "transition": "all .2s ease",
        "fontWeight": "bold",
        "fontSize": 13
    },
    "header a:hover": {
        "backgroundColor": "rgba(0,20,0,.7)"
    }
});