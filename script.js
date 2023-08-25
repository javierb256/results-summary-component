let details;
const colors = ["reaction", "memory", "verbal", "visual"];
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    let temp = document.querySelector("#summary-breakdown");
    let skills = "";
    let index = 0;
    for (skill of data) {
      skills += `
                <div class="breakdown ${colors[index]}">
                <p class="image-title"><img src="${skill.icon}" alt="${skill.altText}"/>${skill.category}</p>
                <p class="your-score">${skill.score} <span class="total-score">/ 100</span></p>
                </div>
            `;
      index++;
    }
    temp.innerHTML = skills;
  });
