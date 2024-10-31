



const sections = document.querySelectorAll('.form-section');

let currentSection = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
}

showSection(currentSection);

document.querySelectorAll('.next-button').forEach((button) => {
    button.addEventListener('click', () => {
        if (currentSection < sections.length - 1) {
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

document.getElementById('employeeForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    alert('Form submitted!'); 
});



// Select elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const experienceInput = document.getElementById('experience');
const sexInputs = document.querySelectorAll('input[name="sexe"]');
const nextButtons = document.querySelectorAll('.next-button');

// Track whether an input has been touched
const touched = {
    name: false,
    age: false,
    experience: false,
    sex: false,
    email: false,
    number: false,
    post: false,
    departement: false,
};

// Validate all fields
function validateFields() {
    // Check validity of each field
    const nameValid = nameInput.value.length >= 3;
    const ageValid = ageInput.value >= 18 && ageInput.value <= 100;
    const experienceValid = experienceInput.value >= 1 && experienceInput.value <= 30; // Adjust max value as needed
    const sexValid = Array.from(sexInputs).some(input => input.checked);

    // Reset background color
    nameInput.style.backgroundColor = '';
    ageInput.style.backgroundColor = '';
    experienceInput.style.backgroundColor = '';
    sexInputs.forEach(input => {
        input.parentElement.style.backgroundColor = '';
    });

    // Set red background for invalid inputs only if they have been touched
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

    // Disable the Next button if any validation fails
    nextButtons.forEach(button => {
        button.disabled = !(nameValid && ageValid && experienceValid && sexValid);
    });
}

// Event listeners for input changes
nameInput.addEventListener('input', () => {
    touched.name = true; // Mark as touched
    validateFields();
});
ageInput.addEventListener('input', () => {
    touched.age = true; // Mark as touched
    validateFields();
});
experienceInput.addEventListener('input', () => {
    touched.experience = true; // Mark as touched
    validateFields();
});
sexInputs.forEach(input => {
    input.addEventListener('change', () => {
        touched.sex = true; // Mark as touched
        validateFields();
    });
});

// Initialize validation on page load
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('phone');
const departementInput = document.getElementById('departement');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^0\d{9}$/;

function validatecontact() {
    const emailValid = emailPattern.test(emailInput.value);
    const numberValid = numberPattern.test(numberInput.value);
    const departmentValid = departementInput.value !== '';

    if (emailValid) {
        emailInput.style.backgroundColor = ''; 
    } else {
        emailInput.style.backgroundColor = 'lightgrey';
    }

    numberInput.style.backgroundColor = '';
    if (touched.number && !numberValid) {
        numberInput.style.backgroundColor = 'lightgrey';
    }
    
    if (touched.departement && !departmentValid) {
        departementInput.style.backgroundColor = 'lightcoral';
    } else {
        departementInput.style.backgroundColor = '';
    }

    nextButtons.forEach(button => {
        button.disabled = !(emailValid && numberValid && departmentValid);
    });
}

emailInput.addEventListener('input', () => {
    touched.email = true; 
    validatecontact();
});

numberInput.addEventListener('input', () => {
    touched.number = true;
    validatecontact();
});

departementInput.addEventListener('change', () => {
    touched.departement = true;
    validatecontact();
});
