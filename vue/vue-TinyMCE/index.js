
var vm = new Vue({
	el:"#app",
	data:{
		name:"liuting",
	},
	components: {
		'tinymce-editor': Editor // <- Important part
	}
});


