Vue.component('v-navigation', {
    props: ['selected'],
    data: function () {
        return {
            navBarSwitcher: 'home',
            options: [
                { text: 'English', value: 'en' },
                { text: '中文(台灣)', value: 'zh_tw' },
            ],
            href: [
                "https://www.facebook.com/longmengua",
                "https://www.instagram.com/waltor1991/?r=nametag&fbclid=IwAR3DN39lbUdvQ5-aTia9AcAiJMHUrARZv3qewDOvNpCjiWRGRAgSOBPfo8M",
                "https://www.linkedin.com/in/鴻文-黃-17b61b17b",
                "https://line.me/ti/p/9UMBNQ5K5p",
            ],
            i18ns: {
                en: {
                    home: 'home',
                    blog: 'blog',
                },
                zh_tw: {
                    home: '首頁',
                    blog: '部落格',
                }
            },
        }
    },
    template: `
    <div id="navigation">
        <ul class="navBar">
            <li>
                <input id="radio1" v-model="navBarSwitcher" v-on:input="$emit('page', $event.target.value)" type="radio" value="home" style="display:none;">
                <label for="radio1">{{i18ns[selected]['home']}}</label>
            </li>
            <li>
                <input id="radio2" v-model="navBarSwitcher" v-on:input="$emit('page', $event.target.value)" type="radio" value="blog" style="display:none;">
                <label for="radio2">{{i18ns[selected]['blog']}}</label>
            </li>
            <li>
                <div class="ln-selector">
                    <select v-bind:value="selected" v-on:input="$emit('out', $event.target.value)" style="border: none; outline: none;">
                        <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
                    </select>
                </div>
            </li>
        </ul>
    </div>
    `
})