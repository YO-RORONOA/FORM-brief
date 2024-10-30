



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
            currentSection++; /
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
