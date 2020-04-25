class ApiService {
    base_url = 'https://api.themoviedb.org/3';
    api_key = 'd4d57a54c7e1b2e48003bf777a8cc9ac';

    getPopularMovies() {
        return new Promise((resolve, reject) => {
            fetch(`${this.base_url}/movie/popular?api_key=${this.api_key}`)
            .then(res => res.json()).then(result => {
                resolve(result.results);
            })
            .catch(err => reject(err));
        })
    }
}

export default new ApiService();