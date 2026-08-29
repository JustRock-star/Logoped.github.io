const vowels = new Set(["Ա", "ա", "Ե", "ե", "Ը", "ը", "Ի", "ի", "Ո", "ո", "Է", "է", "Ւ", "ւ", "Օ", "օ", "ու", "Ու"]);
const letters = [
  { upper: "Ա", lower: "ա", examples: [{ word: "արև", emoji: "☀️" }, { word: "կատո", emoji: "🐱" }] },
  { upper: "Բ", lower: "բ", examples: [{ word: "բադ", emoji: "🦆" }, { word: "ավտոբոս", emoji: "🚌" }] },
  { upper: "Գ", lower: "գ", examples: [{ word: "գիրք", emoji: "📖" }, { word: "ագռավ", emoji: "🐦‍⬛" }] },
  { upper: "Դ", lower: "դ", examples: [{ word: "դոռ", emoji: "🚪" }, { word: "սարդ", emoji: "🕷️" }] },
  { upper: "Ե", lower: "ե", examples: [{ word: "ելակ", emoji: "🍓" }, { word: "մեկ", emoji: "1" }] },
  { upper: "Զ", lower: "զ", examples: [{ word: "զատիկ", emoji: "🐞" }, { word: "մազ", emoji: "👱‍♀️" }] },
  { upper: "Է", lower: "է", examples: [{ word: "էշ", emoji: "🫏" }, { word: "մանրէ", emoji: "🦠" }] },
  { upper: "Ը", lower: "ը", examples: [{ word: "ընձողտ", emoji: "🦒" }, { word: "անընդհատ", emoji: "♾️" }] },
  { upper: "Թ", lower: "թ", examples: [{ word: "թոթակ", emoji: "🦜" }, { word: "ոթ", emoji: "8" }] },
  { upper: "Ժ", lower: "ժ", examples: [{ word: "ժամ", emoji: "🕒" }, { word: "բաժակ", emoji: "🍵" }] },
  { upper: "Ի", lower: "ի", examples: [{ word: "ինքնաթիռ", emoji: "✈️" }, { word: "կրիա", emoji: "🐢" }] },
  { upper: "Լ", lower: "լ", examples: [{ word: "լոսին", emoji: "🌙" }, { word: "ոլիկ", emoji: "🐐" }] },
  { upper: "Խ", lower: "խ", examples: [{ word: "խնձոր", emoji: "🍎" }, { word: "սեխ", emoji: "🍈" }] },
  { upper: "Ծ", lower: "ծ", examples: [{ word: "ծառ", emoji: "🌲" }, { word: "ծիածան", emoji: "🌈" }] },
  { upper: "Կ", lower: "կ", examples: [{ word: "կատո", emoji: "🐱" }, { word: "ականջ", emoji: "👂" }] },
  { upper: "Հ", lower: "հ", examples: [{ word: "հաց", emoji: "🍞" }, { word: "հնդկահավ", emoji: "🦃" }] },
  { upper: "Ձ", lower: "ձ", examples: [{ word: "ձոկ", emoji: "🐟" }, { word: "օձ", emoji: "🐍" }] },
  { upper: "Ղ", lower: "ղ", examples: [{ word: "ղեկ", emoji: "🛞" }, { word: "աքաղաղ", emoji: "🐓" }] },
  { upper: "Ճ", lower: "ճ", examples: [{ word: "ճոտ", emoji: "🐥" }, { word: "մորճ", emoji: "🔨" }] },
  { upper: "Մ", lower: "մ", examples: [{ word: "մոկ", emoji: "🐭" }, { word: "համակարգիչ", emoji: "💻" }] },
  { upper: "Յ", lower: "յ", examples: [{ word: "յասաման", emoji: "🪻" }, { word: "մայրիկ", emoji: "🤱" }] },
  { upper: "Ն", lower: "ն", examples: [{ word: "նկար", emoji: "🖼️" }, { word: "բանան", emoji: "🍌" }] },
  { upper: "Շ", lower: "շ", examples: [{ word: "շոն", emoji: "🐶" }, { word: "աշոն", emoji: "🍂" }] },
  { upper: "Ո", lower: "ո", examples: [{ word: "ոզնի", emoji: "🦔" }, { word: "մոմ", emoji: "🕯️" }] },
  { upper: "Չ", lower: "չ", examples: [{ word: "չորս", emoji: "4" }, { word: "խաչ", emoji: "✝️" }] },
  { upper: "Պ", lower: "պ", examples: [{ word: "պատ", emoji: "🧱" }, { word: "կապիկ", emoji: "🐒" }] },
  { upper: "Ջ", lower: "ջ", examples: [{ word: "ջոր", emoji: "💧" }, { word: "արջ", emoji: "🐻" }] },
  { upper: "Ռ", lower: "ռ", examples: [{ word: "ռադիո", emoji: "📻" }, { word: "ծառ", emoji: "🌲" }] },
  { upper: "Ս", lower: "ս", examples: [{ word: "սոնկ", emoji: "🍄" }, { word: "ասեղ", emoji: "🪡" }] },
  { upper: "Վ", lower: "վ", examples: [{ word: "վարդ", emoji: "🌹" }, { word: "նվեր", emoji: "🎁" }] },
  { upper: "Տ", lower: "տ", examples: [{ word: "տոն", emoji: "🏠" }, { word: "կատո", emoji: "🐈" }] },
  { upper: "Ր", lower: "ր", examples: [{ word: "րոպե", emoji: "⏰" }, { word: "կարմիր", emoji: "🔴" }] },
  { upper: "Ց", lower: "ց", examples: [{ word: "ցոլ", emoji: "🐂" }, { word: "կացին", emoji: "🪓" }] },
  { upper: "Ու", lower: "ու", examples: [{ word: "ուլիկ", emoji: "🐐" }, { word: "պատուհան", emoji: "🪟" }] },
  { upper: "Փ", lower: "փ", examples: [{ word: "փիղ", emoji: "🐘" }, { word: "տոփ", emoji: "📦" }] },
  { upper: "Ք", lower: "ք", examples: [{ word: "քանոն", emoji: "📏" }, { word: "գիրք", emoji: "📖" }] },
  { upper: "Եվ", lower: "և", examples: [{ word: "Տերև", emoji: "🍀" }, { word: "արև", emoji: "☀️" }] },
  { upper: "Օ", lower: "օ", examples: [{ word: "օձ", emoji: "🐍" }, { word: "օղակ", emoji: "⭕" }] },
  { upper: "Ֆ", lower: "ֆ", examples: [{ word: "ֆոտբոլ", emoji: "⚽🥅" }, { word: "կարտոֆիլ", emoji: "🥔" }] }
];

