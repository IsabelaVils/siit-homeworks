class GameDetailsView {
    constructor() {
        const model = new GamesModel();

        const queryParams = location.search.split('&');
        const gameId = queryParams
            .find(param => param.includes('gameId='))
            .split('=')[1];

        this.game = model.getById(gameId);
    }

    async displayGame() {
        const article = document.querySelector('.js-game-details');
        article.append(await this.createHtml());
    }

    async createHtml() {
        const game = await this.game;

        const title = document.createElement('h2');
        title.innerHTML = game.title;

        const body = document.createElement('section');
        body.append(title);

        const paragraphs = game.description;

        

        body.append(paragraphs);
     
        return body;
    }
}

const view = new GameDetailsView();
view.displayGame();









