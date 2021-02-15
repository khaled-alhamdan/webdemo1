let disableRclick = (maybeWhatever) => {
  // Disable right click on the whole website, Good for security
  maybeWhatever.preventDefault();
};

document.addEventListener("contextmenu", disableRclick); // Activate the diable function

var countDate = new Date("Feb 25, 2021 00:00:00").getTime();

let febQ8 = () => {
  let now = new Date().getTime();
  let countDown = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  s = Math.floor((countDown % minute) / second);
  m = Math.floor((countDown % hour) / minute);
  h = Math.floor((countDown % day) / hour);
  d = Math.floor(countDown / day);

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
};

setInterval(function () {
  febQ8();
}, 1000);

let music = new Audio();
music.src = "music2.mp3";
