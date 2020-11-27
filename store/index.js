export const state = {
    activeOption: 0,
}

export const actions = {
    SELECT_NEW_OPTION({ commit }, option) {
        commit('selectNewOption', option);
    },
}

export const mutations = {
    selectNewOption(state, payload) {
        state.activeOption = payload;
    }
}

export const getters = {
    GET_SELECTED_OPTION(state) {
        return state.activeOption;
    },
}