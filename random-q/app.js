const quotes = [
    {
    quote: 'So many books, so little time.',
    author: '― Frank Zappa'
},
    {
    quote: 'A room without books is like a body without a soul.',
    author: '― Marcus Tullius Cicero'
},
{
    quote: 'You only live once, but if you do it right, once is enough.',
    author: '― Mae West'
},
{
    quote: 'Be the change that you wish to see in the world.',
    author: '― Mahatma Gandhi'
},
{
    quote: "You only live once, but if you do it right, once is enough.",
    author: '― Mae West'
},
{
    quote: 'A friend is someone who knows all about you and still loves you.',
    author: '― Elbert Hubbard'
}
];

const button = document.getElementById('button');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const quoteIcon = document.createElement('i');


button.addEventListener('click', function() {

    let randomQ = Math.floor(Math.random()*quotes.length);
    h1.textContent = quotes[randomQ].quote;
    h1.animate([
        // keyframes
        { transform: 'translateY(-250px)' },
        { transform: 'translateY(0)' }
      ], {
        // timing options
        duration: 2000,
        
      });
    h3.textContent = quotes[randomQ].author;
    h3.animate([
        // keyframes
        { transform: 'translateX(100px)' },
        { transform: 'translateX(0)' }
      ], {
        // timing options
        duration: 2000,
        
      });
    
});

