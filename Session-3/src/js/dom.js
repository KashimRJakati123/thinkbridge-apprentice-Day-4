// --- DOM Selection Methods ---
const title = document.getElementById("main-title"); // by ID
const paragraphs = document.getElementsByClassName("info"); // by class
const allParas = document.getElementsByTagName("p"); // by tag
const changeTitleBtn = document.querySelector("#btn-change-title"); // querySelector
const toggleClassBtn = document.querySelector("#btn-toggle-class");
const showUrlBtn = document.querySelector("#btn-show-url");
const bodyBgBtn = document.querySelector("#btn-body-bg");
const message = document.querySelector("#message");
const allButtons = document.querySelectorAll("button"); // querySelectorAll

console.log("Paragraphs by className:", paragraphs);
console.log("All paragraphs by tagName:", allParas);
console.log("All buttons by querySelectorAll:", allButtons);

// --- Event Listeners ---
// 1. Click event
changeTitleBtn.addEventListener("click", () => {
  title.textContent = "Title Changed with JS!";
  message.textContent = "You clicked Change Title button";
});

// 2. Double click event
toggleClassBtn.addEventListener("click", () => {
  title.classList.toggle("highlight");
  message.textContent = title.classList.contains("highlight")
    ? "Highlight ON"
    : "Highlight OFF";
});

// 3. Mouseover / Mouseout
showUrlBtn.addEventListener("mouseover", () => {
  message.textContent = `Current URL is: ${document.URL}`;
});
showUrlBtn.addEventListener("mouseout", () => {
  message.textContent = "Mouse left the Show URL button";
});

// 4. Mouse down / up
bodyBgBtn.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "lightblue";
  message.textContent = "Mouse button pressed on Change Background";
});
bodyBgBtn.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
  message.textContent = "Mouse button released on Change Background";
});
