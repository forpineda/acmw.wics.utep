function redirectToPage(element) {
  // Get the destination from the data-destination attribute
  var destination = element.getAttribute('data-destination');

  // Check if the destination is an email address
  if (destination.startsWith('mailto:')) {
    // Open the default email client with the specified email address
    window.location.href = destination;
  } else {
    // Navigate to the specified page
    window.location.href = destination;
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Function to toggle the modal and scale the image
const toggleModal = (person) => {
  let modal = document.getElementById('thanks-modal');
  let modalContent = document.getElementById('modal-text-container');

  // Set the person's name in the modal content
  document.getElementById('modal-person-name').textContent = person.name;

  // Display the modal
  modal.style.display = 'flex';
  document.body.classList.add('modal-open');

  // Call scaleImage every half a second and store the intervalId
  let intervalId = setInterval(scaleImage, 500);

  // Hide the modal after a few seconds
  setTimeout(() => {
    closeModal();
    clearInterval(intervalId); // Stop the animation
  }, 10000); 
};

let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", function () {
  const signNowButton = document.getElementById("sign-now-button");
  const nameInput = document.getElementById("name");
  const hometownInput = document.getElementById("hometown");
  const counter = document.getElementById("counter");
  let count = 3; // Initialize the count

  const addSignature = () => {
    let person = {
      name: nameInput.value,
      hometown: hometownInput.value,
    };
    toggleModal(person);
    let submissionData = {
      name: person.name,
      hometown: person.hometown,
      // Add other properties as needed
    };
  };

  signNowButton.addEventListener("click", addSignature);

  const validateForm = () => {
    let containsErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;

    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value.length < 2) {
        containsErrors = true;
        petitionInputs[i].classList.add('error');
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }

    if (containsErrors) {
      alert('Please fill out all fields with at least 2 characters.');
    } else {
      addSignature();
    }
  }

  signNowButton.addEventListener("click", validateForm);
});

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  let windowHeight = window.innerHeight;

  revealableContainers.forEach(container => {
    let topOfRevealableContainer = container.getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', reveal);


// Add event listener for the "Reduce Motion" button
const reduceMotionButton = document.getElementById('reduceMotionButton');
reduceMotionButton.addEventListener('click', reduceMotion);

// Function to reduce motion
function reduceMotion() {
  // Update animation properties
  animation.transitionTimingFunction = 'none'; // Change to 'none' to remove easing
  animation.revealDistance = 50; // Reduce the animation distance
  animation.transitionDuration = '0.5s'; // Reduce the animation duration

  // Apply updated styles to revealableContainers
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = `all ${animation.transitionDuration} ${animation.transitionTimingFunction} ${animation.transitionDelay}`;
  }
}

reveal();

let scaleFactor = 1;

let modalImage = document.getElementById('modal-image'); 

const scaleImage = () => {
  scaleFactor = (scaleFactor === 1) ? 0.8 : 1;

  const rotationAngle = Math.floor(Math.random() * 31) - 15;

  const horizontalMovement = Math.floor(Math.random() * 41) - 20;

  const verticalMovement = Math.floor(Math.random() * 41) - 20;

  modalImage.style.transform = `scale(${scaleFactor}) rotate(${rotationAngle}deg) translate(${horizontalMovement}px, ${verticalMovement}px)`;
};
