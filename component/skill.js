Vue.component('v-skill', {
    props: ['selected'],
    data: function () {
        return {
            skills: [
                {text:'Java', value:'80'},
                {text:'HTML5', value:'90'},
                {text:'CSS3', value:'90'},
                {text:'JavaScript', value:'80'},
                {text:'Swift', value:'60'},
                {text:'Android', value:'60'},
                {text:'Flutter', value:'90'},
                {text:'Dart', value:'90'},
                {text:'AngularJS', value:'80'},
                {text:'Angular 8', value:'30'},
                {text:'React', value:'30'},
                {text:'Vue', value:'30'},
                {text:'Gulp', value:'60'},
                {text:'Bower', value:'30'},
                {text:'Liquibase', value:'30'},
                {text:'Spring', value:'60'},
                {text:'Spring MVC', value:'60'},
                {text:'Spring boot', value:'60'},
                {text:'Spring Security', value:'60'},
                {text:'Oauth 2', value:'60'},
                {text:'AES Encryption', value:'60'},
                {text:'Jhipster', value:'60'},
            ],
            i18ns: {
                en: {
                    skillTitle: 'Skills (Scrollable Browse)',
                },
                zh_tw: {
                    skillTitle: '技術 (捲動瀏覽）',
                }
            },
        }
    },
    template: `
    <div id="skill">
        <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>{{i18ns[selected]['skillTitle']}}</b>
        </p>
        <div style="">
            <div v-for="skill in skills">
                <p>{{skill['text']}}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal"
                         v-bind:style="{ width:skill['value'] + '%' }">{{skill['value']}}%
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    `
})