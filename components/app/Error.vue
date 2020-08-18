<template>
	<div class="error-container">
		<div class="title">An error has occured</div>
		<div class="text">Please refresh the page</div>
		<button @click="$emit('fetch')"><p>Reload page</p></button>
	</div>
</template>


<script>
export default {
}
</script>

<style scoped>
.error-container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	min-height: 60vh;
}

.title {
	font-size: 1.5rem;
}

.text{
	color:grey;
	font-size: 0.9rem;
	padding: 15px;
}

button{
	background: #4959ff;
	height: 45px;
	width: 150px;
	border-radius: 15px;
}
button p{
	margin: 0 10px;
	color: white;
	text-align: center;
}

</style>
