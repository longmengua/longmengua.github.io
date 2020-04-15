Vue.component('v-experience', {
    props: ['selected'],
    data: function () {
        return {
            workExperienceLinks: [
                'https://www.kenconts.com/',
                'https://www.wistronits.com/tw/',
                'http://www.liscoglobal.com/',
                'http://www.rsl.com.tw/',
            ],
            i18ns: {
                en: {
                    workExperienceTitle : 'Work Experience',
                    workExperience: [
                        {title:'Software Engineer / KENCONTS LTD.', date:'2019.08 - Now',content:'On-site working in H2UClub as Full-stack and Flutter programmer. Have two experiences of developing apps, one is co-working with three co-workers, another one is developing individually, translating the existing android app to a cross-platform app by flutter.'},
                       {title:'Software Engineer / WISTRON ITS', date:'2019.03 - 2019.08',content:'1. On-site working in Fubon Bank. Missions are consist of discussing the business documents is logical with BA, working with programmers of other companies. 2. On-site working as a Front-End programmer in Cathay Bank. Using react.js for maintaining the existing project, angular 8 for developing an app by translating react js to angular 8.'},
                        {title:'Software Engineer / LISCO Global SOLUTION LTD.', date:'2018.02 - 2019.01',content:'Develop a vendor management system, work as a full stack, my jobs contain maintain the existing project, and try to find out something can make it better. ( Full-stack programmer with java, angularJS. )'},
                        {title:'Software Assistant Engineer / RSL LTD.', date:'2016.10 - 2017.03',content:'Maintaining existing projects, using the same template to develop a product, cross-platform, like the window, Ubuntu. The product is developed in traditional c, using points, struct, memory operation. (Traditional C programmer.)'},
                    ],
                },
                zh_tw: {
                    workExperienceTitle : '經歷',
                    workExperience: [
                        {title:'軟體工程師 / 宏益科技服務', date:'2019／08~Now',content:'駐點在鴻海旗下(永悅健康)，擔任全端以及手機軟體開發。開發兩個ＡＰＰ，一個是hi365，另一個是獨立開發，將既有的Android app，使用Flutter技術將其翻譯成誇平台App。'},
                        {title:'軟體工程師 / 緯創軟體', date:'2019／03～2019／08',content:'1. 駐點富邦銀行，擔任Java工程師，工作內容是和BA討論規格書是否有邏輯上的衝突以及開發軟體。2. 駐點國泰銀行，擔任前端工程師，維護既有React專案以及將此案子轉換成Angular 8。'},
                        {title:'軟體工程師 / 仕傑科技', date:'2018／02～2019／01',content:'全端開工程師，使用AngularJS、Java，框架有Spring、Spring boot、Spring boot、Spring security、Spring Data、Elastic Search、Liquibase、AngularJS、Jhipster、Gulp、Bower，使用過的標準有Oauth2，資料庫MYSQL。Project是像似104人力銀行。前端幾乎都使用Javascript、CSS3，不熟Bootstrap、Jquery，也比較偏好寫Javascript、CSS3。'},
                        {title:'軟體助理工程師 / 宏誌科技', date:'2016／10～2017／03',content:'維護既有POS系統，開發新功能，跨平台開發(Ubuntu, Window.)，使用C語言，開發工具CBC和Qt。'},
                    ],
                }
            },
        }
    },
    template: `
    <div id="experience" class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i
                class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{{i18ns[selected]['workExperienceTitle']}}
        </h2>
        <div class="w3-container" v-for="(workExperience, index) in i18ns[selected]['workExperience']">
            <h5 class="w3-opacity">
                <a v-bind:href="index > workExperienceLinks.length ? null : workExperienceLinks[index]">
                    <b style="color: blue;">{{workExperience['title']}}</b>
                </a>
            </h5>
            <h6 class="w3-text-teal">
                <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                <span>{{workExperience['date']}}</span>
            </h6>
            <p>{{workExperience['content']}}</p>
            <br/>
        </div>
    </div>
    `
})