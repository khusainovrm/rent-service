<template>
  <div class="card">
    <div class="container">
      <div class="image-container">
        <img :src=vehicle.preview>
      </div>
      <div class="text-container">
        <div class="title">{{vehicle.name}}</div>
        <div class="description">{{vehicle.description}}</div>
        <div class="price">{{vehicle.rent}}$</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    vehicle:{
      type:Object
    }
  },
}
</script>

<style scoped>
.card{
  background: white;
  border-radius: 30px;
  max-width: calc(100%/3-10px);
  margin: 10px;
}

.container{
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
}

.image-container{

}

img {
  border-radius: 25px;

}

.text-container{
  padding: 10px;
}

.title, .description {
  margin-bottom: 10px;
}
.title{
  font-weight: bolder;
}

.description {
  color: #677b8f;
  font-size: 0.8rem;
}

.price {
  color: #f84ab2;
}

</style>
