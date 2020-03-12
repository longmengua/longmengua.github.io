Vue.component('v-navigation', {
    props: ['select'],
    data: function () {
        return {
            navBarSwitcher: 'home',
            options: [
                { text: 'English', value: 'en' },
                { text: '中文(台灣)', value: 'zh_tw' },
            ],
            i18ns: {
                en: {

                },
                zh_tw: {

                }
            },
            href: [
                "https://www.facebook.com/longmengua",
                "https://www.instagram.com/waltor1991/?r=nametag&fbclid=IwAR3DN39lbUdvQ5-aTia9AcAiJMHUrARZv3qewDOvNpCjiWRGRAgSOBPfo8M",
                "https://www.linkedin.com/in/鴻文-黃-17b61b17b",
                "https://line.me/ti/p/9UMBNQ5K5p",
            ],
        }
    },
    template: `
    <ul class="navBar">
        <li>
            <input id="radio1" v-model="navBarSwitcher" type="radio" value="home" style="display:none;">
            <label for="radio1">Home</label>
        </li>
        <li>
            <input id="radio2" v-model="navBarSwitcher" type="radio" value="blog" style="display:none;">
            <label for="radio2">Blog</label>
        </li>
        <li>
            <div class="ln-selector">
                <select v-bind:value="select['language']" v-on:input="$emit('input', select)" style="border: none; outline: none;">
                    <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
                </select>
            </div>
        </li>
    </ul>
    `
})