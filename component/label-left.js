Vue.component('v-label-left', {
    props: ['selected'],
    data: function () {
        return {
        }
    },
    template: `
    <div>
        <div id="label-left">
            <div class="label hover" v-on:click="$emit('out', 0)">Basic Info.</div>
            <div class="label hover" v-on:click="$emit('out', 1)">Tech Skills Info.</div>
        </div>
    </div>
    `
})