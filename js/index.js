const jokeContent = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const getJoke = () => {
  jokeContent.classList.remove("fade");
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.setup) {
        jokeContent.textContent = `${data.setup} ... ${data.delivery}`;
        jokeContent.classList.add("fade");
      } else {
        jokeContent.textContent = data.joke;
        jokeContent.classList.add("fade");
      }
    })
}

btn.addEventListener("click", getJoke);

getJoke();