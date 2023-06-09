const app = Vue.createApp({
    data() {
        return{
            albums: [
                [
                    img_URL = "assets/img/aquietplace.jpeg",
                    album_name = "New Jersey",
                    artist = "Bon Jovi",
                    year = "1988",
                ],
                [
                    img_URL = "assets/img/metal_lifting.jpg",
                    album_name = "Live at Wembley 86",
                    artist = "Queen",
                    year = "1992",
                ],
                [
                    img_URL = "assets/img/sinister.jpeg",
                    album_name = "Ten's Summoner's Tales",
                    artist = "Sting",
                    year = "1993",
                ],
                [
                    img_URL = "assets/img/split.jpeg",
                    album_name = "Steve Gadd band",
                    artist = "Steve Gadd band",
                    year = "2018",
                ],
                [
                    img_URL = "assets/img/split.jpeg",
                    album_name = "Steve Gadd band",
                    artist = "Steve Gadd band",
                    year = "2018",
                ],
            ]
        }
    }
});

app.mount('#app');