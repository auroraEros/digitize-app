# Digitize App (Responsive)

## Project Screenshot
![Digitize App Screenshot](/assets/images/screenshot.png)

This project is a simple ecommerce website using **Tailwind CSS** for styling and **Alpine.js** for simple interactive operations. The main pages include the home page, single product page, and cart page. The goal was to focus on layout, styling, and component interactivity using TailwindCSS and Alpine.js 

## Features:
- **Tailwind CSS** for responsive styling.
- **Alpine.js** for managing simple states (like liking products and selecting colors).
- Fully responsive pages that look great on various devices.
- Navigation between pages using `<a>` tags.
- Simple interactions like liking a product, selecting a color, and interacting with products.

## Installation:

1. Clone the repository:
   ```bash
   git clone <URL_PROJECT_REPOSITORY>
   ```



2. Navigate to the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install Tailwind CSS:
   If you are using Node.js, you can install it using:

   ```bash
   npm install
   ```

4. Add Alpine.js to your project:

   * You can either use the CDN in your HTML files or include it in the project.

## Project Structure:

```
/build
    /index.html        # Home page
    /cart.html         # Cart page
    /singleProduct.html # Single product detail page
    /assets
        /images        # Product images folder
```

## Usage:

### Home Page (index.html)

On this page, products are displayed with features like different colors and a like button. Alpine.js is used for toggling the like status and selecting different colors.

### Single Product Page (singleProduct.html)

This page displays detailed information about a product, including its price and features. The option to add the product to the cart is also available.

### Cart Page (cart.html)

This page shows a summary of the products added to the cart along with the final price.

## Interactive Features:

* **Liking a product**: Using Alpine.js, you can toggle the like status of a product. This is implemented with the `x-data` and `@click` directives in Alpine.js.

* **Selecting product color**: Products have the ability to change color, which is also handled by Alpine.js and Tailwind CSS.

## Styling with Tailwind CSS:

Tailwind CSS is a utility-first framework used in this project for styling and creating responsive designs. All classes are applied directly in the HTML for fast and flexible styling.

### Example:

```html
<button class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
  Select Color
</button>
```

### 📌 Live Demo

## Demo
You can view the live demo of the project here:  
[Digitize - Netlify](https://aurora-digitize-app.netlify.app/)

## Development Setup:

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Build the Project**:
   To prepare the project for production, run the following command:

   ```bash
   npm run build
   ```

## Resources:

* [Tailwind CSS](https://tailwindcss.com/)
* [Alpine.js](https://alpinejs.dev/start)

---

Feel free to reach out if you have any questions or issues. Enjoy working on this project!



