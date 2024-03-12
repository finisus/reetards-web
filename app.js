document.addEventListener("DOMContentLoaded", function() {
  // buy
  const chartBtn = document.getElementById('chart-btn');
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com', '_blank');
  });
  const buyBtn = document.getElementById('buy-btn');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/', '_blank');
  });

  // socials
  const telegramBtn = document.getElementById('telegram-btn');
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/bunchofretardsonsol', '_blank');
  });
  const twitterBtn = document.getElementById('twitter-btn');
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/Retardedonsol', '_blank');
  });

  function checkScreenWidth() {
    const mobileImages = document.querySelectorAll("#backdrop img[id^='mobile-back-']"); // Using #backdrop here
    const otherImages = document.querySelectorAll("#backdrop img:not([id^='mobile-back-'])");
  
    if (window.innerWidth <= 659) {
      mobileImages.forEach(image => image.style.display = "block"); /* Added missing closing parenthesis */
      otherImages.forEach(image => image.style.display = "none");
    } else {
      mobileImages.forEach(image => image.style.display = "none");
      otherImages.forEach(image => image.style.display = "block");
    }
  }
  
  // Call the function on initial page load
  checkScreenWidth();
  
  // Listen for window resize events and call the function again
  window.addEventListener("resize", checkScreenWidth);

});
