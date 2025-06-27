// Application Data
const appData = {
    sections: [
        {
            name: "Ethereal Insights",
            color: "#E8F4FD",
            description: "Podcasts & Audio Content",
            icon: "🎧",
            articles: [
                "The Silent Revolution: How Whispering Changed Communication",
                "Frequency Mysteries: Sounds That Shape Reality",
                "Digital Voices: The Future of Human Expression",
                "Acoustic Archaeology: Unearthing Lost Sounds",
                "The Podcast Paradox: Why We Listen to Strangers",
                "Sound as Medicine: Healing Through Audio",
                "The Echo Effect: How Spaces Shape Stories",
                "Invisible Narratives: The Power of Voice",
                "Sonic Landscapes: Mapping the World Through Sound",
                "The Art of Deep Listening: Rediscovering Attention"
            ]
        },
        {
            name: "Genesis Chronicles", 
            color: "#6B46FF",
            description: "Business Origin Stories & Case Studies",
            icon: "🏛️",
            articles: [
                "The Garage Myth: Where Innovation Really Begins",
                "Failure as Foundation: Bankruptcy Success Stories",
                "The Pivot Point: When Companies Reinvent Themselves",
                "Serendipity in Silicon Valley: Accidental Empires",
                "The Coffee Shop Revolution: Brewing Business Ideas",
                "From Idea to Icon: The Journey of Household Brands",
                "The Rejection Files: Ideas That Changed the World",
                "Bootstrapping Giants: Building Without Venture Capital",
                "The Art of the Impossible: Solving Unsolvable Problems",
                "Legacy Codes: What Successful Companies Leave Behind"
            ]
        },
        {
            name: "Quantum Frontiers",
            color: "#8FFFE0", 
            description: "Technology & Innovation",
            icon: "⚡",
            articles: [
                "The Quantum Internet: Redefining Digital Connection",
                "AI That Dreams: The Future of Machine Consciousness",
                "Biotechnology's Next Leap: Engineering Life Itself",
                "The Metaverse Mirage: Reality vs. Virtual Promise",
                "Cryptocurrency's Evolution: Beyond Digital Gold",
                "Space Tech Revolution: How Satellites Shape Earth",
                "The Clean Energy Puzzle: Solving Tomorrow's Power",
                "Neuromorphic Computing: Chips That Think Like Brains",
                "The Internet of Everything: When Objects Come Alive",
                "Quantum Cryptography: Unbreakable Digital Secrets"
            ]
        },
        {
            name: "Mystic Narratives",
            color: "#FFB347",
            description: "Creative Writing & Stories", 
            icon: "📚",
            articles: [
                "The Last Library: Preserving Stories in Digital Age",
                "Words as Weapons: The Power of Persuasive Language",
                "The Story Genome: How Narratives Shape Human DNA",
                "Digital Mythology: Creating Legends for the Internet Age",
                "The Art of Worldbuilding: Crafting Fictional Universes",
                "Memory Palaces: Ancient Techniques for Modern Minds",
                "The Science of Storytelling: Why Narratives Move Us",
                "Cultural Code: How Stories Define Civilizations",
                "The Future of Fiction: AI as Creative Collaborator",
                "Mythmaking in the Modern Era: New Legends for New Times"
            ]
        },
        {
            name: "Catalyst Conversations",
            color: "#FF6B9D",
            description: "Interviews & Thought Leadership",
            icon: "💬", 
            articles: [
                "The Contrarian's Guide: Thinking Against the Grain",
                "Leadership in Crisis: Lessons from the Edge",
                "The Art of Disagreement: Productive Conflict Resolution",
                "Visionary Voices: Conversations with Future Shapers",
                "The Wisdom of Failure: Learning from Setbacks",
                "Cultural Bridges: Connecting Divided Worlds",
                "Innovation Catalysts: People Who Spark Change",
                "The Philosophy of Progress: Defining Human Advancement",
                "Authentic Leadership: Being Real in a Fake World",
                "The Future Makers: Individuals Shaping Tomorrow"
            ]
        },
        {
            name: "Lumina Labs",
            color: "#FFFFFF",
            description: "Experimental Projects & Ideas",
            icon: "🔬",
            articles: [
                "The Experiment Mindset: Treating Life as Research",
                "Prototype Paradise: Where Ideas Take Physical Form",
                "The Art of Hypothesis: Scientific Thinking in Daily Life",
                "Creative Constraints: How Limits Unlock Innovation",
                "The Failure Laboratory: Learning from What Doesn't Work",
                "Impossible Projects: Tackling the Unsolvable",
                "The Innovation Sandbox: Playing with Possibilities",
                "Breakthrough Thinking: Patterns of Revolutionary Ideas",
                "The Prototype Paradox: When Experiments Become Products",
                "Future Scenarios: Planning for Multiple Tomorrows"
            ]
        }
    ]
};

