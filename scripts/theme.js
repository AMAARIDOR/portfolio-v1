"use strict";

const lightSchemeIcon = document.querySelector("link#light-scheme-icon");
const darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

function OnUpdate() {
  if (matcher.matches) {
    darkSchemeIcon.remove();
    document.head.append(lightSchemeIcon);
  } else {
    document.head.append(darkSchemeIcon);
    lightSchemeIcon.remove();
  }
}

const matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addEventListener("change", OnUpdate);
OnUpdate();
