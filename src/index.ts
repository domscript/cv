import { printMousePos, writeStar } from "./ts/app/star";
import { init } from "./ts/app/main";
import { header } from "./ts/app/header";
import "./scss/main.scss";
header();

init();
document.addEventListener("click", printMousePos.bind(this));

writeStar();
