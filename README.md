# Online Apple Store
Welcome to the Online Apple Store, a dynamic single-page application that offers an immersive shopping experience. Here, users can effortlessly explore a wide range of products, add them to their cart and favorites, search for specific items, sort products, adjust quantities in their cart, and access comprehensive product details.

# [Check out the Demo](https://vasyl-pavlenko.github.io/apple-store/)

# Table of contents
- [Technologies used](#technologies-used)
- [Structure](#project-structure)
- [Features & Functionality](#features-functionality)
- [Reflecting on the Journey](#reflecting-on-the-journey)

# Technologies used
- **React.js**: The foundation of our application.
- **React Router (v6)**: Powers seamless navigation within the app.
- **JSX, TypeScript, and JavaScript**: For building robust and efficient components.
- **LoDash**: Enhances data manipulation and management.
- **Fetch and API**: Utilized for data retrieval and interaction with the server.
- **Sass (SCSS) and CSS Modules**: Styling for a polished user interface.
- **BEM Methodology**: Ensures consistent and maintainable naming and styling.

# Project Structure
Our application is built around functional components and leverages the power of React Hooks. Each component is designed to be abstract and fully reusable, promoting a modular approach to development. We employ Sass (SCSS) for styling, and CSS Modules are utilized with the addition of the .env variable SASS_PATH for utility imports. The BEM methodology guides our naming and styling conventions.

# Features & Functionality

## App 
- **Responsiveness**: The app adapts to various screen sizes, ensuring a consistent user experience.
- **Theme Switcher**: Users can toggle between Dark and Light themes by clicking the theme icon in the header. The chosen theme is saved in local storage.

## Home page
- **Product Sliders**: Interactive product sliders allow users to scroll through items by clicking arrows or dragging on mobile devices. The number of displayed products adjusts dynamically based on screen size. Product data is fetched from the server.

## Catalog pages
- **Category-Based Product Display**: Products are retrieved from the server and categorized accordingly.
- **Loading Simulation**: We use a "Wait" function to simulate server loading for a realistic user experience.
- **Sorting and Filtering**: Users can sort products by name, price, and age, with sorting parameters saved in the URL.
- **Pagination**: Implemented pagination, allowing users to control the number of products per page.
- **Search Functionality**: Users can search and filter products by name, with a debounce function preventing server overload.

- Pagination is implemented. The number of products displayed on the page can be changed by the user.
- Search and filter products by name is implemented.
- Debounce function is used to prevent the server from being overloaded with requests.

## Product details page
- **Comprehensive Details**: Product details are fetched from the server.
- **Loading Simulation**: The "Wait" function simulates server loading for a seamless experience.
- **Customization**: Users can select product color and capacity.
- **Image Interaction**: Photos can be switched by clicking on thumbnails or swiping on mobile devices.
- **Cart and Favorites**: Products can be added to the cart or favorites, with availability notifications.it.

## Cart page
- **Cart Management**: Users can adjust product quantities and remove items from the cart.
- **Cart Indicator**: A cart item count is displayed near the Cart icon in the header.
- **Automatic Calculations**: The total amount and quantity are calculated automatically.
- **Local Storage**: Cart items are saved in local storage for persistence.

## Favorites page
- **Favorites Management**: Users can add and remove products from their favorites.
- **Favorites Indicator**: A favorites count is shown near the Favorites icon in the header.
- **Local Storage**: Favorites are stored in local storage for easy access.

## Reflecting on the Journey
This project was a valuable opportunity to apply the technologies and concepts I've learned and to explore new features and tools. Key challenges included mastering the use of React Router (v6) and its associated features like loaders, error boundaries, data prefetching, lazy loading, and hooks like useAsyncValue and useLoaderData. Additionally, creating a "pseudo" API involved designing a custom data structure, implementing classes and methods to generate data for rendering, and saving them in .json files.

Ultimately, this project has provided valuable insights into working with larger-scale applications and effectively combining various technologies to create a cohesive and feature-rich user experience.





