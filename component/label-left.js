Vue.component('v-label-left', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    birthday: '12.03.1991',
                    title:'Programmer',
                    location: 'Taipei, Taiwan',
                },
                zh_tw: {
                    birthday: '生日: 80.12.03',
                    title:'軟體工程師',
                    location: '台灣，台北市',
                }
            },
        }
    },
    template: `
    <div>
        <div id="label-left">
            <div class="label">1</div>
            <div class="label">2</div>
            <div class="label">3</div>
        </div>
        <div id="label-left">
            <div class="label">1</div>
            <div class="label">2</div>
            <div class="label">3</div>
        </div>
    </div>
    `
})