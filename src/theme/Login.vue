<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">User</label>
            <input v-model="usernane" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User">
        
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
       
        <button v-on:click="login()" type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>

export default {
    data () {
        return{
            usernane: '',
            password: ''
        }
    },
    methods: {
        login () {
           if(this.usernane && this.password){
               this.$router.push('category')
           }
        }
    }
}
</script>

