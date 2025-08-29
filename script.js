const questions = [
    { question: "What does HACCP stand for?", 
    options: ["Hazard Analysis and Critical Control Points", "Hazard Assessment of Clean Cooking Practices", "Health and Critical Control Procedures"], 
    answer: "Hazard Analysis and Critical Control Points" },
  { question: "What is the danger zone temperature range for food?", 
    options: ["0°C - 5°C", "5°C - 60°C", "60°C - 100°C"], 
    answer: "5°C - 60°C"},
  { question: "Which microorganism is most associated with raw poultry?", 
    options: ["Salmonella", "E. coli", "Listeria"], 
    answer: "Salmonella"},
  { question: "What is cross-contamination?", 
    options: ["Transfer of bacteria from raw to cooked food", "Cooking food at low temperature", "Using too much salt"], 
    answer: "Transfer of bacteria from raw to cooked food"},
  { question: "What is the correct cooking temperature for poultry?", 
    options: ["65°C", "75°C", "85°C"], 
    answer: "75°C"},
  { question: "Which ISO standard specifically focuses on Food Safety Management Systems?", 
    options: ["ISO 22000", "ISO 9001", "ISO 45001"], 
    answer: "ISO 22000" },
  { question: "In HACCP, what is the difference between a CCP (Critical Control Point) and an OPRP (Operational Prerequisite Program)?", 
    options: ["CCP controls hazards at steps essential for food safety, while OPRP reduces hazards through general operational measures", "CCP is for quality checks only, OPRP is for safety","They are the same and used interchangeably"], 
    answer: "CCP controls hazards at steps essential for food safety, while OPRP reduces hazards through general operational measures" },
  { question: "Which of the following is a foodborne illness?", 
    options: ["Diabetes", "Cholera", "Hypertension"], 
    answer: "Cholera" },
  { question: "What does GMP stand for?", 
    options: ["Good Manufacturing Practices", "General Management Procedures", "Global Market Policies"], 
    answer: "Good Manufacturing Practices" },
  { question: "What is the first principle of HACCP?", 
    options: ["Identify CCPs", "Conduct hazard analysis", "Establish monitoring"], 
    answer: "Conduct hazard analysis"},
  { question: "Which metal is toxic in food when above limits?", 
    options: ["Iron", "Lead", "Zinc"], 
    answer: "Lead" },
  { question: "Which food is most linked with Botulism?", 
    options: ["Canned food", "Fresh fruits", "Bread"], 
    answer: "Canned food" },
  {question: "What does FIFO stand for in food storage?", 
    options: ["First In First Out", "Fast Inspection Food Order", "Final In Final Out"], 
    answer: "First In First Out" },
  { question: "Which vitamin is most sensitive to heat?", 
    options: ["Vitamin C", "Vitamin D", "Vitamin B12"], 
    answer: "Vitamin C" },
  { question: "Which microorganism is known as the 'cold-loving' pathogen?", 
    options: ["Listeria monocytogenes", "E. coli", "Salmonella"], 
    answer:"Listeria monocytogenes"},
  { question: "Which of these is an example of a CCP?", 
    options: ["Hand washing", "Cooking chicken to 75°C", "Cleaning floors"], 
    answer: "Cooking chicken to 75°C" },
  { question: "Which pH level prevents most bacterial growth?", 
    options: ["Below 4.6", "Around 7.0", "Above 9.0"], 
    answer:"Below 4.6" },
  {question: "What is the main cause of food spoilage?", 
    options: ["Microorganisms", "Packaging", "Transport"], 
    answer: "Microorganisms" },
  { question: "Which of these is a physical hazard?", 
    options: ["Glass shard", "Salmonella", "Cleaning chemical"], 
    answer: "Glass shard"},
  { question: "Which food allergen is most common?", 
    options: ["Peanuts", "Rice", "Banana"], 
    answer: "Peanuts"},
  { question: "What is the ideal freezer storage temperature?", 
    options: ["-18°C or lower", "0°C", "5°C"], 
    answer: "-18°C or lower" },
  { question: "What is the purpose of a food recall?", 
    options: ["To promote new products", "To remove unsafe food from market", "To reduce costs"], 
    answer: "To remove unsafe food from market"},
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    const question = questions[currentQuestionIndex];

    questionArea.innerHTML = `<h2>${question.question}</h2>`;
    optionsArea.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, button);
        optionsArea.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }
    document.getElementById('score-area').innerText = `Score: ${score}`;
    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll('#options-area button');
    buttons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    questionArea.innerHTML = `<h2>Quiz Complete!</h2>`;
    optionsArea.innerHTML = `<h3>Your final score is: ${score}</h3>`;
    document.getElementById('next-btn').style.display = 'none';
}

window.onload = displayQuestion;