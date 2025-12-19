document.querySelectorAll('.inputaragutyun').forEach(input => {
    input.addEventListener('change', function() {
        const checked = document.querySelector('.inputaragutyun:checked');
        if (checked) {
            console.log(checked.value);
        }
    });
});


// const container = document.querySelector('.vank-container');
// const blockHeight = container.firstElementChild.offsetHeight;
// const containerHeight = container.offsetHeight;

// function moveNext() {
//     if (!container.firstElementChild) return;
//     const first = container.firstElementChild;
//     first.style.transition = 'transform 1s linear';
//     first.style.transform = `translateY(-${containerHeight - blockHeight}px)`;
//     setTimeout(() => {
//         first.style.transition = '';
//         first.style.transform = '';
//         container.appendChild(first);
//         setTimeout(moveNext, 500);
//     }, 1000);
// }

// moveNext();



// let speed = 1500; //1
// if (checked.value == "1") {
//     speed = 1500; //1
// }
// else if (checked.value == "2") {
//     speed = 1000; //2
// }
// else if (checked.value == "3") {
//     speed = 500; //3
// }

// const container = document.querySelector('.vank-container');
// const blockHeight = container.offsetHeight;

// function moveNext() {
//     const first = container.firstElementChild;
//     if (!first) return;
//     first.style.transform = `translateY(-${blockHeight}px)`;
//     setTimeout(() => {
//         first.style.transition = '';
//         first.style.transform = '';
//         container.appendChild(first);
//         setTimeout(() => {
//             first.style.transition = 'transform 0.7s';
//         }, 20);
//         moveNext();
//     }, speed);
// }

// moveNext();


// let speed = 1500;

// document.querySelectorAll('.inputaragutyun').forEach(input => {
//     input.addEventListener('change', function() {
//         const checked = document.querySelector('.inputaragutyun:checked');
//         if (checked) {
//             if (checked.value == "1") speed = 1500;
//             else if (checked.value == "2") speed = 1000;
//             else if (checked.value == "3") speed = 500;
//         }
//     });
// });

let speed = 3000;

document.querySelectorAll('.inputaragutyun').forEach(input => {
    input.addEventListener('change', function() {
        const checked = document.querySelector('.inputaragutyun:checked');
        if (checked) {
            if (checked.value == "1") speed = 3000;
            else if (checked.value == "2") speed = 2000;
            else if (checked.value == "3") speed = 1000;
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