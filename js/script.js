console.log('JS ok')


const app = Vue.createApp({
    data() {
        return {
            mails : [],
            items : 10,
        }
    },
    mounted(){
        
        for (let i = 0; i < this.items; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(res => {
                const mail = res.data.response;
                this.mails.push(mail);
            });
        };
    },
});




app.mount ('#root');
