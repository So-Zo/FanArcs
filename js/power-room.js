// Power Room JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Sample character data - in a real application, this would come from a database
  const characters = [
    {
      id: 1,
      name: "Goku",
      show: "Dragon Ball Z",
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
      image: "character-placeholder.jpg",
      stats: {
        strength: 80,
        speed: 70,
        intelligence: 100,
        durability: 85
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
  
  const rightCharacterImg = document.getElementById('right-character-img');
  const rightCharacterName = document.getElementById('right-character-name');
  const rightCharacterShow = document.getElementById('right-character-show');
  const rightPrevButton = document.getElementById('right-prev');
  const rightNextButton = document.getElementById('right-next');
  
  // Initialize the display
  updateCharacterDisplay('left', characters[leftCharacterIndex]);
  updateCharacterDisplay('right', characters[rightCharacterIndex]);
  
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
