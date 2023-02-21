window.onload = function () {
  var audio = document.getElementById("myAudio");
  console.log(audio);
  document.addEventListener("click", function (event) {
    var target = event.target;
    console.log(target);
    var audioTrigger = target.classList.contains("audio-trigger");

    if (audioTrigger) {
      console.log("audio triggered");
      audio.play();
    }
  });
  document.addEventListener("scroll", function () {
    audio.play();
  });
};
