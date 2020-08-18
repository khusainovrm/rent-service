import getVehicles from '@/api/request'

export const state = () => ({
  vehicles: []
})

export const mutations = {
  setVehicles(state, vehicles) {
    state.vehicles = vehicles
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
  }
}

export const getters = {
  vehicles: s => s.vehicles
}
