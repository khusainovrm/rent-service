<template>
   <select name="plane" v-model="selected">
      <option  value="whatever" selected>whatever</option>
      <option v-for="type in typeOfVehicles" :value="type" :key='type'>
        {{type}}
        </option>
   </select>
</template>


<script>
export default {
  data:()=>({
    selected:'',
    whatever:'true'
  }),
  computed:{
    typeOfVehicles:{
      get:function() {return this.$store.getters['vehicles/typeOfVehicles'] || []},
      set:function (value='whatever') {return this.selected = value }
    }
  },
  watch:{
    selected(){
      this.$emit('selected', this.selected)
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
