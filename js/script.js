Vue.config.devtools = true;

new Vue (
    {
        el: '#app',
        data: {
            pics: [
                'img/tokyo.jpeg',
                'img/NY.jpeg',
                'img/Roma.jpeg',
                'img/vegas.jpeg',
            ],
            picsIndex: 2,
        },
        methods: {
            next: function () {
                this.picsIndex++;
            },
            prev: function () {
                this.picsIndex--;
            }
        }
    }
)