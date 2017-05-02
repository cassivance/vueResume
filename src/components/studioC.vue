<template>
    <div class="studioC">
        <h1>Studio C</h1>
        <div v-for="video in videos">
             <iframe width="560" height="315" :src="video.href" frameborder="0" allowfullscreen></iframe>
             <h3>{{video.role}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'studioC',
        data() {
            return {
                videos: [
                    {
                        href: 'https://www.youtube.com/embed/ayBmsWKqdnc',
                        role: 'Writer'
                    },                  
                    {
                        href: 'https://www.youtube.com/embed/JXO44xIvyuY',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        href: 'https://www.youtube.com/embed/DJgz7CStWlY',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        href: 'https://www.youtube.com/embed/am1tzttZ8Pc',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        href: 'https://www.youtube.com/embed/6OmQ7BnvWDU',
                        role: 'Co-Composer with David Vance'
                    }
                ]
            }
        },
        methods: {

        }
    }

</script>

<style scoped>

</style>