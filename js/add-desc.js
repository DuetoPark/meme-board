const description = document.querySelectorAll('.desc');

description.forEach((desc) => {
  const key = desc.parentElement.dataset.key;
  const audio = document.querySelector(`audio[data-key='${key}']`);
  const title = audio.dataset.title;
  const reference = audio.dataset.reference;

  desc.textContent = `${title}, ${reference}`;
});
