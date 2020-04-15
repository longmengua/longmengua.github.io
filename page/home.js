Vue.component('v-home', {
    props: ['selected'],
    data: function () {
        return {
            labelOption1:0 //0: basic info, 1: tech skills info.
            labelOption2:0 //0: work experience, 1: education.
        }
    },
    template: `
    <div id="home" class="w3-row-padding main">
        <div class="w3-third left-side">
            <div style="text-align:center;">
                <v-label-left v-bind:selected="selected" v-on:out="labelOption1 = $event"></v-label-left>
            </div>
            <div class="w3-white w3-text-grey w3-card-4">
                <div v-show="labelOption1 == 0" class="w3-display-container">
                    <v-avatar v-bind:selected="selected"></v-avatar>
                </div>
                <div v-show="labelOption1 == 0" class="w3-display-container">
                    <v-social v-bind:selected="selected" style="background-color:white;color:#009688!important;"></v-social>
                    <v-profile v-bind:selected="selected"></v-profile>
                </div>
                <hr/>
                <div v-show="labelOption1 == 0" class="w3-container">
                    <v-language v-bind:selected="selected"></v-language>
                </div>
                <br/>
                <div v-show="labelOption1 == 1" class="w3-container">
                    <v-skill v-bind:selected="selected"></v-skill>
                </div>
                <br/>
            </div>
        </div>
        <div class="w3-twothird right-side">
            <div style="text-align:center;">
                <v-label-right v-bind:selected="selected" v-on:out="labelOption2 = $event"></v-label-right>
            </div>
            <v-experience v-show="labelOption2 == 0"  v-bind:selected="selected"></v-experience>
            <v-education v-show="labelOption2 == 1"  v-bind:selected="selected"></v-education>
        </div>
    </div>
    `
})