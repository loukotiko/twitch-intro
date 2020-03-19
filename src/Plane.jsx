define(function(require) {
  const $smokes = document.getElementById("smoke_layer");
  const $plane = document.getElementById("plane");
  const $planeSound = document.getElementById("plane_sound");

  function createSmoke() {
    const variation = Math.round(Math.random()) + 1;
    const $smoke = document.createElement("div");
    $smoke.className = "smoke";
    $smoke.style.backgroundImage = `url(./assets/fumee_${variation}.png)`;
    $smoke.style.top =
      Math.random() * 10 - 5 + $plane.getBoundingClientRect().top + "px";
    $smokes.appendChild($smoke);
    setTimeout(() => $smokes.removeChild($smoke), 600);
  }

  setInterval(() => createSmoke(), 100);
});
