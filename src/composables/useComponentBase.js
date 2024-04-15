import {useRoute} from "vue-router";
import {onBeforeMount, onMounted} from "vue";

export const useComponentBase = () => {
    const route = useRoute()

    onMounted(() => {
        console.log('Component mounted')
        console.log(route.name)
    })

    onBeforeMount(() => {
        console.log('Before component mounted')
    })

    return {
        pageTitle: route.name
    }
}