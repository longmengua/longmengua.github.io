Vue.component('v-profile', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    name: 'Waltor Huang',
                    title:'Programmer',
                    location: 'Taipei, Taiwan',
                },
                zh_tw: {
                    name: '黃鴻文',
                    title:'軟體工程師',
                    location: '台灣，台北市',
                }
            },
        }
    },
    template: `
    <div id="profile" style="margin: 0px 20px;">
        <div style="text-align: center;">
            <h2>{{i18ns[selected]['name']}}</h2>
        </div>
        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{{i18ns[selected]['title']}}
        </p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{{i18ns[selected]['location']}}
        </p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>longmengua@gmail.com
        </p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>0972-980-121</p>
    </div>
    `
})