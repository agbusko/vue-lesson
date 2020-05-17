// Главный файл JS;
import '../styles/app'; // общие стили (app.less);
import Vue from 'vue';

new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]+$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]+$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /^[a-zA-Z]+$/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /^[a-zA-Z]+$/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /^[a-zA-Z]+$/
            }
        ],
        controls: [],
        formSubmited: false
    },
    created(){
        for (let i = 0; i < this.info.length; i++){
            this.controls.push({
                error: !this.info[i].pattern.test(this.info[i].value),
                activated: this.info[i].value != ''
            });
        }
    },
    methods: {
        onInput(index, value){
            let data = this.info[index];
            let control = this.controls[index];

            data.value = value;
            control.error = !data.pattern.test(value);
            control.activated = true;
        }
    },
    computed: {
        done(){
            let done = 0;

            for (let i = 0; i < this.controls.length; i++){
                if (!this.controls[i].error){
                    done++;
                }
            }

            return done;
        },
        progressWidth(){
            return {
                width: (this.done / this.info.length * 100) + '%'
            };
        }
    }
});