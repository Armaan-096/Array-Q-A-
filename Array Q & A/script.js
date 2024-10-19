
const questions = [
    {
        question: "What is the syntax to create an array in JavaScript?",
        answers: ["array myArray = [];", "let myArray = {};", "let myArray = [];", "myArray = new Array();"],
        correct: 2
    },
    {
        question: "What does the push() method do?",
        answers: ["Removes the last element from an array", "Adds one or more elements to the end of an array", "Sorts the array", "Reverses the array"],
        correct: 1
    },
    {
        question: "How can you find the length of an array named 'arr'?",
        answers: ["arr.length()", "arr.length", "length(arr)", "arr.size"],
        correct: 1
    },
    {
        question: "Which method removes the first element from an array?",
        answers: ["pop()", "shift()", "unshift()", "slice()"],
        correct: 1
    },
    {
        question: "Why are arrays used in programming?",
        answers: [
            "To store multiple values in a single variable",
            "To improve the performance of loops",
            "To create functions more efficiently",
            "To manage memory better"
        ],
        correct: 0
    },    
    {
        question: "Which method is used to join all elements of an array into a string?",
        answers: ["join()", "concat()", "toString()", "merge()"],
        correct: 0
    },
    {
        question: "How do you access the first element of the array : const bikes = ['Yamaha', 'Honda', 'Suzuki'];?",
        answers: [
            "console.log(bikes[0]);",
            "console.log(bikes.0);",
            "console.log(bikes.Yamaha);",
            "console.log([0].bikes);",
            
        ],
        correct: 0
    },
    {
        question: "What will be the output of the following code: const colors = ['Red', 'Green', 'Blue']; console.log(colors.toString());?",
        answers: [
            "Red,Green,Blue",
            "'[Red, Green, Blue]'",
            "'Red Green Blue'",
            "'Red;Green;Blue'"
        ],
        correct: 0
    },
    {
        question: "How can you access the entire array in JavaScript?",
        answers: [
            "By using the array name",
            "By using the length property",
            "By using the index 0",
            "By using the first element"
        ],
        correct: 0
    },
    {
        question: "What will the expression typeof [1, 2, 3] return in JavaScript?",
        answers: [
            "'array'",
            "'object'",
            "'number'",
            "'undefined'"
        ],
        correct: 1
    },
    {
        question: "What does the length property of an array return?",
        answers: [
            "The maximum value in the array",
            "The number of elements in the array",
            "The first element of the array",
            "The type of elements in the array"
        ],
        correct: 1
    },
    {
        question: "What does the pop() method do in JavaScript arrays?",
        answers: [
            "Removes the last element from the array",
            "Adds one or more elements to the end of the array",
            "Reverses the order of the elements",
            "Sorts the array in ascending order"
        ],
        correct: 0
    },
    {
        question: "What are arrays with named indexes commonly called in other programming languages?",
        answers: [
            "Associative arrays",
            "Indexed arrays",
            "Multidimensional arrays",
            "Object arrays"
        ],
        correct: 0
    },
    {
        question: "How does JavaScript handle array indexing?",
        answers: [
            "It supports both numbered and named indexes.",
            "It only supports named indexes.",
            "It always uses numbered indexes.",
            "It uses string keys for indexing."
        ],
        correct: 2
    },
    {
        question: "Which statement is true regarding associative arrays in JavaScript?",
        answers: [
            "JavaScript supports associative arrays natively.",
            "JavaScript arrays can only use numerical indexes.",
            "You can create associative arrays using arrays.",
            "Associative arrays are the same as objects in JavaScript."
        ],
        correct: 1
    },
    {
        question: "What type of indexes do arrays use in JavaScript?",
        answers: [
            "Named indexes",
            "String indexes",
            "Numbered indexes",
            "Boolean indexes"
        ],
        correct: 2
    },
    {
        question: "What is a key difference between arrays and objects in JavaScript?",
        answers: [
            "Arrays can only store numbers.",
            "Objects cannot have methods.",
            "Arrays use numbered indexes while objects use named indexes.",
            "Objects cannot store data."
        ],
        correct: 2
    },
    {
        question: "Which method can be used to determine if a variable is an array?",
        answers: [
            "typeof",
            "Array.isArray()",
            "instanceof",
            "isArray()"
        ],
        correct: 1
    },
    {
        question: "Given the array const fruits = ['Apple', 'Banana', 'Cherry']; what will fruits.length return?",
        answers: [
            "2",
            "3",
            "['Apple', 'Banana', 'Cherry']",
            "undefined"
        ],
        correct: 1
    },
    {
        question: "What does the toString() method do when called on a JavaScript array?",
        answers: [
            "It converts the array into a string of comma-separated values.",
            "It removes all elements from the array.",
            "It returns the length of the array as a string.",
            "It changes the data type of the array elements."
        ],
        correct: 0
    },
    {
        question: "What does the at() method do for arrays?",
        answers: [
            "Gets an element from the array at a certain index.",
            "Adds an item to the end of the array.",
            "Removes the last item from the array.",
            "Shows how many items are in the array."
        ],
        correct: 0
    },
    {
        question: "What does the pop() method return?",
        answers: [
            "The number of items in the array",
            "The item that was removed from the array",
            "The last item in the array without removing it",
            "Undefined"
        ],
        correct: 1
    },
    {
        question: "What does the push() method return?",
        answers: [
            "The new object",
            "The item that was added to the array",
            "The last item in the array",
            "Undefined"
        ],
        correct: 1
    },
    {
        question: "If you have const fruits = ['Apple', 'Banana']; what will fruits.join(' * ') return?",
        answers: [
            "'Apple,Banana'",
            "'Apple * Banana'",
            "'Apple;Banana'",
            "'Apple Banana'"
        ],
        correct: 1
    },
    {
        question: "What will be the output of the following code: const numbers = [1, 2, 3]; numbers.pop(); console.log(numbers);?",
        answers: [
            "[1, 2]",
            "[1, 2, 3]",
            "[2, 3]",
            "[3]"
        ],
        correct: 0
    },
    {
        question: "What will the following code output: const letters = ['A', 'B']; letters.push('C'); console.log(letters);?",
        answers: [
            "['A', 'B']",
            "['A', 'B', 'C']",
            "['C', 'A', 'B']",
            "undefined"
        ],
        correct: 1
    },
    {
        question: "What will the output be for the following code: const items = ['Pen', 'Notebook']; console.log(items.join(' and '));?",
        answers: [
            "'Pen,Notebook'",
            "'Pen and Notebook'",
            "'Pen;Notebook'",
            "'Pen Notebook'"
        ],
        correct: 1
    },
    {
        question: "What does the shift() method do in JavaScript arrays?",
        answers: [
            "Removes the first item from the array.",
            "Adds an item to the end of the array.",
            "Retrieves the last item from the array.",
            "Combines two arrays."
        ],
        correct: 0
    },
    {
        question: "What is the purpose of the unshift() method?",
        answers: [
            "Removes the first item from the array.",
            "Adds one or more items to the beginning of the array.",
            "Gets the first item of the array.",
            "Combines two arrays."
        ],
        correct: 1
    },
    {
        question: "What happens when you use delete on an array element?",
        answers: [
            "It removes the element and shifts other elements.",
            "It removes the element but leaves an undefined hole.",
            "It adds a new element in its place.",
            "It combines the array."
        ],
        correct: 1
    },
    {
        question: "What does the concat() method do?",
        answers: [
            "Removes an item from the array.",
            "Combines two or more arrays into a new array.",
            "Retrieves the last item from the array.",
            "Adds an item to the beginning of the array."
        ],
        correct: 1
    },
    {
        question: "What does the shift() method return?",
        answers: [
            "The first item removed from the array.",
            "The last item removed from the array.",
            "The number of items in the array.",
            "Undefined."
        ],
        correct: 0
    },
    {
        question: "What does the unshift() method return?",
        answers: [
            "The new object of the array.",
            "The first item in the array.",
            "The last item in the array.",
            "Undefined."
        ],
        correct: 1
    },
    {
        question: "What will be the output of: const array1 = [1, 2]; const array2 = [3, 4]; const combined = array1.concat(array2); console.log(combined);?",
        answers: [
            "[1, 2, 3, 4]",
            "[1, 2]",
            "[3, 4]",
            "[1, 2, 4]"
        ],
        correct: 0
    },
    {
        question: "What will the output be for the following code: const fruits = ['Apple', 'Banana', 'Cherry']; fruits.shift(); console.log(fruits);?",
        answers: [
            "['Banana', 'Cherry']",
            "['Apple', 'Banana']",
            "['Cherry']",
            "['Apple']"
        ],
        correct: 0
    },
    {
        question: "What will be the output of this code: const colors = ['Red', 'Green']; colors.unshift('Blue'); console.log(colors);?",
        answers: [
            "['Red', 'Green']",
            "['Blue', 'Red', 'Green']",
            "['Green', 'Red']",
            "['Red', 'Green', 'Blue']"
        ],
        correct: 1
    },
    {
        question: "What will the output be for the following code: const arr = [1, 2, 3]; delete arr[1]; console.log(arr);?",
        answers: [
            "[1, 2, 3]",
            "[1, undefined, 3]",
            "[2, 3]",
            "[1, 3]"
        ],
        correct: 1
    },
    {
        question: "What does the indexOf() method do in JavaScript arrays?",
        answers: [
            "Finds the first occurrence of an element and returns its index.",
            "Finds the last occurrence of an element and returns its index.",
            "Checks if an element is present in the array.",
            "Returns all indexes of an element."
        ],
        correct: 0
    },
    {
        question: "What does the lastIndexOf() method return?",
        answers: [
            "The first index of an element found in the array.",
            "The last index of an element found in the array.",
            "The total number of elements in the array.",
            "undefined if the element is not found."
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the includes() method?",
        answers: [
            "To check if an array contains a specific element.",
            "To find the index of an element in the array.",
            "To return all elements in the array.",
            "To add a new element to the array."
        ],
        correct: 0
    },
    {
        question: "What will indexOf() return if the element is not found?",
        answers: [
            "0",
            "-1",
            "undefined",
            "null"
        ],
        correct: 1
    },
    {
        question: "If an element appears multiple times in an array, how does lastIndexOf() behave?",
        answers: [
            "Returns the first index of the element.",
            "Returns the last index of the element.",
            "Returns all indexes of the element.",
            "Returns -1."
        ],
        correct: 1
    },
    {
        question: "What type of value does includes() return?",
        answers: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        correct: 2
    },
    {
        question: "What will the output be for the following code: const animals = ['Dog', 'Cat', 'Bird']; console.log(animals.indexOf('Cat'));?",
        answers: [
            "0",
            "1",
            "2",
            "-1"
        ],
        correct: 1
    },
    {
        question: "What will the output be for the following code: const fruits = ['Apple', 'Banana', 'Apple']; console.log(fruits.lastIndexOf('Apple'));?",
        answers: [
            "0",
            "1",
            "2",
            "-1"
        ],
        correct: 2
    },
    {
        question: "What will the output be for the following code: const fruits = ['Apple', 'Banana', 'Apple']; console.log(fruits.lastIndexOf('Apple'));?",
        answers: [
            "0",
            "1",
            "2",
            "-1"
        ],
        correct: 2
    },
    {
        question: "What does the sort() method do in JavaScript arrays?",
        answers: [
            "Sorts the elements of an array in ascending order by default.",
            "Sorts the elements in descending order.",
            "Randomizes the order of elements.",
            "Removes duplicate elements from the array."
        ],
        correct: 0
    },
    {
        question: "What does the reverse() method do?",
        answers: [
            "Reverses the order of the elements in the array.",
            "Sorts the array in descending order.",
            "Removes the first element of the array.",
            "Copies the array to a new variable."
        ],
        correct: 0
    },
    {
        question: "What happens when you declare an array with const?",
        answers: [
            "You cannot change the array reference.",
            "You cannot modify the elements of the array.",
            "You can reassign the array to a new array.",
            "You cannot use array methods."
        ],
        correct: 0
    },
    {
        question: "What will be the output of the following code: const numbers = [40, 10, 20, 30]; numbers.sort(); console.log(numbers);?",
        answers: [
            "[10, 20, 30, 40]",
            "[10, 30, 20, 40]",
            "[40, 30, 20, 10]",
            "[40, 20, 30, 10]"
        ],
        correct: 0
    }
    // {
    //     question: "Imagine you're writing a script to check the age of a user. If the user is under 18, you want to display 'You are a minor.' If they are 18 or older but less than 65, you display 'You are an adult.' If the user is 65 or older, you display 'You are a senior.' Which of the following code snippets correctly implements this logic?",
    //     answers: [
    //         "if (age < 18) { console.log('You are a minor.'); } else if (age >= 18 && age < 65) { console.log('You are an adult.'); } else { console.log('You are a senior.'); }",
    //         "if (age < 18) console.log('You are an adult.'); else if (age >= 65) console.log('You are a minor.'); else console.log('You are a senior.');",
    //         "if (age < 18) { console.log('You are a senior.'); } else if (age < 65) { console.log('You are a minor.'); } else { console.log('You are an adult.'); }",
    //         "if (age >= 18) { console.log('You are a minor.'); } else { console.log('You are an adult.'); }"
    //     ],
    //     correct: 0
    // }
];


let currentQuestion = 0;
const answersState = Array(questions.length).fill(null); // null = not attempted
let startTime = Date.now();
let timeLeft = 30 * 60; // 30 minutes in seconds
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

// Timer function
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(countdown);
        submitQuiz(); // Automatically submit the quiz when time's up
    }
}, 1000);

