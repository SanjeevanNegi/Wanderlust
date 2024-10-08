const sampleListings = [
    {
        title : "Cozy Beachfront Cottage",
        description : 
        "Escape to this charging beachfront cottage for a relaxing getaway.Enjoy stunning views.",
        image :
        "https://symphony.cdn.tambourine.com/peace-and-plenty/media/peaceandplenty-stay-stockingisland-header-61f05b10a32f1.webp",
        price : 1500,
        location : "Malibu",
        country : "United States",
    },
    {
        title : "Modern Loft in Downtown",
        description : 
        "Stay in the heart of the city iin this stylish loft apartment. Perfect for you.",
        image :
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412333525.jpg?k=f3086a8135bc7627a926bf4af41276de1087b8741c8222472723311640c91e1f&o=&hp=1://symphony.cdn.tambourine.com/peace-and-plenty/media/peaceandplenty-stay-stockingisland-header-61f05b10a32f1.webp",
        price : 1200,
        location : "New York City",
        country : "United States",
    },
    {
        "title": "Cozy Apartment in Midtown",
        "description": "Experience city living at its finest in this cozy apartment located in the vibrant Midtown area.",
        "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "price": 1000,
        "location": "New York City",
        "country": "United States"
      },
      {
        "title": "Chic Studio in SoHo",
        "description": "Enjoy the trendy atmosphere of SoHo in this chic studio apartment, perfect for a solo traveler or couple.",
        "image": "https://media.gettyimages.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k=",
        "price": 1500,
        "location": "New York City",
        "country": "United States"
      },
      {
        "title": "Luxurious Penthouse in Manhattan",
        "description": "Indulge in luxury living with stunning views of Manhattan from this luxurious penthouse.",
        "image": "https://media.gettyimages.com/id/848549286/photo/dream-home-luxury-house-success.jpg?s=612x612&w=0&k=20&c=cjhoNqomNTxgYWxuZ9Ev5PxZh6WY96vvDGf3Hl-7x-U=",
        "price": 3000,
        "location": "New York City",
        "country": "United States"
      },
      {
        "title": "Urban Retreat in Brooklyn",
        "description": "Escape the hustle and bustle in this urban retreat nestled in the vibrant neighborhood of Brooklyn.",
        "image": "https://media.gettyimages.com/id/1362872948/photo/energy-efficient-house-with-solar-panels-and-wall-battery-for-energy-storage.jpg?s=612x612&w=0&k=20&c=7VyjzkfAbt86XZKmKKrtHxxqXodV7PQUxr5sfrw685c=",
        "price": 1100,
        "location": "New York City",
        "country": "United States"
      },
      {
        "title": "Modern Condo in Downtown LA",
        "description": "Experience the energy of downtown LA in this modern condo featuring sleek design and city views.",
        "image": "https://media.gettyimages.com/id/1320991884/photo/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-islinton-ave-detached-and.jpg?s=612x612&w=0&k=20&c=KY59fkCfg9zz9LkQRCRDn84j9xcNdG7NSgZ3jGJC81A=",
        "price": 1800,
        "location": "Los Angeles",
        "country": "United States"
      },
      {
        "title": "Sunny Beach House in Malibu",
        "description": "Relax and unwind in this sunny beach house located in the prestigious area of Malibu, just steps away from the ocean.",
        "image": "https://www.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-260nw-555325381.jpg",
        "price": 2500,
        "location": "Malibu",
        "country": "United States"
      },
      {
        "title": "Cosy Cabin in the Woods",
        "description": "Escape to nature in this cosy cabin nestled in the serene woods, offering a peaceful retreat away from the city.",
        "image": "https://a0.muscache.com/im/pictures/1eb79c7d-eb9a-4482-9a38-8e75fc004e73.jpg?im_w=960",
        "price": 800,
        "location": "Aspen",
        "country": "United States"
      },
        {
            "title": "Rustic Lakeside Cottage",
            "description": "Experience tranquility at this charming lakeside cottage, perfect for fishing and enjoying breathtaking sunsets.",
            "image": "https://media.istockphoto.com/id/144291088/photo/lakeside-cottage-and-small-boat-in-connemara-ireland.jpg?s=612x612&w=0&k=20&c=fgH_S8cOOzcZLiK2pWFBnxFUO00Emx9oTHyzL_kGYRk=",
            "price": 700,
            "location": "Lake Tahoe",
            "country": "United States"
        },
        {
            "title": "Mountain Retreat Chalet",
            "description": "Embrace the beauty of the mountains in this stunning chalet with panoramic views, ideal for skiing enthusiasts.",
            "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mjc2NjMyNjk%3D/original/52668cb5-05be-445c-a3d6-5c7a697e7e93.jpeg?im_w=960",
            "price": 1000,
            "location": "Whistler",
            "country": "Canada"
        },
        {
            "title": "Secluded Forest Treehouse",
            "description": "Get back to nature in this enchanting treehouse hidden in the secluded forest, offering a unique and memorable escape.",
            "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-1105856010597530440/original/f0852160-1d7a-4bd5-8907-fe33f2607bd9.jpeg?im_w=720",
            "price": 600,
            "location": "Redwood National Park",
            "country": "United States"
        },
        {
            "title": "Coastal Beach House",
            "description": "Relax and rejuvenate in this stylish beach house overlooking the ocean, just steps away from sandy shores.",
            "image": "https://a0.muscache.com/im/pictures/d03d9889-b6c3-42f5-ad84-2c6c4b7a57b2.jpg?im_w=960",
            "price": 900,
            "location": "Malibu",
            "country": "United States"
        },
        {
            "title": "Tranquil Riverfront Lodge",
            "description": "Unwind by the river in this peaceful lodge surrounded by nature, perfect for fishing and birdwatching.",
            "image": "https://a0.muscache.com/im/pictures/miso/Hosting-563620204292012508/original/baf52b7f-5555-40e2-8c40-7713a4ca05a3.jpeg?im_w=720",
            "price": 750,
            "location": "Sedona",
            "country": "United States"
        },
        {
            "title": "Desert Oasis Retreat",
            "description": "Escape to the desert and experience luxury in this secluded oasis, complete with a private pool and stunning views.",
            "image": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1029202924541287113/original/c561df50-39dd-4e2a-82ec-770704f96a9a.jpeg?im_w=960",
            "price": 1200,
            "location": "Palm Springs",
            "country": "United States"
        },
        {
            "title": "Charming Countryside Cottage",
            "description": "Experience the charm of the countryside in this quaint cottage surrounded by rolling hills and meadows.",
            "image": "https://a0.muscache.com/im/pictures/84802873/e66f5031_original.jpg?im_w=960",
            "price": 500,
            "location": "Cotswolds",
            "country": "United Kingdom"
        },
        {
            "title": "Serenity Lake Cabin",
            "description": "Find peace and serenity at this cozy lakefront cabin, perfect for kayaking and enjoying nature's beauty.",
            "image": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-33637209/original/d70c3117-77db-4f86-b00f-b7f5fdde2afe.jpeg?im_w=1200",
            "price": 650,
            "location": "Banff",
            "country": "Canada"
        },
        {
            "title": "Mountain View Lodge",
            "description": "Wake up to breathtaking mountain views in this luxurious lodge, offering a perfect blend of comfort and nature.",
            "image": "https://a0.muscache.com/im/pictures/miso/Hosting-9134527/original/beaa32f5-6ece-4a2f-aea1-8aeb3ad15ee6.jpeg?im_w=960",
            "price": 1100,
            "location": "Jackson Hole",
            "country": "United States"
        },
        {
            "title": "Seaside Retreat Villa",
            "description": "Indulge in luxury at this seaside villa, featuring stunning ocean views and access to a private beach.",
            "image": "https://a0.muscache.com/im/pictures/miso/Hosting-51601073/original/c63ccf3a-d768-4725-ae72-c729846d3135.jpeg?im_w=960",
            "price": 1500,
            "location": "Amalfi Coast",
            "country": "Italy"
        },
        {
            "title": "Enchanted Forest Cabin",
            "description": "Discover the magic of the forest in this enchanting cabin surrounded by towering trees and wildlife.",
            "image": "https://a0.muscache.com/im/pictures/4a38a73c-12bf-4ca8-8920-f417bb693706.jpg?im_w=960",
            "price": 700,
            "location": "Black Forest",
            "country": "Germany"
        },    
];

module.exports = { data : sampleListings };