/**
 * Power Room JavaScript
 * This file handles the character comparison functionality for the Power Room page
 */

document.addEventListener('DOMContentLoaded', function() {
  // Sample character data (in a real app, this would come from a database)
  const characterData = [
    {
      id: 1,
      name: 'Goku',
      show: 'Dragon Ball Z',
      universe: 'anime',
      image: 'character-placeholder.jpg',
      stats: {
        strength: 95,
        speed: 90,
        intelligence: 70,
        durability: 85
      }
    },
    {
      id: 2,
      name: 'Superman',
      show: 'DC Comics',
      universe: 'comics',
      image: 'character-placeholder.jpg',
      stats: {
        strength: 100,
        speed: 95,
        intelligence: 80,
        durability: 95
      }
    },
    {
      id: 3,
      name: 'Naruto Uzumaki',
      show: 'Naruto',
      universe: 'anime',
      image: 'character-placeholder.jpg',
      stats: {
        strength: 85,
        speed: 80,
        intelligence: 75,
        durability: 90
      }
    },
    {
      id: 4,
      name: 'Batman',
      show: 'DC Comics',
      universe: 'comics',
      image: 'character-placeholder.jpg',
      stats: {
        strength: 70,
        speed: 65,
        intelligence: 100,
        durability: 60
      }
    },
    {
      id: 5,
      name: 'Monkey D. Luffy',
      show: 'One Piece',
      universe: 'anime',
      image: 'character-placeholder.jpg',
      stats: {
        strength: 90,
        speed: 75,
        intelligence: 60,
        durability: 95
      }
    }
  ];

  // DOM elements
  const leftCharacterList = document.getElementById('left-character-list');
  const rightCharacterList = document.getElementById('right-character-list');
  const leftCharacterSearch = document.getElementById('left-character-search');
  const rightCharacterSearch = document.getElementById('right-character-search');
  const leftSearchButton = document.getElementById('left-search-button');
  const rightSearchButton = document.getElementById('right-search-button');
  const leftUniverseFilter = document.getElementById('left-universe-filter');
  const rightUniverseFilter = document.getElementById('right-universe-filter');
  const leftPrevButton = document.getElementById('left-prev');
  const leftNextButton = document.getElementById('left-next');
  const rightPrevButton = document.getElementById('right-prev');
  const rightNextButton = document.getElementById('right-next');

  // Current selected characters
  let leftSelectedCharacter = null;
  let rightSelectedCharacter = null;
  
  // Current filtered character lists
  let leftFilteredCharacters = [...characterData];
  let rightFilteredCharacters = [...characterData];

  // Initialize character lists
  populateCharacterList(leftCharacterList, characterData, 'left');
  populateCharacterList(rightCharacterList, characterData, 'right');

  // Set default selected characters
  selectCharacter(characterData[0], 'left');
  selectCharacter(characterData[1], 'right');

  // Event listeners for search
  leftSearchButton.addEventListener('click', function() {
    filterCharacters(leftCharacterSearch.value, leftUniverseFilter.value, 'left');
  });

  rightSearchButton.addEventListener('click', function() {
    filterCharacters(rightCharacterSearch.value, rightUniverseFilter.value, 'right');
  });

  leftCharacterSearch.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      filterCharacters(leftCharacterSearch.value, leftUniverseFilter.value, 'left');
    }
  });

  rightCharacterSearch.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      filterCharacters(rightCharacterSearch.value, rightUniverseFilter.value, 'right');
    }
  });

  // Event listeners for universe filters
  leftUniverseFilter.addEventListener('change', function() {
    filterCharacters(leftCharacterSearch.value, leftUniverseFilter.value, 'left');
  });

  rightUniverseFilter.addEventListener('change', function() {
    filterCharacters(rightCharacterSearch.value, rightUniverseFilter.value, 'right');
  });

  // Event listeners for navigation buttons
  leftPrevButton.addEventListener('click', function() {
    navigateCharacters('prev', 'left');
  });

  leftNextButton.addEventListener('click', function() {
    navigateCharacters('next', 'left');
  });

  rightPrevButton.addEventListener('click', function() {
    navigateCharacters('prev', 'right');
  });

  rightNextButton.addEventListener('click', function() {
    navigateCharacters('next', 'right');
  });

  // Function to populate character list
  function populateCharacterList(listElement, characters, side) {
    listElement.innerHTML = '';
    
    if (characters.length === 0) {
      const noResults = document.createElement('li');
      noResults.textContent = 'No characters found';
      listElement.appendChild(noResults);
      return;
    }
    
    characters.forEach(character => {
      const listItem = document.createElement('li');
      listItem.setAttribute('role', 'option');
      listItem.setAttribute('aria-selected', 'false');
      
      const characterItem = document.createElement('div');
      characterItem.className = 'character-item';
      
      // Character image
      const characterImg = document.createElement('img');
      characterImg.src = character.image;
      characterImg.alt = character.name;
      characterItem.appendChild(characterImg);
      
      // Character details
      const characterDetails = document.createElement('div');
      characterDetails.className = 'character-details';
      
      const characterName = document.createElement('div');
      characterName.className = 'character-name';
      characterName.textContent = character.name;
      characterDetails.appendChild(characterName);
      
      const characterUniverse = document.createElement('div');
      characterUniverse.className = 'character-universe';
      characterUniverse.textContent = character.show + ' (' + character.universe + ')';
      characterDetails.appendChild(characterUniverse);
      
      characterItem.appendChild(characterDetails);
      listItem.appendChild(characterItem);
      
      // Add click event
      listItem.addEventListener('click', function() {
        selectCharacter(character, side);
      });
      
      listElement.appendChild(listItem);
    });
  }

  // Function to select a character
  function selectCharacter(character, side) {
    if (side === 'left') {
      leftSelectedCharacter = character;
      
      // Update UI
      document.getElementById('left-character-name').textContent = character.name;
      document.getElementById('left-character-show').textContent = character.show;
      document.getElementById('left-character-img').src = character.image;
      document.getElementById('left-character-img').alt = character.name;
      
      // Update stats
      updateStats(character.stats, 'left');
      
      // Update selected state in list
      updateSelectedState(leftCharacterList, character.id);
    } else {
      rightSelectedCharacter = character;
      
      // Update UI
      document.getElementById('right-character-name').textContent = character.name;
      document.getElementById('right-character-show').textContent = character.show;
      document.getElementById('right-character-img').src = character.image;
      document.getElementById('right-character-img').alt = character.name;
      
      // Update stats
      updateStats(character.stats, 'right');
      
      // Update selected state in list
      updateSelectedState(rightCharacterList, character.id);
    }
  }

  // Function to update stats display
  function updateStats(stats, side) {
    const statItems = document.querySelectorAll(`.${side}-character .stat-item`);
    
    statItems.forEach(item => {
      const statName = item.querySelector('.stat-label').textContent.toLowerCase().replace(':', '');
      const statValue = stats[statName];
      
      if (statValue !== undefined) {
        item.querySelector('.stat-fill').style.width = `${statValue}%`;
        item.querySelector('.stat-value').textContent = statValue;
      }
    });
  }

  // Function to update selected state in list
  function updateSelectedState(listElement, selectedId) {
    const items = listElement.querySelectorAll('li');
    
    items.forEach(item => {
      item.classList.remove('selected');
      item.setAttribute('aria-selected', 'false');
    });
    
    const selectedItem = Array.from(items).find(item => {
      const characterName = item.querySelector('.character-name');
      if (!characterName) return false;
      
      const character = characterData.find(c => c.name === characterName.textContent);
      return character && character.id === selectedId;
    });
    
    if (selectedItem) {
      selectedItem.classList.add('selected');
      selectedItem.setAttribute('aria-selected', 'true');
    }
  }

  // Function to filter characters
  function filterCharacters(searchTerm, universe, side) {
    searchTerm = searchTerm.toLowerCase();
    
    const filteredCharacters = characterData.filter(character => {
      const matchesSearch = searchTerm === '' || 
                           character.name.toLowerCase().includes(searchTerm) || 
                           character.show.toLowerCase().includes(searchTerm);
      
      const matchesUniverse = universe === 'all' || character.universe === universe;
      
      return matchesSearch && matchesUniverse;
    });
    
    if (side === 'left') {
      leftFilteredCharacters = filteredCharacters;
      populateCharacterList(leftCharacterList, filteredCharacters, 'left');
      
      // Reselect the character if it's still in the filtered list
      if (leftSelectedCharacter && filteredCharacters.some(c => c.id === leftSelectedCharacter.id)) {
        updateSelectedState(leftCharacterList, leftSelectedCharacter.id);
      }
    } else {
      rightFilteredCharacters = filteredCharacters;
      populateCharacterList(rightCharacterList, filteredCharacters, 'right');
      
      // Reselect the character if it's still in the filtered list
      if (rightSelectedCharacter && filteredCharacters.some(c => c.id === rightSelectedCharacter.id)) {
        updateSelectedState(rightCharacterList, rightSelectedCharacter.id);
      }
    }
  }

  // Function to navigate through characters
  function navigateCharacters(direction, side) {
    const characters = side === 'left' ? leftFilteredCharacters : rightFilteredCharacters;
    const selectedCharacter = side === 'left' ? leftSelectedCharacter : rightSelectedCharacter;
    
    if (!selectedCharacter || characters.length === 0) return;
    
    const currentIndex = characters.findIndex(c => c.id === selectedCharacter.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % characters.length;
    } else {
      newIndex = (currentIndex - 1 + characters.length) % characters.length;
    }
    
    selectCharacter(characters[newIndex], side);
  }
});
