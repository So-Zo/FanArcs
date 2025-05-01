# Non-Existent Page Links in FanArcs

This document explains how to use the special link style for pages that don't exist yet but can be created by users.

## Overview

FanArcs uses a special link style to indicate when a link points to a page that doesn't exist yet but can be created. This helps users understand which content is available and which content they can contribute.

## How to Use

To create a link to a non-existent page that can be created, use the following HTML structure:

```html
<a href="#" class="non-existent-link" 
   data-page-type="[type]" 
   data-page-title="[title]" 
   data-related-to="[related]">Link Text</a>
```

### Required Attributes

- `class="non-existent-link"` - Applies the special styling for non-existent pages
- `data-page-type` - The type of page to create (e.g., "show", "character", "episode")
- `data-page-title` - The title of the page to create
- `data-related-to` - (Optional) The parent content this page relates to

### Example

```html
<!-- Link to a non-existent character page -->
<a href="#" class="non-existent-link" 
   data-page-type="character" 
   data-page-title="Naruto Uzumaki" 
   data-related-to="Naruto">Character: Naruto Uzumaki</a>

<!-- Link to a non-existent show page -->
<a href="#" class="non-existent-link" 
   data-page-type="show" 
   data-page-title="Dragon Ball Super" 
   data-related-to="Dragon Ball">Dragon Ball Super</a>
```

## Visual Appearance

Non-existent page links have the following visual characteristics:

- Red text color
- Dashed underline
- Plus symbol (+) after the text
- "Create this page" tooltip on hover
- Slight animation effect on hover

## Behavior

When a user clicks on a non-existent page link:

1. A modal dialog appears asking if they want to create the page
2. The dialog shows the page type, title, and related content
3. If the user confirms, they will be directed to the appropriate template for creating that type of page
4. The template will be pre-filled with the page title and related content information

## Implementation Notes

- The styling for non-existent links is defined in `css/components/links.css`
- The behavior is implemented in `js/non-existent-pages.js`
- Make sure to include both files in any page that uses non-existent links

## Best Practices

- Use non-existent links sparingly and strategically
- Group non-existent links in relevant sections (e.g., in "Create Content" sections)
- Always provide clear context about what the page will contain
- Use consistent naming conventions for page titles
