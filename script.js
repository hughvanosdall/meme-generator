const form = document.querySelector(".form")
const imageURL = document.querySelector("#urlInput");
const topTextInput = document.querySelector("#topText");
const bottomTextInput = document.querySelector("#bottomText");
const memeList = document.querySelector(".meme-list");
let memeCount = 0;

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  if(!topTextInput.value || !bottomTextInput.value || !imageURL.value){
    alert("Invalid Input!");
    return;
  }else if(memeCount >= 3){
    alert("Please delete or save an existing meme before making a new one!");
    return;
  }else{
    let newMeme = document.createElement("li");
    let newImage = document.createElement("img");
    let newTopText = document.createElement("span");
    let newBottomText = document.createElement("span");

    memeCount++;

    newImage.setAttribute("src", imageURL.value);
    newTopText.innerText = topTextInput.value;
    newBottomText.innerText = bottomTextInput.value;
    newImage.classList.add("img");
    newTopText.classList.add("top-text");
    newBottomText.classList.add("bottom-text");

    newImage.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
          e.target.parentElement.remove();
          memeCount--;
        }
      });

      newMeme.append(newImage);
      newMeme.append(newTopText);
      newMeme.append(newBottomText);
      memeList.append(newMeme);
      form.reset();
    };
});

