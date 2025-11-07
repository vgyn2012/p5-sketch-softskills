let skills = ['Initiative', 'Emotional Intelligence', 'Critical Thinking', 'Adaptability', 'Teamwork', 'Communication'];
let values = [2, 4, 5, 3, 4, 2];
let currentValues = Array(skills.length).fill(0);

let colors = [
  '#FFAE4C', // Communication - blue
  '#537FF1', // Teamwork - green
  '#6FD195', // Adaptability - orange
  '#D96ED4', // Creativity - pink/purple
  '#FF928A', // Leadership - red
  '#8979FF'  // Empathy - violet
];

function setup() {
  createCanvas(365, 192);
  textFont('salsa');
  textSize(12);
  noStroke();
}


function draw() {
 background(245);

let barHeight = 18;    // smaller bars to fit height
 let gap = 8;       // smaller gap
 let startX = 140;     // space for labels
 let maxBarWidth = width - startX - 15; // bar width fits canvas

for (let i = 0; i < skills.length; i++) {
  currentValues[i] = lerp(currentValues[i], values[i], 0.05);
  let barWidth = map(currentValues[i], 0, 6, 0, maxBarWidth);
  let y = 30 + i * (barHeight + gap);

// Skill label
  fill('#309695');
  textAlign(LEFT, CENTER);
  text(skills[i], 10, y + barHeight / 2);
  textStyle(BOLD);

// Background bar
  fill(230);
  rect(startX, y, maxBarWidth, barHeight, 4);

// Colored value bar
  fill(colors[i]);
  rect(startX, y, barWidth, barHeight, 4);

// Numeric label
  fill('#309695');
  textAlign(LEFT, CENTER);
  text(Math.round(currentValues[i]), startX + barWidth + 5, y + barHeight / 2);
 }

// Title
 fill(40);
 textSize(12);
 textAlign(LEFT);
}
}



