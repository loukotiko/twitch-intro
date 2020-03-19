define(function(require) {
  const $clouds = document.getElementById("clouds_layer");

  function createCloud() {
    const variation = Math.floor(Math.random() * 4) + 1;
    const sizeVariation = Math.floor(Math.random() * 4) + 1;
    const duration = sizeVariation * 8 + 4;
    const size = sizeVariation * 150 + 400;

    const $cloud = document.createElement("div");
    $cloud.className = "cloud";
    $cloud.style.backgroundImage = `url(./assets/nuage_${variation}.png)`;
    $cloud.style.zIndex = 4 - sizeVariation;

    $cloud.style.top =
      Math.random() * document.documentElement.clientHeight + "px";
    $cloud.style.height = size + "px";
    $cloud.style.width = size + "px";

    $cloud.style.animationDuration = duration + "s";

    $clouds.appendChild($cloud);

    setTimeout(() => $clouds.removeChild($cloud), duration * 1000);

    setTimeout(() => createCloud(), Math.random() * 3000);
  }

  createCloud();
});
