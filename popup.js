import { setIcon } from "./setIcon.js";

const CHECKBOX_ID = "auto-end-stream";

const checkbox = document.getElementById(CHECKBOX_ID);

chrome.storage.local.get(["autoEnd"], ({ autoEnd }) => {
  const checked = autoEnd;
  checkbox.checked = checked;
});

checkbox.addEventListener("change", async (e) => {
  const checked = e.target.checked;
  setIcon(checked);
  chrome.storage.local.set({ autoEnd: checked });
});
