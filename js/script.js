var main = new Vue({
  el: '.main',
  data: {
    users: [
      { name: '黒田', selected: false },
      { name: '佐藤', selected: false },
      { name: '辰野', selected: false },
      { name: '中島', selected: false }
    ],
    games: [
      { name: '大富豪', rate: 300, selected: true},
      { name: '麻雀', rate: 30, selected: false},
      { name: 'みんはや', rate: 300, selected: false},
    ],
    rateDef: 300,
    gameDef: '大富豪',
    rateStep: 100,
    userCount: 0,
    pageCount: 0,
    newGameMaker: false,
    newButtonText: '+',
    playedGames: []
  },
  methods: {
    select: function(e){
      const listItemsNode = document.querySelectorAll('.select li');
      const listItems = [].slice.call(listItemsNode);
      const clickedItem = e.target;
      const index = listItems.indexOf(clickedItem);
      this.users[index].selected = !this.users[index].selected;
      const isActivate = this.users[index].selected;
      isActivate ? this.userCount++ : this.userCount--;
    },
    next: function(){
      this.pageCount++;
      console.log(this.pageCount);
    },
    back: function(){
      this.pageCount--;
    },
    newGame: function(){
      this.newButtonText = this.newGameMaker ? '＋' : '×';
      this.newGameMaker = !this.newGameMaker;
    },
    newCalc: function(){
      this.playedGames.push(
        { name: this.gameDef, rate: this.rateDef }
      );
      this.newGameMaker = false;
      this.newButtonText = '＋';
    },
    deleteCalc: function(e){
      confirm('削除してもよろしいですか？');
      const cardsNode = document.querySelectorAll('.calc-card');
      const cards = [].slice.call(cardsNode);

    },
    gameSelect: function(e){
        const listItemsNode = document.querySelectorAll('.new-game-maker li');
        const listItems = [].slice.call(listItemsNode);
        const clickedItem = e.target;
        const index = listItems.indexOf(clickedItem);
        for (var i = 0; i < this.games.length; i++) {
          this.games[i].selected = false;
        }
        this.games[index].selected = !this.games[index].selected;
        this.gameDef = this.games[index].name;
        this.rateDef = this.games[index].rate;
        this.rateStep = this.rateDef/3;
      }
    }
  });
