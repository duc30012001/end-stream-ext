function setIcon(isAuto) {
  if (Boolean(isAuto)) {
    setActiveIcon();
  } else {
    setInActiveIcon();
  }
}

function setInActiveIcon() {
  chrome.action.setIcon({
    path: {
      16: "images/inactive/icon16.png",
      64: "images/inactive/icon64.png",
      128: "images/inactive/icon128.png",
    },
  });
}

function setActiveIcon() {
  chrome.action.setIcon({
    path: {
      16: "images/active/icon16.png",
      64: "images/active/icon64.png",
      128: "images/active/icon128.png",
    },
  });
}

export { setIcon };
