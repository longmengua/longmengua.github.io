Vue.component('v-education', {
    props: ['selected'],
    data: function () {
        return {
            educationLinks: [
                'https://web.iii.org.tw/',
                'https://www.npu.edu.tw/eng/latestevent/index.aspx?Parser=9,20,89',
            ],
            i18ns: {
                en: {
                    educationTitle : 'Education',
                    education: [
                        {title:'Institute for Information Industry，III', date:'2017.08 - 2018.01',content:'Web application course with java, html, css, javascript.'},
                        {title:'Taiwan National Penghu University of Science and Technology', date:'2011.09 - 2014.06',content:'Department of Communication Engineering.'},
                    ],
                },
                zh_tw: {
                    educationTitle : '學/經歷',
                    education: [
                        {title:'財團法人資訊工業策進會(資策會)', date:'2017.08 - 2018.01',content:'Java 網頁開發養成班。'},
                        {title:'國立澎湖科技大學', date:'2011.09 - 2014.06',content:'電信工程學系。'},
                    ],
                }
            },
        }
    },
    template: `
    <!--Education-->
    <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i
                class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{{i18ns[selected]['educationTitle']}}
        </h2>
        <div class="w3-container" v-for="(education, index) in i18ns[selected]['education']">
            <h5 class="w3-opacity"><b>{{education['title']}}</b>&nbsp;<a
                    v-bind:href="index > educationLinks.length ? null : educationLinks[index]"><i
                    class="scalable fa fa-external-link fa-fw w3-margin-right"></i></a></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{{education['date']}}
            </h6>
            <p>{{education['content']}}</p>
            <br/>
        </div>
    </div>
    `
})