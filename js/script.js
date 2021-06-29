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
        created () {
            setInterval(() => {

                this.next();

            }, 1500)
        },
        methods: {

            next: function () {

                if(this.picsIndex === (this.pics.length - 1)) {
                    this.picsIndex = 0;                    
                } else {
                    this.picsIndex++;
                }
            },
            prev: function () {
                if (this.picsIndex === 0) {
                    this.picsIndex = this.pics.length - 1;
                } else {
                    this.picsIndex--; 
                }
            },
            currentDot : function (index) {
                if (index === this.picsIndex) {
                    return 'current' ;  
                } else {
                    return '';
                }
            }
        }
    }
)

