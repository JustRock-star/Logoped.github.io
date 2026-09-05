const levels = [
	{ word:"կատու", tiles:["ա","ու","կ","տ"] }, { word:"մայր", tiles:["ր","մ","ա","յ"] }, { word:"հայր", tiles:["յ","հ","ր","ա"] }, { word:"տուն", tiles:["ն","տ","ու"] }, { word:"գիրք", tiles:["ք","գ","ի","ր"] },
	{ word:"դպրոց", tiles:["ց","դ","ո","պ","ր"] }, { word:"աթոռ", tiles:["ռ","ա","թ","ո"] }, { word:"ջուր", tiles:["ր","ջ","ու"] }, { word:"արև", tiles:["և","ա","ր"] }, { word:"լուսին", tiles:["ս","լ","ի","ն","ու"] },
	{ word:"աստղ", tiles:["ղ","ա","տ","ս"] }, { word:"ծաղիկ", tiles:["կ","ծ","ա","ղ","ի"] }, { word:"խնձոր", tiles:["ձ","խ","ր","ո","ն"] }, { word:"մուկ", tiles:["կ","մ","ու"] }, { word:"շուն", tiles:["ն","շ","ու"] },
	{ word:"ձուկ", tiles:["կ","ձ","ու"] }, { word:"կարտոֆիլ", tiles:["ո","ֆ","կ","լ","ի","ա","ր","տ"] }, { word:"անձրև", tiles:["և","ա","ձ","ն","ր"] }, { word:"ամպ", tiles:["պ","ա","մ"] }, { word:"ծով", tiles:["վ","ծ","ո"] },
	{ word:"լեռ", tiles:["ռ","լ","ե"] }, { word:"անտառ", tiles:["տ","ա","ռ","ա","ն"] }, { word:"գետ", tiles:["տ","գ","ե"] }, { word:"ծառ", tiles:["ծ","ա","ռ"] }, { word:"խոտ", tiles:["տ","խ","ո"] },
	{ word:"մատիտ", tiles:["տ","մ","ի","տ","ա"] }, { word:"գնդակ", tiles:["դ","գ","ա","կ","ն"] }, { word:"տիկնիկ", tiles:["ն","ի","կ","տ","ի","կ"] }, { word:"կիտրոն", tiles:["կ","տ","ի","ո","ր", "ն"] },
	{ word:"բարև", tiles:["և","բ","ա","ր"] }, { word:"ընկեր", tiles:["կ","ե","ր","ը","ն"] }, { word:"ուրախ", tiles:["խ","ու","ր","ա"] }, { word:"սեր", tiles:["ր","ս","ե"] }, { word:"ժպիտ", tiles:["պ","ի","տ","ժ"] },
	{ word:"խաղ", tiles:["ղ","խ","ա"] }, { word:"երգ", tiles:["գ","ե","ր"] }, { word:"պար", tiles:["պ","ա","ր"] }, { word:"գույն", tiles:["գ","ու","յ","ն"] }, { word:"կարմիր", tiles:["մ","ի","ր","կ","ա","ր"] },
	{ word:"կապույտ", tiles:["կ","ա","պ","ու","յ","տ"] }, { word:"կանաչ", tiles:["չ","կ","ա","ն","ա"] }, { word:"սպիտակ", tiles:["ս","պ","ի","տ","ա","կ"] }, { word:"դեղին", tiles:["դ","ե","ղ","ի","ն"] }, { word:"նարնջագույն", tiles:["ն","ա","ր","ն","ջ","ա","գ","ու","յ","ն"] },
	{ word:"ձմեռ", tiles:["ձ","մ","ե","ռ"] }, { word:"կակաչ", tiles:["չ","կ","ա","կ","ա"] }, { word:"ամառ", tiles:["ա","մ","ա","ռ"] }, { word:"աշուն", tiles:["շ","ու","ն","ա"] }, { word:"ծիծաղ", tiles:["ծ","ի","ծ","ա","ղ"] }, { word:"ընտանիք", tiles:["տ","ա","ն","ի","ք","ը","ն"] }
];

