// Main JavaScript functionality for the Catechism platform
let currentLanguage = 'en';
let currentAgeGroup = 'adults';
let currentPart = null;
let currentSection = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    updateInterface();
    updateContent();
}

function setupEventListeners() {
    // Age group selector
    const ageSelector = document.getElementById('age-group');
    if (ageSelector) {
        ageSelector.addEventListener('change', function() {
            switchAgeGroup(this.value);
        });
    }

    // Language selector
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            switchLanguage(this.value);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentPart) {
            goBack();
        }
    });
}

function switchLanguage(language) {
    currentLanguage = language;
    updateInterface();
    updateContent();
    
    // Add visual feedback
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 500);
}

function switchAgeGroup(ageGroup) {
    currentAgeGroup = ageGroup;
    
    // Update body class for styling
    document.body.className = document.body.className.replace(/age-\w+/g, '');
    document.body.classList.add(`age-${ageGroup}`);
    
    updateContent();
    
    // Add visual feedback
    const partsGrid = document.querySelector('.parts-grid');
    if (partsGrid) {
        partsGrid.classList.add('slide-in');
        setTimeout(() => {
            partsGrid.classList.remove('slide-in');
        }, 300);
    }
}

function updateInterface() {
    // Update interface text based on current language
    const elements = [
        { id: 'welcome-title', key: 'welcome_title' },
        { id: 'welcome-description', key: 'welcome_description' },
        { id: 'back-btn', key: 'back_to_overview' }
    ];

    elements.forEach(element => {
        const el = document.getElementById(element.id);
        if (el) {
            el.textContent = getInterfaceText(element.key, currentLanguage);
        }
    });

    // Update part titles and descriptions
    for (let i = 1; i <= 4; i++) {
        const titleEl = document.getElementById(`part${i}-title`);
        const descEl = document.getElementById(`part${i}-description`);
        
        if (titleEl && catechismData.parts[i]) {
            titleEl.textContent = catechismData.parts[i].title[currentLanguage] || catechismData.parts[i].title.en;
        }
        
        if (descEl && catechismData.parts[i]) {
            descEl.textContent = catechismData.parts[i].description[currentLanguage] || catechismData.parts[i].description.en;
        }
    }

    // Update explore buttons
    const exploreButtons = document.querySelectorAll('.explore-btn');
    exploreButtons.forEach(btn => {
        btn.textContent = getInterfaceText('explore', currentLanguage);
    });

    // Update labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        if (label.getAttribute('for') === 'age-group') {
            label.textContent = getInterfaceText('age_group', currentLanguage);
        } else if (label.getAttribute('for') === 'language') {
            label.textContent = getInterfaceText('language', currentLanguage);
        }
    });
}

function updateContent() {
    if (currentPart && currentSection) {
        showSection(currentPart, currentSection);
    } else if (currentPart) {
        showPart(currentPart);
    }
}

function showPart(partNumber) {
    currentPart = partNumber;
    currentSection = null;
    
    const contentArea = document.getElementById('content-area');
    const contentMain = document.getElementById('content-main');
    const breadcrumb = document.getElementById('breadcrumb');
    
    if (!catechismData.parts[partNumber]) {
        console.error('Part not found:', partNumber);
        return;
    }
    
    const part = catechismData.parts[partNumber];
    
    // Update breadcrumb
    breadcrumb.textContent = part.title[currentLanguage] || part.title.en;
    
    // Generate sections list
    let sectionsHTML = `
        <h2>${part.title[currentLanguage] || part.title.en}</h2>
        <p class="part-description">${part.description[currentLanguage] || part.description.en}</p>
        <div class="section-grid">
    `;
    
    part.sections.forEach((section, index) => {
        sectionsHTML += `
            <div class="section-item" onclick="showSection(${partNumber}, ${index})">
                <h4>${section.title[currentLanguage] || section.title.en}</h4>
                <p>Click to explore this section</p>
            </div>
        `;
    });
    
    sectionsHTML += '</div>';
    
    contentMain.innerHTML = sectionsHTML;
    contentArea.style.display = 'block';
    
    // Scroll to content area
    contentArea.scrollIntoView({ behavior: 'smooth' });
}

