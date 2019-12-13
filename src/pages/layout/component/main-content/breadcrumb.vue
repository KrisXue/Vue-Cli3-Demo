<template>
    <div>
        <el-breadcrumb separator="/">
            <transition-group name="breadcrumb">
                <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
                <template v-for="(route, i) in crumbList">
                    <el-breadcrumb-item
                        :key="route.name"
                        :to="{ name: route.name }"
                        v-if="route.name != 'layout'"
                        :class="{ 'is-last-link': i == crumbList.length - 1 }"
                    >
                        {{ route.meta.name }}
                    </el-breadcrumb-item>
                </template>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['crumbList'])
    }
}
</script>
