'use sctrict';

// Timer
document.addEventListener('DOMContentLoaded', function () {
      const deadline = new Date('2022-10-12 20:10:05');
      let timerId = null;
       function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
      }
      function countdownTimer() {
         const diff = deadline - new Date();
         if (diff <= 0) {
           clearInterval(timerId);
         }
         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
         $hours.textContent = hours < 10 ? '0' + hours : hours;
         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
         $hours.dataset.title = declensionNum(hours, ['hours', 'hours', 'hours']);
         $minutes.dataset.title = declensionNum(minutes, ['minutes', 'minutes', 'minutes']);
         $seconds.dataset.title = declensionNum(seconds, ['seconds', 'seconds', 'seconds']);
      }
       const $hours = document.querySelector('.timer__hours');
       const $minutes = document.querySelector('.timer__minutes');
       const $seconds = document.querySelector('.timer__seconds');
       timerId = setInterval(countdownTimer, 1000);
});
     

// Items hidden
const button = document.querySelector('.items__more-services');
let content = document.querySelector('.items-hidden');

button.onclick = function () {
      content.style.display = 'flex';
      button.style.display = 'none';
}

// Exclusive product hidden 
const btnOpen = document.querySelector('.product__scrub-button');
const btnClose = document.querySelector('.product__exclusive-close');
let contentProduct = document.querySelector('.product__exclusive-hidden');

btnOpen.onclick = function () {
      contentProduct.style.display = 'block';
}

btnClose.onclick = function () {
      contentProduct.style.display = 'none';
}
