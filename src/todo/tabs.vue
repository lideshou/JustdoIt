<template>
    <div class="helper">
        <span class="left">2 items left</span>
        <span class="tabs">
            <span
                    v-for="state in states"
                    :key="state"
                    :class="[state,filter===state?'actived':'']"
                    @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear Completed</span>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        props:{
            filter:{
                type:String,
                require:true,
            }
        },
        methods:{
            toggleFilter(state){
                this.filter=state
            },
            clearAllCompleted(){

            }
        },
        data(){
            return{
                states:["all","active","completed"]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .helper{
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #fff
        font-size 14px
        font-smoothing antialisead
    }
    .left,.tabs,.clear{
        padding 0 10px
        box-sizing border-box
    }
    .left{
        text-align left
        width 150px
    }
    .clear{
        text-align right
        cursor pointer
        width 150px
    }
    .tabs{
        width 200px
        display flex
        justify-content space-around
        *{
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175,47,47,0)
            &.actived{
                border-color rgba(175,47,47,0.4)
                border-radius 5px
            }
        }
    }
</style>