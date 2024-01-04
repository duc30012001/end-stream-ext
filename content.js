const TIME_LOOP = 2000;
const DETAIL_ID = "detail";
const END_STREAM_ID = "end-stream-button";
const CONFIRM_BUTTON_CLASS = "ytcp-confirmation-dialog";
const CONFIRM_BUTTON_MESSAGE_EN = "end";
const CONFIRM_BUTTON_MESSAGE_VI = "kết thúc";
const WARNING_MESSAGE_EN =
  "we've detected video in your stream belonging to someone else";
const WARNING_MESSAGE_VI =
  "chúng tôi phát hiện video trong sự kiện phát trực tiếp của bạn thuộc về người khác";

let enableAutoEndStream = false;

chrome.storage.onChanged.addListener((changes) => {
  enableAutoEndStream = changes.autoEnd.newValue;
  if (enableAutoEndStream) {
    setInterval(endStream, TIME_LOOP);
  } else {
    window.location.reload();
  }
});

function endStream() {
  console.log("running");
  const detail = document.getElementById(DETAIL_ID);
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

async function onPageLoaded() {
  const { autoEnd } = await chrome.storage.local.get();
  if (autoEnd) {
    setInterval(endStream, TIME_LOOP);
  }
}

onPageLoaded();
