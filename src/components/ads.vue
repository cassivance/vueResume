<template>
    <div class="ads">
        <h1>Advertisements</h1>
        <div id="videos" v-for="video in videos">
            <h3>{{video.title}}</h3>
            <div class='embed-container'>
                <iframe :src="video.href" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <h4>{{video.role}}</h4>
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
                        title: 'Chatbooks',
                        href: 'https://www.youtube.com/embed/PTTs7ewuDY8',
                        role: 'Co-Writer with David Vance'
                    },                  
                    {
                        title: 'Unicorn Gold',
                        href: 'https://www.youtube.com/embed/LqL4DRZ2EkA',
                        role: 'Co-Writer with David Vance'
                    },
                    {
                        title: 'Camp Chef',
                        href: 'https://www.youtube.com/embed/DJgz7CStWlY',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        title: 'Temp',
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
    h1{
        margin: 1.2rem;
    }

   .embed-container { 
        position: relative; 
        padding-bottom: 56.25%; 
        height: 0; 
        overflow: hidden; 
        max-width: 100%; 
        height: auto; 
     } 
     .embed-container iframe, .embed-container object, .embed-container embed { 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
    }
</style>