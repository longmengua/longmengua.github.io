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
    <!--Profile image-->
    <img style="width: 100%;border-radius: 50%;" alt="Avatar" src="https://longmengua.github.io/assets/Profile.jpg"/>
    `
})