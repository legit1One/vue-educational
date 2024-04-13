// composition API

import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    // state => ref, reactive
    // getters => computed
    // actions => functions

    const login = ref('dauren@codenext.kz')



    const changeLogin = () => {
        login.value = prompt('login')
    }

    return {
        login,
        changeLogin
    }
})