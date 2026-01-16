
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll('.slide-left').forEach(el => observer.observe(el));

  const cloud = document.querySelector('.cloud');
  let x = -200;
  const speed = 0.5;

  function moveCloud() {
    x += speed;
    if (x > window.innerWidth) {
      x = -200; // wrap to left
    }
    cloud.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(moveCloud);
  }

  moveCloud();

