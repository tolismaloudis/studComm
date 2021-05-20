<template>
    <div>
        <ClickedP :post="getPosts" />
        <Comments :comments="getComments" :id="pid" /> 
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClickedP from "../components/clickedP.vue";
import Comments from '../components/Comments.vue';

export default{
    name: "ClickedPost",
    components: {
        ClickedP,
        Comments
    },
    props:{
        id:{
            type:String
        }
    },
    data(){
        const pid = this.id;
        return{
            post:[],
            comments:[],
            pid
        }
    },
    computed: {
    ...mapGetters(["getPosts"]),
    ...mapGetters(["getComments"])
    },
    created(){
        const postId = this.id;
        //console.log("ID FROM CLICKED POST IS "+postId);
        this.fetchPosts({
            postId
        });
        this.fetchComments({
            postId
        });
    },
    methods: {
        ...mapActions(["fetchPosts"]),
        ...mapActions(["fetchComments"])
    }
}
</script>