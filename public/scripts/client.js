/**
 * Jan 2, 2020
 * Frederick Lee
 */



// ===== DOCUMENT READY =====
// Wait for DOM to load before executing anything. All executing code goes here
document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');

  window.addEventListener('resize', function(e) {
    console.log(e);
    console.log(window.innerWidth);

  });
});