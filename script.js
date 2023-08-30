// Create main container
const mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");
document.body.appendChild(mainContainer);

// Create wrapper container
const wrapperContainer = document.createElement("div");
wrapperContainer.setAttribute("class", "wrapperContainer");
mainContainer.appendChild(wrapperContainer);

// Create time content container
const timeContent = document.createElement("div");
timeContent.setAttribute("class", "timeContent");
wrapperContainer.appendChild(timeContent);

// Create hours element
const hours = document.createElement("span");
hours.setAttribute("id", "hrs");
timeContent.appendChild(hours);

// Create colon1 element
const colon1 = document.createElement("span");
colon1.setAttribute("class", "colon1");
colon1.innerText = ":";
timeContent.appendChild(colon1);

// Create minutes element
const minutes = document.createElement("span");
minutes.setAttribute("id", "mins");
timeContent.appendChild(minutes);

// Create colon2 element
const colon2 = document.createElement("span");
colon2.setAttribute("class", "colon2");
colon2.innerText = ":";
timeContent.appendChild(colon2);

// Create seconds element
const seconds = document.createElement("span");
seconds.setAttribute("id", "sec");
timeContent.appendChild(seconds);

// Update time every second using setInterval
setInterval(() => {
  let date = new Date();

  // Get hours and format it
  let hour =
    date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
  hours.innerHTML = hour;

  // Get minutes and format it
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  minutes.innerHTML = minute;

  // Get seconds and format it
  let second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
  seconds.innerHTML = second;
}, 1000);
