"use-strict";

lightSchemeIcon = document.querySelector("link#light-scheme-icon");
darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

function OnUpdate() {
  if (matcher.matches) {
    darkSchemeIcon.remove();
    document.head.append(lightSchemeIcon);
  } else {
    document.head.append(darkSchemeIcon);
    lightSchemeIcon.remove();
  }
}

matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(OnUpdate);
OnUpdate();
