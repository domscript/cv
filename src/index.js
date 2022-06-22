import { printMousePos, writeStar } from "./js/app/star";
import { init } from "./js/app/main";
import "./scss/main.scss";

init();

document.addEventListener("click", printMousePos.bind(this));

writeStar();
