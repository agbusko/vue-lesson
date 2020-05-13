// Главный файл JS;
import '../styles/app'; // общие стили (app.less);
import Vue from 'vue';

new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Artem',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        ]
    }
});