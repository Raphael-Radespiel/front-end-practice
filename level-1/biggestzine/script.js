// EVERYTIME I RESIZE MY WINDOW, UPDATE BREAKPOINTS INFO

const bodyElement = document.querySelector("body");

let colorBreakpoints = getBreakpoints();

let scrollIndex = 0;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function getBreakpoints(){
  let breakpointObject = {}; 
  
  headerHeight = document.querySelector("header").getBoundingClientRect().top + window.scrollY;
  breakpointObject[0] = [Number(headerHeight.toFixed(0)), 255,255,255];

  issueOneHeight = document.querySelector("#issue-1").getBoundingClientRect().top + window.scrollY;
  breakpointObject[1] = [Number(issueOneHeight.toFixed(0)), 247, 17, 17];

  issueTwoHeight = document.querySelector("#issue-2").getBoundingClientRect().top + window.scrollY;
  breakpointObject[2] = [Number(issueTwoHeight.toFixed(0)), 244, 137, 0];

  issueThreeHeight = document.querySelector("#issue-3").getBoundingClientRect().top + window.scrollY;
  breakpointObject[3] = [Number(issueThreeHeight.toFixed(0)), 0, 255, 152];

  issueFourHeight = document.querySelector("#issue-4").getBoundingClientRect().top + window.scrollY;
  breakpointObject[4] = [Number(issueFourHeight.toFixed(0)), 1, 50, 104];

  issueFiveHeight = document.querySelector("#issue-5").getBoundingClientRect().top + window.scrollY;
  breakpointObject[5] = [Number(issueFiveHeight.toFixed(0)), 35, 0, 70];

  breakpointObject[6] = [window.scrollMaxY, 255, 255, 255];

  return breakpointObject;
}

function getBreakpointPercentage(firstBreakpointY, secondBreakpointY, pageY){
  let hundredPercent = secondBreakpointY - firstBreakpointY; 
  let currentProgress = pageY - firstBreakpointY;

  if(hundredPercent == 0) return 100;
  return ((currentProgress * 100) / hundredPercent).toFixed(0);
}

function getBetweenColor(color1, color2, percentage){
  let difference = color2 - color1;

  return (color1 + ((difference * percentage) / 100)).toFixed(0);
}

function updateColor(){
  let breakpointPercentage = getBreakpointPercentage(colorBreakpoints[scrollIndex][0], colorBreakpoints[clamp(scrollIndex + 1, 0, 6)][0], window.scrollY);

  let r = getBetweenColor(colorBreakpoints[scrollIndex][1], colorBreakpoints[clamp(scrollIndex + 1, 0, 6)][1], breakpointPercentage);
  let g = getBetweenColor(colorBreakpoints[scrollIndex][2], colorBreakpoints[clamp(scrollIndex + 1, 0, 6)][2], breakpointPercentage);
  let b = getBetweenColor(colorBreakpoints[scrollIndex][3], colorBreakpoints[clamp(scrollIndex + 1, 0, 6)][3], breakpointPercentage);

  bodyElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

window.addEventListener("scroll", () => {
  if(window.scrollY < colorBreakpoints[scrollIndex][0] || 
    window.scrollY >= colorBreakpoints[clamp(scrollIndex + 1, 0, 6)][0]){
    for(let i = 0; i <= 6; i++){
      if(window.scrollY < colorBreakpoints[i][0]){
        break;
      }
      scrollIndex = i;
    }
  }

  updateColor();

  console.log("Our Scroll Position is: " + scrollIndex);
  console.log(window.scrollY);
});

window.addEventListener("resize", () => {
  colorBreakpoints = getBreakpoints();
});
