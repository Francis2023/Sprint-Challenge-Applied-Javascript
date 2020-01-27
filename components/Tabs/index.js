// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let topics = document.querySelector('.topics');

function tab (url) {
let tab1 = document.createElement('div');
tab1.classList.add('tab');
tab1.textContent = url;
return tab1
}

const tabs = tab();

const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')

axiosPromise.then(response => {
    
    console.log(response)
   
    response.data.topics.forEach(url => {
       const newTopic = tab(url)
       tabs.appendChild(newTopic)
    })
})


topics.appendChild(tabs);
