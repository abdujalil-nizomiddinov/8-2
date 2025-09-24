const form = document.getElementById("boxForm") as HTMLFormElement;
const output = document.getElementById("output") as HTMLDivElement;
const clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const shape = (document.getElementById("shape") as HTMLSelectElement).value;
  const width =
    parseInt((document.getElementById("boxWidth") as HTMLInputElement).value) ||
    100;
  const height =
    parseInt(
      (document.getElementById("boxHeight") as HTMLInputElement).value
    ) || 100;
  const borderPx = (document.getElementById("borderPx") as HTMLSelectElement)
    .value;
  const borderType = (
    document.getElementById("borderType") as HTMLSelectElement
  ).value;
  const borderColor = (
    document.getElementById("borderColor") as HTMLSelectElement
  ).value;
  const bgColor = (document.getElementById("bgColor") as HTMLSelectElement)
    .value;
  const cursor = (document.getElementById("cursorType") as HTMLSelectElement)
    .value;
  const boxCount =
    parseInt((document.getElementById("boxCount") as HTMLInputElement).value) ||
    1;

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");

    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = bgColor;
    box.style.border =
      borderPx === "0" || borderType === "none"
        ? "none"
        : `${borderPx}px ${borderType} ${borderColor}`;
    box.style.cursor = cursor;
    box.style.display = "inline-block";
    box.style.margin = "10px";
    box.style.transition = "all 0.2s ease";

    if (shape === "circle") {
      box.style.borderRadius = "50%";
    } else {
      box.style.borderRadius = "0";
    }

    output.appendChild(box);
  }
});

clearBtn.addEventListener("click", () => {
  output.innerHTML = "";
  form.reset();
});
