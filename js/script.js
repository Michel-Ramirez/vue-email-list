console.log('JS ok')

const point = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

const app = Vue.createApp({
    data() {
        return {
            mails : [],
            items : 10,
        }
    },
    methods: {
        getEmail() {

            for (let i = 0; i < items; i++){
                const mail = point.data.response;
                this.mails.push(mail);
            }

        },
    },
    // created(){
    //     getEmail();
    // },
});




app.mount ('#root');
