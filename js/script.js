var main = new Vue({
  el: '.main',
  data: {
    users: [
      { name: '黒田', selected: false },
      { name: '佐藤', selected: false },
      { name: '辰野', selected: false },
      { name: '中島', selected: false }
    ],
    games: ['大富豪','麻雀'],
    userCount: 0,
    pageCount: 0,
    games: [
      { name: '大富豪', rate: 300 }
    ]
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
    newgame: function(){
      this.games.push(
        { name: '麻雀', rate: 30 }
      );
    }
  }
});
