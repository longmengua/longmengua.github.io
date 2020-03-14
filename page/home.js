Vue.component('v-home', {
    props: ['selected'],
    data: function () {
        return {

        }
    },
    template: `
    <!-- The Grid -->
    <div class="w3-row-padding main">
        <!-- Left Column -->
        <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
                <div class="w3-display-container">
                    <v-avatar v-bind:selected="selected"></v-avatar>
                </div>
                <div class="w3-display-container">
                    <v-profile v-bind:selected="selected"></v-profile>
                </div>
                <div class="w3-container">
                    <v-language v-bind:selected="selected"></v-language>
                    <br/>
                    <v-skill v-bind:selected="selected"></v-skill>
                </div>
            </div>
        </div>
        <!-- End Left Column -->
        <!-- Right Column -->
        <div class="w3-twothird">
            <v-work-experience v-bind:selected="selected"></v-work-experience>
            <v-education v-bind:selected="selected"></v-education>
        </div>
        <!-- End Right Column -->
    </div>
    `
})