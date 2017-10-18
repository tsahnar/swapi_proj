import { includes, remove } from 'lodash';

// FavoritesHandler is a class (Singelton) which keeps track on favorites in local storage
// and handles add/removal of items

class FavoritesHandler {

	constructor() {
		this.favorites = JSON.parse(localStorage.getItem('favoritesArr')) || [];
	}

	addRemoveFromFavorites(isFavorite, identifier) {
		if (isFavorite){
			remove(this.favorites, (idt) => { return idt == identifier })
			setLocalStorage(this.favorites);
		}else{
			// Add to favorites array
			// Beacuse there is no ID for returned items in API, I will identify the item by its url.
			this.favorites.push(identifier);
			setLocalStorage(this.favorites);	
		}
	};

	checkIfFavorite(identifier){
	  	return includes(this.favorites, identifier);
	};


}

// Helper
const setLocalStorage = (items) => {
	localStorage.setItem('favoritesArr', JSON.stringify(items));
}

export default new FavoritesHandler();