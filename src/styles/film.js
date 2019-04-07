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
      height: "100vh",
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
      width: "85%",
      height: "inherit",
      background: colors.charcoal,
      overflow: "scroll",
    },
    headerWrapper: {
      margin: "4%",
      marginBottom: "0",
      display: "flex",
      flexFlow: "row wrap",
    },
    charactersWrapper: {
      margin: "4%",
      padding: "25px 30px",
      background: colors.dark,
      borderRadius: "20px",
    },
    content: {
      flex: 1,
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-between",
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
    speciesList: {
      fontStyle: "italic",
      lineHeight: 1.5,
      width: "55%",
      paddingBottom: "10px",
    },
    image: {
      width: "16%",
      marginRight: "4%",
    },
    charactersTitle: {
      display: "flex",
      justifyContent: "space-between",
      margin: "0px",
      $nest: {
        "h3": {
          fontSize: "2em",
          color: colors.white,
          margin: "0px",
        }
      }
    },
    characters: {
      display: "flex",
      flexFlow: "row nowrap",
      overflow: "scroll",
      marginTop: "30px",
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
      width: "500px",
      display: "flex",
      justifyContent: "space-between",
    },
    thumbnail: {
      height: "auto",
      width: "inherit",
    },
    sortWrapper: {
      background: colors.charcoal,
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
      padding: "3px 0 0 15px",
    }
  })
};
