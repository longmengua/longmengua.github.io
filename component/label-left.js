Vue.component('v-label-left', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    label1: 'Basic Info.',
                    label2: 'Skills Info.',
                },
                zh_tw: {
                    label1: '基本資料',
                    label2: '技術',
                }
            },
        }
    },
    template: `
    <div>
        <div id="label-left">
            <div class="label hover" v-on:click="$emit('out', 0)">{{i18ns[selected]['label1']}}</div>
            <div class="label hover" v-on:click="$emit('out', 1)">{{i18ns[selected]['label2']}}</div>
        </div>
    </div>
    `
})