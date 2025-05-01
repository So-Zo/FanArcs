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
      },
      abilities: [
        'Super Strength',
        'Flight',
        'Energy Projection',
        'Kamehameha',
        'Instant Transmission'
      ],
      timeline: [
        {
          date: 'Origin',
          description: 'Sent to Earth as a baby, raised by Grandpa Gohan'
        },
        {
          date: 'Dragon Ball',
          description: 'Trained under Master Roshi, defeated King Piccolo'
        },
        {
          date: 'Saiyan Saga',
          description: 'Discovered Saiyan heritage, learned Kaio-ken'
        },
        {
          date: 'Namek Saga',
          description: 'First achieved Super Saiyan form against Frieza'
        }
      ],
      world: {
        name: 'Dragon Ball Universe',
        description: 'A universe where martial arts and ki energy manipulation are common. Multiple galaxies exist with various alien races.',
        locations: ['Earth', 'Namek', 'Other World', 'Planet Vegeta'],
        powerSystem: 'Ki energy allows for superhuman abilities, flight, and energy projection. Power levels can be measured numerically.'
      },
      feats: [
        {
          title: 'Defeated Frieza',
          description: 'Defeated Frieza, the emperor of the universe, as a Super Saiyan',
          powerLevel: 'Extreme',
          difficulty: 'High'
        },
        {
          title: 'Mastered Ultra Instinct',
          description: 'Achieved and mastered the godly Ultra Instinct technique',
          powerLevel: 'Godly',
          difficulty: 'Extreme'
        }
      ],
      alternateVersions: [
        {
          id: '1-1',
          name: 'Kid Goku',
          timeline: 'Dragon Ball',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 70,
            speed: 75,
            intelligence: 65,
            durability: 70
          },
          abilities: [
            'Power Pole',
            'Nimbus Cloud',
            'Rock-Paper-Scissors Technique',
            'Kamehameha (Basic)'
          ]
        },
        {
          id: '1-2',
          name: 'Super Saiyan Goku',
          timeline: 'Cell Saga',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 98,
            speed: 95,
            intelligence: 70,
            durability: 90
          },
          abilities: [
            'Super Saiyan Transformation',
            'Instant Transmission',
            'Spirit Bomb',
            'Full-Power Kamehameha'
          ]
        }
      ]
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
      },
      abilities: [
        'Super Strength',
        'Flight',
        'Heat Vision',
        'X-Ray Vision',
        'Freeze Breath'
      ],
      timeline: [
        {
          date: 'Origin',
          description: 'Last son of Krypton, sent to Earth as a baby'
        },
        {
          date: 'Early Years',
          description: 'Raised by the Kents in Smallville, discovered powers gradually'
        },
        {
          date: 'Metropolis',
          description: 'Became Superman, works as Clark Kent at the Daily Planet'
        },
        {
          date: 'Justice League',
          description: 'Founding member of the Justice League'
        }
      ],
      world: {
        name: 'DC Universe',
        description: 'A universe with multiple planets, dimensions, and timelines. Earth is home to many metahumans and alien refugees.',
        locations: ['Metropolis', 'Krypton', 'Fortress of Solitude', 'Phantom Zone'],
        powerSystem: 'Powers come from various sources: alien biology, magic, technology, or mutation. No standardized power measurement.'
      },
      feats: [
        {
          title: 'Moved a Planet',
          description: 'Physically moved a planet out of its orbit',
          powerLevel: 'Cosmic',
          difficulty: 'Extreme'
        },
        {
          title: 'Survived a Supernova',
          description: 'Withstood the direct blast of a supernova explosion',
          powerLevel: 'Cosmic',
          difficulty: 'High'
        }
      ],
      alternateVersions: [
        {
          id: '2-1',
          name: 'Kingdom Come Superman',
          timeline: 'Kingdom Come',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 100,
            speed: 95,
            intelligence: 90,
            durability: 100
          },
          abilities: [
            'Enhanced Super Strength',
            'Tactile Telekinesis',
            'Solar Energy Absorption',
            'Longevity'
          ]
        },
        {
          id: '2-2',
          name: 'Red Son Superman',
          timeline: 'Soviet Union',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 95,
            speed: 90,
            intelligence: 85,
            durability: 90
          },
          abilities: [
            'Super Strength',
            'Flight',
            'Heat Vision',
            'Soviet Leadership'
          ]
        }
      ]
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
      },
      abilities: [
        'Shadow Clone Jutsu',
        'Rasengan',
        'Sage Mode',
        'Nine-Tails Chakra Mode'
      ],
      alternateVersions: [
        {
          id: '3-1',
          name: 'Genin Naruto',
          timeline: 'Original Series',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 60,
            speed: 65,
            intelligence: 50,
            durability: 75
          }
        },
        {
          id: '3-2',
          name: 'Hokage Naruto',
          timeline: 'Boruto Era',
          image: 'character-placeholder.jpg',
          stats: {
            strength: 95,
            speed: 90,
            intelligence: 85,
            durability: 95
          }
        }
      ]
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
  const tabButtons = document.querySelectorAll('.tab-button');
  const comparisonPanels = document.querySelectorAll('.comparison-panel');
  const wikiEditButton = document.getElementById('page-edit-button');
  const sectionEditControls = document.querySelectorAll('.section-edit-control');

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

  // Event listeners for tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');

      // Update active tab button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Update active panel
      comparisonPanels.forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(`${tabId}-panel`).classList.add('active');
    });
  });

  // Wiki edit functionality
  if (wikiEditButton) {
    wikiEditButton.addEventListener('click', function() {
      const editableContent = document.querySelectorAll('.editable-content');

      if (this.classList.contains('editing')) {
        // Save changes
        this.textContent = 'Edit Page';
        this.classList.remove('editing');

        editableContent.forEach(content => {
          content.setAttribute('contenteditable', 'false');
          content.classList.remove('editing');
        });

        // In a real application, this would save the content to the server
        alert('In a real application, your changes would be saved to the database.');
      } else {
        // Enable editing
        this.textContent = 'Save Changes';
        this.classList.add('editing');

        editableContent.forEach(content => {
          content.setAttribute('contenteditable', 'true');
          content.classList.add('editing');
        });
      }
    });
  }

  // Section edit controls
  if (sectionEditControls.length > 0) {
    sectionEditControls.forEach(control => {
      control.addEventListener('click', function(event) {
        event.preventDefault();

        const sectionId = this.getAttribute('data-section');
        const sectionContent = document.getElementById(`${sectionId}-content`);

        if (sectionContent) {
          // Enable editing for just this section
          sectionContent.setAttribute('contenteditable', 'true');
          sectionContent.classList.add('editing');
          sectionContent.focus();

          // Scroll to the section
          sectionContent.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Add a temporary save button
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Section';
          saveButton.className = 'section-save-button';
          saveButton.style.marginTop = '0.5rem';
          saveButton.style.padding = '0.5rem 1rem';
          saveButton.style.backgroundColor = 'var(--fanarc-secondary-color)';
          saveButton.style.color = 'white';
          saveButton.style.border = 'none';
          saveButton.style.borderRadius = 'var(--border-radius-small)';
          saveButton.style.cursor = 'pointer';

          // Insert the save button after the section content
          sectionContent.parentNode.insertBefore(saveButton, sectionContent.nextSibling);

          // Add event listener to the save button
          saveButton.addEventListener('click', function() {
            sectionContent.setAttribute('contenteditable', 'false');
            sectionContent.classList.remove('editing');

            // In a real application, this would save the section content to the server
            alert(`In a real application, changes to the "${sectionId}" section would be saved to the database.`);

            // Remove the save button
            this.remove();
          });
        }
      });
    });
  }

  // Page history functionality is now handled in page-history.js

  // Keyboard shortcut for editing (press 'e')
  document.addEventListener('keydown', function(event) {
    // Check if 'e' key is pressed and not inside an input or textarea
    if (event.key === 'e' &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA' &&
        !document.activeElement.hasAttribute('contenteditable')) {

      // Trigger the wiki edit button if it exists
      if (wikiEditButton && !wikiEditButton.classList.contains('editing')) {
        wikiEditButton.click();
      }
    }
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
      listItem.setAttribute('data-character-id', character.id);

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
      characterName.className = 'character-name-item';
      characterName.textContent = character.name;
      characterDetails.appendChild(characterName);

      const characterUniverse = document.createElement('div');
      characterUniverse.className = 'character-universe';
      characterUniverse.textContent = character.show + ' (' + character.universe + ')';
      characterDetails.appendChild(characterUniverse);

      characterItem.appendChild(characterDetails);

      // Add alternate version toggle button if character has alternate versions
      if (character.alternateVersions && character.alternateVersions.length > 0) {
        const altVersionsToggle = document.createElement('button');
        altVersionsToggle.className = 'alt-versions-toggle';
        altVersionsToggle.setAttribute('aria-label', `Show alternate versions for ${character.name}`);
        altVersionsToggle.setAttribute('title', `Show alternate versions for ${character.name}`);
        altVersionsToggle.innerHTML = '⌛';

        altVersionsToggle.addEventListener('click', function(event) {
          event.stopPropagation();
          toggleAltVersionsPanel(character, side, listItem);
        });

        characterItem.appendChild(altVersionsToggle);
      }

      listItem.appendChild(characterItem);

      // Add click event to select the character
      listItem.addEventListener('click', function() {
        selectCharacter(character, side);
      });

      listElement.appendChild(listItem);
    });
  }

  // Function to toggle alternate versions panel
  function toggleAltVersionsPanel(character, side, listItem) {
    // Remove any existing alt versions panels
    const existingPanels = document.querySelectorAll('.alt-versions-panel');
    existingPanels.forEach(panel => panel.remove());

    // Create new alt versions panel
    const altVersionsPanel = document.createElement('div');
    altVersionsPanel.className = 'alt-versions-panel active';

    const panelTitle = document.createElement('h4');
    panelTitle.textContent = `${character.name}: Alternate Versions & Timelines`;
    altVersionsPanel.appendChild(panelTitle);

    const versionsList = document.createElement('ul');
    versionsList.className = 'alt-versions-list';

    // Add the base character as an option
    const baseVersionItem = document.createElement('li');
    baseVersionItem.className = 'alt-version-item';
    baseVersionItem.setAttribute('data-version-id', character.id);

    const baseVersionImg = document.createElement('img');
    baseVersionImg.src = character.image;
    baseVersionImg.alt = character.name;
    baseVersionItem.appendChild(baseVersionImg);

    const baseVersionDetails = document.createElement('div');
    baseVersionDetails.className = 'alt-version-details';

    const baseVersionName = document.createElement('div');
    baseVersionName.className = 'alt-version-name';
    baseVersionName.textContent = character.name + ' (Base)';
    baseVersionDetails.appendChild(baseVersionName);

    const baseVersionTimeline = document.createElement('div');
    baseVersionTimeline.className = 'alt-version-timeline';
    baseVersionTimeline.textContent = 'Timeline: Current';
    baseVersionDetails.appendChild(baseVersionTimeline);

    baseVersionItem.appendChild(baseVersionDetails);

    baseVersionItem.addEventListener('click', function() {
      selectCharacter(character, side);
      altVersionsPanel.remove();
    });

    versionsList.appendChild(baseVersionItem);

    // Add alternate versions
    character.alternateVersions.forEach(version => {
      const versionItem = document.createElement('li');
      versionItem.className = 'alt-version-item';
      versionItem.setAttribute('data-version-id', version.id);

      const versionImg = document.createElement('img');
      versionImg.src = version.image;
      versionImg.alt = version.name;
      versionItem.appendChild(versionImg);

      const versionDetails = document.createElement('div');
      versionDetails.className = 'alt-version-details';

      const versionName = document.createElement('div');
      versionName.className = 'alt-version-name';
      versionName.textContent = version.name;
      versionDetails.appendChild(versionName);

      const versionTimeline = document.createElement('div');
      versionTimeline.className = 'alt-version-timeline';
      versionTimeline.textContent = 'Timeline: ' + version.timeline;
      versionDetails.appendChild(versionTimeline);

      versionItem.appendChild(versionDetails);

      versionItem.addEventListener('click', function() {
        // Create a merged character object with the base character and the alternate version data
        const mergedCharacter = {
          ...character,
          name: version.name,
          image: version.image,
          stats: version.stats,
          abilities: version.abilities || character.abilities,
          isAlternateVersion: true,
          baseCharacterId: character.id,
          alternateVersionId: version.id
        };

        selectCharacter(mergedCharacter, side);
        altVersionsPanel.remove();
      });

      versionsList.appendChild(versionItem);
    });

    altVersionsPanel.appendChild(versionsList);

    // Position and append the panel
    listItem.appendChild(altVersionsPanel);

    // Close panel when clicking outside
    document.addEventListener('click', function closePanel(e) {
      if (!altVersionsPanel.contains(e.target) && !e.target.classList.contains('alt-versions-toggle')) {
        altVersionsPanel.remove();
        document.removeEventListener('click', closePanel);
      }
    });
  }

  // Function to select a character
  function selectCharacter(character, side) {
    if (side === 'left') {
      leftSelectedCharacter = character;

      // Update UI
      document.getElementById('left-character-img').src = character.image;
      document.getElementById('left-character-img').alt = character.name;
      document.getElementById('left-character-name').textContent = character.name;

      // Update stats
      updateStats(character.stats, 'left');

      // Update abilities
      updateAbilities(character.abilities || [], 'left');

      // Update timeline
      updateTimeline(character.timeline || [], 'left');

      // Update world info
      updateWorldInfo(character.world || {}, 'left');

      // Update feats
      updateFeats(character.feats || [], 'left');

      // Update selected state in list
      updateSelectedState(leftCharacterList, character.id);
    } else {
      rightSelectedCharacter = character;

      // Update UI
      document.getElementById('right-character-img').src = character.image;
      document.getElementById('right-character-img').alt = character.name;
      document.getElementById('right-character-name').textContent = character.name;

      // Update stats
      updateStats(character.stats, 'right');

      // Update abilities
      updateAbilities(character.abilities || [], 'right');

      // Update timeline
      updateTimeline(character.timeline || [], 'right');

      // Update world info
      updateWorldInfo(character.world || {}, 'right');

      // Update feats
      updateFeats(character.feats || [], 'right');

      // Update selected state in list
      updateSelectedState(rightCharacterList, character.id);
    }
  }

  // Function to update stats display
  function updateStats(stats, side) {
    const statItems = document.querySelectorAll(`.${side}-content .stat-item`);

    statItems.forEach(item => {
      const statName = item.querySelector('.stat-label').textContent.toLowerCase().replace(':', '');
      const statValue = stats[statName];

      if (statValue !== undefined) {
        item.querySelector('.stat-fill').style.width = `${statValue}%`;
        item.querySelector('.stat-value').textContent = statValue;
      }
    });
  }

  // Function to update abilities display
  function updateAbilities(abilities, side) {
    const abilitiesList = document.getElementById(`${side}-abilities-list`);
    abilitiesList.innerHTML = '';

    if (abilities.length === 0) {
      const noAbilities = document.createElement('li');
      noAbilities.textContent = 'No special abilities recorded';
      abilitiesList.appendChild(noAbilities);
      return;
    }

    abilities.forEach(ability => {
      const abilityItem = document.createElement('li');
      abilityItem.textContent = ability;
      abilitiesList.appendChild(abilityItem);
    });
  }

  // Function to update timeline display
  function updateTimeline(timeline, side) {
    const timelineContainer = document.getElementById(`${side}-timeline`);
    timelineContainer.innerHTML = '';

    if (!timeline || timeline.length === 0) {
      const noTimeline = document.createElement('div');
      noTimeline.className = 'timeline-event';
      noTimeline.textContent = 'No timeline information available';
      timelineContainer.appendChild(noTimeline);
      return;
    }

    timeline.forEach(event => {
      const timelineEvent = document.createElement('div');
      timelineEvent.className = 'timeline-event';

      const timelineDate = document.createElement('div');
      timelineDate.className = 'timeline-date';
      timelineDate.textContent = event.date;
      timelineEvent.appendChild(timelineDate);

      const timelineDescription = document.createElement('div');
      timelineDescription.className = 'timeline-description';
      timelineDescription.textContent = event.description;
      timelineEvent.appendChild(timelineDescription);

      timelineContainer.appendChild(timelineEvent);
    });
  }

  // Function to update world info display
  function updateWorldInfo(world, side) {
    const worldInfo = document.getElementById(`${side}-world-info`);
    worldInfo.innerHTML = '';

    if (!world || Object.keys(world).length === 0) {
      worldInfo.textContent = 'No world information available';
      return;
    }

    if (world.name) {
      const worldName = document.createElement('h4');
      worldName.textContent = world.name;
      worldInfo.appendChild(worldName);
    }

    if (world.description) {
      const worldDesc = document.createElement('p');
      worldDesc.textContent = world.description;
      worldInfo.appendChild(worldDesc);
    }

    if (world.locations && world.locations.length > 0) {
      const locationsTitle = document.createElement('h4');
      locationsTitle.textContent = 'Notable Locations';
      worldInfo.appendChild(locationsTitle);

      const locationsList = document.createElement('ul');
      world.locations.forEach(location => {
        const locationItem = document.createElement('li');
        locationItem.textContent = location;
        locationsList.appendChild(locationItem);
      });
      worldInfo.appendChild(locationsList);
    }

    if (world.powerSystem) {
      const powerSystemTitle = document.createElement('h4');
      powerSystemTitle.textContent = 'Power System';
      worldInfo.appendChild(powerSystemTitle);

      const powerSystemDesc = document.createElement('p');
      powerSystemDesc.textContent = world.powerSystem;
      worldInfo.appendChild(powerSystemDesc);
    }
  }

  // Function to update feats display
  function updateFeats(feats, side) {
    const featsContainer = document.getElementById(`${side}-feats`);
    featsContainer.innerHTML = '';

    if (!feats || feats.length === 0) {
      const noFeats = document.createElement('div');
      noFeats.className = 'feat-item';
      noFeats.textContent = 'No notable feats recorded';
      featsContainer.appendChild(noFeats);
      return;
    }

    feats.forEach(feat => {
      const featItem = document.createElement('div');
      featItem.className = 'feat-item';

      const featTitle = document.createElement('h4');
      featTitle.textContent = feat.title;
      featItem.appendChild(featTitle);

      const featDesc = document.createElement('p');
      featDesc.textContent = feat.description;
      featItem.appendChild(featDesc);

      const featMetrics = document.createElement('div');
      featMetrics.className = 'feat-metrics';

      if (feat.powerLevel) {
        const powerLevel = document.createElement('span');
        powerLevel.className = 'feat-metric';
        powerLevel.innerHTML = `Power Level: <strong>${feat.powerLevel}</strong>`;
        featMetrics.appendChild(powerLevel);
      }

      if (feat.difficulty) {
        const difficulty = document.createElement('span');
        difficulty.className = 'feat-metric';
        difficulty.innerHTML = `Difficulty: <strong>${feat.difficulty}</strong>`;
        featMetrics.appendChild(difficulty);
      }

      featItem.appendChild(featMetrics);
      featsContainer.appendChild(featItem);
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
      return item.getAttribute('data-character-id') == selectedId;
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

    if (currentIndex === -1) {
      // If the current character isn't in the filtered list (e.g., it's an alternate version),
      // find the base character and navigate from there
      const baseCharacterId = selectedCharacter.baseCharacterId || selectedCharacter.id;
      const baseIndex = characters.findIndex(c => c.id === baseCharacterId);

      if (baseIndex === -1) {
        newIndex = 0; // Fallback to first character
      } else {
        newIndex = direction === 'next' ?
          (baseIndex + 1) % characters.length :
          (baseIndex - 1 + characters.length) % characters.length;
      }
    } else {
      newIndex = direction === 'next' ?
        (currentIndex + 1) % characters.length :
        (currentIndex - 1 + characters.length) % characters.length;
    }

    selectCharacter(characters[newIndex], side);
  }
});
