document.addEventListener('DOMContentLoaded', function() {
  const optionButtons = document.querySelectorAll('.option-btn');
  const body = document.body;
  const successSound = document.getElementById('successSound');
  const failedSound = document.getElementById('failedSound');

  optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionClick);
  });

  function handleOptionClick(event) {
    const button = event.target;
    const isCorrect = button.getAttribute('data-correct') === 'true';
    const questionCard = button.closest('.question-card');
    const allButtons = questionCard.querySelectorAll('.option-btn');

    // Отключить все кнопки в этой карточке
    allButtons.forEach(btn => btn.classList.add('disabled'));

    if (isCorrect) {
      // Правильный ответ
      button.classList.add('correct');
      body.classList.add('success-bg');
      playSound(successSound);
      
      // Вернуть фон через 1.5 секунды
      setTimeout(() => {
        body.classList.remove('success-bg');
        button.classList.remove('correct');
        allButtons.forEach(btn => btn.classList.remove('disabled'));
      }, 1500);
    } else {
      // Неправильный ответ
      button.classList.add('incorrect');
      body.classList.add('failed-bg');
      playSound(failedSound);
      
      // Вернуть фон через 1.5 секунды
      setTimeout(() => {
        body.classList.remove('failed-bg');
        button.classList.remove('incorrect');
        allButtons.forEach(btn => btn.classList.remove('disabled'));
      }, 1500);
    }
  }

  function playSound(audio) {
    // Сбросить звук и воспроизвести заново
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log('Не удалось воспроизвести звук:', error);
    });
  }
});
