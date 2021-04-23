import axios from "axios";

class postService{

    //GET ALL POSTS
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get('http://localhost:5000/posts').then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post, createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                console.log(err);
            })
            
        });
    }

    //CREATE NEW POST
    static newPost(new_post){
        return axios.post('http://localhost:5000/posts', {
            new_post
        });
        
    }

}

export default postService;
