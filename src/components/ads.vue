<template>
    <div class="ads">
        <h1>Advertisements</h1>
        <div v-for="video in videos">
             <iframe width="560" height="315" :src="video.href" frameborder="0" allowfullscreen></iframe>
             <h3>{{video.role}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ads',
        data() {
            return {
                videos: [
                    {
                        href: 'https://www.youtube.com/embed/PTTs7ewuDY8',
                        role: 'Co-Writer with David Vance'
                    },                  
                    {
                        href: 'https://www.youtube.com/embed/LqL4DRZ2EkA',
                        role: 'Co-Writer with David Vance'
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