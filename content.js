import {
  DETAIL_ID,
  END_STREAM_ID,
  CONFIRM_BUTTON_CLASS,
  WARNING_MESSAGE,
  CONFIRM_BUTTON_MESSAGE,
  TIME_REPEAT_CHECK_WARNING,
} from "./config.js";

const checkMessageIncludesItem = (message, items) => {
  const lowercasedMessage = message.toLowerCase();
  return items.some((item) => lowercasedMessage.includes(item.toLowerCase()));
};

const checkIsConfirmEndStreamButton = (message) =>
  checkMessageIncludesItem(message, CONFIRM_BUTTON_MESSAGE);

const checkIsWarningCopyright = (message) =>
  checkMessageIncludesItem(message, WARNING_MESSAGE);

const getListConfirmButton = () =>
  document.getElementsByClassName(CONFIRM_BUTTON_CLASS);

const endStream = () => {
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
};

const enableAutoEndStream = () =>
  setInterval(endStream, TIME_REPEAT_CHECK_WARNING);

chrome.storage.onChanged.addListener((changes) => {
  const isEnableAutoEndStream = changes.autoEnd.newValue;
  if (isEnableAutoEndStream) {
    enableAutoEndStream();
  } else {
    window.location.reload();
  }
});

const onPageLoaded = async () => {
  const { autoEnd } = await chrome.storage.local.get();
  if (autoEnd) {
    enableAutoEndStream();
  }
};

onPageLoaded();
