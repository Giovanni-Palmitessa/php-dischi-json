const app = Vue.createApp({
    data() {
        return{
            albums: [],
            selectedAlbum: null,
        }
    }, 
    methods: {
        requestAlbums() {
            axios.get('datas.php')
                .then(response => this.albums = response.data);
        },
        selectAlbum(album) {
            this.selectedAlbum = album;
          },
    },
    created() {
        this.requestAlbums();
    }
});

app.mount('#app');