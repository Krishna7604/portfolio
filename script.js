const handleClick = () => {
  const menu = document.querySelector(".menu_items");
  const ham = document.querySelector(".hamburger");
  menu.classList.toggle("open");
  ham.classList.toggle("open");
};
let counter = 1;
const names = [
  "gswds.png",
  "mlfds.png",
  "Accenture job simulation-completion_certificate_page-0001.jpg",
  "completion certificate cyber security skillbuild_page-0001.jpg",
  "Dream_Factory_2023-kodnest-java-fullstack_page-0001.jpg",
  "edunet ai&cloud _page-0001.jpg",
  "THM-QJ8PPJK0T9_page-0001.jpg",
  "Wipro TalentNext  DotNet Full Stack Certification_page-0001.jpg",
];
let prevc = counter - 1;
let nextc = counter + 1;

const previmg = document.querySelector(".perv");
// console.log(prevc);
const mainimg = document.querySelector(".main");
const nextimg = document.querySelector(".next");

previmg.src = `asserts/certificate/${names[prevc]}`;
mainimg.src = `asserts/certificate/${names[counter]}`;
nextimg.src = `asserts/certificate/${names[nextc]}`;

const prev = document.getElementById("prev_btn");
prev.addEventListener("click", (e) => {
  counter = (names.length + (counter - 1)) % names.length;
  prevc = (names.length + (counter - 1)) % names.length;
  nextc = (counter + 1) % names.length;
  previmg.src = `asserts/certificate/${names[prevc]}`;
  mainimg.src = `asserts/certificate/${names[counter]}`;
  nextimg.src = `asserts/certificate/${names[nextc]}`;
});
const next = document.getElementById("next_btn");
next.addEventListener("click", (e) => {
  counter = (names.length + (counter + 1)) % names.length;
  prevc = (names.length + (counter - 1)) % names.length;
  nextc = (counter + 1) % names.length;
  previmg.src = `asserts/certificate/${names[prevc]}`;
  mainimg.src = `asserts/certificate/${names[counter]}`;
  nextimg.src = `asserts/certificate/${names[nextc]}`;
});
setInterval(() => prev.click(), 5000);
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const resp = document.getElementById("responseMessage");
  // Simple validation (you can add more complex validation if needed)
  if (name && email && message) {
    // Here you can add code to send the form data to a server or an email service
    resp.innerText = "Thank you for your message!";
  } else {
    resp.innerText = "Please fill out all fields.";
  }
});
