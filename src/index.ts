import { printMousePos, writeStar } from "./ts/app/star";
import { init } from "./ts/app/main";
import "./scss/main.scss";

init();

document.addEventListener("click", printMousePos.bind(this));

writeStar();
