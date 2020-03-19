function findParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

define(function(require) {
  require("jsx!./Plane");
  require("jsx!./Clouds");
  require("jsx!./Flyings");
  require("jsx!./Sounds");

  const $timer = document.getElementById("timer");
  const $timerText = document.getElementById("timer_text");
  const $timerTime = document.getElementById("timer_time");

  const timerOption = findParameter("timer");
  const startOption = findParameter("start");

  if (timerOption) {
    $timerText.innerHTML = "Début du live dans";

    let start;
    let time = (timerOption || 5) * 60 * 1000;
    function step(timestamp) {
      if (!start) start = timestamp;

      const progress = timestamp - start;

      const left = time - progress;

      const minutes = Math.floor(left / 1000 / 60);
      const seconds = Math.floor((left - minutes * 60 * 1000) / 1000);

      $timerTime.innerHTML =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

      if (progress <= time) {
        requestAnimationFrame(step);
      } else {
        $timerText.innerHTML = "On arrive !";
        $timerTime.innerHTML = "";
      }
    }
    requestAnimationFrame(step);
  }

  if (startOption) {
    $timerText.innerHTML = "Début du live à";
    $timerTime.innerHTML = startOption;
  }
});
