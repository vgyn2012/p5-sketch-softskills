let activities = [];
let softSkills = ["Select Soft Skill", "Initiative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Communication"];
let textColor = '#309695';
let rowHeight = 50;
let cnv;
let startRows = 5; // initial rows

function setup() {
  cnv = createCanvas(830, 600);
  cnv.style('display', 'block');
  cnv.style('margin', '0');
  cnv.position(0, 0);
  background('#FFD9C9');

  textSize(16);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);

  // Table headers
  fill(textColor);
  text("Activity #", 50, 30);
  text("Soft Skill", 150, 30);
  text("Description", 350, 30);
  

  stroke(0);
  line(20, 50, 810, 50);

  // Create initial rows
  for (let i = 0; i < startRows; i++) {
    addActivity(i);
  }

  // Add activity button
  let addBtn = createButton("+");
  addBtn.position(750, 10);
  addBtn.style('font-size', '20px');
  addBtn.mousePressed(() => addActivity(activities.length));
}

function draw() {
  background('#FFD9C9');

  // redraw headers
  fill(textColor);
  textStyle(BOLD);
  text("Activity #", 50, 30);
  text("Soft Skill", 150, 30);
  text("Description", 350, 30);
  

  stroke(0);
  line(20, 50, 810, 50);

  // Draw row lines
  stroke(200);
  for (let i = 0; i < activities.length; i++) {
    let y = 80 + i * rowHeight;
    line(20, y + 20, 810, y + 20);
  }
}

// Function to add a row
function addActivity(i) {
  let y = 80 + i * rowHeight;

  // Activity # input (lighter border)
  let activityNum = createInput(i + 1, 'number');
  activityNum.position(cnv.position().x + 50, cnv.position().y + y - 10);
  activityNum.size(50, 30);
  activityNum.style('color', textColor);
  activityNum.style('font-weight', 'bold');
  activityNum.style('border', '1px solid #A0DDE0');

  // Soft Skill dropdown
  let skillSelect = createSelect();
  skillSelect.position(cnv.position().x + 150, cnv.position().y + y - 10);
  skillSelect.size(180, 30);
  softSkills.forEach(skill => skillSelect.option(skill));
  skillSelect.style('color', textColor);
  skillSelect.style('font-weight', 'bold');
  skillSelect.style('border', '1px solid #309695');

  // Description input
  let descInput = createInput('');
  descInput.position(cnv.position().x + 350, cnv.position().y + y - 10);
  descInput.size(400, 30);
  descInput.style('color', textColor);
  descInput.style('font-weight', 'bold');
  descInput.style('border', '1px solid #A0DDE0');

  // Remove button
  let removeBtn = createButton("-");
  removeBtn.position(cnv.position().x + 760, cnv.position().y + y - 10);
  removeBtn.mousePressed(() => removeActivity(i));

  activities.push({ num: activityNum, skill: skillSelect, desc: descInput, removeBtn: removeBtn });
}

// Remove a row
function removeActivity(index) {
  activities[index].num.remove();
  activities[index].skill.remove();
  activities[index].desc.remove();
  activities[index].removeBtn.remove();
  activities.splice(index, 1);

  // reposition remaining rows
  for (let i = 0; i < activities.length; i++) {
    let y = 80 + i * rowHeight;
    activities[i].num.position(cnv.position().x + 50, cnv.position().y + y - 10);
    activities[i].skill.position(cnv.position().x + 150, cnv.position().y + y - 10);
    activities[i].desc.position(cnv.position().x + 350, cnv.position().y + y - 10);
    activities[i].removeBtn.position(cnv.position().x + 760, cnv.position().y + y - 10);
    activities[i].num.value(i + 1); // update numbering
  }
}
