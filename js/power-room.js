// Power Room JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Sample character data - in a real application, this would come from a database
  const characters = [
    {
      id: 1,
      name: "Goku",
      show: "Dragon Ball Z",
      universe: "anime",
      image: "character-placeholder.jpg",
      stats: {
        strength: 95,
        speed: 90,
        intelligence: 70,
        durability: 85
      }
    },
    {
      id: 2,
      name: "Superman",
      show: "DC Comics",
      universe: "comics",
      image: "character-placeholder.jpg",
      stats: {
        strength: 100,
        speed: 95,
        intelligence: 80,
        durability: 95
      }
    },
    {
      id: 3,
      name: "Naruto Uzumaki",
      show: "Naruto",
      universe: "anime",
      image: "character-placeholder.jpg",
      stats: {
        strength: 85,
        speed: 80,
        intelligence: 75,
        durability: 90
      }
    },
    {
      id: 4,
      name: "Iron Man",
      show: "Marvel Comics",
      universe: "comics",
      image: "character-placeholder.jpg",
      stats: {
        strength: 80,
        speed: 70,
        intelligence: 100,
        durability: 85
      }
    },
    {
      id: 5,
      name: "Luffy",
      show: "One Piece",
      universe: "anime",
      image: "character-placeholder.jpg",
      stats: {
        strength: 90,
        speed: 85,
        intelligence: 65,
        durability: 95
      }
    },
    {
      id: 6,
      name: "Batman",
      show: "DC Comics",
      universe: "comics",
      image: "character-placeholder.jpg",
      stats: {
        strength: 70,
        speed: 65,
        intelligence: 100,
        durability: 60
      }
    },
    {
      id: 7,
      name: "Saitama",
      show: "One Punch Man",
      universe: "anime",
      image: "character-placeholder.jpg",
      stats: {
        strength: 100,
        speed: 100,
        intelligence: 50,
        durability: 100
      }
    },
    {
      id: 8,
      name: "Spider-Man",
      show: "Marvel Comics",
      universe: "comics",
      image: "character-placeholder.jpg",
      stats: {
        strength: 75,
        speed: 85,
        intelligence: 90,
        durability: 70
      }
    },
    {
      id: 9,
      name: "Jon Snow",
      show: "Game of Thrones",
      universe: "tv",
      image: "character-placeholder.jpg",
      stats: {
        strength: 70,
        speed: 65,
        intelligence: 75,
        durability: 80
      }
    },
    {
      id: 10,
      name: "Kratos",
      show: "God of War",
      universe: "games",
      image: "character-placeholder.jpg",
      stats: {
        strength: 95,
        speed: 80,
        intelligence: 75,
        durability: 90
      }
    }
  ];

  // Current character indices
  let leftCharacterIndex = 0;
  let rightCharacterIndex = 1;

  // DOM elements
  const leftCharacterImg = document.getElementById('left-character-img');
  const leftCharacterName = document.getElementById('left-character-name');
  const leftCharacterShow = document.getElementById('left-character-show');
  const leftPrevButton = document.getElementById('left-prev');
  const leftNextButton = document.getElementById('left-next');
  const leftCharacterSearch = document.getElementById('left-character-search');
  const leftSearchButton = document.getElementById('left-search-button');
  const leftUniverseFilter = document.getElementById('left-universe-filter');
  const leftCharacterList = document.getElementById('left-character-list');

  const rightCharacterImg = document.getElementById('right-character-img');
  const rightCharacterName = document.getElementById('right-character-name');
  const rightCharacterShow = document.getElementById('right-character-show');
  const rightPrevButton = document.getElementById('right-prev');
  const rightNextButton = document.getElementById('right-next');
  const rightCharacterSearch = document.getElementById('right-character-search');
  const rightSearchButton = document.getElementById('right-search-button');
  const rightUniverseFilter = document.getElementById('right-universe-filter');
  const rightCharacterList = document.getElementById('right-character-list');

  // Initialize the display
  updateCharacterDisplay('left', characters[leftCharacterIndex]);
  updateCharacterDisplay('right', characters[rightCharacterIndex]);

  // Populate character lists
  populateCharacterList('left');
  populateCharacterList('right');

  // Event listeners for character navigation
  leftPrevButton.addEventListener('click', function() {
    leftCharacterIndex = (leftCharacterIndex - 1 + characters.length) % characters.length;
    // Avoid showing the same character on both sides
    if (leftCharacterIndex === rightCharacterIndex) {
      leftCharacterIndex = (leftCharacterIndex - 1 + characters.length) % characters.length;
    }
    updateCharacterDisplay('left', characters[leftCharacterIndex]);
  });

  leftNextButton.addEventListener('click', function() {
    leftCharacterIndex = (leftCharacterIndex + 1) % characters.length;
    // Avoid showing the same character on both sides
    if (leftCharacterIndex === rightCharacterIndex) {
      leftCharacterIndex = (leftCharacterIndex + 1) % characters.length;
    }
    updateCharacterDisplay('left', characters[leftCharacterIndex]);
  });

  rightPrevButton.addEventListener('click', function() {
    rightCharacterIndex = (rightCharacterIndex - 1 + characters.length) % characters.length;
    // Avoid showing the same character on both sides
    if (rightCharacterIndex === leftCharacterIndex) {
      rightCharacterIndex = (rightCharacterIndex - 1 + characters.length) % characters.length;
    }
    updateCharacterDisplay('right', characters[rightCharacterIndex]);
  });

  rightNextButton.addEventListener('click', function() {
    rightCharacterIndex = (rightCharacterIndex + 1) % characters.length;
    // Avoid showing the same character on both sides
    if (rightCharacterIndex === leftCharacterIndex) {
      rightCharacterIndex = (rightCharacterIndex + 1) % characters.length;
    }
    updateCharacterDisplay('right', characters[rightCharacterIndex]);
  });

  // Search and filter functionality
  leftSearchButton.addEventListener('click', function() {
    searchCharacters('left');
  });

  rightSearchButton.addEventListener('click', function() {
    searchCharacters('right');
  });

  leftCharacterSearch.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      searchCharacters('left');
    }
  });

  rightCharacterSearch.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      searchCharacters('right');
    }
  });

  leftUniverseFilter.addEventListener('change', function() {
    filterCharacters('left');
  });

  rightUniverseFilter.addEventListener('change', function() {
    filterCharacters('right');
  });

  // Function to update character display
  function updateCharacterDisplay(side, character) {
    const img = side === 'left' ? leftCharacterImg : rightCharacterImg;
    const nameElement = side === 'left' ? leftCharacterName : rightCharacterName;
    const showElement = side === 'left' ? leftCharacterShow : rightCharacterShow;

    img.src = character.image;
    img.alt = character.name;
    nameElement.textContent = character.name;
    showElement.textContent = character.show;

    // Update stats bars
    const panel = document.querySelector(`.${side}-character`);
    updateStatBar(panel, 'strength', character.stats.strength);
    updateStatBar(panel, 'speed', character.stats.speed);
    updateStatBar(panel, 'intelligence', character.stats.intelligence);
    updateStatBar(panel, 'durability', character.stats.durability);
  }

  // Function to update a specific stat bar
  function updateStatBar(panel, statName, value) {
    const statItems = panel.querySelectorAll('.stat-item');
    let statItem;

    // Find the stat item with the matching label
    for (let i = 0; i < statItems.length; i++) {
      const label = statItems[i].querySelector('.stat-label').textContent.toLowerCase();
      if (label.includes(statName.toLowerCase())) {
        statItem = statItems[i];
        break;
      }
    }

    if (statItem) {
      const statFill = statItem.querySelector('.stat-fill');
      const statValue = statItem.querySelector('.stat-value');

      statFill.style.width = `${value}%`;
      statValue.textContent = value;
    }
  }

  // Function to populate character list
  function populateCharacterList(side) {
    const listElement = side === 'left' ? leftCharacterList : rightCharacterList;
    const universeFilter = side === 'left' ? leftUniverseFilter : rightUniverseFilter;
    const currentFilter = universeFilter.value;

    // Clear the list
    listElement.innerHTML = '';

    // Filter characters based on universe if needed
    let filteredCharacters = characters;
    if (currentFilter !== 'all') {
      filteredCharacters = characters.filter(char => char.universe === currentFilter);
    }

    // Add characters to the list
    filteredCharacters.forEach(character => {
      const li = document.createElement('li');
      li.dataset.characterId = character.id;

      const characterItem = document.createElement('div');
      characterItem.className = 'character-item';

      // Create character image
      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      characterItem.appendChild(img);

      // Create character details container
      const details = document.createElement('div');
      details.className = 'character-details';

      // Add character name
      const name = document.createElement('div');
      name.className = 'character-name';
      name.textContent = character.name;
      details.appendChild(name);

      // Add character universe/show
      const universe = document.createElement('div');
      universe.className = 'character-universe';
      universe.textContent = character.show;
      details.appendChild(universe);

      characterItem.appendChild(details);
      li.appendChild(characterItem);

      // Add click event to select character
      li.addEventListener('click', function() {
        const characterId = parseInt(this.dataset.characterId);
        const selectedCharacter = characters.find(char => char.id === characterId);

        if (selectedCharacter) {
          if (side === 'left') {
            leftCharacterIndex = characters.indexOf(selectedCharacter);
            updateCharacterDisplay('left', selectedCharacter);
          } else {
            rightCharacterIndex = characters.indexOf(selectedCharacter);
            updateCharacterDisplay('right', selectedCharacter);
          }

          // Update selected state in list
          const allItems = listElement.querySelectorAll('li');
          allItems.forEach(item => item.classList.remove('selected'));
          this.classList.add('selected');
        }
      });

      listElement.appendChild(li);
    });
  }

  // Function to search characters
  function searchCharacters(side) {
    const searchInput = side === 'left' ? leftCharacterSearch : rightCharacterSearch;
    const listElement = side === 'left' ? leftCharacterList : rightCharacterList;
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
      // If search is empty, just refresh the list with current filter
      populateCharacterList(side);
      return;
    }

    // Clear the list
    listElement.innerHTML = '';

    // Filter characters based on search term
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm) ||
             character.show.toLowerCase().includes(searchTerm);
    });

    if (filteredCharacters.length === 0) {
      // No results found
      const li = document.createElement('li');
      li.textContent = 'No characters found';
      li.style.textAlign = 'center';
      li.style.padding = '1rem';
      listElement.appendChild(li);
      return;
    }

    // Add filtered characters to the list
    filteredCharacters.forEach(character => {
      const li = document.createElement('li');
      li.dataset.characterId = character.id;

      const characterItem = document.createElement('div');
      characterItem.className = 'character-item';

      // Create character image
      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      characterItem.appendChild(img);

      // Create character details container
      const details = document.createElement('div');
      details.className = 'character-details';

      // Add character name
      const name = document.createElement('div');
      name.className = 'character-name';
      name.textContent = character.name;
      details.appendChild(name);

      // Add character universe/show
      const universe = document.createElement('div');
      universe.className = 'character-universe';
      universe.textContent = character.show;
      details.appendChild(universe);

      characterItem.appendChild(details);
      li.appendChild(characterItem);

      // Add click event to select character
      li.addEventListener('click', function() {
        const characterId = parseInt(this.dataset.characterId);
        const selectedCharacter = characters.find(char => char.id === characterId);

        if (selectedCharacter) {
          if (side === 'left') {
            leftCharacterIndex = characters.indexOf(selectedCharacter);
            updateCharacterDisplay('left', selectedCharacter);
          } else {
            rightCharacterIndex = characters.indexOf(selectedCharacter);
            updateCharacterDisplay('right', selectedCharacter);
          }

          // Update selected state in list
          const allItems = listElement.querySelectorAll('li');
          allItems.forEach(item => item.classList.remove('selected'));
          this.classList.add('selected');
        }
      });

      listElement.appendChild(li);
    });
  }

  // Function to filter characters by universe
  function filterCharacters(side) {
    populateCharacterList(side);
  }

  // Handle responsive design
  function handleResponsiveLayout() {
    const container = document.querySelector('.power-comparison-container');
    const vsDivider = document.querySelector('.vs-divider');

    if (window.innerWidth <= 768) {
      // Mobile layout
      container.classList.add('mobile-layout');
      vsDivider.innerHTML = '<span>VS</span>';
    } else {
      // Desktop layout
      container.classList.remove('mobile-layout');
      vsDivider.innerHTML = '<span>VS</span>';
    }
  }

  // Initial call and event listener for resize
  handleResponsiveLayout();
  window.addEventListener('resize', handleResponsiveLayout);
});
