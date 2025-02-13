const CONFIG = {
    valentineName: "Abhya",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    },

    questions: {
        first: {
            text: "Do you like me?",                                    
            yesBtn: "Yes",                                             
            noBtn: "No",                                               
            secretAnswer: "I don't like you, I love you! ❤️"           
        },
        second: {
            text: "How much do you love me?",                         
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                         
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", 
            yesBtn: "Yes!",                                             
            noBtn: "No"                                                 
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "I love you more Khushi🫂💗",
        emojis: "💗💓💘💖💝💋❤️💕"  // These will bounce around
    },

    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
