import { setIcon } from "./setIcon.js";

chrome.runtime.onInstalled.addListener(loadIcon);

chrome.tabs.onUpdated.addListener(loadIcon);

async function loadIcon() {
  const { autoEnd } = await chrome.storage.local.get();
  setIcon(autoEnd);
}
