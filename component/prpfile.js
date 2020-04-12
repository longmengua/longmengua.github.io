Vue.component('v-profile', {
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
    <div id="profile" style="margin: 0px 20px;">
        <p>
            <i class="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>
            {{i18ns[selected]['birthday']}}
        </p>
        <p>
            <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
            {{i18ns[selected]['title']}}
        </p>
        <p>
            <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
            {{i18ns[selected]['location']}}
        </p>
        <p>
            <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
            <a href="mailto:longmengua@gmail.com">longmengua@gmail.com</a>
        </p>
        <p>
            <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
            0972-980-121
        </p>
    </div>
    `
})