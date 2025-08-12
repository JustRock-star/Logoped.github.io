function makeDraggable(selector) {
    const el = document.querySelector(selector);
    let offsetX = 0, offsetY = 0, isDragging = false;

    el.style.cursor = 'grab';

    // Мышь
    el.addEventListener('mousedown', function(e) {
        isDragging = true;
        const rect = el.getBoundingClientRect();
        el.style.position = 'absolute';
        el.style.left = rect.left + window.scrollX + 'px';
        el.style.top = rect.top + window.scrollY + 'px';
        el.style.zIndex = 1000;
        el.style.cursor = 'grabbing';
        document.body.appendChild(el);
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        el.style.left = (e.clientX - offsetX) + 'px';
        el.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', function() {
        if (!isDragging) return;
        isDragging = false;
        el.style.cursor = 'grab';
    });

    // Сенсорные экраны
    el.addEventListener('touchstart', function(e) {
        isDragging = true;
        const rect = el.getBoundingClientRect();
        el.style.position = 'absolute';
        el.style.left = rect.left + window.scrollX + 'px';
        el.style.top = rect.top + window.scrollY + 'px';
        el.style.zIndex = 1000;
        el.style.cursor = 'grabbing';
        document.body.appendChild(el);
        const touch = e.touches[0];
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        const touch = e.touches[0];
        el.style.left = (touch.clientX - offsetX) + 'px';
        el.style.top = (touch.clientY - offsetY) + 'px';
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchend', function() {
        if (!isDragging) return;
        isDragging = false;
        el.style.cursor = 'grab';
    });
}

makeDraggable('.item1Bottom');
makeDraggable('.item2Bottom');
makeDraggable('.item3Bottom');

// Получаем все тексты и картинки
const texts = [
    document.querySelector('.item1Bottom'),
    document.querySelector('.item2Bottom'),
    document.querySelector('.item3Bottom')
];
const images = [
    document.querySelector('.item1Top'),
    document.querySelector('.item2Top'),
    document.querySelector('.item3Top')
];



// Проверка при отпускании мыши — прилипание к любой картинке
document.addEventListener('mouseup', function() {
    texts.forEach(textEl => {
        const txtRect = textEl.getBoundingClientRect();
        const txtCenter = { x: txtRect.left + txtRect.width/2, y: txtRect.top + txtRect.height/2 };
        images.forEach(imageEl => {
            const imgRect = imageEl.getBoundingClientRect();
            const imgCenter = { x: imgRect.left + imgRect.width/2, y: imgRect.top + imgRect.height/2 };
            const dist = Math.sqrt(
                Math.pow(txtCenter.x - imgCenter.x, 2) +
                Math.pow(txtCenter.y - imgCenter.y, 2)
            );
            if (dist < 90) { // 90px — радиус прилипания
                // Ставим текст ровно под картинку (по центру)
                textEl.style.left = (imgRect.left + imgRect.width/2 - txtRect.width/2) + 'px';
                textEl.style.top = (imgRect.bottom + 10) + 'px';
                textEl.style.position = 'absolute';
                textEl.style.zIndex = 1001;
                // Запоминаем к какой картинке прилип текст
                textEl.dataset.stuckTo = imageEl.className;
            }
        });
    });
});

// Проверка ответа
document.getElementById('checkBtn').onclick = function() {
    // соответствие: item1Bottom -> item2Top, item2Bottom -> item3Top, item3Bottom -> item1Top
    const correctPairs = [
        { text: document.querySelector('.item1Bottom'), imageClass: 'item1Top' },
        { text: document.querySelector('.item2Bottom'), imageClass: 'item2Top' },
        { text: document.querySelector('.item3Bottom'), imageClass: 'item3Top' }
    ];

    let allCorrect = true;
    correctPairs.forEach(pair => {
        if (pair.text.dataset.stuckTo !== pair.imageClass) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        document.body.style.backgroundColor = '#bfff66';
        const audio = new Audio('success.mp3');
        audio.play();
        setTimeout(() => {
            document.body.style.backgroundColor = '#f9ffa5';
        }, 5000);
    } else {
        document.body.style.backgroundColor = '#ff5050ff';
        const audio = new Audio('failed.mp3');
        audio.play();
        setTimeout(() => {
            document.body.style.backgroundColor = '#f9ffa5';
            function moveUp(el, px) {
                // Получаем текущее значение top (например, "120px")
                let top = parseInt(el.style.top) || 0;
                el.style.top = (top - px) + 'px';
            }
            moveUp(item1Bottom, 100);
            moveUp(item2Bottom, 100);
            moveUp(item3Bottom, 100);
        }, 5000);
    }
    
};

// Если нужна кнопка "Далее"
document.getElementById('next').onclick = function() {
    window.location.href = "index10.html";
};