// Application State
let currentView = 'home';
let currentSection = null;
let currentArticle = null;

// Utility Functions
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function setCrystalColors(element, color) {
    const rgb = hexToRgb(color);
    if (rgb) {
        element.style.setProperty('--crystal-color', color);
        element.style.setProperty('--crystal-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
}

function generateArticleExcerpt(title) {
    const excerpts = [
        "Exploring the depths of human understanding through innovative perspectives and cutting-edge research.",
        "A journey into the unknown territories of knowledge, where curiosity meets discovery.",
        "Unraveling complex phenomena through the lens of modern science and ancient wisdom.",
        "Challenging conventional thinking with bold ideas and revolutionary concepts.",
        "Where imagination meets reality in the quest for deeper understanding.",
        "Breaking boundaries between disciplines to create new pathways of thought.",
        "An investigation into the forces that shape our world and consciousness.",
        "Connecting dots across time and space to reveal hidden patterns."
    ];
    return excerpts[Math.floor(Math.random() * excerpts.length)];
}

function generateReadTime() {
    return Math.floor(Math.random() * 12) + 3; // 3-15 minute read times
}

// Animation and Effects
function createFloatingParticles() {
    const container = document.getElementById('floating-particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
}

function createAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    
    setInterval(() => {
        if (document.querySelectorAll('.ambient-particle').length < 20) {
            const particle = document.createElement('div');
            particle.className = 'ambient-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 8 + 10) + 's';
            container.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 18000);
        }
    }, 1000);
}

function createCrystalParticles(crystal) {
    const particleContainer = crystal.querySelector('.crystal-particles') || document.createElement('div');
    particleContainer.className = 'crystal-particles';
    
    if (!crystal.querySelector('.crystal-particles')) {
        crystal.appendChild(particleContainer);
    }
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'crystal-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// Cursor Trail Effect
function initCursorTrail() {
    const trail = document.getElementById('cursor-trail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX - 10 + 'px';
        trail.style.top = trailY - 10 + 'px';
        
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}

// Ticker Functionality
function initArticleTicker() {
    const tickerContent = document.getElementById('ticker-content');
    const allArticles = [];
    
    // Collect all articles from all sections
    appData.sections.forEach(section => {
        section.articles.forEach(article => {
            allArticles.push({
                title: article,
                section: section.name,
                color: section.color
            });
        });
    });
    
    // Shuffle and create ticker items
    const shuffledArticles = allArticles.sort(() => Math.random() - 0.5);
    
    shuffledArticles.forEach(article => {
        const tickerItem = document.createElement('a');
        tickerItem.className = 'ticker-item';
        tickerItem.textContent = article.title;
        tickerItem.addEventListener('click', () => {
            const section = appData.sections.find(s => s.name === article.section);
            const articleIndex = section.articles.indexOf(article.title);
            navigateToArticle(section, articleIndex);
        });
        tickerContent.appendChild(tickerItem);
    });
}

// Hero Crystals
function initHeroCrystals() {
    const container = document.getElementById('hero-crystals');
    
    appData.sections.forEach((section, index) => {
        const crystal = document.createElement('div');
        crystal.className = 'crystal';
        setCrystalColors(crystal, section.color);
        
        crystal.innerHTML = `
            <div class="crystal-face">
                <div class="crystal-icon">${section.icon}</div>
                <div class="crystal-label">${section.name}</div>
            </div>
        `;
        
        crystal.addEventListener('click', () => {
            navigateToSection(section);
        });
        
        crystal.addEventListener('mouseenter', () => {
            createCrystalParticles(crystal);
        });
        
        // Animate crystal appearance
        crystal.style.animationDelay = (index * 200) + 'ms';
        crystal.style.animation = 'fadeInUp 1s ease-out forwards';
        crystal.style.opacity = '0';
        
        container.appendChild(crystal);
    });
}

// Crystal Catalog
function initCrystalCatalog() {
    const grid = document.getElementById('crystal-grid');
    
    appData.sections.forEach((section, index) => {
        const sectionCrystal = document.createElement('div');
        sectionCrystal.className = 'section-crystal';
        setCrystalColors(sectionCrystal, section.color);
        
        sectionCrystal.innerHTML = `
            <div class="section-icon">${section.icon}</div>
            <h3 class="section-title">${section.name}</h3>
            <p class="section-description">${section.description}</p>
            <div class="article-count">${section.articles.length} Articles</div>
        `;
        
        sectionCrystal.addEventListener('click', () => {
            navigateToSection(section);
        });
        
        // Animate section appearance
        sectionCrystal.style.animationDelay = (index * 150) + 'ms';
        sectionCrystal.style.animation = 'fadeInUp 0.8s ease-out forwards';
        sectionCrystal.style.opacity = '0';
        
        grid.appendChild(sectionCrystal);
    });
}

// Navigation Functions
function navigateToSection(section) {
    currentView = 'section';
    currentSection = section;
    
    // Hide main content
    document.getElementById('main-content').style.opacity = '0';
    
    setTimeout(() => {
        document.querySelector('.hero-section').style.display = 'none';
        document.querySelector('.crystal-catalog').style.display = 'none';
        
        const sectionView = document.getElementById('section-view');
        sectionView.classList.remove('hidden');
        
        renderSection(section);
        
        document.getElementById('main-content').style.opacity = '1';
    }, 300);
}

function navigateToArticle(section, articleIndex) {
    currentView = 'article';
    currentSection = section;
    currentArticle = articleIndex;
    
    document.getElementById('main-content').style.opacity = '0';
    
    setTimeout(() => {
        document.querySelector('.hero-section').style.display = 'none';
        document.querySelector('.crystal-catalog').style.display = 'none';
        document.getElementById('section-view').classList.add('hidden');
        
        const articleView = document.getElementById('article-view');
        articleView.classList.remove('hidden');
        
        renderArticle(section, articleIndex);
        
        document.getElementById('main-content').style.opacity = '1';
    }, 300);
}

function navigateToHome() {
    currentView = 'home';
    currentSection = null;
    currentArticle = null;
    
    document.getElementById('main-content').style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById('section-view').classList.add('hidden');
        document.getElementById('article-view').classList.add('hidden');
        
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.crystal-catalog').style.display = 'block';
        
        document.getElementById('main-content').style.opacity = '1';
    }, 300);
}

// Render Functions
function renderSection(section) {
    setCrystalColors(document.getElementById('section-view'), section.color);
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-crystals');
    breadcrumb.innerHTML = `
        <div class="breadcrumb-crystal" style="background: #8FFFE0;"></div>
        <div class="breadcrumb-crystal active" style="background: ${section.color};"></div>
    `;
    
    // Create article grid
    const sectionContent = document.getElementById('section-content');
    sectionContent.innerHTML = `
        <div class="section-header-content">
            <h1 style="color: ${section.color}; font-size: 3rem; margin-bottom: 10px; text-shadow: 0 0 20px ${section.color};">${section.name}</h1>
            <p style="color: rgba(232, 244, 253, 0.8); font-size: 1.2rem; margin-bottom: 40px;">${section.description}</p>
        </div>
        <div class="article-grid" id="article-grid"></div>
    `;
    
    const articleGrid = document.getElementById('article-grid');
    
    section.articles.forEach((article, index) => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        setCrystalColors(articleCard, section.color);
        
        articleCard.innerHTML = `
            <h3 class="article-title">${article}</h3>
            <p class="article-excerpt">${generateArticleExcerpt(article)}</p>
            <div class="article-meta">
                <div class="read-time">${generateReadTime()} min read</div>
                <div class="article-date">${new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</div>
            </div>
        `;
        
        articleCard.addEventListener('click', () => {
            navigateToArticle(section, index);
        });
        
        articleGrid.appendChild(articleCard);
    });
}

