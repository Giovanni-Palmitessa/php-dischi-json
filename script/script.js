const app = Vue.createApp({
    data() {
        return{
            albums: [],
        }
    }, 
    methods: {
        requestAlbums() {
            axios.get('http://localhost/php-dischi-json/datas.php')
                .then(response => this.albums = response.data);
        }
    },
    created() {
        this.requestAlbums();
    }
});

app.mount('#app');