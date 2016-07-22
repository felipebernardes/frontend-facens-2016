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
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
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
        "flexFlow": "column",
        "backgroundImage": "url('../img/bg-header.jpg')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "position": "relative",
        "zIndex": 2
    },
    "header:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(0,0,0,0.5)",
        "zIndex": -1
    },
    "header div": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "minWidth": 250,
        "position": "relative"
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
    },
    "destaque": {
        "minHeight": 100 * vh,
        "textAlign": "center"
    },
    "destaque h2": {
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto"
    },
    "destaque li": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto"
    },
    "destaque li:nth-of-type(1) div": {
        "backgroundImage": "url('../img/destaque-1.jpg')"
    },
    "destaque li:nth-of-type(2) div": {
        "backgroundImage": "url('../img/destaque-2.jpg')"
    },
    "destaque li:nth-of-type(3) div": {
        "backgroundImage": "url('../img/destaque-3.jpg')"
    },
    "destaque div": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": 16,
        "marginLeft": "auto",
        "height": 190,
        "width": 190,
        "borderRadius": "50%",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }
});