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

## Description

I made a website about footwear, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/37`](https://www.diegolibonati.com.ar/#/project/37)

## Video

https://user-images.githubusercontent.com/99032604/199616412-1774c6ba-90c5-452e-b2e4-07ee147fe584.mp4

## Documentation

The `changeBg()` function is in charge of changing the background color depending on the image displayed on the screen:

```
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
```

The `showNextPage()` function is in charge of adding one more to the counter, if this counter reaches the maximum it will return to 0. Basically it will be executed when the next button is touched to see the next Slide:

```
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
```

The `showNextPage()` function is in charge of subtracting one from the counter, if this counter reaches the minimop it will go to the maximum value. Basically it will be executed when the prev button is touched to see the previous Slide:

```
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
```
