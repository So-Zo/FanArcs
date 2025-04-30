# Show Directory Templates for FanArcs

These templates are designed for creating show directory pages for different media types on the FanArcs platform. They are structured to work with backend data integration, making it easy to display dynamic content.

## Available Templates

1. **Base Directory Template** (`shows-directory-template.html`)
   - A generic template that can be customized for any media type
   - Contains all necessary structure and data attributes for backend integration

2. **Anime Directory Template** (`anime-directory-template.html`)
   - Customized for anime shows with appropriate terminology and example content

## How to Use These Templates

### 1. Choose the Right Template

- Use the specific media type template if available (e.g., `anime-directory-template.html` for anime)
- Use the base template (`shows-directory-template.html`) for other media types

### 2. Customize the Template

1. **Update Metadata**:
   - Change the `<title>` tag to reflect your media type
   - Update the `data-source` meta tag with your media type (e.g., `manga-directory`)
   - Adjust the `data-categories` meta tag if needed

2. **Update Content**:
   - Replace all instances of `[Media Type]` with your specific media type
   - Replace `[media-type]` with the lowercase version of your media type
   - Replace `[MediaType]` with the CamelCase version of your media type
   - Replace `[Studio Type]` with the appropriate term (e.g., "Studio" for anime, "Publisher" for comics)

3. **Update CSS Links**:
   - Ensure the CSS file path points to the correct style file for your media type

4. **Update Image Paths**:
   - Update the header image path to point to the correct image for your media type
   - Update any fallback content images to use appropriate examples

### 3. Set Up Backend Integration

The templates are designed to work with the `directory-data.js` script, which handles:

- Loading data for different categories (popular, genres, eras, studios, alphabetical)
- Rendering content using templates
- Handling user interactions

To integrate with your backend:

1. **Modify the `fetchCategoryData` function** in `directory-data.js` to fetch real data from your API
2. **Ensure your API returns data** in the format expected by the rendering functions
3. **Test thoroughly** to ensure all dynamic content loads correctly

## Template Structure

Each directory template is organized into the following main sections:

1. **Header**: Contains the media type image and search bar
2. **Directory Intro**: Introduction and navigation buttons
3. **Popular Series**: Grid of popular shows in this media type
4. **Genres Section**: Shows organized by genre
5. **Eras Section**: Shows organized by release era
6. **Studios Section**: Shows organized by studio/publisher
7. **Alphabetical Section**: Complete alphabetical listing
8. **Help Section**: Resources for users who can't find what they're looking for
9. **Footer**: Standard site footer
10. **Navigation**: Bottom navigation bar and main navigation menu

## Data Attributes for Backend Integration

The templates use data attributes to facilitate backend integration:

- `data-source`: Identifies the media type for data loading
- `data-categories`: Lists the categories to load data for
- `data-content`: Identifies containers where dynamic content should be inserted
- `data-section`: Links navigation buttons to sections
- `data-section-type`: Identifies the type of content in a section
- `data-action`: Identifies interactive elements for event handling

## Templates and Fallback Content

Each dynamic section includes:

1. **HTML Templates**: Used by JavaScript to clone and populate with data
2. **Fallback Content**: Displayed when JavaScript is disabled or data fails to load

## Need Help?

If you need assistance with customizing these templates or integrating them with your backend, contact the FanArcs development team at dev@fanarcs.com.
