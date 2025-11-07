let activities = [];
let softSkills = ["Select Soft Skill", "Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let textColor = '#309695';
let numRows = 10;
let rowHeight = 50;
let cnv; // canvas variable

function setup() {
  // Create canvas and attach to body (or a specific container)
  cnv = createCanvas(830, 543);
  cnv.style('display', 'block'); // removes extra page spacing
  cnv.style('margin', '0');      // remove margin offset
  cnv.position(0, 0);            // align at top-left
  background('#FFD9C9');         // canvas background

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
  line(20, 50, 810, 50);

  // Create rows
  for (let i = 0; i < numRows; i++) {
    let y = 80 + i * rowHeight;

    // Activity #
    let activityNum = createInput(i + 1, 'number');
    activityNum.position(cnv.position().x + 50, cnv.position().y + y - 10);
    activityNum.size(50, 30);
    activityNum.style('color', textColor);
    activityNum.style('font-weight', 'bold');
    activityNum.style('background-color', 'transparent'); // blend with canvas

    // Soft Skill dropdown
    let skillSelect = createSelect();
    skillSelect.position(cnv.position().x + 150, cnv.position().y + y - 10);
    skillSelect.size(180, 30);
    softSkills.forEach(skill => skillSelect.option(skill));
    skillSelect.style('color', textColor);
    skillSelect.style('font-weight', 'bold');
    skillSelect.style('background-color', 'transparent');

    // Description input
    let descInput = createInput('');
    descInput.position(cnv.position().x + 350, cnv.position().y + y - 10);
    descInput.size(460, 30);
    descInput.style('color', textColor);
    descInput.style('font-weight', 'bold');
    descInput.style('background-color', 'transparent');

    activities.push({ num: activityNum, skill: skillSelect, desc: descInput });
  }
}

function draw() {
  // Draw row lines
  stroke(200);
  for (let i = 0; i < numRows; i++) {
    let y = 110 + i * rowHeight;
    line(20, y, 810, y);
  }
}
