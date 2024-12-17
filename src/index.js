function displayBook(responce) {
  book = responce.data.answer;
  console.log(book);

  new Typewriter("#generate-book", {
    strings: book,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateBook(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = `57b366cc3c6f14127edbbo64a0t02b0a`;
  let prompt = `User instructions: Generate a ${instructionsInput.value}`;
  let context = `You are an expert in writing children's books for ages 1-4. you love helping children learn new things and help them develop. You mission is to generate books between 4-12 pages or what the user instructs.  Write in basic html forms with <p> format for each page, and separate each line with a <br />. At the begining of each page include the page number.At the end sign off by <strong> Children's Book Ai. Make sure to follow the user instructions. If the use includes a title use that as the title. If the user doesn't provide a title generate a title between 1-6 words and display the title in a <big> and a <strong>. Please make sure the book finishes with an appropriate end, Make the book have less than 1000 characters`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayBook);
  console.log(`generating`);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateBook);
