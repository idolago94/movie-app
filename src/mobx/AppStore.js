import { observable, action, computed } from "mobx";
import { persist } from 'mobx-persist';

class AppStore {
    @observable favourites = [];
    @persist @observable facebookName = null;
    @persist('object') @observable facebookAvatar = null;

    @computed
    get getFavourites() {
        return this.favourites;
    }

    @computed
    get getName() {
        return this.facebookName;
    }

    @computed
    get getAvatar() {
        return this.facebookAvatar;
    }

    @computed
    get isFavourite() {
        return (id) => this.favourites.find(fav => fav.id == id);
    }

    @action
    addToFavourite(movie) {
        this.favourites.push({id: movie.id, title: movie.title, poster: movie.poster_path});
    }

    @action
    removeFromFavourite(movie) {
        this.favourites = this.favourites.filter(f => f.id != movie.id);
    }

    @action
    setFacebookData(name, pic) {
        this.facebookName = name;
        this.facebookAvatar = pic;
    }
}

export default new AppStore();