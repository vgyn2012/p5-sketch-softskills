let activities = [];
let softSkills = ["Select Soft Skill ", "Initative", "Emotional Intelligence", "Critical Thinking", "Adaptability", "Teamwork", "Leadership"];
let textColor = '#309695'; // teal color

function setup() {
  createCanvas(830, 543);
  background('#FFD9C9');
  textSize(16);
  textAlign(LEFT, CENTER);


  // Table headers
  fill('#309695');
  text("Activity #", 50, 30);
  text("Soft Skill", 150, 30);
  text("Description", 350, 30);
  textStyle(BOLD);

  // Draw header lines
  stroke(0);
  line(20, 50, 780, 50);

  // Create 5 example rows
  for (let i = 0; i < 10; i++) {
    let y = 80 + i * 50;

    // Activity #
    let activityNum = createInput(i + 1, 'number');
    activityNum.position(50, y - 10);
    activityNum.size(50);
    activityNum.style('color', textColor); // set dropdown text color
    activityNum.style('font-weight', 'bold'); // optional: bold
    
    // Soft Skill dropdown
    let skillSelect = createSelect();
    skillSelect.position(150, y - 10);
    skillSelect.size(150);
    skillSelect.style('color', textColor); // set dropdown text color
    skillSelect.style('font-weight', 'bold'); // optional: bold
    softSkills.forEach(skill => skillSelect.option(skill));
     

    // Description input
    let descInput = createInput('');
    descInput.position(350, y - 10);
    descInput.size(400, 30); // long input box

    // Store references (optional)
    activities.push({
      num: activityNum,
      skill: skillSelect,
      desc: descInput
    });
  }
}

function draw() {
  // Optional: draw lines between rows
  stroke(200);
  for (let i = 0; i < 10; i++) {
    let y = 110 + i * 50;
    line(20, y, 780, y);
  }
}
