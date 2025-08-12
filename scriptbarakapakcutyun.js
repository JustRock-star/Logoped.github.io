document.querySelectorAll('.inputaragutyun').forEach(input => {
    input.addEventListener('change', function() {
        const checked = document.querySelector('.inputaragutyun:checked');
        if (checked) {
            console.log(checked.value);
        }
    });
});


let speed = 3000;

document.querySelectorAll('.inputaragutyun').forEach(input => {
    input.addEventListener('change', function() {
        const checked = document.querySelector('.inputaragutyun:checked');
        if (checked) {
            if (checked.value == "1") speed = 3000;
            else if (checked.value == "2") speed = 2000;
            else if (checked.value == "3") speed = 1500;
        }
    });
});

const container = document.querySelector('.vank-container');
const blockHeight = container.offsetHeight;

function moveNext() {
    const first = container.firstElementChild;
    if (!first) return;
    first.style.transform = `translateY(-${blockHeight}px)`;
    setTimeout(() => {
        first.style.transition = '';
        first.style.transform = '';
        container.appendChild(first);
        setTimeout(() => {
            first.style.transition = 'transform 0.7s';
        }, 20);
        moveNext();
    }, speed);
}

moveNext();