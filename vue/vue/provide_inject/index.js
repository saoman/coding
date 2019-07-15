var nestedComponent = {
  template: "#vue-nested-component-template",
  name: "nested-component",
  data: function() {
    return {};
  },
  computed:{
    thing:{
      get:function(){return this.getThing()},
      set:function(d){this.setThing(d)},
    }
  },
  methods: {},
  inject: ["getThing","setThing"],
  mounted: function() {
  }
};

var vueComponent = {
  template: "#vue-component-template",
  name: "vue-component",
  data: function() {
    return {
      message: "I'm a component!"
    };
  },
  components: {
    nestedComponent: nestedComponent
  },
};

var app = new Vue({
  el: "#app",
  data: {
    thing: "Hello World",
    disableButton: false
  },
  methods: {
    getThing: function() {
      return this.thing;
    },
    setThing: function(data) {
      this.thing = data;
    },
  },
  provide: function() {
    return {
         getThing:this.getThing,
         setThing:this.setThing
        }
  },
  components: {
    vueComponent: vueComponent
  },
});
