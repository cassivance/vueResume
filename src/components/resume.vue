<template>
    <div class="test">
        <input type="text" v-model="title"><br />
        <h1> {{ title }} </h1>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>
        <ul>
            <li v-for="item in items"> {{item.title}} </li>
        </ul>
        <button v-on:click="greet">Say Greeting</button>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr />
        <label>First Name: </label><input type="text" v-model="user.firstName">
        <br />
        <label>Last Name: </label><input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: "Foo"
            }
        },
        data() {
            return {
                title: 'Hello World',
                user: {
                    firstName: 'Cassi',
                    lastName: 'Vance'
                },
                showName: true,
                items: [
                    {title: 'Item One'},
                    {title: 'Item Two'},
                    {title: 'Item Tree'}
                ]
            }
        },
        methods: {
            greet: function(){
                alert('Hello!');
            },
            pressKey: function(){
                console.log("pressed");
            },
            enterHit: function(){
                console.log("you hit enter");
            }
        },
        computed: {
            fullName: function() {
               return this.user.firstName + " " + this.user.lastName;
            }
        }
    }
</script>

<style scoped>
</style>