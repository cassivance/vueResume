<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="enter name">
            <br />
            <input type="text" v-model="newUser.email" placeholder="enter email">
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        props: {
            msg: {
                type: String,
                default: "Foo"
            }
        },
        data() {
            return {
                newUser: {},
                users: [
                    {
                        name: 'John Doe',
                        email: 'jdoe@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Steve Smith',
                        email: 'sdoe@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Frank Doe',
                        email: 'fdoe@gmail.com',
                        contacted: false
                    },
                ]

            }
        },
        methods: {
            addUser: function (e) {
                console.log("added");
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                });
                e.preventDefault();
            }
        }
    }

</script>

<style scoped>
    .contacted {
        text-decoration: line-through;
    }
</style>