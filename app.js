const jokesContainer = document.getElementById('jokes');
const btn = document.getElementById('btn');

const getJokes = async () => {
  jokesContainer.classList.remove('fade');
  const URL =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

  const data = await fetch(URL);
  const respone = await data.json();

  jokesContainer.classList.add('fade');
  jokesContainer.innerText = respone.joke;
};

btn.addEventListener('click', getJokes);
