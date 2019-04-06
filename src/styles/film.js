import {style, stylesheet} from "typestyle";
import {colors} from "utils/values";

export const _styles = {
  sort: (isActive) => style({
    padding: "5px 10px",
    background: isActive ? colors.gray : colors.transparent,
    textTransform: "capitalize",
  }),
  ...stylesheet({
    wrapper: {
      fontFamily: "arial",
      display: "flex",
      justifyContent: "space-between",
      minHeight: "100vh",
      flexFlow: "row wrap",
      overflow: "hidden",
    },
    goBack: {
      padding: "50px",
    },
    left: {
      flex: 1,
      height: "inherit",
      background: colors.dark,
      color: colors.white,
    },
    right: {
      padding: "50px 0 0 50px",
      width: "85%",
      height: "inherit",
      background: colors.charcoal,
    },
    contentWrapper: {
      display: "flex",
      flexFlow: "row wrap",
    },
    content: {
      flex: 1,
      $nest: {
        "h1": {
          fontSize: "4em",
          color: colors.white,
        },
        "h4": {
          opacity: 0.7,
          padding: "5px",
          fontWeight: "normal",
        }
      }
    },
    image: {
      width: "20%",
      marginRight: "5%",
    },
    characters: {
      display: "flex",
      flexFlow: "row nowrap",
      overflow: "scroll",
    },
    character: {
      padding: "10px",
      textAlign: "center",
      $nest: {
        "h3": {
          fontSize: "2em",
          color: colors.white,
          display: "inline-block",
        },
        "h5": {
          opacity: 0.7,
          margin: "5px",
        }
      }
    },
    thumbnail: {
      height: "auto",
      width: "inherit",
    },
    charactersTitle: {
      display: "flex",
      justifyContent: "space-between",
      margin: "40px 40px 15px 0",
      $nest: {
        "h3": {
          fontSize: "2em",
          color: colors.white,
          margin: "0px",
        }
      }
    },
    sortWrapper: {
      background: colors.dark,
      borderRadius: "3px",
      cursor: "pointer",
      display: "inline-flex",
      overflow: "hidden",
      margin: "0 5px 5px",
      height: "fit-content",
    },
    allSorts: {
      display: "inline-flex",
    },
    arrow: {
      padding: "3px",
    }
  })
};