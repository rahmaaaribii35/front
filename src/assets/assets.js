//import img1 from './img1.jpg'
import logo from './logo.png'
import searchIcon from './search-icon.jpeg'
import profileIcon from './profile-icon.jpeg'
import cartIcon from './cart-icon.jpeg'
import menuIcon from './menu-icon.jpeg'
import dropdownIcon from './dropdown-icon.jpeg'
import Carousel1 from './Carousel1.png'
import Carousel2 from './Carousel2.png'
import heroVideo from './hero.mp4'
import p11 from './p1-1.jpg'
import p12 from './p1-2.jpg'
import p13 from './p1-3.jpg'
import p14 from './p1-4.jpg'
import p15 from './p1-5.jpg'
import p16 from './p1-6.jpg'
import p21 from './p2-1.jpg'
import p22 from './p2-2.jpg'
import p23 from './p2-3.jpg'
import p24 from './p2-4.jpg'
import p25 from './p2-5.jpg'
import p31 from './p3-1.jpg'
import p32 from './p3-2.jpg'
import p33 from './p3-3.jpg'
import p34 from './p3-4.mp4'
import p41 from './p4-1.jpeg'
import p42 from './p4-2.jpeg'
import p43 from './p4-3.mp4'
import p51 from './p5-1.jpg'
import p52 from './p5-2.jpg'
import p53 from './p5-3.mp4'
import p61 from './p6-1.jpeg'
import p62 from './p6-2.jpeg'
import p71 from './p7-1.jpg'
import p72 from './p7-2.jpg'
import p73 from './p7-3.mp4'
import p81 from './p8-1.jpg'
import p82 from './p8-2.jpg'
import p83 from './p8-3.mp4'
import p91 from './p9-1.jpg'
import p92 from './p9-2.jpg'
import p93 from './p9-3.jpg'
import p94 from './p9-4.mp4'
import p101 from './p10-1.jpg'
import p102 from './p10-2.jpg'
import p103 from './p10-3.jpg'
import p104 from './p10-4.mp4'
import p105 from './p10-5.jpg'





export const assets={
    logo , searchIcon , profileIcon , cartIcon , menuIcon , dropdownIcon , Carousel1 , Carousel2 , heroVideo, p11 , p12 , p13 , p14 , p15 , p16 , p21 , p22 , p23 , p24 , p25 , p31 , p32 , p33 , p34  , p41 , p42 , p43 , p51 , p52 , p53 , p61 , p62 , p71 , p72 , p73 , p81 , p82 , p83 , p91 , p92 , p93 , p94 , p101 , p102 , p103 , p104 , p105
}

export const products=[

    {
        _id: 1,
        name: "Powder Duo",
        description: "You and your glam have got a good thing going. Don't let it fade by adding our 2-in-1 setting powder to your beauty routine. On the top level you'll find a silky, moisturizing pressed powder that's uniquely made to lock in your under eye makeup (and fill in any wrinkles), and on the bottom level, a sheer, oil-absorbing loose powder to keep your face fresh and shine-free from AM to PM.",
        price: 12.99,
        quantity: 50,
        category: "face",
        images: [p11 ,p12 , p13, p14, p15, p16 ],
        bestseller: true
    },
    {
        _id: 2,
        name: "Bounce Putty Pocket Lip Pot",
        description: "Let's take this blur on the road! Spring into our Bounce Putty Pocket Lip Pot for a matte lip moment on the go. Sheer things out for a subtle pinch of color or layer your look for a little more intensity.",
        price: 12.99,
        quantity: 40,
        category: "lips",
        images: [p21, p22 , p23, p24, p25],
        bestseller: false
    },
    {
        _id: 3,
        name: "Hair Beach Babe Hair Waver",
        description: "Create beachy waves with this easy-to-use hair waver.",
        price: 9.99,
        quantity: 60,
        category: "hair",
        images: [p31 , p32 , p33 ,p34],
        bestseller:false
   },
   {
        _id: 4,
        name: "Daydream Dots Blemish Patches",
        description: "Blemishes, meet your match! The Daydream Dots Blemish Patches are here to clear things up (in the cutest way possible). Infused with salicylic acid and dressed in playful patterns, these patches work while you sleep, chill, or snap selfies. They stick tight, cover spots, and look adorable doing it!.",
        price: 25.99,
        quantity: 30,
        category: "face",
        images: [p41 , p42 , p43],
        bestseller:true
    },
    {
        _id: 5,
        name: "Bubble Kiss Lip Balm",
        description: "Pucker up for our Bubble Kiss Balm! This tinted lip treat is equal parts cute and craveable. With a soft semi-matte finish and four sweet shades (and even sweeter flavors), it's your lips' new BFF. It's the perfect mix of color, comfort, and bubble bath vibes.",
        price: 10.99,
        quantity: 30,
        category: "lips",
        images: [p51 , p52 , p53],
        bestseller:false
    },
    {
        _id: 6,
        name: "Bubble Glow Blush Bar",
        description: "Our Bubble Glow Blush Bar is all glow, no scrub! This blush glides on with a dreamy, silky soft texture and leaves behind a sheer wash of shimmer-kissed color. It's lightweight, buildable, and blends like a breeze. Basically, it's your cheeks' new favorite self-care moment.",
        price: 17.99,
        quantity: 30,
        category: "face",
        images: [p61 , p62 ],
        bestseller:true
    },
    {
        _id: 7,
        name: "Bubble Glow eyeshadow palette",
        description: "Our Bubble Glow eyeshadow palette is all glow, no scrub! This palette glides on with a dreamy, silky soft texture and leaves behind a sheer wash of shimmer-kissed color. It's lightweight, buildable, and blends like a breeze. Basically, it's your eyes' new favorite self-care moment.",
        price: 31.5,
        quantity: 45,
        category: "eye",
        images: [p71 , p72 , p73 ],
        bestseller:false
    },
    {
        _id: 8,
        name: "Dream Foam Cloud Primer",
        description: "Prep like you're floating on a cloud with the Dream Foam Cloud Primer. This pink bubbly foam pumps out like a whipped dream and melts into a water-light texture on skin, delivering a burst of moisture before your makeup goes on. It's hydrating, smoothing, and fun to use. Think of it as a mini spa moment in every pump.",
        price: 21,
        quantity: 21,
        category: "face",
        images: [p81 , p82 , p83 ],
        bestseller:false
    },
    {
        _id: 9,
        name: "Daydreamer Mini Palette",
        description: "With a wet-look shimmer and three ultra-buttery matte shades, this mini powerhouse just might replace your favorite palette. This lightweight mini palette features silky semi-matte & fully matte shades that blend into one another like fine cashmere, plus one micro-fine glitter shade for when you're feeling reflective. Don't be surprised if you find yourself reaching for this mini palette all season long!",
        price: 17.5,
        quantity: 33,
        category: "eye",
        images: [p91 , p92 , p93 , p94],
        bestseller:true
    },
    {
        _id: 10,
        name: "Precision Sculpt Liquid Contour Duo",
        description: "Sculpt like a pro, now with even more precision! Our Precision Sculpt Liquid Contour Duo features a dual-ended applicator designed to give you total control over your contour game. Now with the perfect tool to define, snatch, and enhance with ease. Get ready for a sculpted look so flawless, everyone will think you just got back from vacay!",
        price: 17.5,
        quantity: 19,
        category: "face",
        images: [p101 , p102 , p103 , p104 , p105],
        bestseller:true
    },



]
