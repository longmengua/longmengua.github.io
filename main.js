var vu = new Vue({
    el: '#index',
    beforeCreate: function() {
      (function includeHTML() {
         var z, i, elmnt, file, xhttp;
         /*loop through a collection of all HTML elements:*/
         z = document.getElementsByTagName("*");
         for (i = 0; i < z.length; i++) {
           elmnt = z[i];
           /*search for elements with a certain atrribute:*/
           file = elmnt.getAttribute("w3-include-html");
           if (file) {
             /*make an HTTP request using the attribute value as the file name:*/
             xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function() {
               if (this.readyState == 4) {
                 if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                 if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                 /*remove the attribute, and call this function once more:*/
                 elmnt.removeAttribute("w3-include-html");
                 includeHTML();
               }
             }
             xhttp.open("GET", file, true);
             xhttp.send();
             /*exit the function:*/
             return;
           }
         }
      })();
    },
    data: {
      navBarSwitcher: 'home',
      /* below is for i18n language */
      selected: 'en',
      options: [
        { text: 'English', value: 'en' },
        { text: '中文(台灣)', value: 'zh_tw' },
      ],
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
      workExperienceLinks: [
        'https://www.kenconts.com/',
        'https://www.wistronits.com/tw/',
        'http://www.liscoglobal.com/',
        'http://www.rsl.com.tw/',
      ],
      educationLinks: [
        'https://web.iii.org.tw/',
        'https://www.npu.edu.tw/eng/latestevent/index.aspx?Parser=9,20,89',
      ],
      i18ns: {
        en: {
          barTitle: 'Resume',
          barLanguageTitle: 'language',
          name: 'Waltor Huang',
          title:'Programmer',
          location: 'Taipei, Taiwan',
          languageTitle: 'languages',
          languages: [
            { text: 'English', value: 65},
            { text: 'Mandarin', value: 100},
          ],
          skillTitle: 'Skills (Scrollable)',
          workExperienceTitle : 'Work Experience',
          workExperience: [
            {title:'Software Engineer / KENCONTS LTD.', date:'2019.08 - Now',content:'On-site  working  in  H2UClub  as  Full-stack  and  Flutter  programmer.(Full-stack + App programmer with java, flutter, swift, android.)'},
            {title:'Software Engineer / WISTRON ITS', date:'2019.03 - 2019.08',content:'1. On-site working in Fubon Bank. Missions are consist of discussing the business of documents is logical with BA by phone call, and working with programmers of other companies. 2. On-site working in Cathay Bank. Working in Front-End with react.js for maintaining the existing project and angular 8 for converting  react.js to angular 8. ( Full-stack programmer with java, react, angular 8. )'},
            {title:'Software Engineer / LISCO Global SOLUTION LTD.', date:'2018.02 - 2019.01',content:'Develop  a  vendor  management  system,  work  as  a  full  stack,  my  jobs  contain  maintain  the  existing  project,  and  try  to  find  out  something  can  make  it  better. ( Full-stack programmer with java, angularJS. )'},
            {title:'Software Assistant Engineer / RSL LTD.', date:'2016.10 - 2017.03',content:'Maintaining  existing  projects,  using  the  same  template  to  develop  a  product,  cross-platform,  like  the  window,  Ubuntu. The  product  is  developed  in  traditional  c,  using  points,  struct,  memory  operation. ( Traditional C programmer. )'},
          ],
          educationTitle : 'Education',
          education: [
            {title:'Institute for Information Industry，III', date:'2017.08 - 2018.01',content:'Web application course with java, html, css, javascript.'},
            {title:'Taiwan National Penghu University of Science and Technology', date:'2011.09 - 2014.06',content:'Department of Communication Engineering.'},
          ],
          footer: [
            'This website is refer to the w3school template.(Using Vue.js to do i18n.)',
            'Find me on social media.',
          ],
        },
        zh_tw: {
          barTitle: '履歷',
          barLanguageTitle: '語系',
          name: '黃鴻文',
          title:'軟體工程師',
          location: '台灣台北',
          languageTitle: '語言',
          languages: [
            { text: '英文', value: 65},
            { text: '中文（繁體）', value: 90},
          ],
          skillTitle: '技術 (可捲動瀏覽）',
          workExperienceTitle : '經歷',
          workExperience: [
            {title:'軟體工程師 / 宏益科技服務', date:'2019／08~Now',content:'駐點在鴻海旗下(永悅健康)，擔任全端以及手機軟題開發 (要自己寫Restful API及App畫面，使用 ngrok 做Debug。)，與其他工程師一起開發Hi365 (已上架），以及獨立開發Flutter App ( 將已存在的Android app，使用Flutter技術將其翻譯成iOS上的App )。'},
            {title:'軟體工程師 / 緯創軟體', date:'2019／03～2019／08',content:'1. 駐點富邦銀行，擔任Java工程師，工作內容是和BA討論規格書是否有邏輯上的衝突以及開發軟體。2. 駐點國泰銀行，擔任前端工程師，維護既有React專案以及將此案子轉換成Angular 8。'},
            {title:'軟體工程師 / 仕傑科技', date:'2018／02～2019／01',content:'全端開工程師，使用AngularJS、Java，框架有Spring、Spring boot、Spring boot、Spring security、Spring Data、Elastic Search、Liquibase、AngularJS、Jhipster、Gulp、Bower，使用過的標準有Oauth2，資料庫MYSQL。Project是像似104人力銀行。前端幾乎都使用Javascript、CSS3，不熟Bootstrap、Jquery，也比較偏好寫Javascript、CSS3。'},
            {title:'軟體助理工程師 / 宏誌科技', date:'2016／10～2017／03',content:'維護既有POS系統，開發新功能，跨平台開發(Ubuntu, Window.)，使用C語言，開發工具CBC和Qt。'},
          ],
          educationTitle : '學/經歷',
          education: [
            {title:'財團法人資訊工業策進會(資策會)', date:'2017.08 - 2018.01',content:'Java 網頁開發養成班。'},
            {title:'國立澎湖科技大學', date:'2011.09 - 2014.06',content:'電信工程學系。'},
          ],
          footer: [
            '這個網站是參考 w3school 範本. (使用 Vue.js 實作多國語系.）',
            '以下是我的社交軟體',
          ],
        },
      },
    }
  });