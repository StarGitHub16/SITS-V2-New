//Scroll Functionality 


// Select all elements for left fade-in effect
const scrollItemsLeft = document.querySelectorAll('.scroll-item');
// Select all elements for right fade-in effect
const scrollItemsRight = document.querySelectorAll('.scroll-item-right');

function handleScroll() {
  // Process elements for left fade-in
  scrollItemsLeft.forEach(item => {
    const rect = item.getBoundingClientRect();
    // Check if the item's top is within 80% of the viewport height
    if (rect.top <= window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });

  // Process elements for right fade-in
  scrollItemsRight.forEach(item => {
    const rect = item.getBoundingClientRect();
    // Check if the item's top is within 80% of the viewport height
    if (rect.top <= window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


