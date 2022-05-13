window.addEventListener("DOMContentLoaded", function() {
  let ratingForm = document.querySelector("#rating-form");
  ratingForm.addEventListener("submit", () => {
      event.preventDefault();
      let ratingDisplay = document.querySelector("#user-rating-display");
      let ratings =  ratingForm.elements["rating"]; 
      let thankYouCard = document.querySelector(".card-thank-you");
      let card = document.querySelector(".card");

      for (let i = 0; i < ratings.length; i++) {
          if (ratings[i].checked){
              card.style.display = "none";
              ratingDisplay.textContent = ratings[i].value;
              thankYouCard.style.display = "block";
              break;
          }
      }
      event.target.reset();
  });
});
