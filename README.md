# FanArcs

FanArcs is a modern, clean, and accessible platform for fan communities. Built with vanilla HTML, CSS, and JavaScript, it aims to provide a clutter-free experience for exploring and sharing fan content across various media types including anime, manga, comics, television, and more.

## Features

- **Clean Interface**: Minimalist design focused on content and usability
- **Cross-Media Support**: Dedicated sections for:
  - Anime
  - Manga
  - Comics
  - Television
  - Metaverse
  - Worlds & Universes
- **Power Room**: Compare characters from different universes
- **Community Features**:
  - User posts and interactions
  - Content sharing
  - Community discussions
- **User-Generated Content**: Create and share your own theories, analyses, and fan fiction
- **Search Functionality**: Site-wide search for characters, universes, and content
- **Responsive Design**: Works across all device sizes
- **Accessibility**: Built with accessibility in mind, including keyboard navigation and ARIA attributes

## Project Structure

```
FanArcs/
├── css/
│   ├── core/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   └── responsive.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── links.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── navigation.css
│   │   ├── footer.css
│   │   ├── search.css
│   │   └── content-blocks.css
│   ├── utilities/
│   │   ├── accessibility.css
│   │   ├── animations.css
│   │   └── helpers.css
│   ├── themes/
│   │   ├── light.css
│   │   └── dark.css
│   ├── pages/
│   │   ├── home-page.css
│   │   ├── anime-style.css
│   │   ├── manga-style.css
│   │   ├── comics-style.css
│   │   ├── tv-style.css
│   │   ├── metaverse-style.css
│   │   ├── worlds-universes-style.css
│   │   ├── power-room.css
│   │   ├── community-style.css
│   │   ├── profile-style.css
│   │   ├── about-style.css
│   │   └── contribute-style.css
│   └── main.css
├── js/
│   ├── menu-interaction.js
│   ├── search-functionality.js
│   ├── power-room.js
│   ├── accessibility.js
│   ├── user-content.js
│   └── non-existent-pages.js
├── html/
│   ├── index.html
│   ├── about-page.html
│   ├── anime-page.html
│   ├── manga-page.html
│   ├── comics-page.html
│   ├── tv-page.html
│   ├── metaverse-page.html
│   ├── worlds-universes-page.html
│   ├── power-room.html
│   ├── community-page.html
│   ├── contribute-page.html
│   ├── profile-page.html
│   ├── templates/
│   │   ├── placeholder-page.html
│   │   └── user-content-template.html
│   ├── anime/
│   │   ├── naruto.html
│   │   └── characters/
│   │       └── naruto-uzumaki.html
│   └── [other content directories]
└── images/
    ├── anime/
    ├── manga/
    ├── comics/
    ├── tv/
    ├── metaverse/
    └── worlds/
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/So-Zo/FanArcs.git
```

2. Open `html/index.html` in your browser to view the site locally

## Contributing

FanArcs welcomes contributions! There are several ways to help:

1. **Content Creation**
   - Write fan theories, character analyses, or fan fiction
   - Submit artwork for characters or series
   - Create detailed guides for shows, comics, or games

2. **Code Contributions**
   - Fork the repository
   - Create a feature branch
   - Make your changes following our code style
   - Submit a pull request with a clear description

3. **Feedback and Ideas**
   - Submit issues for bugs on GitHub
   - Suggest new features or improvements
   - Provide feedback on existing features
   - Help test the site on different devices

4. **Documentation**
   - Improve documentation
   - Create tutorials for using the site
   - Translate content to other languages

See `contribute-page.html` for detailed contribution guidelines and submission methods.

## Contact

- Email: Official.devanb13@gmail.com
- GitHub: [So-Zo/FanArcs](https://github.com/So-Zo/FanArcs)

## CSS Architecture

FanArcs uses a component-based CSS architecture:

- **Core**: Foundational styles like reset, variables, typography
- **Components**: Reusable UI elements like buttons, cards, navigation
- **Utilities**: Helper classes for accessibility, animations
- **Themes**: Light and dark mode themes
- **Pages**: Page-specific styles

This structure improves maintainability, reduces conflicts, and makes the codebase more scalable.

## Key Features Implementation

- **Power Room**: Compare characters from different universes with visual stat comparisons
- **User-Generated Content**: Templates for creating and sharing fan content
- **Responsive Navigation**: Bottom navigation on mobile, side navigation on larger screens
- **Accessibility**: Skip-to-content links, ARIA attributes, keyboard navigation

## Why FanArcs?

FanArcs was created to address the common issues with existing fan community platforms:
- Overcrowded interfaces with too many distractions
- Excessive advertisements that interrupt the experience
- Poor mobile experience and inconsistent responsive design
- Inconsistent information organization making content hard to find

Our goal is to provide a clean, structured, and accessible platform for all fans, regardless of their device or technical expertise.

## License

© 2025 FanArcs. All rights reserved.