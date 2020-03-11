Vue.component('v-footer', {
    props: ['selected'],
    data: function () {
        return {
            i18ns: {
                en: {
                    footer: [
                        'Find me on social media.',
                    ],
                },
                zh_tw: {
                    footer: [
                        '以下是我的社交軟體',
                    ],
                }
            },
            href: [
                "https://www.facebook.com/longmengua",
                "https://www.instagram.com/waltor1991/?r=nametag&fbclid=IwAR3DN39lbUdvQ5-aTia9AcAiJMHUrARZv3qewDOvNpCjiWRGRAgSOBPfo8M",
                "https://www.linkedin.com/in/鴻文-黃-17b61b17b",
                "https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_cv&stacked=h",
                "https://line.me/ti/p/9UMBNQ5K5p",
            ],
        }
    },
    template: '<footer style="padding:20px 0px;" class="w3-container w3-teal w3-center w3-margin-top">'
    + "<p>{{i18ns[selected]['footer'][0]}}</p>"
    + '<a href={{href[0]}}><i style="font-size: 40px;margin-right: 20px;" class="fa fa-facebook-official w3-hover-opacity"></i></a>'
    + '<a href={{href[1]}}><i style="font-size: 40px;margin-right: 20px;" class="fa fa-instagram w3-hover-opacity"></i></a>'
    + '<a href={{href[2]}}><i style="font-size: 40px;margin-right: 20px;" class="fa fa-linkedin w3-hover-opacity"></i></a>'
    + '<a href={{href[3]}}><i style="font-size: 40px;margin-right: 20px;" class="fa fa-line w3-hover-opacity"></i></a>'
    + '<br/>'
    + '</footer>'
})