Vue.component('v-home', {
    props: ['selected'],
    data: function () {
        return {

        }
    },
    template: `
    <div id="home" class="w3-row-padding main">
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                <div class="w3-display-container">
                    <v-avatar v-bind:selected="selected"></v-avatar>
                </div>
                <div class="w3-display-container">
                    <v-profile v-bind:selected="selected"></v-profile>
                    <v-social v-bind:selected="selected" style="background-color:white;color:#009688!important;"></v-social>
                </div>
                <div class="w3-container">
                    <v-language v-bind:selected="selected"></v-language>
                    <br/>
                    <v-skill v-bind:selected="selected"></v-skill>
                </div>
            </div>
        </div>
        <div class="w3-twothird">
            <v-experience v-bind:selected="selected"></v-experience>
            <v-education v-bind:selected="selected"></v-education>
        </div>
    </div>
    `
})