function showSection(partNumber, sectionIndex) {
    currentPart = partNumber;
    currentSection = sectionIndex;
    
    const part = catechismData.parts[partNumber];
    const section = part.sections[sectionIndex];
    
    const contentMain = document.getElementById('content-main');
    const breadcrumb = document.getElementById('breadcrumb');
    
    // Update breadcrumb
    breadcrumb.textContent = `${part.title[currentLanguage] || part.title.en} > ${section.title[currentLanguage] || section.title.en}`;
    
    // Get content for current age group
    const content = section.content[currentAgeGroup];
    const sectionContent = content ? (content[currentLanguage] || content.en) : 'Content not available for this age group.';
    
    // Generate section HTML
    let sectionHTML = `
        <div class="section-header">
            <h2>${section.title[currentLanguage] || section.title.en}</h2>
        </div>
        <div class="section-content">
            <div class="content-text">
                <p>${sectionContent}</p>
            </div>
        </div>
    `;
    
    // Add age-specific enhancements
    if (currentAgeGroup === 'children') {
        sectionHTML += `
            <div class="children-activities">
                <h3>Activities for Children</h3>
                <div class="activity-grid">
                    <div class="activity-card">
                        <h4>Draw & Reflect</h4>
                        <p>Draw a picture about what you learned!</p>
                    </div>
                    <div class="activity-card">
                        <h4>Prayer Time</h4>
                        <p>Talk to God about what this means to you.</p>
                    </div>
                </div>
            </div>
        `;
    } else if (currentAgeGroup === 'teens') {
        sectionHTML += `
            <div class="teens-discussion">
                <h3>Discussion Questions</h3>
                <ul>
                    <li>How does this teaching apply to your daily life?</li>
                    <li>What questions do you have about this topic?</li>
                    <li>How can you share this with your friends?</li>
                </ul>
            </div>
        `;
    } else {
        sectionHTML += `
            <div class="adults-study">
                <h3>Further Study</h3>
                <p>Consider how this teaching connects to Scripture, Tradition, and the Magisterium of the Church.</p>
                <div class="references">
                    <h4>Related Scripture</h4>
                    <p>Explore relevant biblical passages that illuminate this teaching.</p>
                </div>
            </div>
        `;
    }
    
    // Add related prayers if applicable
    if (partNumber === 4) { // Prayer section
        sectionHTML += generatePrayerSection();
    }
    
    contentMain.innerHTML = sectionHTML;
}

function generatePrayerSection() {
    let prayerHTML = `
        <div class="prayer-section">
            <h3>Traditional Prayers</h3>
            <div class="prayer-grid">
    `;
    
    // Add Our Father
    prayerHTML += `
        <div class="prayer-card">
            <h4>Our Father</h4>
            <div class="prayer-text">
                ${getTranslation('prayers', 'our_father', currentLanguage)}
            </div>
        </div>
    `;
    
    // Add Hail Mary
    prayerHTML += `
        <div class="prayer-card">
            <h4>Hail Mary</h4>
            <div class="prayer-text">
                ${getTranslation('prayers', 'hail_mary', currentLanguage)}
            </div>
        </div>
    `;
    
    prayerHTML += `
            </div>
        </div>
    `;
    
    return prayerHTML;
}

function goBack() {
    if (currentSection !== null) {
        // Go back to part overview
        currentSection = null;
        showPart(currentPart);
    } else if (currentPart !== null) {
        // Go back to main overview
        currentPart = null;
        const contentArea = document.getElementById('content-area');
        contentArea.style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Utility functions
function formatTextForAge(text, ageGroup) {
    // This function could be expanded to automatically adjust text complexity
    // based on age group using natural language processing
    switch (ageGroup) {
        case 'children':
            return text.replace(/\b\w{8,}\b/g, match => {
                // Replace complex words with simpler alternatives
                const simpleWords = {
                    'understanding': 'knowing',
                    'comprehend': 'understand',
                    'magnificent': 'wonderful',
                    'essential': 'important'
                };
                return simpleWords[match.toLowerCase()] || match;
            });
        case 'teens':
            // Add relevant examples and contemporary language
            return text;
        default:
            return text;
    }
}

function addInteractiveElements(ageGroup) {
    if (ageGroup === 'children') {
        // Add interactive elements for children
        setTimeout(() => {
            const activityCards = document.querySelectorAll('.activity-card');
            activityCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.classList.toggle('active');
                    // Could expand to show specific activities
                });
            });
        }, 100);
    }
}

// Search functionality (can be expanded)
function searchContent(query) {
    // Basic search implementation
    const results = [];
    
    Object.keys(catechismData.parts).forEach(partNum => {
        const part = catechismData.parts[partNum];
        part.sections.forEach((section, sectionIndex) => {
            const content = section.content[currentAgeGroup];
            if (content && content[currentLanguage]) {
                if (content[currentLanguage].toLowerCase().includes(query.toLowerCase())) {
                    results.push({
                        part: partNum,
                        section: sectionIndex,
                        title: section.title[currentLanguage] || section.title.en,
                        snippet: content[currentLanguage].substring(0, 150) + '...'
                    });
                }
            }
        });
    });
    
    return results;
}

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        switchAgeGroup,
        showPart,
        showSection,
        goBack,
        searchContent
    };
}
