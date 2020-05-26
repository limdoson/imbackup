<template>
  	<div id="app">
		<router-view></router-view>
  	</div>
</template>
<script>
	export default {
		mounted () {
			console.log('getters',this.$store.getters)
			//禁用鼠标右键
			document.oncontextmenu = (e) => {
				let event = e || window.event || arguments.callee.caller.arguments[0]
				event.returnValue = false;
			}
			//禁用F12
			if (process.env.NODE_ENV == 'production') {
				document.onkeydown = document.onkeyup = document.onkeypress = (e) => {
					let event = e || window.event || arguments.callee.caller.arguments[0]
					if (e && e.keyCode == 123) {
						e.returnValue = false;
						return (false);
					}
				}
			}
		}
	}
</script>
