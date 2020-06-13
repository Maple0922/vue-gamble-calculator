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
    userCount: 0
  },
  methods: {
    select: function(e){
      name = e.target.innerText;
      for (var i = 0; i < this.users.length; i++) {
        // let item = this.users[i];
        // if (item.name == name) {
        //   if (item.selected) {
        //     item.selected = false;
        //   }else{
        //     item.selected = true;
        //   }
        // }
        console.log(this.users[i].name);
        console.log(this.users[i].selected);
      }
    }
  }
});
