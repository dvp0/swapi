import * as React from "react";
import { cssRaw, stylesheet } from "typestyle";
import { colors } from "utils/values";

// pure css implementation of pulse gif, this block is taken from https://loading.io/css/
cssRaw(`
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    margin-top: -7px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    border-radius: 3px;
    left: 6px;
    width: 8px;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }
`);

const _styles = stylesheet({
  wrapper: {
    display: "inline-flex",
    width: "64px",
    height: "40px",
    marginTop: "-7px",
  }
});

export function LoadingPulse({ condition, color }) {
  const style = { background: color || colors.white};
  return condition ? (
    <div className={_styles.wrapper}>
      <div className="lds-facebook">
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
      </div>
    </div>
  ) : false;
}
