var app = new Vue({
  el: '#app',
    data() {
      return {
        show: false,
        index: 0,
        images: [
          'https://img.yzcdn.cn/1.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ]
      };
    },
  
    methods: {
      onChange(index) {
        this.index = index;
      }
    }
})
