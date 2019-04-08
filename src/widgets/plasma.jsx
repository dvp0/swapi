import * as React from "react";
import { cssRaw, stylesheet } from "typestyle";
import { colors } from "utils/values";

// pure css implementation of lightsaber gif
// this block is taken from https://codepen.io/ncerminara/pen/KzurJ?editors=1100
// and modified to be animated

cssRaw(`
	.lightsaber { 
		position: relative;
		height: 270px;
	}

	.lightsaber label {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 88;
		text-indent: -9999px;
		width: 15px;
		height: 50px;
		border-bottom: solid 4px grey;
		border-top: solid 5px grey;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		-o-border-radius: 5px;
		-ms-border-radius: 5px;
		background: rgb(226,226,226); /* Old browsers */
		background: linear-gradient(to right, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 */
	}

	.lightsaber .switch {
		background: #B94A37;
		width: 5px;
		height: 10px;
		display: block;
		position: absolute;
		bottom: 25px;
		left: 13px;
		transition: left 200ms;
		-moz-transition: left 200ms;
		-webkit-transition: left 200ms;
		-o-transition: left 200ms;
		-ms-transition: left 200ms;
		border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		-o-border-radius: 10px;
		-ms-border-radius: 10px;
	}

	.lightsaber input[type=checkbox] {
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 0;
		-moz-opacity: 0;
		-webkit-opacity: 0;
		-o-opacity: 0;
		-ms-opacity: 0;
		z-index: 77;
	}

	.lightsaber .plasma {
		transition: height 300ms,;
		-moz-transition: height 300ms;
		-webkit-transition: height 300ms;
		-o-transition: height 300ms;
		-ms-transition: height 300ms;
		border-radius: 12px 12px 0 0;
		position: absolute;
		bottom: 55px;
		left: 2px;
		width: 10px;
		display: block;
		filter: blur(1px);
		-moz-filter: blur(1px);
		-webkit-filter: blur(1px);
		-o-filter: blur(1px);
		-ms-filter: blur(1px);
		height: 0;
	}


	.lightsaber input[type=checkbox]:checked ~ div.plasma {
		height: 250px;
	}

	.lightsaber input[type=checkbox]:hover ~ div.switch {
		background: #c09853;
		left: 12px;
	}

	.lightsaber input[type=checkbox]:checked ~ div.switch {
		background: #468847;
	}

	.yoda {
		background: rgb(135,220,90); /* Old browsers */
		background: linear-gradient(to right, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgb(135,220,90) 0%, rgb(254,254,254) 30%, rgb(254,254,254) 50%, rgb(254,254,254) 70%, rgb(135,220,90) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgb(135,220,90)), color-stop(30%,rgb(254,254,254)), color-stop(50%,rgb(254,254,254)), color-stop(70%,rgb(254,254,254)), color-stop(100%,rgb(135,220,90))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87dc5a', endColorstr='#87dc5a',GradientType=1 ); /* IE6-9 */
		animation-name: yoda;
		-moz-animation-name: yoda;
		-webkit-animation-name: yoda;
		-o-animation-name: yoda;
		-ms-animation-name: yoda;
		animation-duration: 1.5s;
		-moz-animation-duration: 1.5s;
		-webkit-animation-duration: 1.5s;
		-o-animation-duration: 1.5s;
		-ms-animation-duration: 1.5s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.vader {
		background: rgb(229,17,21); /* Old browsers */
		background: linear-gradient(to right, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(229,17,21,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(229,17,21,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(229,17,21,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(229,17,21,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(229,17,21,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e51115', endColorstr='#e51115',GradientType=1 ); /* IE6-9 */
		animation-name: vader;
		-moz-animation-name: vader;
		-webkit-animation-name: vader;
		-o-animation-name: vader;
		-ms-animation-name: vader;
		animation-duration: 1.5s;
		-moz-animation-duration: 1.5s;
		-webkit-animation-duration: 1.5s;
		-o-animation-duration: 1.5s;
		-ms-animation-duration: 1.5s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.windu {
		background: rgb(202,116,221); /* Old browsers */
		background: linear-gradient(to right, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(202,116,221,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(202,116,221,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(202,116,221,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(202,116,221,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(202,116,221,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca74dd', endColorstr='#ca74dd',GradientType=1 ); /* IE6-9 */
		animation-name: windu;
		-moz-animation-name: windu;
		-webkit-animation-name: windu;
		-o-animation-name: windu;
		-ms-animation-name: windu;
		animation-duration: 1.5s;
		-moz-animation-duration: 1.5s;
		-webkit-animation-duration: 1.5s;
		-o-animation-duration: 1.5s;
		-ms-animation-duration: 1.5s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	.obi-wan {
		background: rgb(55,132,214); /* Old browsers */
		background: linear-gradient(to right, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* W3C */
		background: -moz-linear-gradient(left, rgba(55,132,214,1) 0%, rgba(254,254,254,1) 30%, rgba(254,254,254,1) 47%, rgba(254,254,254,1) 71%, rgba(55,132,214,1) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(55,132,214,1)), color-stop(30%,rgba(254,254,254,1)), color-stop(47%,rgba(254,254,254,1)), color-stop(71%,rgba(254,254,254,1)), color-stop(100%,rgba(55,132,214,1))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(left, rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3784d6', endColorstr='#3784d6',GradientType=1 ); /* IE6-9 */
		animation-name: obi-wan;
		-moz-animation-name: obi-wan;
		-webkit-animation-name: obi-wan;
		-o-animation-name: obi-wan;
		-ms-animation-name: obi-wan;
		animation-duration: 1.5s;
		-moz-animation-duration: 1.5s;
		-webkit-animation-duration: 1.5s;
		-o-animation-duration: 1.5s;
		-ms-animation-duration: 1.5s;
		animation-iteration-count: infinite;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		-o-animation-iteration-count: infinite;
		-ms-animation-iteration-count: infinite;
	}

	div {
		-webkit-transform : translateZ(0); 
		-o-transform : translateZ(0); 
		-moz-transform : translateZ(0); 
		transform : translateZ(0); 
	}

	/* Animations */
	@keyframes yoda {
		from { box-shadow: 0 0 0px #7EC855;  height: 0px; }
		50% { box-shadow: 0 0 25px #7EC855; height: 270px; }
		to { box-shadow: 0 0 0px #7EC855;  height: 0px; }
	}
	@-moz-keyframes yoda {
		from { box-shadow: 0 0 0px #7EC855;  height: 0px; }
		50% { box-shadow: 0 0 25px #7EC855; height: 270px; }
		to { box-shadow: 0 0 0px #7EC855;  height: 0px; }
	}
	@-webkit-keyframes yoda {
		from { box-shadow: 0 0 0px #7EC855;  height: 0px; }
		50% { box-shadow: 0 0 25px #7EC855; height: 270px; }
		to { box-shadow: 0 0 0px #7EC855;  height: 0px; }
	}
	@-o-keyframes yoda {
		from { box-shadow: 0 0 0px #7EC855;  height: 0px; }
		50% { box-shadow: 0 0 25px #7EC855; height: 270px; }
		to { box-shadow: 0 0 0px #7EC855;  height: 0px; }
	}
	@-ms-keyframes yoda {
		from { box-shadow: 0 0 0px #7EC855;  height: 0px; }
		50% { box-shadow: 0 0 25px #7EC855; height: 270px; }
		to { box-shadow: 0 0 0px #7EC855;  height: 0px; }
	}

	@keyframes vader {
		from { box-shadow: 0 0 0px #e51115; height: 0; }
		50% { box-shadow: 0 0 25px #e51115; height: 270px; }
		to { box-shadow: 0 0 0px #e51115; height: 0; }
	}
	@-moz-keyframes vader {
		from { box-shadow: 0 0 0px #e51115; height: 0; }
		50% { box-shadow: 0 0 25px #e51115; height: 270px; }
		to { box-shadow: 0 0 0px #e51115; height: 0; }
	}
	@-webkit-keyframes vader {
		from { box-shadow: 0 0 0px #e51115; height: 0; }
		50% { box-shadow: 0 0 25px #e51115; height: 270px; }
		to { box-shadow: 0 0 0px #e51115; height: 0; }
	}
	@-o-keyframes vader {
		from { box-shadow: 0 0 0px #e51115; height: 0; }
		50% { box-shadow: 0 0 25px #e51115; height: 270px; }
		to { box-shadow: 0 0 0px #e51115; height: 0; }
	}
	@-ms-keyframes vader {
		from { box-shadow: 0 0 0px #e51115; height: 0; }
		50% { box-shadow: 0 0 25px #e51115; height: 270px; }
		to { box-shadow: 0 0 0px #e51115; height: 0; }
	}

	@keyframes windu {
		from { box-shadow: 0 0 0px #ca74dd; height: 0px; }
		50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }
		to { box-shadow: 0 0 0px #ca74dd; height: 0px; }
	}
	@-moz-keyframes windu {
		from { box-shadow: 0 0 0px #ca74dd; height: 0px; }
		50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }
		to { box-shadow: 0 0 0px #ca74dd; height: 0px; }
	}
	@-webkit-keyframes windu {
		from { box-shadow: 0 0 0px #ca74dd; height: 0px; }
		50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }
		to { box-shadow: 0 0 0px #ca74dd; height: 0px; }
	}
	@-o-keyframes windu {
		from { box-shadow: 0 0 0px #ca74dd; height: 0px; }
		50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }
		to { box-shadow: 0 0 0px #ca74dd; height: 0px; }
	}
	@-ms-keyframes windu {
		from { box-shadow: 0 0 0px #ca74dd; height: 0px; }
		50% { box-shadow: 0 0 25px #ca74dd; height: 270px; }
		to { box-shadow: 0 0 0px #ca74dd; height: 0px; }
	}

	@keyframes obi-wan {
		from { box-shadow: 0 0 0px #3784d6; height: 0px; }
		50% { box-shadow: 0 0 25px #3784d6; height: 270px; }
		to { box-shadow: 0 0 0px #3784d6; height: 0px; }
	}
	@-moz-keyframes obi-wan {
		from { box-shadow: 0 0 0px #3784d6; height: 0px; }
		50% { box-shadow: 0 0 25px #3784d6; height: 270px; }
		to { box-shadow: 0 0 0px #3784d6; height: 0px; }
	}
	@-webkit-keyframes obi-wan {
		from { box-shadow: 0 0 0px #3784d6; height: 0px; }
		50% { box-shadow: 0 0 25px #3784d6; height: 270px; }
		to { box-shadow: 0 0 0px #3784d6; height: 0px; }
	}
	@-o-keyframes obi-wan {
		from { box-shadow: 0 0 0px #3784d6; height: 0px; }
		50% { box-shadow: 0 0 25px #3784d6; height: 270px; }
		to { box-shadow: 0 0 0px #3784d6; height: 0px; }
	}
	@-ms-keyframes obi-wan {
		from { box-shadow: 0 0 0px #3784d6; height: 0px; }
		50% { box-shadow: 0 0 25px #3784d6; height: 270px; }
		to { box-shadow: 0 0 0px #3784d6; height: 0px; }
	}

`);

const _styles = stylesheet({
  wrapper: {
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100%",
    position: "fixed",
    background: colors.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

export function LoadingSaber({ condition }) {

  const plasmas = ["yoda", "obi-wan", "vader", "windu"];
  const random = plasmas[Math.floor(Math.random() * plasmas.length)];

  return condition && (
    <div className={_styles.wrapper}>
      <div className="lightsaber">
        <label />
        <input type="checkbox" defaultChecked />
        <div className="switch"></div>
        <div className={`plasma ${random}`}></div>
      </div>
    </div>
  );
}