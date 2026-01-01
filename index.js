const webCards = document.querySelectorAll('.web-card');
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click',()=>{
  
  const searchText = searchBar.value.toLowerCase();

  webCards.forEach((a)=>{
    const cardAnchor = a.querySelector('a');
    const anchorText = cardAnchor.textContent.toLowerCase();

    if(anchorText.includes(searchText)){
      a.style.display = 'flex';
      
    }

    else{
      a.style.display = 'none' ;
    }
    
    console.log(cardAnchor);
    console.log(anchorText);
  })
  
  




console.log(searchText);


})