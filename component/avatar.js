Vue.component('v-avatar', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {

                },
                zh_tw: {

                }
            },
        }
    },
    template: `
    <div id="avatar">
        <img style="width: 100%;border-radius: 50%;max-width: 300px;margin:0 auto;" alt="Avatar" src="https://longmengua.github.io/assets/Profile.jpg"/>
    </div>
    `
})