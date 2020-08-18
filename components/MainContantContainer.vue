<template>
  <div class="content-container">
    <div class="content">

      <div class="title-of-container">
        <h1>Rent</h1>
        <Select/>
        <div class="add-button-box blue">
          Add new
          <div class='btn'>+</div>
        </div>
      </div>


      <p v-if="$fetchState.pending">Fetching info...</p>
      <p v-else-if="$fetchState.error"> <Error @fetch="this.$fetch"/> </p>

      <div class="card-container">
        <Card v-for="card of cards" :key="card.id"/>
      </div>


    </div>
  </div>
</template>


<script>
import getVehicles from '@/api/request' 

export default {
  data:() => ({
    cards:null
  }),
  async fetch() {
  this.cards = await getVehicles()
  }
}
</script>

<style scoped>
.content-container{
  background: #f3f4f6;
  min-height: calc(100vh - 46px);
  border-radius: 25px;
  padding: 10px;
}

.content {
  margin: 20px;
}

.title-of-container{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.add-button-box {
  flex: 1 0 auto;
  justify-content: end;
  display: flex;
  align-items: center;
}

.btn {
  width: 25px;
  height: 25px;
  margin: 0 2px;
  background: #4959ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40%;
  margin-left: 15px;
}

.btn:hover{
  cursor: pointer;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
}

</style>