let currentIndex = 0;
const titleEl = document.getElementById("letterTitle");
const displayEl = document.getElementById("letterDisplay");
const lowerEl = document.getElementById("lowerLetter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const emojiLeft = document.getElementById("emojiLeft");
const emojiRight = document.getElementById("emojiRight");
const boxesLeft = document.getElementById("boxesLeft");
const boxesRight = document.getElementById("boxesRight");

function renderLetter() {
  const letter = letters[currentIndex];
  titleEl.textContent = `${letter.upper} ${letter.lower}`;
  displayEl.textContent = letter.upper;
  lowerEl.textContent = letter.lower;
  
  // Apply vowel styling
  if (vowels.has(letter.upper)) {
    displayEl.classList.add("vowel");
  } else {
    displayEl.classList.remove("vowel");
  }
  
  if (vowels.has(letter.lower)) {
    lowerEl.classList.add("vowel");
  } else {
    lowerEl.classList.remove("vowel");
  }

  const [leftExample, rightExample] = letter.examples;
  emojiLeft.textContent = leftExample.emoji;
  emojiRight.textContent = rightExample.emoji;
  renderWordBoxes(boxesLeft, leftExample.word, letter.lower);
  renderWordBoxes(boxesRight, rightExample.word, letter.lower);
}

function renderWordBoxes(container, word, targetLetter) {
  container.innerHTML = "";
  const chars = [...word];
  const targetChars = [...targetLetter];
  const targetIndexes = new Set();

  for (let i = 0; i <= chars.length - targetChars.length; i++) {
    const slice = chars.slice(i, i + targetChars.length).join("");
    if (slice === targetLetter) {
      for (let j = 0; j < targetChars.length; j++) {
        targetIndexes.add(i + j);
      }
    }
  }

  chars.forEach((char, index) => {
    const box = document.createElement("div");
    box.className = "word-box";
    const isTarget = targetIndexes.has(index);
    box.textContent = isTarget ? char : "•";
    if (isTarget) {
      box.classList.add("target");
    }
    container.appendChild(box);
  });
}

function showNextLetter() {
  currentIndex = (currentIndex + 1) % letters.length;
  renderLetter();
}

function showPrevLetter() {
  currentIndex = (currentIndex - 1 + letters.length) % letters.length;
  renderLetter();
}

prevBtn.addEventListener("click", showPrevLetter);
nextBtn.addEventListener("click", showNextLetter);
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showNextLetter();
  } else if (event.key === "ArrowLeft") {
    showPrevLetter();
  }
});

renderLetter();