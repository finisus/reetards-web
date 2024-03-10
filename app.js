document.addEventListener("DOMContentLoaded", function() {
  // buy
  const buyBtn = document.getElementById('buy-btn');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/', '_blank');
  });

  // socials
  const telegramBtn = document.getElementById('telegram-btn');
  telegramBtn.addEventListener('click', function() {
    window.open('https://telegram.org/', '_blank');
  });
  const twitterBtn = document.getElementById('twitter-btn');
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/', '_blank');
  });
});