var app = new Vue({
  el: '#app',
  data: {
    seen: true
  },
  created(){
    axios.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/latest')
    .then(response => {
      this.news = response.data.stories;
      this.loaded = true;
      debugger
    })

    this.test().then(response => {
      this.news = response.data.stories;
      this.loaded = true;
      debugger
    })
  },
  methods:{
    test(){
       return axios.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/latest')
    }
  }
})
