const shoesArray = document.querySelectorAll(".shoes");
const sectionContainer = document.querySelector(".section_container");
const btnShowNext = document.getElementById("btnShowNext");
const btnShowPrev = document.getElementById("btnShowPrev");

let countShoe = 0;

const changeBg = (countShoe) => {
  if (countShoe === 0) {
    sectionContainer.style.background = "#CD021D";
  } else if (countShoe === 1) {
    sectionContainer.style.background = "#666";
  } else if (countShoe === 2) {
    sectionContainer.style.background = "#ff4500";
  } else if (countShoe === 3) {
    sectionContainer.style.background = "#48e";
  }
};

const showNextPage = (e) => {
  if (countShoe >= shoesArray.length - 1) {
    countShoe = 0;

    for (let i = 0; i < shoesArray.length; i++) {
      shoesArray[i].classList.remove("show-shoe");
      shoesArray[i].style.transform = "translateX(200%)";
    }

    shoesArray[countShoe].style.transform = "translateX(0%)";
    shoesArray[countShoe].classList.add("show-shoe");

    changeBg(countShoe);
  } else {
    countShoe++;

    shoesArray[countShoe].style.transform = "translateX(0%)";

    shoesArray.forEach(function (shoe) {
      for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i] !== shoe) {
          shoe.classList.remove("show-shoe");
        }
      }
    });

    shoesArray[countShoe].classList.add("show-shoe");

    shoesArray[countShoe - 1].style.transform = "translateX(-200%)";

    changeBg(countShoe);
  }
};

const showPrevPage = (e) => {
  if (countShoe <= 0) {
    countShoe = 3;

    for (let i = 0; i < shoesArray.length; i++) {
      shoesArray[i].classList.remove("show-shoe");
      shoesArray[i].style.transform = "translateX(-200%)";
    }

    shoesArray[countShoe].style.transform = "translateX(0%)";
    shoesArray[countShoe].classList.add("show-shoe");

    changeBg(countShoe);
  } else {
    countShoe--;

    shoesArray[countShoe].style.transform = "translateX(0%)";

    shoesArray.forEach(function (shoe) {
      for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i] !== shoe) {
          shoe.classList.remove("show-shoe");
        }
      }
    });

    shoesArray[countShoe].classList.add("show-shoe");

    shoesArray[countShoe + 1].style.transform = "translateX(200%)";

    changeBg(countShoe);
  }
};

btnShowNext.addEventListener("click", showNextPage);

btnShowPrev.addEventListener("click", showPrevPage);
