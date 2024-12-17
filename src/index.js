function generateBook(event) {
  event.preventDefault();

  let typewriter = new Typewriter("#generate-book", {
    loop: false,
    delay: 50,
    cursor: "",
  });

  typewriter
    .typeString("Here is your generated children's book based on your input!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("This is a placeholder for the actual book content...")
    .start();
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateBook);