// Create question boxes
const questionBox = document.getElementById('question-box');
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.textContent = i + 1;
    questionDiv.classList.add('question-status');
    questionDiv.onclick = () => goToQuestion(i);
    questionBox.appendChild(questionDiv);
}

function updateQuestionBox() {
    const questionStatus = document.querySelectorAll('.question-status');
    questionStatus.forEach((box, index) => {
        box.classList.remove('current', 'answered', 'skipped');
        if (answersState[index] === null) {
            if (index === currentQuestion) {
                box.classList.add('current');
            }
        } else if (answersState[index] === false) {
            box.classList.add('skipped');
        } else {
            box.classList.add('answered'); // Mark as answered without color
        }
    });

    updateProgressBar();
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = answersState[currentQuestion] === index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
    });

    document.getElementById('next').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    displayQuestion();
    updateQuestionBox();
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answersState[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        answersState[currentQuestion] = false; // Mark as skipped if no answer selected
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
    }
    displayQuestion();
    updateQuestionBox();
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
    }
    displayQuestion();
    updateQuestionBox();
}

function submitQuiz() {
    saveAnswer(); // Save last answer
    let score = 0;
    let attempted = 0;
    let skipped = 0;

    questions.forEach((question, index) => {
        const questionDiv = document.querySelector(`#question-box .question-status:nth-child(${index + 1})`);
        const modalQuestionDiv = document.querySelector(`#question-box-modal .question-box-modal-item:nth-child(${index + 1})`); // Modal question box
        
        if (answersState[index] !== null) {
            attempted++;
            if (answersState[index] === question.correct) {
                score++;
                modalQuestionDiv.style.backgroundColor = 'blue'; // Update modal question box
            } else {
                modalQuestionDiv.style.backgroundColor = 'orange'; // Update modal question box
            }
        } else {
            skipped++;
        }
    });

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // Time taken in seconds
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;

    document.getElementById('attempted').textContent = attempted;
    document.getElementById('skipped').textContent = skipped;
    document.getElementById('correct').textContent = score;
    document.getElementById('time-taken').textContent = `${minutesTaken}m ${secondsTaken}s`;
    document.getElementById('final-score').textContent = `You have scored ${score} out of ${questions.length}.`;

    showModal();
}

// Show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Initialize the first question
displayQuestion();
updateQuestionBox();

// Create question boxes for modal
function createQuestionBoxes() {
    const questionBoxModal = document.getElementById('question-box-modal');

    for (let i = 1; i <= questions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.textContent = `${i}`;
        questionDiv.classList.add('question-box-modal-item'); // Add a class for styling
        questionBoxModal.appendChild(questionDiv);
    }
}

// Call the function to create question boxes
createQuestionBoxes();
