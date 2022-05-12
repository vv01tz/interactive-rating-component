window.addEventListener("DOMContentLoaded", function() {
  let ratingForm = document.querySelector("#rating-form");
  ratingForm.addEventListener("submit", () => {
      event.preventDefault();
      let ratingDisplay = document.querySelector("#user-rating-display");
      let ratings =  ratingForm.elements["rating"]; 

      for (let i = 0; i < ratings.length; i++) {
          if (ratings[i].checked){
              ratingDisplay.textContent = ratings[i].value;
              break;
          }
      }
      event.target.reset();
  });
});
