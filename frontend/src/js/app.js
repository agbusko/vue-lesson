// Главный файл JS;
import '../styles/app'; // общие стили (app.less);
import Vue from 'vue';

Vue.directive('ondelay', {
    bind(el, options) {
        let timer;
        let timeout = 600;

        for (let name in options.modifiers){
            if (!isNaN(+name)) {
                timeout = parseInt(name);
            }
        }

        let callback = (e) => {
            if (timer !== 'undefined') {
                clearInterval(timer);
            }

            if (options.modifiers.prevent) {
                e.preventDefault();
            }

            timer = setTimeout(() => {
                options.value.call(this, e);
            }, timeout);
        };

        el.addEventListener(options.arg, callback);
    }
});

new Vue({
    el: '.sample',
    data: {
        clicks: 0
    },
    created(){
    },
    methods: {
        onClick(){
            this.clicks++;
        }
    },
    computed: {
    }
});