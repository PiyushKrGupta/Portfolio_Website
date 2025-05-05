
// for hamburger menu

// function myFunction() {
//   const links = document.getElementById("myLinks");
//   if (links.classList.contains("active")) {
//       links.classList.remove("active");
//   } else {
//       links.classList.add("active");
//   }
// }



const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('myLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});


/*for skills section hover effect*/

const players = document.querySelectorAll('.eachplayer');

players.forEach(player => {
  const skillBox = player.querySelector('.player_skill');
  let timeout;  // For smooth delay on leave

  player.addEventListener('mouseenter', () => {
    clearTimeout(timeout);  // Clear any leave timeout
    skillBox.classList.add('active');
  });

  player.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      skillBox.classList.remove('active');
    }, 150);  // Delay before collapse (150ms looks good)
  });
});








// // Get the audio elements
// const startAudio = document.getElementById("startAudio");
// const endAudio = document.getElementById("endAudio");

// // Function to play the sounds in a loop with the specified timings
// function playAudioLoop() {
//   // Play the start sound
//   startAudio.currentTime = 0;
//   startAudio.play();

//   // After 1.5 seconds of the start sound, stop it and play the end sound
//   setTimeout(() => {
//     startAudio.pause();
//     startAudio.currentTime = 0;

//     // Play the end sound
//     endAudio.currentTime = 0;
//     endAudio.play();

//     // After the end sound finishes, recursively call playAudioLoop to start over
//     setTimeout(() => {
//       playAudioLoop();
//     }, endAudio.duration * 1000);
//   }, 2000); // Delay for 1.5 seconds before switching to the end sound
// }

// // Start the audio loop when the page loads
// playAudioLoop();


// // Select all experience items
// const experienceItems = document.querySelectorAll(".experiences");

// // Add click event listener to toggle dropdown
// experienceItems.forEach(item => {
//     item.addEventListener("click", () => {
//         // Toggle "active" class
//         item.classList.toggle("active");
//     });
// });


/*Select all experience items and creates smoother transition of opening and closing with managing plus and minus icons*/

document.querySelectorAll('.experiences').forEach(exp => {
  exp.addEventListener('click', function(e) {
    const icon = exp.querySelector('.plusIcon i');

    // Prevent double toggle when clicking directly on icon
    if (e.target.closest('.plusIcon')) {
      toggleExperience(exp, icon);
    } else {
      toggleExperience(exp, icon);
    }
  });
});

function toggleExperience(exp, icon) {
  const content = exp.querySelector('.certi_content');
  const skill = exp.querySelector('.certi_skill');
  const isActive = exp.classList.contains('active');

  // Close all other boxes
  document.querySelectorAll('.experiences').forEach(other => {
    if (other !== exp) {
      other.classList.remove('active');
      resetContent(other);
      const otherIcon = other.querySelector('.plusIcon i');
      otherIcon.classList.remove('fa-minus');
      otherIcon.classList.add('fa-plus');
    }
  });

  // Toggle current one
  if (!isActive) {
    exp.classList.add('active');
    expandContent(content);
    expandContent(skill);
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  } else {
    exp.classList.remove('active');
    collapseContent(content);
    collapseContent(skill);
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
  }

  // Optional sound
  const soundFile = exp.getAttribute('data-sound');
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

// Smooth Expand

function expandContent(el) {
  el.style.display = 'flex';
  el.style.overflow = 'hidden';
  el.style.maxHeight = 'none'; // remove to measure
  el.style.paddingTop = '15px';
  el.style.paddingBottom = '15px';
  const fullHeight = el.scrollHeight;

  el.style.maxHeight = '0';   // reset to animate from 0
  el.style.opacity = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';

  requestAnimationFrame(() => {
    el.style.maxHeight = fullHeight + 30 + 'px'; // buffer 30px
    el.style.opacity = '1';
    el.style.paddingTop = '15px';
    el.style.paddingBottom = '15px';
  });
}

//Smooth Collapse 

function collapseContent(el) {
  const fullHeight = el.scrollHeight;

  el.style.maxHeight = fullHeight + 30 + 'px';
  el.style.opacity = '1';
  el.style.paddingTop = '15px';
  el.style.paddingBottom = '15px';

  requestAnimationFrame(() => {
    el.style.maxHeight = '0';
    el.style.opacity = '0';
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
  });

  setTimeout(() => {
    el.style.display = 'none';
  }, 500);
}



// Reset (instant hide other boxes)
function resetContent(exp) {
  const content = exp.querySelector('.certi_content');
  const skill = exp.querySelector('.certi_skill');
  if (content) {
    content.style.display = 'none';
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.padding = '0 15px';
  }
  if (skill) {
    skill.style.display = 'none';
    skill.style.maxHeight = '0';
    skill.style.opacity = '0';
    skill.style.padding = '0 15px';
  }
}




// resume button sound

// document.getElementById('soundButton').addEventListener('click', function() {
//     let sound = new Audio(this.getAttribute('data-sound'));
//     sound.play();
// });

const soundButtons = document.querySelectorAll('.soundButton');

soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = new Audio(button.dataset.sound);
    sound.play();
  });
});