function renderArticle(section, articleIndex) {
    const article = section.articles[articleIndex];
    setCrystalColors(document.getElementById('article-view'), section.color);
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('article-breadcrumb');
    breadcrumb.innerHTML = `
        <div class="breadcrumb-crystals">
            <div class="breadcrumb-crystal" style="background: #8FFFE0;"></div>
            <div class="breadcrumb-crystal" style="background: ${section.color};"></div>
            <div class="breadcrumb-crystal active" style="background: ${section.color}; opacity: 1;"></div>
        </div>
    `;
    
    // Generate article content
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = `
        <h1>${article}</h1>
        <div class="article-meta" style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="color: ${section.color};">${section.name}</span> • 
            <span>${generateReadTime()} min read</span> • 
            <span>${new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
        </div>
        
        <p>In the vast expanse of human knowledge, few topics capture the imagination quite like ${article.toLowerCase()}. This exploration takes us deep into uncharted territories where conventional wisdom meets revolutionary thinking.</p>
        
        <h2>The Crystal of Understanding</h2>
        <p>Like light refracting through a multifaceted crystal, this subject reveals different aspects depending on our perspective. Each angle offers new insights, challenging us to expand our understanding beyond traditional boundaries.</p>
        
        <p>The intersection of technology, philosophy, and human experience creates a unique landscape where innovation thrives. Here, in this space between known and unknown, we discover the true power of curiosity-driven exploration.</p>
        
        <h2>Illuminating the Path Forward</h2>
        <p>As we navigate this complex terrain, patterns emerge that connect seemingly disparate elements. These connections form the foundation for breakthrough thinking, where creative synthesis leads to paradigm shifts.</p>
        
        <p>The journey through this topic reveals not just facts and figures, but a deeper understanding of how knowledge itself evolves. Each discovery builds upon the last, creating an intricate web of understanding that continues to expand.</p>
        
        <h3>Key Insights</h3>
        <p>Through careful analysis and thoughtful reflection, several crucial insights emerge that reshape our understanding of this domain. These revelations challenge assumptions while opening new avenues for exploration.</p>
        
        <p>The implications extend far beyond the immediate subject matter, touching on fundamental questions about progress, innovation, and the nature of human inquiry itself. This broader perspective enriches our appreciation for the interconnectedness of all knowledge.</p>
        
        <h2>The Adventure Continues</h2>
        <p>As we conclude this exploration, we're reminded that every ending is also a beginning. The insights gained here serve as launching points for further investigation, ensuring that the adventure of discovery never truly ends.</p>
        
        <p>In the spirit of the Lumina Chronicles, we leave you with this thought: knowledge is not a destination but a journey, one where each step illuminates the path ahead while revealing new mysteries to explore.</p>
    `;
    
    // Generate related articles
    renderRelatedArticles(section, articleIndex);
}

