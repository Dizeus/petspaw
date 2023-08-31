# petspaw
## Test task for MacPaw Bootcamp - Next.js React Typescript application with [thecatapi.com](https://thecatapi.com/) API

* ### Functionality
	- Voting for cat images:
		- Like
		- Add to favourties
		- Dislike
	- Exploring cat breeds random or with filters:
		- by breed
		- sort by name of breed
		- change limit from 5 to 20 (step = 5)
		- you can choose one breed to view additional photos and information
	- View a gallery of cats and add them to favorites random or with filters:
		- by breed
		- sort by name of breed
		- by type
		- change limit from 5 to 20 (step = 5)
		- load new images (button)
	- Upload your cat photo by clicking the upload button in the gallery section
		- The system will accept uploaded photos that feature a cat, otherwise, they will be declined
	- View Your Activity
		- Favourites
		- Likes
		- Dislikes
	- Search photos by bread name using the provided form
	- Switch Between Light and Dark Themes

* ### Project structure src
	- api: Contains all API request functions
	- assets: Houses images and icons
	- components: Includes various project components
	- HOC: High Order Components (withLoading.tsx) 
	- hooks: Provides custom hooks
	- layouts: Offers custom layouts that are reused throughout the project
	- pages: Contains routing pages
	- store: Business Logic Layer (BLL)
	- styles: Modules with styles for the project
	- types: Defines custom types for TypeScript
