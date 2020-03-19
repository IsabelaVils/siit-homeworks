class GamesModel {
    
    apiUrl = 'https://games-world.herokuapp.com/games';
    

    create(game) {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': ''
            }
        }).then(this.convertResponseToJson);
    }

    
    getAll() {
        
        return fetch(this.apiUrl).then(this.convertResponseToJson);
    }

    getById(id) {
       
        return fetch(`${this.apiUrl}/${id}`).then(this.convertResponseToJson);
    }

   
    update(id) {

    }

   
    remove(id) {
        return fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Auth-Token': this.accessToken
            }
        })
        .then(res => res.text());
    }

    convertResponseToJson(res) {
        return res.json()
    }
}