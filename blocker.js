(function () {
  document.querySelector("#ultimate").width = "100%";
  const adImages = document.querySelectorAll(
    'img[src*="static1.bytro.com/fileadmin/templates"]'
  );
  adImages.parentElement.style.display = "none";
  document.querySelector("#inGameAdsContainer").style.display = "none";
  document.querySelector("#mapContainer canvas").style.width = "100%";
})();
