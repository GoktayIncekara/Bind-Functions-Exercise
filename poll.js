const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javasctipt", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      const message = `Poll results are ${this.answers.join(", ")}`;
      console.log(message);
    }
  },
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults("string");
  },
};

document
  .querySelector(".button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
