const variations = [
  "cornichon",
  "dalek",
  "mellicta",
  "pizza",
  "ramen",
  "sushi",
  "utsu",
  "viking"
];

define(function(require) {
  const $flyings = document.getElementById("flyings_layer");

  function createFlying() {
    const variation = variations[Math.floor(Math.random() * variations.length)];
    const sizeVariation = Math.floor(Math.random() * 5) + 1;
    const duration = sizeVariation * 4 + 1;
    const size = sizeVariation * 140 + 100;

    const $flying = document.createElement("div");
    $flying.className = "flying";
    $flying.style.backgroundImage = `url(./assets/flyings/${variation}.png)`;

    $flying.style.top =
      Math.random() * document.documentElement.clientHeight + "px";
    $flying.style.height = size + "px";
    $flying.style.width = size + "px";
    $flying.style.zIndex = sizeVariation - 2;

    $flying.style.animationDuration = duration + "s";

    $flyings.appendChild($flying);

    setTimeout(() => $flyings.removeChild($flying), duration * 1000);

    setTimeout(() => createFlying(), Math.random() * 10000 + 2000);
  }

  setTimeout(() => createFlying(), 15000);
});
