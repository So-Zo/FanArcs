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
│   │   ├── layout.css
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── search.css
│   │   ├── typography.css
│   │   ├── universal-style.css
│   │   └── variables.css
│   ├── components/
│   │   ├── box-layouts/
│   │   │   ├── cards.css
│   │   │   ├── content-blocks.css
│   │   │   └── interactive-elements.css
│   │   ├── button-links/
│   │   │   ├── buttons.css
│   │   │   ├── filter-buttons.css
│   │   │   └── links.css
│   │   ├── footer.css
│   │   └── navigation.css
│   ├── utilities/
│   │   ├── accessibility.css
│   │   ├── animations.css
│   │   ├── helpers.css
│   │   └── responsive-images.css
│   ├── themes/
│   │   ├── light.css
│   │   └── dark.css
│   ├── pages/
│   │   ├── main-pages/
│   │   │   ├── about-style.css
│   │   │   ├── anime-style.css
│   │   │   ├── comics-style.css
│   │   │   ├── community-style.css
│   │   │   ├── contribute-style.css
│   │   │   ├── home-page.css
│   │   │   ├── manga-style.css
│   │   │   ├── metaverse-style.css
│   │   │   ├── power-room.css
│   │   │   ├── profile-style.css
│   │   │   ├── tv-style.css
│   │   │   ├── video-games-style.css
│   │   │   └── worlds-universes-style.css
│   │   ├── page-styling/
│   │   │   ├── character-page.css
│   │   │   ├── genre-guide.css
│   │   │   ├── keyboard-shortcuts.css
│   │   │   ├── placeholder-style.css
│   │   │   └── show-page.css
│   │   ├── user-styles/
│   │   │   ├── user-content-consolidated.css
│   │   │   └── user-post-style.css
│   │   ├── anime-style.css
│   │   ├── character-page.css
│   │   ├── comics-style.css
│   │   ├── home-page.css
│   │   ├── manga-style.css
│   │   ├── metaverse-style.css
│   │   ├── placeholder-style.css
│   │   ├── power-room.css
│   │   ├── profile-style.css
│   │   ├── show-page.css
│   │   ├── tv-style.css
│   │   └── worlds-universes-style.css
│   └── main.css
├── js/
│   ├── accessibility.js
│   ├── filter-interactions.js
│   ├── keyboard-shortcuts-reference.js
│   ├── menu-interaction.js
│   ├── non-existent-pages.js
│   ├── page-history.js
│   ├── power-room.js
│   ├── profile-interact.js
│   ├── theme-settings.js
│   └── user-content.js
├── html/
│   ├── anime/
│   │   ├── anime-directory.html
│   │   ├── anime-history.html
│   │   ├── anime-page.html
│   │   ├── characters/
│   │   │   ├── korosensei-page.html
│   │   │   └── naruto-uzumaki.html
│   │   └── naruto.html
│   ├── comics/
│   │   ├── comics-directory.html
│   │   ├── comics-history.html
│   │   └── comics-page.html
│   ├── manga/
│   │   ├── manga-directory.html
│   │   ├── manga-history.html
│   │   └── manga-page.html
│   ├── templates/
│   │   ├── character-template.html
│   │   ├── placeholder-page.html
│   │   ├── shows-directory-template.html
│   │   ├── user-content-template.html
│   │   └── user-section-template.html
│   ├── tv/
│   │   ├── tv-directory.html
│   │   ├── tv-history.html
│   │   └── tv-page.html
│   ├── video-games/
│   │   ├── metaverse/
│   │   │   ├── metaverse-directory.html
│   │   │   ├── metaverse-history.html
│   │   │   └── metaverse-page.html
│   │   └── video-games.html
│   ├── worlds-universes/
│   │   ├── worlds-universes-directory.html
│   │   └── worlds-universes-page.html
│   ├── about-page.html
│   ├── community-page.html
│   ├── contribute-page.html
│   ├── index.html
│   ├── keyboard-shortcuts.html
│   ├── power-room.html
│   └── profile-page.html
└── [Root image files]
    ├── AnimeHeader.jpg
    ├── Comicheader.jpg
    ├── logo-image.jpg
    ├── MangaHeader.jpg
    ├── MVheader.jpg
    ├── Post-test.jpg
    ├── TvHeader.jpg
    └── WandUheader.jpg
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

FanArcs uses a component-based CSS architecture with improved organization:

- **Core**: Foundational styles like reset, variables, typography, universal styles
- **Components**:
  - **Box Layouts**: Cards, content blocks, and interactive elements
  - **Button Links**: Buttons, filter buttons, and links
  - **Navigation & Footer**: Site-wide navigation and footer components
- **Utilities**: Helper classes for accessibility, animations, and responsive images
- **Themes**: Light and dark mode themes
- **Pages**:
  - **Main Pages**: Styles for primary site pages
  - **Page Styling**: Styles for specific page types (character, show, etc.)
  - **User Styles**: Styles for user-generated content

This enhanced structure improves maintainability, reduces conflicts, and makes the codebase more scalable and organized.

## Key Features Implementation

- **Power Room**: Compare characters from different universes with visual stat comparisons
- **User-Generated Content**: Templates for creating and sharing fan content
- **Responsive Navigation**: Bottom navigation on mobile, side navigation on larger screens
- **Accessibility**: Skip-to-content links, ARIA attributes, keyboard navigation
- **Responsive Images**: Dedicated CSS for responsive image handling across different screen sizes
- **Media History Pages**: Consistent template structure for all media history content
- **Directory Structure**: Organized file structure with dedicated directories for each media type

## Why FanArcs?

FanArcs was created to address the common issues with existing fan community platforms:
- Overcrowded interfaces with too many distractions
- Excessive advertisements that interrupt the experience
- Poor mobile experience and inconsistent responsive design
- Inconsistent information organization making content hard to find

Our goal is to provide a clean, structured, and accessible platform for all fans, regardless of their device or technical expertise.

## License

© 2025 FanArcs. All rights reserved.