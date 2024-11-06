// File: index.js
/**
 * Prevent Default Drag and Drop
 * Prevents unwanted file drops outside designated drop zones
 * @version 1.0.0
 * @license MIT
 */

const dropzoneId = "dropzone";

// Prevent dragenter event outside dropzone
window.addEventListener("dragenter", function(e) {
    if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
    }
}, false);

// Prevent dragover event outside dropzone
window.addEventListener("dragover", function(e) {
    if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
    }
});

// Prevent drop event outside dropzone
window.addEventListener("drop", function(e) {
    if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
    }
});

// File: README.md
# Prevent Default Drag and Drop

A lightweight JavaScript solution to prevent unwanted file drops outside designated drop zones while maintaining functionality for specific drop areas.

## Features

- 🚫 Prevents default drag and drop behavior
- ✅ Maintains functionality for designated drop zones
- 🎯 Zero dependencies
- 📱 Works across all modern browsers
- 🪶 Lightweight (~1KB)

## Installation

Simply copy the `index.js` file into your project and include it in your HTML:

```html

```

## Usage

1. Include the script in your HTML
2. Add the `dropzone` id to your designated drop area:

```html

    Drop files here

```

3. Style your dropzone as needed:

```css
#dropzone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
}
```

## Demo

Check out `demo.html` for a working example.

## Browser Support

Works in all modern browsers that support the HTML5 Drag and Drop API:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use in personal and commercial projects.
