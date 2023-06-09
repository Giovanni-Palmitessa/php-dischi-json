const app = Vue.createApp({
    data() {
        return{
            
        }
    }, 
    methods: {
        requestAlbums() {
            axios.get('datas.php')
                .then(response => console.log(response.data));
        }
    },
    created() {
        this.requestAlbums();
    }
});

app.mount('#app');