const CHECKBOX_ID = "auto-end-stream";

let myInterval = null;

let checkbox = document.getElementById(CHECKBOX_ID);

checkbox.addEventListener("change", async (e) => {
  const isChecked = e.target.checked;
  chrome.storage.sync.set({ autoEnd: isChecked });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onClickCheckbox,
  });
});

function onClickCheckbox() {
  chrome.storage.sync.get("autoEnd", ({ autoEnd }) => {
    if (autoEnd) {
      myInterval = setInterval(endStream, 2000);
    } else {
      clearInterval(myInterval);
    }
  });

  function endStream() {
    const DETAIL_ID = "detail";
    const END_STREAM_ID = "end-stream-button";
    const CONFIRM_BUTTON_CLASS = "ytcp-confirmation-dialog";
    const CONFIRM_BUTTON_MESSAGE_EN = "end";
    const WARNING_MESSAGE_EN =
      "we've detected video in your stream belonging to someone else";

    const detail = document.getElementById(DETAIL_ID);
    console.log("detail:", detail);
    detail.style.backgroundColor = "#000";
    const detailContent = detail.innerHTML.toLowerCase();
    if (detailContent.includes(WARNING_MESSAGE_EN)) {
      const endStreamButton = document.getElementById(END_STREAM_ID);
      endStreamButton?.click();

      Array.from(document.getElementsByClassName(CONFIRM_BUTTON_CLASS)).forEach(
        (item) => {
          const elementContent = item.innerHTML.toLocaleLowerCase();
          if (elementContent.includes(CONFIRM_BUTTON_MESSAGE_EN)) {
            item.click();
            clearInterval(myInterval);
          }
        }
      );
    }
  }
}
