let softSkills = ["Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let industryPercent = [0, 8, 37, 11, 22, 20]; // industry votes
let yourChoice = "Communication"; // your selected skill

// Distinct color for each skill
let colors = [
  '#FFAE4C', // Communication
  '#537FF1', // Teamwork
  '#6FD195', // Adaptability
  '#D96ED4', // Critical Thinking
  '#FF928A', // Emotional Intelligence
  '#8979FF'  // Initiative
];

function setup() {
  createCanvas(410, 216); // compact dashboard size
  background(245);
  textSize(12);
  textAlign(LEFT, CENTER);
  noLoop();

  // Combine skills + percentages + colors
  let skillsData = softSkills.map((skill, i) => ({
    skill: skill,
    percent: industryPercent[i],
    color: colors[i]
  }));

  // Sort descending by percentage
  skillsData.sort((a, b) => b.percent - a.percent);

  // Layout settings
  let barHeight = 20;
  let spacing = 10;
  let startX = 150;
  let maxWidth = 100;
  let arrowY = null;
  let arrowX = startX + 500 ;

  for (let i = 0; i < skillsData.length; i++) {
    let y = 30 + i * (barHeight + spacing);
    let barWidth = map(skillsData[i].percent, 0, 40, 0, maxWidth);

    // Draw industry bar
    fill(skillsData[i].color);
    noStroke();
    rect(startX, y, barWidth, barHeight, 4);

    // Highlight your pick
    if (skillsData[i].skill === yourChoice) {
      stroke('#EF476F');
      strokeWeight(2);
      noFill();
      rect(startX - 2, y - 2, barWidth + 4, barHeight + 4, 4);
      noStroke();

      // Save arrow coordinates
      arrowY = y + barHeight / 2;
      arrowX = startX + barWidth + 30; // move arrow start farther right
    }

    // Skill label
    fill('#309695');
    textStyle(BOLD);
    noStroke();
    text(skillsData[i].skill, 5, y + barHeight / 2);
    

    // Percentage label
    text(skillsData[i].percent + '%', startX + barWidth + 5, y + barHeight / 2);
  }



  // Draw arrow + label for your choice
  if (arrowY !== null) {
    stroke('#EF476F');
    strokeWeight(2);
    let arrowEndX = arrowX + 20; // longer arrow so it's farther right
    line(arrowX, arrowY, arrowEndX, arrowY); // arrow line
    line(arrowEndX, arrowY, arrowEndX - 8, arrowY - 4); // arrow head (top)
    line(arrowEndX, arrowY, arrowEndX - 8, arrowY + 4); // arrow head (bottom)
    noStroke();
    fill('#EF476F');
    textAlign(LEFT, CENTER);
    textStyle(BOLD);
    text("My Top Skill Rating", arrowEndX + 8, arrowY);
  }
}

