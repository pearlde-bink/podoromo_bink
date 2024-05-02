const btnStart = document.querySelector(".btn.start");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let countPomo = document.getElementById("countPomo");
let min, sec, cnt;
let isPaused = false;

let intervalId;

minute.innerHTML = 25;
second.innerHTML = "00";
countPomo.innerHTML = "You pomodoroed 1 times";

//button Start
btnStart.addEventListener("click", function () {
  // change button text
  if (btnStart.innerHTML == "Start") {
    btnStart.innerHTML = "Pause";
    if (!isPaused) {
      sec = 15;
      min = 3;
      cnt = 1;
    }
    isPaused = false;

    intervalId = setInterval(timer, 1000);
  } else {
    btnStart.innerHTML = "Start";
    isPaused = true;
    clearInterval(intervalId);
  }
});

// start timer
function timer() {
  if (sec >= 0 && sec < 10) {
    second.innerHTML = "0" + sec;
  } else {
    second.innerHTML = sec;
  }
  minute.innerHTML = min;
  countPomo.innerHTML = "You did pomo " + cnt + " times";

  if (sec > 0 && min >= 0) {
    sec = sec - 1;
  } else if (sec == 0 && min > 0) {
    min -= 1;
    sec = 15;
  } else if (sec == 0 && min == 0) {
    clearInterval(intervalId); // Stop the timer when it reaches 00:00
    document.querySelector(".content").style.backgroundColor = "var(--break)";
    // cnt += 1;
  }
}
