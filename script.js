function playSound(fruit) {
  const audio = new Audio(`sounds/${fruit}.mp3`);
  audio.play();
}
