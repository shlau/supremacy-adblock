// ==UserScript==
// @name Supremacy-adblock
// @namespace https://raw.githubusercontent.com/shlau/supremacy-adblock/main/blocker.js
// @match            *://www.supremacy1914.com/*
// @version          1.0
// @noframes
// @grant    GM_getValue
// @grant    GM_setValue
// @grant    GM_addStyle
// ==/UserScript==
(function () {
  const hideAds = () => {
    const adImages = document.querySelectorAll(
      'img[src*="static1.bytro.com/fileadmin/templates"]'
    );
    if (adImages && adImages.length > 0) {
      adImages[0].parentElement.style.display = "none";
    }

    const gameFrame = document.querySelector("#ifm")?.contentWindow.document;
    if (gameFrame) {
      const gameContainer = gameFrame.querySelector("#ultimate");
      if (gameContainer) {
        gameContainer.style.width = "100%";
      }

      const adsContainer = gameFrame.querySelector("#inGameAdsContainer");
      if (adsContainer) {
        adsContainer.style.display = "none";
      }

      const mapContainer = gameFrame.querySelector("#mapContainer canvas");
      if (mapContainer) {
        mapContainer.style.width = "100%";
      }
    }
  };

  window.setInterval(() => hideAds(), 1000);
})();
