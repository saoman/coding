
var vm = new Vue({
	el:"#app",
	data:{
		name:"liuting",
		a:{b:{c:"c"}}
	},
	beforeCreate(){
		console.log("创建前：");
		console.log(this.$el);
		console.log(this.$data);
	},
	created(){
		console.log("创建完成：");
		console.log(this.$el);
		console.log(this.$data);
	},
	beforeMount(){
		console.log("挂载前：");
		console.log(this.$el);
		console.log(this.$data);
	},
	mounted(){
		console.log("挂载完成：");
		console.log(this.$el);
		console.log(this.$data);
		setTimeout(
			()=>{
				this.a.b.c = "2";
			},2000
		);
		
	},
	beforeUpdate(){
		console.log('=即将更新渲染=');
		let name = this.$refs.app.innerHTML;
		console.log('name:'+name);
	},
	updated(){
		console.log('==更新成功==');
		let name = this.$refs.app.innerHTML;
		console.log('name:'+name);
	},
	beforeDestory(){
		console.log("销毁前：");
	},
	destoryed(){
		console.log("销毁完成：");
	}
});


