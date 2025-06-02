(function () {
   if (window.location.href !== "https://www.youtube.com/") {
      return;
   }

   const style = document.createElement("style");
   style.textContent = `
      ytd-two-column-browse-results-renderer[page-subtype="home"] {
      display: none !important;
   }
   `;
   document.head.appendChild(style);

   function removeFeed() {
      const feedSection = document.querySelector(
         'ytd-two-column-browse-results-renderer[page-subtype="home"]'
      );
      if (feedSection) {
         feedSection.remove();
      }
   }

   window.addEventListener("load", () => {
      setTimeout(removeFeed, 500);
   });
})();
