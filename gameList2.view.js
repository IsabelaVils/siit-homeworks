class GamesList {
    constructor() {
        this.model = new GamesModel();
        document.querySelector('.js-game-list').addEventListener('click', this.handleDeleteClick.bind(this))
    }

    async displayList() {
        const games = await this.model.getAll();
        const html = this.createHtml(games);
        /*
            {
                pagination: {},
                results: [
                    {movie}, {movie}, {movie}
                ]
            }
        */
        console.log(games);
        document.querySelector('.js-game-list').append(html);
    }

    emptyGameList() {
        document.querySelector('.js-game-list').innerHTML = '';
    }

    createHtml(games) {
        const fragment = document.createDocumentFragment();

        for(const game of games) {
            const article = document.createElement('article');
    
            const title = document.createElement('h2');
            const deleteBtn = document.createElement('button');

            
            title.innerHTML = '<a href="gameDetails2.html?gameId='+game._id+'">' + game.title + '</a>';
            deleteBtn.innerHTML = 'Delete';
            deleteBtn.setAttribute('data-delete-game', game._id);

            article.append(title, deleteBtn);
            fragment.append(article);
        }

        return fragment;
    }

    handleDeleteClick(e) {
        const gameId = e.target.getAttribute('data-delete-game');
        if (gameId) {
            this.model.remove(gameId)
                .then(message => {
                    if(message === `Game ${movieId} deleted!`) {
                        this.emptyGameList();
                        this.displayList();
                    }
        
                    console.log(message);
                });
        }
    }
}

const view = new GamesList();
view.displayList();