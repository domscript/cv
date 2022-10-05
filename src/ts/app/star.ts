"use strict";

const starShape = document.querySelector<HTMLElement>(".frame");
export const printMousePos = function (e: any) {
  if (!starShape) return;
  starShape.style.visibility = "visible";
  starShape.style.top =
    Math.max(50, Math.min(document.body.scrollHeight - 128, e.pageY - 64)) +
    "px";
  starShape.style.left =
    Math.min(document.body.scrollWidth - 128, e.pageX - 64) + "px";
};

export const writeStar = function () {
  let a = "";
  let d = `<div class="triangle-1"></div><div class="c"></div>`;
  for (let i = 1; i <= 4; i++) {
    d += `<div class="hill-bg-${i}"></div><div class="hill-fgg-${i}"></div>`;
  }
  for (let i = 1; i <= 12; i++) {
    a += `<div class="line-${i}"></div>`;
  }
  if (starShape) {
    starShape.innerHTML = d;
    const triangle = document.querySelector<HTMLElement>(".triangle-1");
    if (triangle) triangle.innerHTML = a;
  }
};
