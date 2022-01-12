var config = {
    style: 'mapbox://styles/murattulek/ckjjuyujf0le519piqpk2o63g',
    accessToken: 'pk.eyJ1IjoibXVyYXR0dWxlayIsImEiOiIyOWI3NDhlYWM3MmI0NzMzZDkxNmFmYWMyOGYwNTA2ZiJ9.xNX3bJK-pE-BbBhBHx4kDg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Aşçı Dede - Edirne',
    subtitle: '',
    byline: 'By Murat Tülek - Eda Güçlü',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'KARAAĞAÇ TREN ISTASYONU',
            image: './path/to/image/source.png',
            description: 'Bin üç yüz on dört senesi Rebiülâhirin yirmi altıncı [4 Ekim 1896] ve bin üç yüz on iki senesi Eylülün yirmi ikinci pazar günü akşamı yani Arabînin yirmi yedinci pazartesi gecesi gece isneyn gecesi “Allâhumme salli alâ seyyidinâ Muhammed ” zikriyle ve “Sefer-ilallâh” fikriyle “Fe-firrû ilellâhi” niyetiyle ve kemâl-i aşk u muhabbetle şimendifere ma‘a-evlâd u ayâl birtakım cennet hurileriyle Edirne cennetine ve orada medfûn-ı hâk-i ıtrnâk olan hazerât-ı kirâm makberelerine müteveccihen âzim-i râh-ı hak olduğum bu yüzden ki “et-Tarîku ilallâhi bi-adedi enfusi’l halâyık”tır azizim. İşte bu neşe ve bu muhabbetle gece saat sekiz raddelerinde cümleten Edirne istasyonuna nüzul ettik. (vol. II, 945)',
            location: {
                center: [26.52160, 41.65142],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
