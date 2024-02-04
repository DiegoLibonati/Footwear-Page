# Footwear-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about footwear, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/37`](https://www.diegolibonati.com.ar/#/project/37)

## Video

https://github.com/DiegoLibonati/Footwear-Page/assets/99032604/dcd4926e-04ae-4846-83f8-0c952dc3acb5

## Documentation

The `changeBg()` function is in charge of changing the background color depending on the image displayed on the screen:

```
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
```

The `showNextPage()` function is in charge of adding one more to the counter, if this counter reaches the maximum it will return to 0. Basically it will be executed when the next button is touched to see the next Slide:

```
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
```

The `showNextPage()` function is in charge of subtracting one from the counter, if this counter reaches the minimop it will go to the maximum value. Basically it will be executed when the prev button is touched to see the previous Slide:

```
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
```
