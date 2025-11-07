let softSkills = [
  "Initiative",
  "Emotional Intelligence",
  "Critical Thinking",
  "Adaptability",
  "Teamwork",
  "Communication"
];

let confidenceLevels = [
  "Not at all confident",
  "Not confident",
  "Somewhat confident",
  "Confident",
  "Very confident"
];

let responses = []; // store selected column index for each skill
let cellSize = 15;  // circle size
let startX = 200;   // left padding for first confidence column
let startY = 100;    // top padding for first row
let colSpacing = 140; // spacing between columns
let rowSpacing = 35;  // spacing between rows

function setup() {
  createCanvas(838, 307);
  background(245);
  textAlign(CENTER, CENTER);
  textSize(12);
  textFont('salsa')
  fill('#309695');
  noStroke();

  // Title
  textStyle(BOLD);
  textSize(20);
  text("How Confident are you in the following soft skills?", width / 2, 30);
  textStyle(NORMAL);
  

  // Draw column headers (confidence levels)
  
  for (let i = 0; i < confidenceLevels.length; i++) {
    textSize(16);
    text(confidenceLevels[i], startX + i * colSpacing, startY - 25);
    
  }

  // Draw soft skill rows
  for (let i = 0; i < softSkills.length; i++) {
    textAlign(LEFT, CENTER);
    textSize(16);
    text(softSkills[i], 20, startY + i * rowSpacing);
    responses.push(-1); // no response selected initially
  }
}

function draw() {
  // Draw radio buttons
  for (let i = 0; i < softSkills.length; i++) {
    for (let j = 0; j < confidenceLevels.length; j++) {
      let x = startX + j * colSpacing;
      let y = startY + i * rowSpacing;

      stroke('#309695');
      strokeWeight(1);
      noFill();
      ellipse(x, y, cellSize);

      // fill selected circle
      if (responses[i] === j) {
        fill('#309695');
        noStroke();
        ellipse(x, y, cellSize / 2);
      }
    }
  }
}

function mousePressed() {
  // check if user clicked on any circle
  for (let i = 0; i < softSkills.length; i++) {
    for (let j = 0; j < confidenceLevels.length; j++) {
      let x = startX + j * colSpacing;
      let y = startY + i * rowSpacing;
      if (dist(mouseX, mouseY, x, y) < cellSize / 2) {
        responses[i] = j; // record response
      }
    }
  }
}
