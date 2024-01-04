// ===================================== CONSTANTS ===============================================
// thời gian lặp lại check cảnh báo bản quyền (millisecond)
const TIME_REPEAT_CHECK_WARNING = 10000;

// id element youtube
const DETAIL_ID = "detail";
const END_STREAM_ID = "end-stream-button";
const CONFIRM_BUTTON_CLASS = "ytcp-confirmation-dialog";

// text button xác nhận kết thúc stream
const CONFIRM_BUTTON_MESSAGE = ["end", "kết thúc"];

// message cảnh báo bản quyền
const WARNING_MESSAGE = [
  "detected video in your stream belonging to someone else",
  "chúng tôi phát hiện video trong sự kiện phát trực tiếp của bạn thuộc về người khác",
];
// ================================================================================================

chrome.storage.onChanged.addListener((changes) => {
  const isEnableAutoEndStream = changes.autoEnd.newValue;
  if (isEnableAutoEndStream) {
    enableAutoEndStream();
  } else {
    window.location.reload();
  }
});

async function onPageLoaded() {
  const { autoEnd } = await chrome.storage.local.get();
  if (autoEnd) {
    enableAutoEndStream();
  }
}

function endStream() {
  console.log("running");
  const detail = document.getElementById(DETAIL_ID);
  const detailContent = detail?.innerHTML ?? "";
  if (checkIsWarningCopyright(detailContent)) {
    const endStreamButton = document.getElementById(END_STREAM_ID);
    endStreamButton?.click();

    const listConfirmButton = getListConfirmButton();

    Array.from(listConfirmButton).forEach((item) => {
      const elementContent = item.innerHTML;
      if (checkIsConfirmEndStreamButton(elementContent)) {
        item.click();
      }
    });
  }
}

function checkIsConfirmEndStreamButton(message) {
  return CONFIRM_BUTTON_MESSAGE.some((item) =>
    message.toLowerCase().includes(item.toLowerCase())
  );
}

function checkIsWarningCopyright(message) {
  return WARNING_MESSAGE.some((item) =>
    message.toLowerCase().includes(item.toLowerCase())
  );
}

function getListConfirmButton() {
  return document.getElementsByClassName(CONFIRM_BUTTON_CLASS);
}

function enableAutoEndStream() {
  setInterval(endStream, TIME_REPEAT_CHECK_WARNING);
}

onPageLoaded();
