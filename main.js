const quotes = [
    {quote:"code never lies , comments sometimes do",
    author:"Ron Jefferies"},
    {
        quote:
        "Programmers are constantly making things happen",
        author: "david hanson"
    },
    {
        quote:
        "code is like humpour",
        author: "Cory House"
    },
{
    quote:
        "comments are very useful for others and us",
        author: "This is me"
}
];

const btn = document.querySelector(".generate");

btn.addEventListener('click',()=>{
let random = Math.floor(Math.random()*quotes.length);
//console.log(random);

document.querySelector(".quote").innerText = quotes[random].quote;
document.querySelector(".author").innerText= quotes[random].author;
})