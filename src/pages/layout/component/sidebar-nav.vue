<template>
    <div>
        <div class="project-name">
            Vue-Cli3-Demo
        </div>
        <el-menu
            :collapse="isSidebarNavCollapse"
            background-color="#304156"
            text-color="#eee"
            active-text-color="#4dbcff"
            :default-active="currentMenu"
        >
            <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
        </el-menu>
    </div>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
<style lang="scss" scoped>
.project-name {
    font-size: 24px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #4dbcff;
    border-bottom: 1px solid #ddd;
}
</style>
