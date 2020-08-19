import getVehicles from '@/api/request'

export const state = () => ({
  vehicles: [],
  selectedType:'whatever'
})

export const mutations = {
  setVehicles(state, vehicles) {
    state.vehicles = vehicles
  },
  setType(state, type) {
    state.selectedType = type
  }
}

export const actions = {
  async fetch({commit}){
    try {
      const vehicles = await getVehicles()
      commit('setVehicles', vehicles)
      return vehicles
    } catch (error) {
      throw error
    }
  },
  setType({commit}, type){
    commit('setType',type)
  }
}

export const getters = {
  vehicles: s => s.vehicles,
  typeOfVehicles: s => Array.from(new Set(s.vehicles.map(vehicle => vehicle.type))),
  selectedType: s => s.selectedType
}
