Vue.component('v-language', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    languageTitle: 'languages',
                    languages: [
                        { text: 'English', value: 60},
                        { text: 'Mandarin', value: 90},
                    ],
                },
                zh_tw: {
                    languageTitle: '語言',
                    languages: [
                        { text: '英文', value: 60},
                        { text: '中文（繁體）', value: 90},
                    ],
                }
            },
        }
    },
    template: `
    <div  id="language">
        <p class="w3-large w3-text-theme"><b><i
                class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>{{i18ns[selected]['languageTitle']}}</b>
        </p>
        <div v-for="i18n in i18ns[selected]['languages']">
            <p>{{i18n['text']}}</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
                <div class=" w3-center w3-round-xlarge w3-teal"
                     v-bind:style="{ width:i18n['value'] + '%' }">{{i18n['value']}}%
                </div>
            </div>
        </div>
        <br/>
    </div>
    `
})