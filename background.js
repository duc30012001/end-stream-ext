import { setIcon } from "./setIcon.js";

chrome.runtime.onInstalled.addListener(async () => {
  const { autoEnd } = await chrome.storage.local.get();
  setIcon(autoEnd);
});

chrome.tabs.onUpdated.addListener(async () => {
  const { autoEnd } = await chrome.storage.local.get();
  setIcon(autoEnd);
});
