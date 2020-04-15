Vue.component('v-label-right', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    label1: 'Work Experience',
                    label2: 'Education',
                },
                zh_tw: {
                    label1: '經驗',
                    label2: '教育',
                }
            },
        }
    },
    template: `
    <div>
        <div id="label-right">
            <div class="label hover" v-on:click="$emit('out', 0)">{{i18ns[selected]['label1']}}</div>
            <div class="label hover" v-on:click="$emit('out', 1)">{{i18ns[selected]['label2']}}</div>
        </div>
    </div>
    `
})