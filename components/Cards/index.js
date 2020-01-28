// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');

const ArticlePromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');

ArticlePromise.then(response => {
    
    

   console.log(response)
   
   response.data.articles.javascript.forEach(headline=>{
       cardContainer.appendChild(card(headline))
       })
     response.data.articles.bootstrap.forEach(headline=>{
       cardContainer.appendChild(card(headline))
        })
    response.data.articles.technology.forEach(headline=>{
        cardContainer.appendChild(card(headline))
         })
        response.data.articles.jquery.forEach(headline=>{
           cardContainer.appendChild(card(headline))
            })
           response.data.articles.node.forEach(headline=>{
             cardContainer.appendChild(card(headline))
              })
 })


function card(url){
    
    let cards = document.createElement('div');
    let headlines = document.createElement('div');
    let authors = document.createElement('div');
    let imgContainer = document.createElement('div');
    let authorsImg = document.createElement('img');
    let authorsName = document.createElement('span');


    cards.classList.add('card');
    headlines.classList.add('headline');
    authors.classList.add('author');
    imgContainer.classList.add('img-container');

    cards.appendChild(headlines);
    cards.appendChild(authors);

    authors.appendChild(imgContainer);
    authors.appendChild(authorsName);

    imgContainer.appendChild(authorsImg);
    
    
    
    
    headlines.textContent = url.headline;
    authorsImg.src = url.authorPhoto;
    authorsName.textContent = url.authorName;

    return cards
}

const card1 = card();
