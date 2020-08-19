<template>
  <div class="card">
    <div class="container">
      <div class="image-container">
        <img :src=vehicle.preview>
      </div>
      <div class="text-container">
        <a href="#" @click.prevent="openRent(vehicle.id)">
          <div class="title">{{vehicle.name}}</div>
        </a>
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
  methods:{
    openRent(id){
      this.$router.push('/rent/'+id)
    }
  }
}
</script>

<style scoped>
.card{
  background: white;
  border-radius: 30px;
  margin: 5px;
}

.container{
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
}

.image-container{
}

img {
  border-radius: 5px;
  height: 88px;
  width: 88px;

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

