const CHECKBOX_ID = "auto-end-stream";

let myInterval = null;

let checkbox = document.getElementById(CHECKBOX_ID);

chrome.storage.local.get(["autoEnd", "tabId"], async ({ autoEnd, tabId }) => {
  const currentTabId = await getCurrentTabId();

  if (currentTabId === tabId) {
    checkbox.checked = Boolean(autoEnd);
  }

  chrome.scripting.executeScript({
    target: { tabId },
    function: onClickCheckbox,
  });
});

checkbox.addEventListener("change", async (e) => {
  const isChecked = e.target.checked;

  const tabId = await getCurrentTabId();

  chrome.storage.local.set({ autoEnd: isChecked, tabId });

  chrome.scripting.executeScript({
    target: { tabId },
    function: onClickCheckbox,
  });
});

async function getCurrentTabId() {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  return tab.id;
}

function onClickCheckbox() {
  const TIME_LOOP = 2000;

  chrome.storage.local.get("autoEnd", ({ autoEnd }) => {
    if (autoEnd) {
      myInterval = setInterval(endStream, TIME_LOOP);
    } else {
      clearInterval(myInterval);
    }
  });

  function endStream() {
    const DETAIL_ID = "detail";
    const END_STREAM_ID = "end-stream-button";
    const CONFIRM_BUTTON_CLASS = "ytcp-confirmation-dialog";
    const CONFIRM_BUTTON_MESSAGE_EN = "end";
    const CONFIRM_BUTTON_MESSAGE_VI = "kết thúc";
    const WARNING_MESSAGE_EN =
      "we've detected video in your stream belonging to someone else";
    const WARNING_MESSAGE_VI =
      "chúng tôi phát hiện video trong sự kiện phát trực tiếp của bạn thuộc về người khác";

    const detail = document.getElementById(DETAIL_ID);
    console.log("detail:", detail);
    const detailContent = detail?.innerHTML?.toLowerCase() ?? "";
    if (
      detailContent.includes(WARNING_MESSAGE_EN) ||
      detailContent.includes(WARNING_MESSAGE_VI)
    ) {
      const endStreamButton = document.getElementById(END_STREAM_ID);
      endStreamButton?.click();

      Array.from(document.getElementsByClassName(CONFIRM_BUTTON_CLASS)).forEach(
        (item) => {
          const elementContent = item.innerHTML.toLocaleLowerCase();
          if (
            elementContent.includes(CONFIRM_BUTTON_MESSAGE_EN) ||
            elementContent.includes(CONFIRM_BUTTON_MESSAGE_VI)
          ) {
            item.click();
          }
        }
      );
    }
  }
}
