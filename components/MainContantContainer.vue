<template>
  <div class="content-container">
    <div class="content">

      <div class="title-of-container">
        <h1>Rent</h1>
        <Select @selected="selected"/>
        <div class="add-button-box blue">
          Add new
          <div class='btn'>+</div>
        </div>
      </div>


      <p v-if="$fetchState.pending"> <Loader /></p>
      <p v-else-if="$fetchState.error"> <Error @fetch="$fetch"/> </p>

      <div class="card-container">
        <Card v-for="vehicle of selectedVehicle" :vehicle="vehicle" :key="vehicle.id"/>
      </div>


    </div>
  </div>
</template>


<script>
export default {
  data:() => ({}),
  async fetch(){
    try{
      await this.$store.dispatch('vehicles/fetch')
    } catch (e){
      throw e
    }
  },
  computed:{
    vehicles(){
      return this.$store.getters['vehicles/vehicles']
    },
    selectedVehicle(){
      const type =  this.$store.getters['vehicles/selectedType']
      const types = this.$store.getters['vehicles/typeOfVehicles']

      if (types.includes(type)) {
        return this.$store.getters['vehicles/vehicles'].filter(vehicle => vehicle.type === type)
      }

      return this.$store.getters['vehicles/vehicles']
    }
  },
  methods:{
    selected(type){
     this.$store.dispatch('vehicles/setType', type)
    }
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
}

.btn {
  width: 25px;
  height: 25px;
  margin: 0 2px;
  background: #4959ff;
  color: white;
  display: flex;
  justify-content: center;
  border-radius: 40%;
  margin-left: 15px;
}

.btn:hover{
  cursor: pointer;
}

.card-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>