const answerSlots = document.querySelector("#answerSlots");
const letterBank = document.querySelector("#letterBank");
const message = document.querySelector("#message");
const levelNumber = document.querySelector("#levelNumber");
const scoreValue = document.querySelector("#scoreValue");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const sticker = document.querySelector(".cat-sticker");
const stickerCard = document.querySelector(".sticker-card");
const stickers = {
	"կատու": "😺", "մայր": "👩", "հայր": "👨", "տուն": "🏠", "գիրք": "📖", "դպրոց": "🏫", "աթոռ": "🪑", "ջուր": "💧", "արև": "☀️", "լուսին": "🌙",
	"աստղ": "⭐", "ծաղիկ": "🌸", "խնձոր": "🍎", "մուկ": "🐭", "շուն": "🐶", "ձուկ": "🐟", "կարտոֆիլ": "🥔", "անձրև": "🌧️", "ամպ": "☁️", "ծով": "🌊",
	"լեռ": "⛰️", "անտառ": "🌲", "գետ": "🏞️", "ծառ": "🌳", "խոտ": "🌱", "մատիտ": "✏️", "գնդակ": "⚽", "տիկնիկ": "🪆", "կիտրոն": "🍋", "բարև": "👋",
	"ընկեր": "🤝", "ուրախ": "😄", "սեր": "❤️", "ժպիտ": "😊", "խաղ": "🎮", "երգ": "🎵", "պար": "💃", "գույն": "🎨", "կարմիր": "🔴", "կապույտ": "🔵",
	"կանաչ": "🟢", "սպիտակ": "⚪", "դեղին": "🟡", "նարնջագույն": "🟠", "ձմեռ": "❄️", "կակաչ": "🌷", "ամառ": "🏖️", "աշուն": "🍂", "ծիծաղ": "😂", "ընտանիք": "👨‍👩‍👧‍👦"
};
let currentLevel = Number.parseInt(localStorage.getItem("findWordLevel") || "0", 10);
let score = Number.parseInt(localStorage.getItem("findWordScore") || "0", 10);
let draggedTile = null;

function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }

function createTile(text, index) {
	const tile = document.createElement("button");
	tile.className = "tile"; tile.type = "button"; tile.textContent = text; tile.dataset.index = index;
	tile.setAttribute("aria-label", `Տառ ${text}`); tile.addEventListener("pointerdown", startDrag); tile.addEventListener("click", () => placeWithKeyboard(tile));
	return tile;
}

function renderLevel() {
	const level = levels[currentLevel]; levelNumber.textContent = currentLevel + 1; scoreValue.textContent = score; answerSlots.innerHTML = ""; letterBank.innerHTML = "";
	sticker.textContent = stickers[level.word] || "✨";
	stickerCard.setAttribute("aria-label", `Սթիքեր՝ ${level.word}`);
	message.textContent = "Քաշիր տառերը դատարկ վանդակների մեջ։"; message.className = "message"; nextButton.disabled = currentLevel === levels.length - 1;
	level.tiles.forEach((_, index) => { const slot = document.createElement("div"); slot.className = "tile slot"; slot.dataset.slot = index; slot.addEventListener("pointerup", dropTile); slot.addEventListener("pointerenter", () => slot.classList.add("is-over")); slot.addEventListener("pointerleave", () => slot.classList.remove("is-over")); answerSlots.appendChild(slot); });
	shuffle(level.tiles).forEach((text, index) => letterBank.appendChild(createTile(text, index)));
}

function startDrag(event) { if (event.currentTarget.classList.contains("is-placed")) return; draggedTile = event.currentTarget; draggedTile.classList.add("dragging"); }

function dropTile(event) {
	event.currentTarget.classList.remove("is-over"); if (!draggedTile || event.currentTarget.children.length) return;
	event.currentTarget.appendChild(draggedTile); event.currentTarget.classList.add("is-filled"); draggedTile.classList.remove("dragging"); draggedTile.classList.add("is-placed"); draggedTile = null; checkAnswer();
}

function placeWithKeyboard(tile) {
	if (tile.classList.contains("is-placed")) return; const emptySlot = [...answerSlots.children].find((slot) => !slot.children.length); if (!emptySlot) return;
	emptySlot.appendChild(tile); emptySlot.classList.add("is-filled"); tile.classList.add("is-placed"); checkAnswer();
}

function checkAnswer() {
	const current = [...answerSlots.children].map((slot) => slot.textContent).join(""); if (current.length !== levels[currentLevel].word.length) return;
	if (current === levels[currentLevel].word) { message.textContent = "Ճիշտ է։ Հիանալի աշխատանք։"; message.className = "message success"; score += 10; localStorage.setItem("findWordScore", score); scoreValue.textContent = score; }
	else { message.textContent = "Գրեթե։ Փորձիր փոխել տառերի հերթականությունը։"; message.className = "message error"; }
}

function clearCurrentAnswer() { [...answerSlots.children].forEach((slot) => { const tile = slot.firstElementChild; if (!tile) return; tile.classList.remove("is-placed"); letterBank.appendChild(tile); slot.classList.remove("is-filled"); }); message.textContent = "Քաշիր տառերը դատարկ վանդակների մեջ։"; message.className = "message"; }
nextButton.addEventListener("click", () => { if (currentLevel < levels.length - 1) { currentLevel += 1; localStorage.setItem("findWordLevel", currentLevel); renderLevel(); } });
backButton.addEventListener("click", () => { if ([...answerSlots.children].some((slot) => slot.children.length)) clearCurrentAnswer(); else if (currentLevel > 0) { currentLevel -= 1; localStorage.setItem("findWordLevel", currentLevel); renderLevel(); } });
document.addEventListener("pointerup", () => { if (draggedTile) draggedTile.classList.remove("dragging"); draggedTile = null; });
renderLevel();
