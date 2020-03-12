Vue.component('v-navigation', {
    props: ['selectIn','navBarSwitcher'],
    data: function () {
        return {
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
        }
    },
    template: `
    <ul class="navBar">
        <li>
            <input v-bind:value="navBarSwitcher" v-on:input="$emit('tapBar', $event.target.value)" id="radio1" type="radio" value="home" style="display:none;">
            <label for="radio1">Home</label>
        </li>
        <li>
            <input v-bind:value="navBarSwitcher" v-on:input="$emit('tapBar', $event.target.value)" id="radio2" type="radio" value="blog" style="display:none;">
            <label for="radio2">Blog</label>
        </li>
        <li>
            <div class="ln-selector">
                <select v-bind:value="selectIn" v-on:input="$emit('selectOut', $event.target.value)" style="border: none; outline: none;">
                    <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
                </select>
            </div>
        </li>
    </ul>
    `
})