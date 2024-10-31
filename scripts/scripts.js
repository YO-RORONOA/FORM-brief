const sections = document.querySelectorAll('.form-section');
let currentSection = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
}

showSection(currentSection);

document.querySelectorAll('.next-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        let isValid = false; 

        if (currentSection === 0) {
            isValid = validatePersonalInfo(); 
        } else if (currentSection === 1) {
            isValid = validateContactInfo(); 
        } else if (currentSection === 2) {
            isValid = validateFeedback(); 
        } else if (currentSection === 3) {
            alert('Form submitted!'); 
        }

        if (isValid && currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection); 
        }
    });
});

document.querySelectorAll('.back-button').forEach((button) => {
    button.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--; 
            showSection(currentSection); 
        }
    });
});

// Personal information validation
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const experienceInput = document.getElementById('experience');
const sexInputs = document.querySelectorAll('input[name="sexe"]');
const nextButtons = document.querySelectorAll('.next-button');

const touched = {
    name: false,
    age: false,
    experience: false,
    sex: false,
};

// Validate personal information fields
function validatePersonalInfo() {
    const nameValid = nameInput.value.length >= 3;
    const ageValid = ageInput.value >= 18 && ageInput.value <= 100;
    const experienceValid = experienceInput.value >= 0; 
    const sexValid = Array.from(sexInputs).some(input => input.checked);

    nameInput.style.backgroundColor = '';
    ageInput.style.backgroundColor = '';
    experienceInput.style.backgroundColor = '';
    sexInputs.forEach(input => {
        input.parentElement.style.backgroundColor = '';
    });

    if (touched.name && !nameValid) {
        nameInput.style.backgroundColor = 'lightgrey';
    }
    if (touched.age && !ageValid) {
        ageInput.style.backgroundColor = 'lightgrey';
    }
    if (touched.experience && !experienceValid) {
        experienceInput.style.backgroundColor = 'lightgrey';
    }
    if (touched.sex && !sexValid) {
        sexInputs.forEach(input => {
            input.parentElement.style.backgroundColor = 'lightgrey';
        });
    }

    nextButtons[0].disabled = !(nameValid && ageValid && experienceValid && sexValid);

    return nameValid && ageValid && experienceValid && sexValid; y
}

// Event listeners for personal info input changes
nameInput.addEventListener('input', () => {
    touched.name = true;
    validatePersonalInfo();
});
ageInput.addEventListener('input', () => {
    touched.age = true;
    validatePersonalInfo();
});
experienceInput.addEventListener('input', () => {
    touched.experience = true;
    validatePersonalInfo();
});
sexInputs.forEach(input => {
    input.addEventListener('change', () => {
        touched.sex = true;
        validatePersonalInfo();
    });
});

// Contact information validation
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('phone');
const departementInput = document.getElementById('departement');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^0\d{9}$/;

function validateContactInfo() {
    const emailValid = emailPattern.test(emailInput.value);
    const numberValid = numberPattern.test(numberInput.value);
    const departmentValid = departementInput.value !== '';

    emailInput.style.backgroundColor = emailValid ? '' : 'lightgrey';
    
    if (touched.number) {
        numberInput.style.backgroundColor = numberValid ? '' : 'lightgrey';
    }
    
    departementInput.style.backgroundColor = departmentValid ? '' : 'lightcoral';

    nextButtons[1].disabled = !(emailValid && numberValid && departmentValid);

    return emailValid && numberValid && departmentValid; 
}

// Event listeners for contact info input changes
emailInput.addEventListener('input', () => {
    validateContactInfo();
});
numberInput.addEventListener('input', () => {
    touched.number = true; 
    validateContactInfo();
});
departementInput.addEventListener('change', () => {
    validateContactInfo();
});

// Feedback validation
const commentsInput = document.getElementById('comments');
const satisfactionInputs = document.querySelectorAll('input[name="satisfaction"]');
const aspectsInputs = document.querySelectorAll('input[name="aspects"]');
const nextFeedbackButton = document.querySelector('.feedback .next-button');

function validateFeedback() {
    const commentsValid = commentsInput.value.trim().length >= 1 && commentsInput.value.trim().length <= 100;
    const satisfactionValid = Array.from(satisfactionInputs).some(input => input.checked);
    const aspectsValid = Array.from(aspectsInputs).some(input => input.checked);

    commentsInput.style.backgroundColor = commentsValid ? '' : 'lightgrey';

    nextFeedbackButton.disabled = !(commentsValid && satisfactionValid && aspectsValid);

    return commentsValid && satisfactionValid && aspectsValid; // Return overall validity
}

// Event listeners for feedback input changes
commentsInput.addEventListener('input', validateFeedback);
satisfactionInputs.forEach(input => {
    input.addEventListener('change', validateFeedback);
});
aspectsInputs.forEach(input => {
    input.addEventListener('change', validateFeedback);
});

// Modify the event listener for the next button in feedback section
nextFeedbackButton.addEventListener('click', (event) => {
    if (validateFeedback()) {
        alert('Feedback submitted!'); 
        
    }
});