function renderRelatedArticles(section, currentIndex) {
    const relatedGrid = document.getElementById('related-grid');
    const relatedArticles = [];
    
    // Get 3 random articles from the same section (excluding current)
    const availableArticles = section.articles.filter((_, index) => index !== currentIndex);
    const shuffled = availableArticles.sort(() => Math.random() - 0.5).slice(0, 3);
    
    relatedGrid.innerHTML = '';
    
    shuffled.forEach(article => {
        const relatedCrystal = document.createElement('div');
        relatedCrystal.className = 'related-crystal';
        setCrystalColors(relatedCrystal, section.color);
        
        relatedCrystal.innerHTML = `
            <div class="related-crystal-title">${article}</div>
            <div class="related-crystal-section">${section.name}</div>
        `;
        
        relatedCrystal.addEventListener('click', () => {
            const articleIndex = section.articles.indexOf(article);
            navigateToArticle(section, articleIndex);
        });
        
        relatedGrid.appendChild(relatedCrystal);
    });
}

// Event Listeners
function initEventListeners() {
    // Back buttons
    document.getElementById('back-button').addEventListener('click', navigateToHome);
    document.getElementById('article-back-button').addEventListener('click', () => {
        if (currentSection) {
            navigateToSection(currentSection);
        } else {
            navigateToHome();
        }
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.section-crystal, .article-card').forEach(el => {
        observer.observe(el);
    });
}

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        mainContent.classList.remove('hidden');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);
}

// Initialize Application
function init() {
    console.log('🌟 Initializing Lumina Chronicles...');
    
    // Initialize core components
    initLoadingScreen();
    initArticleTicker();
    initHeroCrystals();
    initCrystalCatalog();
    initEventListeners();
    
    // Initialize effects
    createFloatingParticles();
    createAmbientParticles();
    initCursorTrail();
    
    // Animate title words
    setTimeout(() => {
        document.querySelectorAll('.title-word').forEach((word, index) => {
            setTimeout(() => {
                word.style.animationDelay = (index * 500) + 'ms';
            }, index * 100);
        });
    }, 3500);
    
    console.log('✨ Lumina Chronicles initialized successfully!');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}