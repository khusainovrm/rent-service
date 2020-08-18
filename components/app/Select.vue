<template>
   <select name="plane" v-model="typeOfVehicles">
       <option disabled value="whatever">whatever</option>
      <option v-for="type in types" :value="type.name" :key='type.id'>
        {{type.name}}
        </option>
   </select>
</template>


<script>
export default {
  props:['typeOfVehicles'],
  computed:{
    types(){
      return this.typeOfVehicles
    }
  }
}
</script>

<style scoped>
select{
  margin-left: 5px;
  background: none;
  border: none;
}
</style>
