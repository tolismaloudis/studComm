<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2"><img class="rounded-circle" width="42" src="../assets/useravatar.png" alt=""></div>
                                <div class="ml-2">
                                    <div class="h5 m-0">{{ post.user }}</div>
                                    <div class="text-muted">Student</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2 pull-right"> <i class="fa fa-clock-o"></i>  {{ String(post.createtAt).substring(0, 10) }}</div>
                        <br>
                        <a class="card-link" href="#"><h5 class="card-title">{{ post.title }}</h5></a>
                        <p class="card-text">{{ post.body }}</p>
                        <div>
                            <span class="badge badge-primary">JavaScript</span>
                            <span class="badge badge-primary">PHP</span>
                            <span class="badge badge-primary">Node.js</span>
                        </div>
                    </div>
                </div>

                <br>

            </div>
            <div class="col-md-3">
                <div class="row">
                    <div class="card mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                            <div class="row"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "clickedP",
        props: {
            post: Object
        },
        created(){
        }
    }
</script>

<style scoped>
    .container{
        margin-top: 100px;
    }
</style>
