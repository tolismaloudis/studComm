<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2"><img class="rounded-circle" width="42" src="https://picsum.photos/50/50" alt=""></div>
                                <div class="ml-2">
                                    <div class="h5 m-0">{{this.user}}</div>
                                    <div class="text-muted">Student</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2 pull-right"> <i class="fa fa-clock-o"></i>{{this.createdAt}}</div>
                        <br>
                        <a class="card-link" href="#"><h5 class="card-title">{{this.title}}</h5></a>
                        <p class="card-text">{{this.body}}</p>
                        <div>
                            <span class="badge badge-primary">JavaScript</span>
                            <span class="badge badge-primary">PHP</span>
                            <span class="badge badge-primary">Node.js</span>
                        </div>
                    </div>
                </div>

                <br>

                <div class="box box-comments">
                    <div class="box-commment">
                        <form action="#" method="post">
                            <img class="img-responsive rounded-circle img-sm" src="https://picsum.photos/50/70" alt="Alt Text">
                            <div class="img-push"><input type="text" class="form-control input-sm" placeholder="Press enter to post comment"></div>
                        </form>
                    </div>
                    <br>
                    <div class="box-comment">
                        <img class="rounded-circle img-sm" src="https://picsum.photos/50/5" alt="User Image">
                        <div class="comment-text">
                            <span class="username">
                                it185210<span class="text-muted pull-right"><i class="fa fa-clock-o"></i> 10 min ago</span>
                            </span>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </div>
                    </div>
                    <div class="box-comment">
                        <img class="rounded-circle img-sm" src="https://picsum.photos/50/60" alt="User Image">
                        <div class="comment-text">
                            <span class="username">
                                it186537<span class="text-muted pull-right"><i class="fa fa-clock-o"></i> 10 min ago</span>
                            </span>
                            The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like readable English.
                        </div>
                    </div>
                </div>
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
            posts: Array
        }
    }
</script>
