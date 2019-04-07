import { style, stylesheet } from "typestyle";
import { colors } from "utils/values";

export const _styles = {
  sort: (isActive) => style({
    padding: "7px 12px",
    fontSize: "14px",
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
      padding: "4% 0 0 4%",
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
          fontSize: "3em",
          margin: "0px",
          color: colors.white,
        },
        "h4": {
          opacity: 0.7,
          fontWeight: "normal",
        }
      }
    },
    image: {
      width: "16%",
      marginRight: "4%",
    },
    characters: {
      display: "flex",
      flexFlow: "row nowrap",
      overflow: "scroll",
    },
    character: {
      padding: "0 25px 10px 0",
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
    sub: {
      width: "55%",
      display: "flex",
      justifyContent: "space-between",
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
      display: "inline-flex",
      overflow: "hidden",
      margin: "0 5px 5px",
      height: "fit-content",
    },
    allSorts: {
      display: "inline-flex",
      cursor: "pointer",
      marginTop: "5px",
    },
    arrow: {
      padding: "3px",
    }
  })
};
