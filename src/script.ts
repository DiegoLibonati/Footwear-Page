import {
  btnShowNext,
  btnShowPrev,
  sectionContainer,
  shoesArray,
} from "./elements";

let countShoe: number = 0;

const changeBg = (): void => {
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

const showNextPage = (): void => {
  if (countShoe >= shoesArray.length - 1) {
    countShoe = 0;

    const shoeShowing = document.querySelector(".show-shoe") as HTMLDivElement;

    Array.from(shoesArray).forEach((s) => {
      const shoe = s as HTMLDivElement;
      shoe.style.transform = "translateX(200%)";
    });

    if (shoeShowing) {
      shoeShowing.classList.remove("show-shoe");
    }
    const shoeToShow = shoesArray[countShoe] as HTMLDivElement;

    shoeToShow.style.transform = "translateX(0%)";
    shoeToShow.classList.add("show-shoe");

    changeBg();
    return;
  }

  countShoe++;

  const shoeToShow = shoesArray[countShoe] as HTMLDivElement;
  const prevShoe = shoesArray[countShoe - 1] as HTMLDivElement;

  const shoeShowing = document.querySelector(".show-shoe") as HTMLDivElement;

  if (shoeShowing) {
    shoeShowing.classList.remove("show-shoe");
  }

  shoeToShow.style.transform = "translateX(0%)";
  shoeToShow.classList.add("show-shoe");
  prevShoe.style.transform = "translateX(-200%)";
  changeBg();
  return;
};

const showPrevPage = (): void => {
  if (countShoe <= 0) {
    countShoe = shoesArray.length - 1;

    const shoeShowing = document.querySelector(".show-shoe") as HTMLDivElement;

    Array.from(shoesArray).forEach((s) => {
      const shoe = s as HTMLDivElement;
      shoe.style.transform = "translateX(-200%)";
    });

    if (shoeShowing) {
      shoeShowing.classList.remove("show-shoe");
    }
    const shoeToShow = shoesArray[countShoe] as HTMLDivElement;

    shoeToShow.style.transform = "translateX(0%)";
    shoeToShow.classList.add("show-shoe");

    changeBg();
    return;
  }


  countShoe--;

  const shoeToShow = shoesArray[countShoe] as HTMLDivElement;
  const nextShoe = shoesArray[countShoe + 1] as HTMLDivElement;

  const shoeShowing = document.querySelector(".show-shoe") as HTMLDivElement;

  if (shoeShowing) {
    shoeShowing.classList.remove("show-shoe");
  }

  shoeToShow.classList.add("show-shoe");
  shoeToShow.style.transform = "translateX(0%)";
  nextShoe.style.transform = "translateX(200%)";;
  changeBg();
  return;
};

btnShowNext.addEventListener("click", showNextPage);

btnShowPrev.addEventListener("click", showPrevPage);
