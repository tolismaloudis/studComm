<template>
    <div class="container">
        
            <div class="row">
                <div class="col-md-8 bg-white" id="left_side">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-12"><h4>Νέα δημοσίευση</h4></div>  
                        </div>    
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label for="post_examino" class="col-12 col-form-label">Επέλεξε εξάμηνο</label> 
                                <div class="col-12">
                                    <select id="post_examino" name="post_examino" class="custom-select">
                                        <option value="first">1o</option>
                                        <option value="second">2ο</option>
                                        <option value="third">3ο</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label for="post_mathima" class="col-12 col-form-label">Επέλεξε μάθημα</label> 
                                <div class="col-12">
                                <select id="post_mathima" name="post_mathima" class="custom-select">
                                    <option value="domes_dedomenon">Δομές Δεδομένων</option>
                                    <option value="mhxanikh_logismikou">Μηχανική Λογισμικού</option>
                                    <option value="technologia_vaseon_dedomenon">Τεχνολογία Βάσεων Δεδομένων</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group row">
                                <div class="col-12">
                                    <input type="text" v-model="title" id="post_title" name="post_title" placeholder="Τίτλος δημοσίευσης" class="form-control here" required >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group row">
                                <div class="col-12">
                                    <textarea v-model="body" id="textarea" name="textarea" maxlength="800" placeholder="Περιεχόμενο" required cols="40" rows="5" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group row">
                                <div class="col-12">
                                    <input id="post_keywords" name="post_keywords" placeholder="Λέξεις-κλειδιά χωρισμένες με κόμμα" class="form-control here" type="text">
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button v-on:click="newPost" class="col-12 btn btn-primary">Δημοσίευση</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id="right_side">
                    <div class="row">
                        <div class="card mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-light head">Δημιουργία ανάρτησης στο stackiee..</div>
                            <div class="card-body">
                                <div class="form-group row">
                                    <div id="cont" class="col-12">
                                        <ol>
                                            <li>Θυμήσου ότι το περιεχόμενο της δημοσίευσης μπορεί να φανεί αρκετά χρήσιμο στους υπόλοιπους</li>
                                            <li>Κάνε αναζήτηση με λέξεις-κλειδιά μήπως υπάρχει μία παρόμοια ανάρτηση</li>
                                        </ol>
                                    </div>
                                </div> 
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        
    </div>
</template>

<script>
import postService from '../postService'

    export default{
        name: 'NewPost',
        data() {
            return {
                posts: [],
                error: '',
                user: 'SOSTOS USER',
                title: '',
                body: '',
            }
        },
        methods: {
            async newPost(){
                var empty_title = document.getElementById("post_title").value;
                var empty_body = document.getElementById("textarea").value;
                if (empty_title === "" || empty_body === ""){
                    alert("Συμπλήρωσε τον τίτλο και το περιεχόμενο της ανάρτησης για να υποβληθεί η δημοσίευση");
                    return;
                }
                const newPost = {
                    user: this.user,
                    title: this.title,
                    body: this.body
                }
                await postService.newPost(newPost);

                this.title = "";
                this.body = "";
            }
        }
    }

</script>

<style scoped>
    
    .container{
        margin: 6.5em 135.6px;
        width: 60%;
        position: relative;
        padding: 0.5em 24px 24px 24px;
    }
    #left_side{
        padding-top: 20px;
        padding-bottom: 20px;
        border: 3px solid white;
        border-radius: 5px;
    }
    #right_side{
        padding-left: 80px;
    }
    ol li{
        border-bottom: 1px solid #edeff1;
        padding: 10px 5px;
        font-size: 14px;
    }
    #cont{
        position: relative;
        left: -34px;
        list-style: decimal;
        list-style-position: inside;
    }
    .head{
        border-bottom: 2px solid #edeff1;
        font-weight: bold;
        font-size: 16px;
    }
    textarea {
        max-height: 150px;
        min-height: 100px;
    }
</style>
