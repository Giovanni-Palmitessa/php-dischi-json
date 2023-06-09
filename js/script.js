const app = Vue.createApp({
    data() {
        return{
            albums: [],
            selectedAlbum: null,
        }
    }, 
    methods: {
        requestAlbums() {
            console.log('ciao');
            axios.get('datas.php')
                .then(response => this.albums = response.data);
        }
    },
    created() {
        this.requestAlbums();
    }
});

app.mount('#app');