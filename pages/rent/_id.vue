<template>
  <div class="rent-container">
    <div class="image-container">
      <img :src=vehicle.image>
    </div>
    <div class="vehicle-info-container">
      <div class="cooper">{{vehicle.name}}</div>
      <div class="labels">Specifications Team Rent terms</div>
      <div class="description">Описание: {{vehicle.description}}</div>
      <div class="features">Features:</div>
      <div class="challange">
        <svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="96" rx="16" fill="#F3F4F7"/>
        </svg>
        <div class="im1">
          <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z" fill="#677B8F"/>
          </svg>
        </div>
      </div>





      <div class="parice">Цена: {{vehicle.rent}}</div>
      <!-- <div>Команда: {{vehicle.team_text}}</div> -->
      <!-- <div>Спецификация: {{vehicle.specifications_text}}</div> -->
      <!-- <div>Условия: {{vehicle.term_text}}</div> -->
    </div>
    <!-- {{vehicle[0]}} -->
  </div>
</template>

<script>

export default {
  async asyncData(context) {
    return { id: context.params.id }
  },
  computed:{
    vehicle(){
      const id = this.id
      return {...this.$store.getters['vehicles/vehicles'].filter(v => v.id === id)}[0]
    }
  },
  mounted(){
    console.log(this.id)
  }
}
</script>

<style scoped>

img{
  width: 700px;
  height: 712px;
  border-radius: 10px;
}

.rent-container{
  display: flex;
}

.cooper{
  position: absolute;
  width: 312px;
  height: 48px;
  left: 840px;
  top: 200px;

  font-family: Codec Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */


  /* Base/500 */

  color: #012345;
}

.parice {
  position: absolute;
  width: 536px;
  height: 80px;
  left: 840px;
  top: 724px;

  /* Base/50 */

  background: #F3F4F7;
  border-radius: 16px;
}

.description {
  position: absolute;
  width: 532px;
  height: 60px;
  left: 840px;
  top: 353px;

  font-family: Codec Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  /* or 20px */


  /* Base/300 */

  color: #677B8F;
}

.labels{
  position: absolute;
  height: 14px;
  left: 840px;
  top: 280px;

  font-family: Codec Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  /* identical to box height */

  /* Main/400 */
  color: #4959FF;
  /* Inside Auto Layout */
  margin: 32px 0px;
}

.features{
  position: absolute;
  width: 106px;
  height: 21px;
  left: 840px;
  top: 418px;

  font-family: Codec Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  /* identical to box height */


  /* Base/500 */

  color: #012345;
}

.challange{
  display: flex;
  justify-content: center;
/* Rectangle 2 */

  position: absolute;
  width: 80px;
  height: 96px;
  left: 841px;
  top: 471px;

  /* Base/50 */
  background: #F3F4F7;
  border-radius: 16px;

}

.im1{
  align-self: center;
}
</style>
