Vue.component('v-footer', {
    props: ['selected'],
    data: {
        en: {
            footer: [
                'This website is refer to the w3school template.(Using Vue.js to do i18n.)',
                'Find me on social media.',
            ],
        },
        zh_tw: {
            footer: [
                '這個網站是參考 w3school 範本. (使用 Vue.js 實作多國語系.）',
                '以下是我的社交軟體',
            ],
        }
    },
    template: '<footer style="padding:20px 0px;" class="w3-container w3-teal w3-center w3-margin-top">'
    + '<p>{{[selected]["footer"][1]}}</p>'
    + '</footer>'
})