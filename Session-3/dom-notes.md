# Session 3 - DOM and Events Overview

## DOM Selection Methods
- `getElementById("id")` → selects one element by ID
- `getElementsByClassName("class")` → returns multiple elements (HTMLCollection)
- `getElementsByTagName("tag")` → returns multiple elements (HTMLCollection)
- `querySelector("selector")` → selects the first matching element (CSS selector)
- `querySelectorAll("selector")` → selects all matching elements (NodeList)


## Event Listeners
- Standard way: `element.addEventListener("event", callback)`
- Common Events practiced:
  - `click`
  - `dblclick`
  - `mouseover` / `mouseout`
  - `mousedown` / `mouseup`


## Updating the DOM
- Change text: `element.textContent = "New text"`
- Toggle styles: `element.classList.toggle("className")`
- Inline styling: `document.body.style.backgroundColor = "color"`


## Example from Practice
- Clicking **Change Title** updates the `<h1>` text and message.
- Clicking **Toggle Highlight** toggles red/bold styling on the title.
- Hovering on **Show URL** shows the current URL, removing the mouse resets message.
- Holding down **Change Body Background** changes body color, releasing resets it.
