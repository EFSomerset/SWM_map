var config = {
    style: 'mapbox://styles/eflaherty/cljs956xn018x01pjd9j791f1',
    accessToken: 'pk.eyJ1IjoiZWZsYWhlcnR5IiwiYSI6ImNsanA5ZHB4MjAwMjYzcGxzajJmMDM3ZWQifQ.xlYAjt9yOQyEdiVLJz3NZw',
    showMarkers: false,
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'How is sustainable wildlife management finding success in Guyana?',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    //byline: 'By a Digital Storyteller',
    footer: '',
    chapters: [
        {
            id: 'chap-1',
            alignment: 'left',
            hidden: true,
            image: '/Users/edenflaherty/Documents/SWM Multimedia Story/storytelling-main/src/images/swm-logo.png',
            location: {
                center: [111.74968, 23.75575],
                zoom: 1.71,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        },
        {
            id: 'chap-2',
            alignment: 'center',
            hidden: true,
            title: 'Sustainable Wildlife Management',
            description: 'Millions of people around the world rely on wild meat as part of their basic diet, but unchecked hunting in environments already under pressure can contribute to the depletion of wildlife, threatening ecosystems as well as the people who rely on them. <br><br> The Sustainable Wildlife Management (SWM) Programme is a major initiative of CIRAD, the World Conservation Society (WCS), the Food and Agriculture Organization (FAO) and CIFOR-ICRAF that aims to improve wildlife conservation and food security. <br><br> The program focuses on three key socio-ecosystems: forest, wetland and savannah, with CIFOR-ICRAF leading the work on “Consumption of wildmeat becomes sustainable” and the “Monitoring and evaluation mechanism.” <br><br> In a live conversation for Global Landscapes Forum, experts from the SWM Programme in Guyana – one of the 15 countries where SWM operates – came together to discuss the successes and challenges of running such an ambitious project in what is considered one of the world’s last great wild places. <br><br>',
            location: {
                center: [-22.87030, 11.65853],
                zoom: 1.71,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
        },
        {
            id: 'chap-3',
            alignment: 'right',
            hidden: false,
            title: 'Project Country: Guyana',
            //image: './path/to/image/source.png',
            description:'A relatively small nation at just 215 000 km2, Guyana is situated in northern South America where it is bordered by Brazil to the south and southwest, Venezuela to the west, Suriname to the east and the Atlantic Ocean to the north. <br><br> But, despite its small size, Guyana – an indigenous word which means "Land of Many Waters" – is home to a vast array of of natural habitats and a staggering amount of biodiversity. <br><br> The country is divided into ten administrative regions, typically referred to by their number. The largest of these is Region 9, locally referred to as “the Rupununi” after the major river of the same name that runs through it. <br><br> It’s in this region that the SWM Programme Guyana operates.',
            location: {
                center: [-55.76503, 5.76670],
                zoom: 5.63,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
            {
                layer: 'isolated',
                opacity: 1
            },
            {
                layer: 'country-label',
                opacity: 1
            }
             ],
            onChapterExit: [
            {
                layer: 'isolated',
                opacity: 0
            },
            {
                layer: 'country-label',
                opacity: 0
            },
                ]
        },
        {
            id: 'chap-4',
            alignment: 'left',
            hidden: false,
            title: 'Project Region: Rupununi',
            //image: './path/to/image/source.png',
            description:'The Rupununi region is home rare birds, large mammals, and one of the most diverse water ecosystems on earth, with 410 species of fish (that they currently know of). <br><br> These fish and other wildlife not only represent an amazing array of biodiversity, but also an integral part of the culture and diet of the 57 Indigenous communities that live in the region. Traditional hunting and fishing are still common, with wild meat and fish eaten not only in Region 9, but sent out for sale across the country. <br><br> However, as access to the region grows and new economic activities take off, the balance between food security, traditional livelihoods, and biodiversity becomes more challenging.',
            location: {
                center: [-60.66352, 4.01343],
                zoom: 6.44,
                pitch: 0.00,
                bearing: 0.00,
                speed: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
            {
                layer: 'project-region',
                opacity: 1
            },
            {
                layer: 'country-label',
                opacity: 1,
            },
            {
                layer: 'isolated',
                opacity: 1
            },
             ],
            onChapterExit: [
            {
                layer: 'project-region',
                opacity: 0
            },
                ]
        },
    ]
};
