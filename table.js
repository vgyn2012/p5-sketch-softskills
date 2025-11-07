let activities = [];
let softSkills = ["Select Soft Skill", "Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let textColor = '#309695';
let numRows = 10;
let rowHeight = 50;
let cnv; // canvas variable

function setup() {
  cnv = createCanvas(830, 600);
  cnv.style('display', 'block');
  cnv.style('margin', '0');
  cnv.position(0, 0);
  background('#FFD9C9'); // canvas background

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

    // Activity # input (lighter border)
    let activityNum = createInput(i + 1, 'number');
    activityNum.position(cnv.position().x + 50, cnv.position().y + y - 10);
    activityNum.size(50, 30);
    activityNum.style('color', textColor);
    activityNum.style('font-weight', 'bold');
    activityNum.style('border', '1px solid #A0DDE0'); // lighter border

    // Soft Skill dropdown (normal border)
    let skillSelect = createSelect();
    skillSelect.position(cnv.position().x + 150, cnv.position().y + y - 10);
    skillSelect.size(180, 30);
    softSkills.forEach(skill => skillSelect.option(skill));
    skillSelect.style('color', textColor);
    skillSelect.style('font-weight', 'bold');
    skillSelect.style('border', '1px solid #309695'); // normal border

    // Description input (lighter border)
    let descInput = createInput('');
    descInput.position(cnv.position().x + 350, cnv.position().y + y - 10);
    descInput.size(460, 30);
    descInput.style('color', textColor);
    descInput.style('font-weight', 'bold');
    descInput.style('border', '1px solid #A0DDE0'); // lighter border

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
