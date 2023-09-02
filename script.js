// Create main container
const mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");
document.body.appendChild(mainContainer);

// Create wrapper container
const wrapperContainer = document.createElement("div");
wrapperContainer.setAttribute("class", "wrapperContainer");
mainContainer.appendChild(wrapperContainer);

// Create day container
const dayDiv = document.createElement("div");
dayDiv.setAttribute("class", "dayDiv");
wrapperContainer.appendChild(dayDiv);

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

// Create ampm element
const ampm = document.createElement("span");
ampm.setAttribute("class", "ampm");
timeContent.appendChild(ampm);

// Create yearDiv element
const yearDiv = document.createElement("div");
yearDiv.setAttribute("class", "yearDiv");
wrapperContainer.appendChild(yearDiv);

// Update time every second using setInterval
const setInter = setInterval(() => {
  let date = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = dayNames[date.getDay()];
  dayDiv.innerHTML = `${dayName}`;

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;
  yearDiv.innerHTML = `${formattedDate}`;

  let hour =
    date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
  hours.innerHTML = hour;

  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  minutes.innerHTML = minute;

  let second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
  seconds.innerHTML = second;

  let period = "AM"; // Default to AM
  if (hour >= 12) {
    period = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  } else if (hour === 0) {
    hour = 12;
  }
  hours.innerHTML = `${hour}`;
  ampm.innerText = period;
}, 1000);
