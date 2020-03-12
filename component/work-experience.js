Vue.component('v-work-experience', {
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
                        {title:'Software Engineer / KENCONTS LTD.', date:'2019.08 - Now',content:'On-site  working  in  H2UClub  as  Full-stack  and  Flutter  programmer.(Full-stack + App programmer with java, flutter, swift, android.)'},
                        {title:'Software Engineer / WISTRON ITS', date:'2019.03 - 2019.08',content:'1. On-site working in Fubon Bank. Missions are consist of discussing the business of documents is logical with BA by phone call, and working with programmers of other companies. 2. On-site working in Cathay Bank. Working in Front-End with react.js for maintaining the existing project and angular 8 for converting  react.js to angular 8. ( Full-stack programmer with java, react, angular 8. )'},
                        {title:'Software Engineer / LISCO Global SOLUTION LTD.', date:'2018.02 - 2019.01',content:'Develop  a  vendor  management  system,  work  as  a  full  stack,  my  jobs  contain  maintain  the  existing  project,  and  try  to  find  out  something  can  make  it  better. ( Full-stack programmer with java, angularJS. )'},
                        {title:'Software Assistant Engineer / RSL LTD.', date:'2016.10 - 2017.03',content:'Maintaining  existing  projects,  using  the  same  template  to  develop  a  product,  cross-platform,  like  the  window,  Ubuntu. The  product  is  developed  in  traditional  c,  using  points,  struct,  memory  operation. ( Traditional C programmer. )'},
                    ],
                },
                zh_tw: {
                    workExperienceTitle : '經歷',
                    workExperience: [
                        {title:'軟體工程師 / 宏益科技服務', date:'2019／08~Now',content:'駐點在鴻海旗下(永悅健康)，擔任全端以及手機軟題開發 (要自己寫Restful API及App畫面，使用 ngrok 做Debug。)，與其他工程師一起開發Hi365 (已上架），以及獨立開發Flutter App ( 將已存在的Android app，使用Flutter技術將其翻譯成iOS上的App )。'},
                        {title:'軟體工程師 / 緯創軟體', date:'2019／03～2019／08',content:'1. 駐點富邦銀行，擔任Java工程師，工作內容是和BA討論規格書是否有邏輯上的衝突以及開發軟體。2. 駐點國泰銀行，擔任前端工程師，維護既有React專案以及將此案子轉換成Angular 8。'},
                        {title:'軟體工程師 / 仕傑科技', date:'2018／02～2019／01',content:'全端開工程師，使用AngularJS、Java，框架有Spring、Spring boot、Spring boot、Spring security、Spring Data、Elastic Search、Liquibase、AngularJS、Jhipster、Gulp、Bower，使用過的標準有Oauth2，資料庫MYSQL。Project是像似104人力銀行。前端幾乎都使用Javascript、CSS3，不熟Bootstrap、Jquery，也比較偏好寫Javascript、CSS3。'},
                        {title:'軟體助理工程師 / 宏誌科技', date:'2016／10～2017／03',content:'維護既有POS系統，開發新功能，跨平台開發(Ubuntu, Window.)，使用C語言，開發工具CBC和Qt。'},
                    ],
                }
            },
        }
    },
    template: `
    <!--Work Experience-->
    <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i
                class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{{i18ns[selected]['workExperienceTitle']}}
        </h2>
        <div class="w3-container" v-for="(workExperience, index) in i18ns[selected]['workExperience']">
            <h5 class="w3-opacity"><b>{{workExperience['title']}}</b>&nbsp;<a
                    v-bind:href="index > workExperienceLinks.length ? null : workExperienceLinks[index]"><i
                    class="scalable fa fa-external-link fa-fw w3-margin-right"></i></a></h5>
            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{{workExperience['date']}}
            </h6>
            <p>{{workExperience['content']}}</p>
            <br/>
        </div>
    </div>
    `
})