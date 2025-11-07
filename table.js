let activities = [];
let softSkills = ["Select Soft Skill", "Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let textColor = '#309695'; // teal color
let numRows = 10;
let rowHeight = 50;

function setup() {
  createCanvas(830, 543);
  background('#FFD9C9'); // soft peach background
  textSize(16);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);

  // Table headers
  fill(textColor);
  text("Activity #", 50, 30);
  text("Soft Skill", 150, 30);
  text("Description", 350, 30);

  // Draw header line
  stroke(0);
  line(20, 50, 810, 50); // match width to canvas

  // Create rows
  for (let i = 0; i < numRows; i++) {
    let y = 80 + i * rowHeight;

    // Activity #
    let activityNum = createInput(i + 1, 'number');
    activityNum.position(50, y - 10);
    activityNum.size(50, 30);
    activityNum.style('color', textColor);
    activityNum.style('font-weight', 'bold');
    activityNum.style('background-color', 'transparent');



    // Soft Skill dropdown
    let skillSelect = createSelect();
    skillSelect.position(150, y - 10);
    skillSelect.size(180, 30);
    softSkills.forEach(skill => skillSelect.option(skill));
    skillSelect.style('color', textColor);
    skillSelect.style('font-weight', 'bold');
    skillSelect.style('background-color', 'transparent');

    // Description input
    let descInput = createInput('');
    descInput.position(350, y - 10);
    descInput.size(460, 30); // long width for description
    descInput.style('color', textColor);
    descInput.style('font-weight', 'bold');
    descInput.style('background-color', 'transparent');

    // Store references
    activities.push({
      num: activityNum,
      skill: skillSelect,
      desc: descInput
    });
  }
}

function draw() {
  // Draw lines between rows
  stroke(200);
  for (let i = 0; i < numRows; i++) {
    let y = 110 + i * rowHeight;
    line(20, y, 810, y);
  }
}let activities = [];
let softSkills = ["Select Soft Skill", "Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let textColor = '#309695'; // teal color
let numRows = 10;
let rowHeight = 50;

function setup() {
  createCanvas(830, 543);
  background('#FFD9C9'); // soft peach background
  textSize(16);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);

  // Table headers
  fill(textColor);
  text("Activity #", 50, 30);
  text("Soft Skill", 150, 30);
  text("Description", 350, 30);

  // Draw header line
  stroke(0);
  line(20, 50, 810, 50); // match width to canvas

  // Create rows
  for (let i = 0; i < numRows; i++) {
    let y = 80 + i * rowHeight;

    // Activity #
    let activityNum = createInput(i + 1, 'number');
    activityNum.position(50, y - 10);
    activityNum.size(50, 30);
    activityNum.style('color', textColor);
    activityNum.style('font-weight', 'bold');

    // Soft Skill dropdown
    let skillSelect = createSelect();
    skillSelect.position(150, y - 10);
    skillSelect.size(180, 30);
    softSkills.forEach(skill => skillSelect.option(skill));
    skillSelect.style('color', textColor);
    skillSelect.style('font-weight', 'bold');

    // Description input
    let descInput = createInput('');
    descInput.position(350, y - 10);
    descInput.size(460, 30); // long width for description
    descInput.style('color', textColor);
    descInput.style('font-weight', 'bold');

    // Store references
    activities.push({
      num: activityNum,
      skill: skillSelect,
      desc: descInput
    });
  }
}

function draw() {
  // Draw lines between rows
  stroke(200);
  for (let i = 0; i < numRows; i++) {
    let y = 110 + i * rowHeight;
    line(20, y, 810, y);
  }
}
