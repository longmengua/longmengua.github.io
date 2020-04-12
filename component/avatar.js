Vue.component('v-avatar', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    name: 'Waltor Huang',
                },
                zh_tw: {
                    name: '黃鴻文',
                }
            },
        }
    },
    template: `
    <div id="avatar" style="max-width: 300px;margin:0 auto;">
        <img style="width: 100%;border-radius: 50%;" alt="Avatar" src="https://longmengua.github.io/assets/Profile.jpg"/>
        <div style="text-align: center;">
            <h2>{{i18ns[selected]['name']}}</h2>
        </div>
    </div>
    `
})