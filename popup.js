import { setIcon } from "./setIcon.js";

const CHECKBOX_ID = "auto-end-stream";

const checkbox = document.getElementById(CHECKBOX_ID);

chrome.storage.local.get(["autoEnd"], async ({ autoEnd }) => {
  const checked = autoEnd;
  checkbox.checked = checked;
});

checkbox.addEventListener("change", async (e) => {
  const isChecked = e.target.checked;

  // const tabId = await getCurrentTabId();

  setIcon(isChecked);

  // if (isChecked) {
  //   chrome.windows.create({ tabId });
  // }

  chrome.storage.local.set({ autoEnd: isChecked });
});

// async function getCurrentTabId() {
//   const [tab] = await chrome.tabs.query({
//     active: true,
//     currentWindow: true,
//   });

//   return tab.id;
// }