// play sound button

// document.getElementById('playButton').addEventListener('click', function() {
//     let sound = new Audio(this.getAttribute('data-sound'));
//     sound.play();
// });


const playButton = document.getElementById('playButton');
let audio = null;

playButton.addEventListener('click', function () {
  const soundSrc = this.dataset.sound;

  // If no audio loaded yet → load it
  if (!audio) {
    audio = new Audio(soundSrc);
    audio.loop = true; // Optional: loop if you want continuous play
  }

  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change icon to pause
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change icon to play
  }
});




/*hover sound effect*/

document.querySelectorAll('.experiences').forEach(div => {
    div.addEventListener('mouseenter', () => {
        let sound = new Audio(div.getAttribute('data-sound'));
        sound.play();
    });
});       




/*rock paper scissors game*/

const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");
// Define possible images and outcomes
const botImages = ["rock.png", "paper.png", "scissors.png"];
const outcomes = {
  RR: "Draw",
  RP: "BOT",
  RS: "YOU",
  PP: "Draw",
  PR: "YOU",
  PS: "BOT",
  SS: "Draw",
  SR: "BOT",
  SP: "YOU"
};
// Event handler for image click
function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);
  // Reset results and display "Wait..."
  userResult.src = botResult.src = "rock.png";
  result.textContent = "Wait...";
  // Activate clicked image and deactivate others
  optionImages.forEach((image, index) => {
    image.classList.toggle("active", index === clickedIndex);
  });
  gameContainer.classList.add("start");
  setTimeout(() => {
    gameContainer.classList.remove("start");
    // Set user and bot images
    const userImageSrc = clickedImage.querySelector("img").src;
    userResult.src = userImageSrc;
    const randomNumber = Math.floor(Math.random() * botImages.length);
    const botImageSrc = botImages[randomNumber];
    botResult.src = botImageSrc;
    // Determine the result
    const userValue = ["R", "P", "S"][clickedIndex];
    const botValue = ["R", "P", "S"][randomNumber];
    const outcomeKey = userValue + botValue;
    const outcome = outcomes[outcomeKey] || "Unknown";
    // Display the result
    result.textContent = userValue === botValue ? "Match Draw" : `${outcome} WON!`;
  }, 2500);
}
// Attach event listeners to option images
optionImages.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});

 
/*contact form button effect*/

const overlay = document.querySelector('.contact_section');
const resetBtn = document.querySelector('.sub_buttons:first-child .buttons_of_form');
const submitBtn = document.querySelector('.sub_buttons:last-child .buttons_of_form');

resetBtn.addEventListener('mouseenter', () => {
  overlay.style.background = `
    radial-gradient(circle at 25% 50%, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0.2) 40%, transparent 70%)
  `;
});
resetBtn.addEventListener('mouseleave', () => {
  overlay.style.background = "transparent";
});

submitBtn.addEventListener('mouseenter', () => {
  overlay.style.background = `
    radial-gradient(circle at 75% 50%, rgba(0,0,255,0.6) 0%, rgba(0,0,255,0.2) 40%, transparent 70%)
  `;
});
submitBtn.addEventListener('mouseleave', () => {
  overlay.style.background = "transparent";
});



// custom cursor effect

const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a, button, .hover-target');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

// Track actual mouse position

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor with magnetic trailing effect

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15;  // 0.15 is speed (increase to slow down, decrease to speed up)
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Handle hover + enlarge effect

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-enlarge', 'hover');
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-enlarge', 'hover');
  });
});





