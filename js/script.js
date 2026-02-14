

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

function yesBtn() {
        const windowTab = document.getElementById('game-window');



}

// Wait for the page to load so we can find the buttons
// Wait for the page to load so we can find the buttons
window.addEventListener('load', function() {
    
    // Select elements
    const yesBtn = document.getElementById('yesBtn');
    const window1 = document.getElementById('game-window');
    const window2 = document.getElementById('second-window');
    const window3 = document.getElementById('third-window');
    const window4 = document.getElementById('fourth-window');
    const window5 = document.getElementById('fifth-window');
    const noBtn = document.getElementById('noBtn');
    const toast = document.getElementById('toast');
    const nextBtn = document.getElementById('nextBtn');
    const nextBtn2 = document.getElementById('nextBtn2');
    const nextBtn3 = document.getElementById('nextBtn3');
    const nextBtn4 = document.getElementById('nextBtn4');
    const cycleBtn = document.getElementById('cycleBtn');
    const miniImg = document.getElementById('mini-img');
    const finalMsg = document.getElementById('finalMsg');
    const finalNextBtn = document.getElementById('finalNextBtn');
    const finalNextWrap = document.getElementById('finalNextWrap');
    const imgSound = document.getElementById('img-sound');
    const finalSound = document.getElementById('final-sound');
    const endingBaby = document.getElementById('ending-baby');
    const againBtn = document.getElementById('againBtn');
    const againBtnWrap = document.getElementById('again-btn-wrap');
    const reveal1 = document.getElementById('reveal1');
    const loveMsg = document.getElementById('loveMsg');
    const nextSound = document.getElementById('next-sound');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            
            // 1. Play Sound
        if (nextSound) {
            nextSound.currentTime = 0; // Rewind to start
            nextSound.play();          // Play!
        }

            // 2. Hide Window 1 (Close it)
            window1.classList.remove('show'); // Stops displaying it
            window1.style.display = 'none';   // Forces it hidden immediately

            // 3. Show Window 2 (Pop it up!)
            // We use a tiny delay (100ms) to make the animation look fresh
            window2.style.display = 'block'; 
            setTimeout(() => {
                window2.classList.add('show');
            }, 50);
            
            console.log("Switched to Window 2");
        });
    }

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            
            // 1. Disable the button (Make it unavailable)
            noBtn.disabled = true;
            noBtn.innerText = "no"; // Optional: Change text to show it's dead
            
            // 2. Show the Toast
            toast.className = "show";

            // 3. Hide the Toast automatically after 3 seconds
            // (Matches the 2.5s wait + 0.5s fadeout in CSS)
            setTimeout(function(){ 
                toast.className = toast.className.replace("show", ""); 
                
                // Optional: Re-enable button after toast is gone?
                // noBtn.disabled = false;
                // noBtn.innerText = "No";
            }, 3000);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            // Play the next sound if available
            if (nextSound) {
                nextSound.currentTime = 0;
                nextSound.play();
            }

            // Close the second window and show the third window (stay on index.html)
            if (window2) {
                window2.classList.remove('show');
                setTimeout(() => {
                    window2.style.display = 'none';

                    if (window3) {
                        window3.style.display = 'block';
                        setTimeout(() => {
                            window3.classList.add('show');
                        }, 50);
                    }
                }, 250);
            }
        });
    }

    // Handler for the third-window Next button (show fourth window)
    if (nextBtn2) {
        nextBtn2.addEventListener('click', function() {
            if (nextSound) {
                nextSound.currentTime = 0;
                nextSound.play();
            }

            if (window3) {
                window3.classList.remove('show');
                setTimeout(() => {
                    window3.style.display = 'none';

                    // Show fourth window
                    if (window4) {
                        window4.style.display = 'block';
                        setTimeout(() => {
                            window4.classList.add('show');
                        }, 50);
                    }
                }, 250);
            }
        });
    }

    // Handler for the fourth-window Done button (show fifth window)
    if (nextBtn3) {
        nextBtn3.addEventListener('click', function() {
            if (nextSound) {
                nextSound.currentTime = 0;
                nextSound.play();
            }

            if (window4) {
                window4.classList.remove('show');
                setTimeout(() => {
                    window4.style.display = 'none';

                    // Show fifth window
                    if (window5) {
                        window5.style.display = 'block';
                        setTimeout(() => {
                            window5.classList.add('show');
                        }, 50);
                    }
                }, 250);
            }
        });
    }

    // Handler for the fifth-window Finish button
    if (nextBtn4) {
        nextBtn4.addEventListener('click', function() {
            if (nextSound) {
                nextSound.currentTime = 0;
                nextSound.play();
            }

            // Hide fifth popup, then show the reveal area with wiggle animation
            if (window5) {
                window5.classList.remove('show');
                setTimeout(() => {
                    window5.style.display = 'none';

                    // Show ending baby image
                    if (endingBaby) {
                        endingBaby.style.display = 'block';
                        endingBaby.style.opacity = 0;
                        setTimeout(() => {
                            endingBaby.style.transition = 'opacity 400ms ease';
                            endingBaby.style.opacity = 1;
                        }, 50);

                            // Add rock animation to the baby image (discrete 2-frame rock)
                            const endingBabyImg = endingBaby.querySelector('img');
                            if (endingBabyImg) {
                                endingBabyImg.classList.remove('rock');
                                setTimeout(() => endingBabyImg.classList.add('rock'), 140);
                            }

                            if (finalSound) {
                                finalSound.currentTime = 0;
                                finalSound.play();
                            }

                            // Show the Again button after baby appears
                            if (againBtnWrap) {
                                setTimeout(() => { againBtnWrap.style.display = 'block'; }, 600);
                            }
                    }
                }, 250);
            }
        });
    }

    // Handler for Again button (refresh page)
    if (againBtn) {
        againBtn.addEventListener('click', function() {
            location.reload();
        });
    }

    // Mini-game: cycle images each time the cycleBtn is clicked
    if (cycleBtn && miniImg) {
        // Image sequence from `game/` folder
        const images = [
            'game/image-1.png',
            'game/image-2.png',
            'game/image-3.png',
            'game/image-4.png',
            'game/image-5.png',
            'game/image-6.png'
        ];
        let imageIndex = 0;

        // Ensure initial image is the first game image
        miniImg.src = miniImg.src && !miniImg.src.endsWith('/') ? miniImg.src : images[0];

        cycleBtn.addEventListener('click', function() {
            // Play small click/appear sound
            if (imgSound) {
                imgSound.currentTime = 0;
                imgSound.play();
            }

            // Advance to next image
            imageIndex = Math.min(imageIndex + 1, images.length - 1);
            miniImg.src = images[imageIndex];

            // If we've reached the last image, show final message + next button
            if (imageIndex === images.length - 1) {
                if (finalMsg) finalMsg.style.display = 'block';
                // show the main Finish button alongside the message
                const nextBtn4Wrap = document.getElementById('nextBtn4Wrap');
                if (nextBtn4Wrap) nextBtn4Wrap.style.display = 'block';
                // hide the cycle button to avoid further clicks
                cycleBtn.style.display = 'none';

                // Play final celebration sound
                if (finalSound) {
                    finalSound.currentTime = 0;
                    finalSound.play();
                }
            }
        });

        // If a final next button exists, wire it to close the mini-game window
        if (finalNextBtn) {
            finalNextBtn.addEventListener('click', function() {
                if (nextSound) {
                    nextSound.currentTime = 0;
                    nextSound.play();
                }

                if (window5) {
                    window5.classList.remove('show');
                    setTimeout(() => {
                        window5.style.display = 'none';
                        if (toast) {
                            toast.className = 'show';
                            setTimeout(() => {
                                toast.className = toast.className.replace('show', '');
                            }, 3000);
                        }
                    }, 250);
                }
            });
        }
    }



});