

function handleClick() {
    const btn = document.querySelector('.play-btn');
    const btnSound = document.getElementById('btn-sound');
    
    // Elements to swap
    const windowTab = document.getElementById('game-window');
    const cat = document.getElementById('cat-btn');
    const dog = document.getElementById('dog-btn');
    const pow1 = document.getElementById('pow1');
    const pow2 = document.getElementById('pow2');

    // 1. PLAY CLICK EFFECT
    btn.classList.add('clicked');
    if(btnSound) {
        btnSound.currentTime = 0;
        btnSound.play();
    }

    // 2. MAKE ANIMALS LEAVE (Immediately)
    if (cat) cat.classList.add('slide-out-left');
    if (dog) dog.classList.add('slide-out-right');
    if (pow1) pow1.classList.add('slide-out-left');
    if (pow2) pow2.classList.add('slide-out-right');

    stopCat(); // Stop audio if playing
    stopDog();

    // 3. SWAP BUTTON FOR WINDOW (After small delay)
    setTimeout(() => {
        // Hide Button
        btn.classList.add('vanish');
        
        // Show Window
        if (windowTab) {
            windowTab.classList.add('show');
        }
    }, 300); // 300ms delay feels smooth
}


/*===============================
    INTRO AUDIO JS  
===============================*/

// Play the audio when the page loads

/*================================
    SPIN BUTTONS JS  
=================================*/

// We define the timer variable outside so we can access it anytime
// --- GLOBAL VARIABLES ---
let catTimer = null;
let dogTimer = null;
const AUDIO_DURATION = 34000; // 34 Seconds

// --- HELPER 1: FORCE STOP CAT ---
function stopCat() {
    const catBtn = document.getElementById('cat-btn'); // Make sure your HTML ID is correct
    const catAudio = document.getElementById('cat-audio');

    if (catBtn && catAudio) {
        catBtn.classList.remove('spinning-active');
        catAudio.pause();
        catAudio.currentTime = 0;
        if (catTimer) {
            clearTimeout(catTimer);
            catTimer = null;
        }
    }
}

// --- HELPER 2: FORCE STOP DOG ---
function stopDog() {
    const dogBtn = document.getElementById('dog-btn'); // Make sure your HTML ID is correct
    const dogAudio = document.getElementById('dog-audio');

    if (dogBtn && dogAudio) {
        dogBtn.classList.remove('spinning-active');
        dogAudio.pause();
        dogAudio.currentTime = 0;
        if (dogTimer) {
            clearTimeout(dogTimer);
            dogTimer = null;
        }
    }
}

// --- MAIN FUNCTION: CLICKING THE CAT ---
function toggleSpin(btn) {
    // 1. RULE: Stop the Dog immediately!
    stopDog();

    const audio = document.getElementById('cat-audio');
    const isPlaying = btn.classList.contains('spinning-active');

    if (isPlaying) {
        // Toggle OFF (Stop Cat)
        stopCat(); 
    } else {
        // Toggle ON (Start Cat)
        btn.classList.add('spinning-active');
        audio.play();

        // Auto-stop timer
        catTimer = setTimeout(() => {
            stopCat();
        }, AUDIO_DURATION);
    }
}

// --- MAIN FUNCTION: CLICKING THE DOG ---
function toggleSpinDog(btn) {
    // 1. RULE: Stop the Cat immediately!
    stopCat();

    const audio = document.getElementById('dog-audio');
    const isPlaying = btn.classList.contains('spinning-active');

    if (isPlaying) {
        // Toggle OFF (Stop Dog)
        stopDog();
    } else {
        // Toggle ON (Start Dog)
        btn.classList.add('spinning-active');
        audio.play();

        // Auto-stop timer
        dogTimer = setTimeout(() => {
            stopDog();
        }, AUDIO_DURATION);
    }
}