import { KEPEKLISTA } from "./adat.js";
$(function () {
  console.log(KEPEKLISTA);
  main();
});
function main() {
  const ARTICLE = $("article");
  ARTICLE.prepend(osszealit(KEPEKLISTA));
}
function osszealit(KEPEKLISTA) {
  let txt = "";
  for (let i = 0; i < KEPEKLISTA.length; i++) {
    txt += `<div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
            <img src="front.jpg" alt="">
        </div>
        <div class="flip-box-back">
        <img src="${KEPEKLISTA[i]}" alt=""></div>
        </div>
      </div>
    </div><div>`;
  }
  console.log(txt);
  return txt;
}
/*  //function nemTalalt(KEPEKLISTA) {
  if ($(event.target).attr("scr", KEPEKLISTA[aktivElemID])!=$(event.target).attr("scr", KEPEKLISTA[aktivElemID]);) {
    KEPEKLISTA[aktivElemID].css(img:animation: shake 0.5s,animation-iteration-count:2,
  @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
};)
  } else {
    txt = "talált";
  }
} */
