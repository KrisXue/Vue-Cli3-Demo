<template>
    <div class="main-container">
        <TopAside />
        <Breadcrumb />
        <Content />
    </div>
</template>

<script>
import TopAside from './top-aside'
import Content from './content'
import Breadcrumb from './breadcrumb'
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        TopAside,
        Content,
        Breadcrumb
    }
}
</script>
