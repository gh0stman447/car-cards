const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    // if (slide.clasList.contains('active')) {
    //   slide.clasList.remove('active');
    // } else {
    //   slide.clasList.add('active');
    // }
    clearActiveClasses();
    slide.classList.add('active');
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
