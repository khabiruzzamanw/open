

// // Focus search on '/' key
// document.addEventListener('keydown', e => {
//   if (e.key === '/' && document.activeElement !== searchBar) {
//     e.preventDefault();
//     searchBar.focus();
//   }
// });







theClock();
setInterval(theClock,5000) ;

const search = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");

search.addEventListener("input", searching);

search.addEventListener("keydown", (keyButton) => {
  if (keyButton.key === "Enter") {
    searching();
  }
});

searchButton.addEventListener("click", searching);

function searching() {
  const cardGrid = document.querySelectorAll(".cardGrid");
  const card = document.querySelectorAll(".cardGrid a");

  cardGrid.forEach((grid) => {
    grid.style.display = "flex";
  })

  const searchedText = search.value.trim().toLowerCase();
  // console log 
  // console.log(searchedText);

  card.forEach((a) => {
    const aName = a.getAttribute("data-name").toLowerCase();

    if (aName.includes(searchedText) || aName === searchedText) {
      a.style.display = "flex";
    }
    else {
      a.style.display = "none";
    }
  });

  cardGrid.forEach((grid) => {

    if ([...grid.querySelectorAll("a")].every((a) => {
      // console log 
      // console.log(a);

      return a.style.display === 'none';
    })) {
      grid.style.display = 'none';
    } else {
      grid.style.display = 'flex'
    }

  });
}


function theClock() {
  const clockDigit = document.querySelector("#clockDigit");
  const clock = document.querySelector("#clock");
  const exacttime = new Date();

  const hours = exacttime.getHours();
  const minutes = exacttime.getMinutes();
  // console log 
  console.log(hours, minutes);

  clockDigit.textContent = `${hours}.${minutes}`

}
