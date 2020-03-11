Vue.component('v-social-media', {
    props: ['selected'],
    data: function () {
        return {
            href: [
                "https://www.facebook.com/longmengua",
                "https://www.instagram.com/waltor1991/?r=nametag&fbclid=IwAR3DN39lbUdvQ5-aTia9AcAiJMHUrARZv3qewDOvNpCjiWRGRAgSOBPfo8M",
                "https://www.linkedin.com/in/鴻文-黃-17b61b17b",
                "https://line.me/ti/p/9UMBNQ5K5p",
            ],
        }
    },
    template: `
    <footer style="padding: 0px;" class="w3-container w3-center w3-margin-top">
        <a v-bind:href=href[0]><i class="fab fa-facebook w3-hover-opacity social-icon"></i></a>
        <a v-bind:href=href[1]><i class="fab fa-instagram w3-hover-opacity social-icon"></i></a>
        <a v-bind:href=href[2]><i class="fab fa-linkedin w3-hover-opacity social-icon"></i></a>
        <a v-bind:href=href[3]><i class="fab fa-line w3-hover-opacity social-icon"></i></a>
        <br/>
    </footer>
    `
})