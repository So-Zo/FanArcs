// Add this new file to handle search across your site
const searchBar = document.querySelector('#site-search-bar');

const searchContent = {
  anime: ['Naruto', 'One Piece', 'Dragon Ball'],
  manga: ['Berserk', 'One Punch Man', 'Chainsaw Man'],
  // Add more categories
};

searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const results = Object.entries(searchContent)
    .flatMap(([category, items]) => 
      items
        .filter(item => item.toLowerCase().includes(searchTerm))
        .map(item => ({ category, item }))
    );
    
  displaySearchResults(results);
});

function displaySearchResults(results) {
  const resultsContainer = document.querySelector('.search-results');
  resultsContainer.innerHTML = results
    .map(({ category, item }) => 
      `<div class="result-item">
        <span class="category">${category}</span>
        <span class="item">${item}</span>
       </div>`
    )
    .join('');
}