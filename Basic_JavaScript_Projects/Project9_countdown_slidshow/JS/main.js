
/* Project 9 — Countdown Timer */

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // pauses 1 second
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    tick();
}

/* A slideshowBased on the W3Schools slideshow structure:
 https://www.w3schools.com/howto/howto_js_slideshow.asp */

// --- Slideshow state ---
let slideIndex = 1;          
let autoAdvanceTimer = null; 
let countdownTimer = null;   
const ADVANCE_SECONDS = 5;   

// Initialize when the page loads
window.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startAutoAdvance();
});


/* Hides others, updates dots, resets the per-slide countdown. */

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots   = document.getElementsByClassName("dot");

  // Wrap around logic
  if (n > slides.length) { slideIndex = 1; }
  else if (n < 1)        { slideIndex = slides.length; }
  else                   { slideIndex = n; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  // Remove 'active' on all dots
  for (let i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }

  // Show the selected slide + activate its dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Reset the slide countdown display
  resetSlideCountdown();
}


/* Next/Prev controls. Called by the arrows. */
function plusSlides(n) {
  showSlides(slideIndex + n);
  restartAutoAdvance();
}


/* Dot controls. Jump directly to slide n. */
function currentSlide(n) {
  showSlides(n);
  restartAutoAdvance();
}


/* Starts automatic slide advance every ADVANCE_SECONDS seconds.*/
function startAutoAdvance() {
  clearInterval(autoAdvanceTimer);
  autoAdvanceTimer = setInterval(() => {
    plusSlides(1);
  }, ADVANCE_SECONDS * 1000);

  // Start the per-slide countdown display
  resetSlideCountdown();
}


/* Restarts auto-advance and resets countdown after a manual click. */
function restartAutoAdvance() {
  startAutoAdvance();
}


/* This is the additional countdown for the slideshow. */
function resetSlideCountdown() {
  // Clear any existing countdown
  clearInterval(countdownTimer);

  const target = document.getElementById("slideCountdown");
  if (!target) return;

  let remaining = ADVANCE_SECONDS;
  target.textContent = remaining;

  countdownTimer = setInterval(() => {
    remaining -= 1;
    target.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(countdownTimer);
      // The slide will advance by startAutoAdvance's interval;
    }
  }, 1000);
}