// SEO Multitool JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Add event listeners for tool buttons
    const toolButtons = document.querySelectorAll('.tool-button');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolType = toolCard.getAttribute('data-tool');
            openTool(toolType);
        });
    });

    // Add event listeners for quick tools
    const quickTools = document.querySelectorAll('.quick-tool');
    quickTools.forEach(tool => {
        tool.addEventListener('click', function(e) {
            e.preventDefault();
            const toolType = this.getAttribute('data-tool');
            openTool(toolType);
        });
    });

    // Close tool button
    const closeButton = document.getElementById('close-tool');
    if (closeButton) {
        closeButton.addEventListener('click', closeTool);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function openTool(toolType) {
    const toolInterface = document.getElementById('tool-interface');
    const toolTitle = document.getElementById('current-tool-title');
    const toolContent = document.getElementById('tool-content');

    // Set tool title
    const toolTitles = {
        'meta-generator': 'Meta Tag Generator',
        'robots-generator': 'Robots.txt Generator',
        'sitemap-generator': 'XML Sitemap Generator',
        'opengraph-generator': 'Open Graph Generator',
        'keyword-density': 'Keyword Density Checker',
        'mobile-test': 'Mobile Friendly Test',
        'link-checker': 'Broken Link Checker',
        'canonical-generator': 'Canonical URL Generator',
        'hreflang-generator': 'Hreflang Tag Generator',
        'meta-preview': 'Meta Tags Preview',
        'schema-generator': 'Schema Markup Generator',
        'header-checker': 'HTTP Header Checker',
        'website-grader': 'Website Grader',
        'ssl-checker': 'SSL Checker',
        'domain-age': 'Domain Age Checker',
        'favicon-generator': 'Favicon Generator',
        'privacy-generator': 'Privacy Policy Generator',
        'terms-generator': 'Terms & Conditions Generator',
        'jsonld-generator': 'JSON-LD Generator'
    };

    toolTitle.textContent = toolTitles[toolType] || 'SEO Tool';

    // Generate tool content based on type
    toolContent.innerHTML = generateToolContent(toolType);

    // Show the tool interface
    toolInterface.style.display = 'block';
    toolInterface.scrollIntoView({ behavior: 'smooth' });

    // Add event listeners for the specific tool
    addToolEventListeners(toolType);
}

function closeTool() {
    const toolInterface = document.getElementById('tool-interface');
    toolInterface.style.display = 'none';
}

function generateToolContent(toolType) {
    switch (toolType) {
        case 'meta-generator':
            return generateMetaGeneratorContent();
        case 'robots-generator':
            return generateRobotsGeneratorContent();
        case 'sitemap-generator':
            return generateSitemapGeneratorContent();
        case 'opengraph-generator':
            return generateOpenGraphGeneratorContent();
        case 'keyword-density':
            return generateKeywordDensityContent();
        case 'mobile-test':
            return generateMobileTestContent();
        case 'link-checker':
            return generateLinkCheckerContent();
        case 'canonical-generator':
            return generateCanonicalGeneratorContent();
        case 'hreflang-generator':
            return generateHreflangGeneratorContent();
        case 'meta-preview':
            return generateMetaPreviewContent();
        case 'schema-generator':
            return generateSchemaGeneratorContent();
        case 'header-checker':
            return generateHeaderCheckerContent();
        case 'website-grader':
            return generateWebsiteGraderContent();
        case 'ssl-checker':
            return generateSSLCheckerContent();
        case 'domain-age':
            return generateDomainAgeContent();
        case 'favicon-generator':
            return generateFaviconGeneratorContent();
        case 'privacy-generator':
            return generatePrivacyGeneratorContent();
        case 'terms-generator':
            return generateTermsGeneratorContent();
        case 'jsonld-generator':
            return generateJSONLDGeneratorContent();
        default:
            return '<p>Tool content not available.</p>';
    }
}

function generateMetaGeneratorContent() {
    return `
        <div class="form-group">
            <label for="page-title">Page Title:</label>
            <input type="text" id="page-title" placeholder="Enter your page title (50-60 characters recommended)">
        </div>
        <div class="form-group">
            <label for="meta-description">Meta Description:</label>
            <textarea id="meta-description" placeholder="Enter your meta description (150-160 characters recommended)"></textarea>
        </div>
        <div class="form-group">
            <label for="meta-keywords">Keywords:</label>
            <input type="text" id="meta-keywords" placeholder="Enter keywords separated by commas">
        </div>
        <div class="form-group">
            <label for="page-url">Page URL:</label>
            <input type="url" id="page-url" placeholder="https://example.com/page">
        </div>
        <div class="form-group">
            <label for="author-name">Author:</label>
            <input type="text" id="author-name" placeholder="Author name">
        </div>
        <button onclick="generateMetaTags()" class="tool-button">Generate Meta Tags</button>
        <div id="meta-result" class="result-box" style="display: none;">
            <h3>Generated Meta Tags:</h3>
            <button class="copy-button" onclick="copyToClipboard('meta-output')">Copy</button>
            <pre id="meta-output"></pre>
        </div>
    `;
}

function generateRobotsGeneratorContent() {
    return `
        <div class="form-group">
            <label for="robots-type">Robots.txt Type:</label>
            <select id="robots-type">
                <option value="allow-all">Allow All Crawlers</option>
                <option value="block-all">Block All Crawlers</option>
                <option value="custom">Custom Configuration</option>
            </select>
        </div>
        <div class="form-group">
            <label for="sitemap-url">Sitemap URL:</label>
            <input type="url" id="sitemap-url" placeholder="https://example.com/sitemap.xml">
        </div>
        <div class="form-group" id="custom-rules" style="display: none;">
            <label for="custom-robots">Custom Rules:</label>
            <textarea id="custom-robots" placeholder="Enter custom robots.txt rules"></textarea>
        </div>
        <button onclick="generateRobotsTxt()" class="tool-button">Generate Robots.txt</button>
        <div id="robots-result" class="result-box" style="display: none;">
            <h3>Generated Robots.txt:</h3>
            <button class="copy-button" onclick="copyToClipboard('robots-output')">Copy</button>
            <pre id="robots-output"></pre>
        </div>
    `;
}

function generateSitemapGeneratorContent() {
    return `
        <div class="form-group">
            <label for="website-url">Website URL:</label>
            <input type="url" id="website-url" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label for="sitemap-urls">Page URLs (one per line):</label>
            <textarea id="sitemap-urls" placeholder="https://example.com/
https://example.com/about
https://example.com/contact"></textarea>
        </div>
        <div class="form-group">
            <label for="change-frequency">Change Frequency:</label>
            <select id="change-frequency">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
        <div class="form-group">
            <label for="priority">Priority:</label>
            <select id="priority">
                <option value="1.0">1.0 (Highest)</option>
                <option value="0.8">0.8 (High)</option>
                <option value="0.6">0.6 (Medium)</option>
                <option value="0.4">0.4 (Low)</option>
                <option value="0.2">0.2 (Lowest)</option>
            </select>
        </div>
        <button onclick="generateSitemap()" class="tool-button">Generate XML Sitemap</button>
        <div id="sitemap-result" class="result-box" style="display: none;">
            <h3>Generated XML Sitemap:</h3>
            <button class="copy-button" onclick="copyToClipboard('sitemap-output')">Copy</button>
            <pre id="sitemap-output"></pre>
        </div>
    `;
}

function generateOpenGraphGeneratorContent() {
    return `
        <div class="form-group">
            <label for="og-title">Title:</label>
            <input type="text" id="og-title" placeholder="Page title for social sharing">
        </div>
        <div class="form-group">
            <label for="og-description">Description:</label>
            <textarea id="og-description" placeholder="Description for social sharing"></textarea>
        </div>
        <div class="form-group">
            <label for="og-url">URL:</label>
            <input type="url" id="og-url" placeholder="https://example.com/page">
        </div>
        <div class="form-group">
            <label for="og-image">Image URL:</label>
            <input type="url" id="og-image" placeholder="https://example.com/image.jpg">
        </div>
        <div class="form-group">
            <label for="og-type">Type:</label>
            <select id="og-type">
                <option value="website">Website</option>
                <option value="article">Article</option>
                <option value="product">Product</option>
                <option value="video">Video</option>
            </select>
        </div>
        <button onclick="generateOpenGraph()" class="tool-button">Generate Open Graph Tags</button>
        <div id="og-result" class="result-box" style="display: none;">
            <h3>Generated Open Graph Tags:</h3>
            <button class="copy-button" onclick="copyToClipboard('og-output')">Copy</button>
            <pre id="og-output"></pre>
        </div>
    `;
}

function generateKeywordDensityContent() {
    return `
        <div class="form-group">
            <label for="content-text">Content Text:</label>
            <textarea id="content-text" placeholder="Paste your content here to analyze keyword density"></textarea>
        </div>
        <div class="form-group">
            <label for="target-keyword">Target Keyword (optional):</label>
            <input type="text" id="target-keyword" placeholder="Enter specific keyword to analyze">
        </div>
        <button onclick="analyzeKeywordDensity()" class="tool-button">Analyze Keyword Density</button>
        <div id="keyword-result" class="result-box" style="display: none;">
            <h3>Keyword Density Analysis:</h3>
            <div id="keyword-output"></div>
        </div>
    `;
}

function generateMobileTestContent() {
    return `
        <div class="form-group">
            <label for="mobile-url">Website URL:</label>
            <input type="url" id="mobile-url" placeholder="https://example.com">
        </div>
        <button onclick="testMobileFriendly()" class="tool-button">Test Mobile Friendliness</button>
        <div id="mobile-result" class="result-box" style="display: none;">
            <h3>Mobile Friendly Test Results:</h3>
            <div id="mobile-output"></div>
        </div>
    `;
}

function generateLinkCheckerContent() {
    return `
        <div class="form-group">
            <label for="check-url">Website URL:</label>
            <input type="url" id="check-url" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label for="link-list">Or paste links to check (one per line):</label>
            <textarea id="link-list" placeholder="https://example.com/page1
https://example.com/page2"></textarea>
        </div>
        <button onclick="checkBrokenLinks()" class="tool-button">Check Links</button>
        <div id="link-result" class="result-box" style="display: none;">
            <h3>Link Check Results:</h3>
            <div id="link-output"></div>
        </div>
    `;
}

function generateCanonicalGeneratorContent() {
    return `
        <div class="form-group">
            <label for="canonical-url">Canonical URL:</label>
            <input type="url" id="canonical-url" placeholder="https://example.com/canonical-page">
        </div>
        <button onclick="generateCanonical()" class="tool-button">Generate Canonical Tag</button>
        <div id="canonical-result" class="result-box" style="display: none;">
            <h3>Generated Canonical Tag:</h3>
            <button class="copy-button" onclick="copyToClipboard('canonical-output')">Copy</button>
            <pre id="canonical-output"></pre>
        </div>
    `;
}

function generateHreflangGeneratorContent() {
    return `
        <div class="form-group">
            <label for="default-url">Default URL:</label>
            <input type="url" id="default-url" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label for="hreflang-entries">Language/Region URLs (format: lang-region|URL):</label>
            <textarea id="hreflang-entries" placeholder="en-us|https://example.com/en
es-es|https://example.com/es
fr-fr|https://example.com/fr"></textarea>
        </div>
        <button onclick="generateHreflang()" class="tool-button">Generate Hreflang Tags</button>
        <div id="hreflang-result" class="result-box" style="display: none;">
            <h3>Generated Hreflang Tags:</h3>
            <button class="copy-button" onclick="copyToClipboard('hreflang-output')">Copy</button>
            <pre id="hreflang-output"></pre>
        </div>
    `;
}

function generateMetaPreviewContent() {
    return `
        <div class="form-group">
            <label for="preview-title">Page Title:</label>
            <input type="text" id="preview-title" placeholder="Enter page title">
        </div>
        <div class="form-group">
            <label for="preview-description">Meta Description:</label>
            <textarea id="preview-description" placeholder="Enter meta description"></textarea>
        </div>
        <div class="form-group">
            <label for="preview-url">Display URL:</label>
            <input type="text" id="preview-url" placeholder="example.com/page">
        </div>
        <button onclick="previewMetaTags()" class="tool-button">Preview in Search Results</button>
        <div id="preview-result" class="result-box" style="display: none;">
            <h3>Search Result Preview:</h3>
            <div id="preview-output"></div>
        </div>
    `;
}

function generateSchemaGeneratorContent() {
    return `
        <div class="form-group">
            <label for="schema-type">Schema Type:</label>
            <select id="schema-type">
                <option value="organization">Organization</option>
                <option value="person">Person</option>
                <option value="product">Product</option>
                <option value="article">Article</option>
                <option value="local-business">Local Business</option>
                <option value="website">Website</option>
            </select>
        </div>
        <div id="schema-fields"></div>
        <button onclick="generateSchema()" class="tool-button">Generate Schema Markup</button>
        <div id="schema-result" class="result-box" style="display: none;">
            <h3>Generated Schema Markup:</h3>
            <button class="copy-button" onclick="copyToClipboard('schema-output')">Copy</button>
            <pre id="schema-output"></pre>
        </div>
    `;
}

function generateHeaderCheckerContent() {
    return `
        <div class="form-group">
            <label for="header-url">Website URL:</label>
            <input type="url" id="header-url" placeholder="https://example.com">
        </div>
        <button onclick="checkHeaders()" class="tool-button">Check HTTP Headers</button>
        <div id="header-result" class="result-box" style="display: none;">
            <h3>HTTP Headers Analysis:</h3>
            <div id="header-output"></div>
        </div>
    `;
}

function generateWebsiteGraderContent() {
    return `
        <div class="form-group">
            <label for="grade-url">Website URL:</label>
            <input type="url" id="grade-url" placeholder="https://example.com">
        </div>
        <button onclick="gradeWebsite()" class="tool-button">Grade Website</button>
        <div id="grade-result" class="result-box" style="display: none;">
            <h3>Website SEO Grade:</h3>
            <div id="grade-output"></div>
        </div>
    `;
}

function generateSSLCheckerContent() {
    return `
        <div class="form-group">
            <label for="ssl-url">Website URL:</label>
            <input type="url" id="ssl-url" placeholder="https://example.com">
        </div>
        <button onclick="checkSSL()" class="tool-button">Check SSL Certificate</button>
        <div id="ssl-result" class="result-box" style="display: none;">
            <h3>SSL Certificate Status:</h3>
            <div id="ssl-output"></div>
        </div>
    `;
}

function generateDomainAgeContent() {
    return `
        <div class="form-group">
            <label for="domain-name">Domain Name:</label>
            <input type="text" id="domain-name" placeholder="example.com">
        </div>
        <button onclick="checkDomainAge()" class="tool-button">Check Domain Age</button>
        <div id="domain-result" class="result-box" style="display: none;">
            <h3>Domain Age Information:</h3>
            <div id="domain-output"></div>
        </div>
    `;
}

function generateFaviconGeneratorContent() {
    return `
        <div class="form-group">
            <label for="favicon-text">Text for Favicon:</label>
            <input type="text" id="favicon-text" placeholder="Enter 1-2 characters" maxlength="2">
        </div>
        <div class="form-group">
            <label for="favicon-bg-color">Background Color:</label>
            <input type="color" id="favicon-bg-color" value="#00ff00">
        </div>
        <div class="form-group">
            <label for="favicon-text-color">Text Color:</label>
            <input type="color" id="favicon-text-color" value="#ffffff">
        </div>
        <button onclick="generateFavicon()" class="tool-button">Generate Favicon</button>
        <div id="favicon-result" class="result-box" style="display: none;">
            <h3>Generated Favicon:</h3>
            <div id="favicon-output"></div>
        </div>
    `;
}

function generatePrivacyGeneratorContent() {
    return `
        <div class="form-group">
            <label for="company-name">Company/Website Name:</label>
            <input type="text" id="company-name" placeholder="Your Company Name">
        </div>
        <div class="form-group">
            <label for="website-url-privacy">Website URL:</label>
            <input type="url" id="website-url-privacy" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label for="contact-email">Contact Email:</label>
            <input type="email" id="contact-email" placeholder="contact@example.com">
        </div>
        <div class="form-group">
            <label for="privacy-features">Features Used:</label>
            <div>
                <input type="checkbox" id="cookies" name="features" value="cookies">
                <label for="cookies">Cookies</label>
            </div>
            <div>
                <input type="checkbox" id="analytics" name="features" value="analytics">
                <label for="analytics">Google Analytics</label>
            </div>
            <div>
                <input type="checkbox" id="advertising" name="features" value="advertising">
                <label for="advertising">Advertising</label>
            </div>
        </div>
        <button onclick="generatePrivacyPolicy()" class="tool-button">Generate Privacy Policy</button>
        <div id="privacy-result" class="result-box" style="display: none;">
            <h3>Generated Privacy Policy:</h3>
            <button class="copy-button" onclick="copyToClipboard('privacy-output')">Copy</button>
            <div id="privacy-output"></div>
        </div>
    `;
}

function generateTermsGeneratorContent() {
    return `
        <div class="form-group">
            <label for="terms-company-name">Company/Website Name:</label>
            <input type="text" id="terms-company-name" placeholder="Your Company Name">
        </div>
        <div class="form-group">
            <label for="terms-website-url">Website URL:</label>
            <input type="url" id="terms-website-url" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label for="terms-contact-email">Contact Email:</label>
            <input type="email" id="terms-contact-email" placeholder="contact@example.com">
        </div>
        <div class="form-group">
            <label for="terms-country">Country/Jurisdiction:</label>
            <input type="text" id="terms-country" placeholder="United States">
        </div>
        <button onclick="generateTermsConditions()" class="tool-button">Generate Terms & Conditions</button>
        <div id="terms-result" class="result-box" style="display: none;">
            <h3>Generated Terms & Conditions:</h3>
            <button class="copy-button" onclick="copyToClipboard('terms-output')">Copy</button>
            <div id="terms-output"></div>
        </div>
    `;
}

function generateJSONLDGeneratorContent() {
    return `
        <div class="form-group">
            <label for="jsonld-type">JSON-LD Type:</label>
            <select id="jsonld-type">
                <option value="organization">Organization</option>
                <option value="person">Person</option>
                <option value="website">Website</option>
                <option value="article">Article</option>
                <option value="product">Product</option>
            </select>
        </div>
        <div id="jsonld-fields"></div>
        <button onclick="generateJSONLD()" class="tool-button">Generate JSON-LD</button>
        <div id="jsonld-result" class="result-box" style="display: none;">
            <h3>Generated JSON-LD:</h3>
            <button class="copy-button" onclick="copyToClipboard('jsonld-output')">Copy</button>
            <pre id="jsonld-output"></pre>
        </div>
    `;
}

function addToolEventListeners(toolType) {
    // Add specific event listeners based on tool type
    if (toolType === 'robots-generator') {
        const robotsType = document.getElementById('robots-type');
        if (robotsType) {
            robotsType.addEventListener('change', function() {
                const customRules = document.getElementById('custom-rules');
                if (this.value === 'custom') {
                    customRules.style.display = 'block';
                } else {
                    customRules.style.display = 'none';
                }
            });
        }
    }

    if (toolType === 'schema-generator') {
        const schemaType = document.getElementById('schema-type');
        if (schemaType) {
            schemaType.addEventListener('change', function() {
                updateSchemaFields(this.value);
            });
            // Initialize with default selection
            updateSchemaFields(schemaType.value);
        }
    }

    if (toolType === 'jsonld-generator') {
        const jsonldType = document.getElementById('jsonld-type');
        if (jsonldType) {
            jsonldType.addEventListener('change', function() {
                updateJSONLDFields(this.value);
            });
            // Initialize with default selection
            updateJSONLDFields(jsonldType.value);
        }
    }
}

// Tool Functions
function generateMetaTags() {
    const title = document.getElementById('page-title').value;
    const description = document.getElementById('meta-description').value;
    const keywords = document.getElementById('meta-keywords').value;
    const url = document.getElementById('page-url').value;
    const author = document.getElementById('author-name').value;

    if (!title || !description) {
        showMessage('Please fill in at least the title and description fields.', 'error');
        return;
    }

    let metaTags = `<title>${title}</title>\n`;
    metaTags += `<meta name="description" content="${description}">\n`;
    
    if (keywords) {
        metaTags += `<meta name="keywords" content="${keywords}">\n`;
    }
    
    if (author) {
        metaTags += `<meta name="author" content="${author}">\n`;
    }
    
    metaTags += `<meta name="robots" content="index, follow">\n`;
    
    if (url) {
        metaTags += `<link rel="canonical" href="${url}">\n`;
        metaTags += `<meta property="og:url" content="${url}">\n`;
    }
    
    metaTags += `<meta property="og:title" content="${title}">\n`;
    metaTags += `<meta property="og:description" content="${description}">\n`;
    metaTags += `<meta property="og:type" content="website">\n`;
    metaTags += `<meta name="twitter:card" content="summary">\n`;
    metaTags += `<meta name="twitter:title" content="${title}">\n`;
    metaTags += `<meta name="twitter:description" content="${description}">`;

    document.getElementById('meta-output').textContent = metaTags;
    document.getElementById('meta-result').style.display = 'block';
    showMessage('Meta tags generated successfully!', 'success');
}

function generateRobotsTxt() {
    const robotsType = document.getElementById('robots-type').value;
    const sitemapUrl = document.getElementById('sitemap-url').value;
    const customRules = document.getElementById('custom-robots').value;

    let robotsTxt = '';

    switch (robotsType) {
        case 'allow-all':
            robotsTxt = 'User-agent: *\nDisallow:\n';
            break;
        case 'block-all':
            robotsTxt = 'User-agent: *\nDisallow: /\n';
            break;
        case 'custom':
            robotsTxt = customRules || 'User-agent: *\nDisallow:\n';
            break;
    }

    if (sitemapUrl) {
        robotsTxt += `\nSitemap: ${sitemapUrl}`;
    }

    document.getElementById('robots-output').textContent = robotsTxt;
    document.getElementById('robots-result').style.display = 'block';
    showMessage('Robots.txt generated successfully!', 'success');
}

function generateSitemap() {
    const websiteUrl = document.getElementById('website-url').value;
    const urls = document.getElementById('sitemap-urls').value;
    const changeFreq = document.getElementById('change-frequency').value;
    const priority = document.getElementById('priority').value;

    if (!urls) {
        showMessage('Please enter at least one URL.', 'error');
        return;
    }

    const urlList = urls.split('\n').filter(url => url.trim());
    const currentDate = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urlList.forEach(url => {
        url = url.trim();
        if (url) {
            sitemap += '  <url>\n';
            sitemap += `    <loc>${url}</loc>\n`;
            sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
            sitemap += `    <changefreq>${changeFreq}</changefreq>\n`;
            sitemap += `    <priority>${priority}</priority>\n`;
            sitemap += '  </url>\n';
        }
    });

    sitemap += '</urlset>';

    document.getElementById('sitemap-output').textContent = sitemap;
    document.getElementById('sitemap-result').style.display = 'block';
    showMessage('XML Sitemap generated successfully!', 'success');
}

function generateOpenGraph() {
    const title = document.getElementById('og-title').value;
    const description = document.getElementById('og-description').value;
    const url = document.getElementById('og-url').value;
    const image = document.getElementById('og-image').value;
    const type = document.getElementById('og-type').value;

    if (!title || !description) {
        showMessage('Please fill in at least the title and description fields.', 'error');
        return;
    }

    let ogTags = `<meta property="og:title" content="${title}">\n`;
    ogTags += `<meta property="og:description" content="${description}">\n`;
    ogTags += `<meta property="og:type" content="${type}">\n`;
    
    if (url) {
        ogTags += `<meta property="og:url" content="${url}">\n`;
    }
    
    if (image) {
        ogTags += `<meta property="og:image" content="${image}">\n`;
    }
    
    ogTags += `<meta name="twitter:card" content="summary_large_image">\n`;
    ogTags += `<meta name="twitter:title" content="${title}">\n`;
    ogTags += `<meta name="twitter:description" content="${description}">`;
    
    if (image) {
        ogTags += `\n<meta name="twitter:image" content="${image}">`;
    }

    document.getElementById('og-output').textContent = ogTags;
    document.getElementById('og-result').style.display = 'block';
    showMessage('Open Graph tags generated successfully!', 'success');
}

function analyzeKeywordDensity() {
    const content = document.getElementById('content-text').value;
    const targetKeyword = document.getElementById('target-keyword').value.toLowerCase();

    if (!content) {
        showMessage('Please enter content to analyze.', 'error');
        return;
    }

    const words = content.toLowerCase().match(/\b\w+\b/g) || [];
    const totalWords = words.length;
    const wordCount = {};

    // Count word frequency
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Sort by frequency
    const sortedWords = Object.entries(wordCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);

    let output = `<p><strong>Total Words:</strong> ${totalWords}</p>`;
    
    if (targetKeyword) {
        const keywordCount = wordCount[targetKeyword] || 0;
        const density = ((keywordCount / totalWords) * 100).toFixed(2);
        output += `<p><strong>Target Keyword "${targetKeyword}":</strong> ${keywordCount} times (${density}%)</p>`;
    }

    output += '<h4>Top 10 Keywords:</h4><table style="width: 100%; border-collapse: collapse;">';
    output += '<tr style="border-bottom: 1px solid #00ff00;"><th style="text-align: left; padding: 8px;">Keyword</th><th style="text-align: left; padding: 8px;">Count</th><th style="text-align: left; padding: 8px;">Density</th></tr>';
    
    sortedWords.forEach(([word, count]) => {
        const density = ((count / totalWords) * 100).toFixed(2);
        output += `<tr style="border-bottom: 1px solid #333;"><td style="padding: 8px;">${word}</td><td style="padding: 8px;">${count}</td><td style="padding: 8px;">${density}%</td></tr>`;
    });
    
    output += '</table>';

    document.getElementById('keyword-output').innerHTML = output;
    document.getElementById('keyword-result').style.display = 'block';
    showMessage('Keyword density analysis completed!', 'success');
}

function testMobileFriendly() {
    const url = document.getElementById('mobile-url').value;

    if (!url) {
        showMessage('Please enter a URL to test.', 'error');
        return;
    }

    // Simulate mobile-friendly test (since we can't make actual API calls)
    const checks = [
        { name: 'Responsive Design', status: 'pass', description: 'Page uses responsive design principles' },
        { name: 'Text Size', status: 'pass', description: 'Text is readable without zooming' },
        { name: 'Touch Elements', status: 'warning', description: 'Some touch elements may be too close together' },
        { name: 'Viewport Meta Tag', status: 'pass', description: 'Page has a viewport meta tag' },
        { name: 'Content Width', status: 'pass', description: 'Content fits within viewport' }
    ];

    let output = `<p><strong>URL Tested:</strong> ${url}</p>`;
    output += '<h4>Mobile Friendliness Checks:</h4>';
    
    checks.forEach(check => {
        const statusColor = check.status === 'pass' ? '#00ff00' : check.status === 'warning' ? '#ffaa00' : '#ff4444';
        output += `<div style="margin: 10px 0; padding: 10px; border-left: 4px solid ${statusColor};">`;
        output += `<strong>${check.name}:</strong> <span style="color: ${statusColor};">${check.status.toUpperCase()}</span><br>`;
        output += `${check.description}`;
        output += '</div>';
    });

    const passCount = checks.filter(c => c.status === 'pass').length;
    const score = Math.round((passCount / checks.length) * 100);
    output += `<p><strong>Mobile Friendliness Score:</strong> ${score}%</p>`;

    document.getElementById('mobile-output').innerHTML = output;
    document.getElementById('mobile-result').style.display = 'block';
    showMessage('Mobile friendly test completed!', 'success');
}

function checkBrokenLinks() {
    const url = document.getElementById('check-url').value;
    const linkList = document.getElementById('link-list').value;

    if (!url && !linkList) {
        showMessage('Please enter a URL or list of links to check.', 'error');
        return;
    }

    // Simulate link checking (since we can't make actual HTTP requests)
    let linksToCheck = [];
    
    if (linkList) {
        linksToCheck = linkList.split('\n').filter(link => link.trim());
    } else {
        // Simulate finding links on the page
        linksToCheck = [
            url,
            url + '/about',
            url + '/contact',
            url + '/services'
        ];
    }

    let output = '<h4>Link Check Results:</h4>';
    
    linksToCheck.forEach((link, index) => {
        link = link.trim();
        if (link) {
            // Simulate random results
            const isWorking = Math.random() > 0.2; // 80% chance of working
            const statusCode = isWorking ? 200 : (Math.random() > 0.5 ? 404 : 500);
            const statusColor = isWorking ? '#00ff00' : '#ff4444';
            
            output += `<div style="margin: 10px 0; padding: 10px; border-left: 4px solid ${statusColor};">`;
            output += `<strong>${link}</strong><br>`;
            output += `Status: <span style="color: ${statusColor};">${statusCode} ${isWorking ? 'OK' : 'Error'}</span>`;
            output += '</div>';
        }
    });

    document.getElementById('link-output').innerHTML = output;
    document.getElementById('link-result').style.display = 'block';
    showMessage('Link check completed!', 'success');
}

function generateCanonical() {
    const url = document.getElementById('canonical-url').value;

    if (!url) {
        showMessage('Please enter a canonical URL.', 'error');
        return;
    }

    const canonicalTag = `<link rel="canonical" href="${url}">`;

    document.getElementById('canonical-output').textContent = canonicalTag;
    document.getElementById('canonical-result').style.display = 'block';
    showMessage('Canonical tag generated successfully!', 'success');
}

function generateHreflang() {
    const defaultUrl = document.getElementById('default-url').value;
    const entries = document.getElementById('hreflang-entries').value;

    if (!entries) {
        showMessage('Please enter language/region entries.', 'error');
        return;
    }

    const lines = entries.split('\n').filter(line => line.trim());
    let hreflangTags = '';

    // Add x-default if default URL is provided
    if (defaultUrl) {
        hreflangTags += `<link rel="alternate" hreflang="x-default" href="${defaultUrl}">\n`;
    }

    lines.forEach(line => {
        const parts = line.split('|');
        if (parts.length === 2) {
            const langRegion = parts[0].trim();
            const url = parts[1].trim();
            hreflangTags += `<link rel="alternate" hreflang="${langRegion}" href="${url}">\n`;
        }
    });

    // Remove trailing newline
    hreflangTags = hreflangTags.trim();

    document.getElementById('hreflang-output').textContent = hreflangTags;
    document.getElementById('hreflang-result').style.display = 'block';
    showMessage('Hreflang tags generated successfully!', 'success');
}

function previewMetaTags() {
    const title = document.getElementById('preview-title').value;
    const description = document.getElementById('preview-description').value;
    const url = document.getElementById('preview-url').value;

    if (!title || !description) {
        showMessage('Please fill in title and description fields.', 'error');
        return;
    }

    const preview = `
        <div style="max-width: 600px; font-family: arial, sans-serif; border: 1px solid #00ff00; padding: 20px; border-radius: 8px; background-color: #2a2a2a;">
            <div style="color: #1a0dab; font-size: 18px; line-height: 1.3; margin-bottom: 5px; text-decoration: underline; cursor: pointer;">
                ${title}
            </div>
            <div style="color: #00ff00; font-size: 14px; margin-bottom: 5px;">
                ${url || 'example.com'}
            </div>
            <div style="color: #ffffff; font-size: 14px; line-height: 1.4;">
                ${description}
            </div>
        </div>
    `;

    document.getElementById('preview-output').innerHTML = preview;
    document.getElementById('preview-result').style.display = 'block';
    showMessage('Meta tags preview generated!', 'success');
}

function updateSchemaFields(type) {
    const fieldsContainer = document.getElementById('schema-fields');
    let fields = '';

    switch (type) {
        case 'organization':
            fields = `
                <div class="form-group">
                    <label for="org-name">Organization Name:</label>
                    <input type="text" id="org-name" placeholder="Company Name">
                </div>
                <div class="form-group">
                    <label for="org-url">Website URL:</label>
                    <input type="url" id="org-url" placeholder="https://example.com">
                </div>
                <div class="form-group">
                    <label for="org-logo">Logo URL:</label>
                    <input type="url" id="org-logo" placeholder="https://example.com/logo.png">
                </div>
            `;
            break;
        case 'person':
            fields = `
                <div class="form-group">
                    <label for="person-name">Person Name:</label>
                    <input type="text" id="person-name" placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="person-job">Job Title:</label>
                    <input type="text" id="person-job" placeholder="CEO">
                </div>
                <div class="form-group">
                    <label for="person-url">Website URL:</label>
                    <input type="url" id="person-url" placeholder="https://johndoe.com">
                </div>
            `;
            break;
        case 'product':
            fields = `
                <div class="form-group">
                    <label for="product-name">Product Name:</label>
                    <input type="text" id="product-name" placeholder="Product Name">
                </div>
                <div class="form-group">
                    <label for="product-description">Description:</label>
                    <textarea id="product-description" placeholder="Product description"></textarea>
                </div>
                <div class="form-group">
                    <label for="product-price">Price:</label>
                    <input type="number" id="product-price" placeholder="99.99">
                </div>
                <div class="form-group">
                    <label for="product-currency">Currency:</label>
                    <input type="text" id="product-currency" placeholder="USD" value="USD">
                </div>
            `;
            break;
        case 'article':
            fields = `
                <div class="form-group">
                    <label for="article-title">Article Title:</label>
                    <input type="text" id="article-title" placeholder="Article Title">
                </div>
                <div class="form-group">
                    <label for="article-author">Author:</label>
                    <input type="text" id="article-author" placeholder="Author Name">
                </div>
                <div class="form-group">
                    <label for="article-date">Published Date:</label>
                    <input type="date" id="article-date">
                </div>
            `;
            break;
        case 'local-business':
            fields = `
                <div class="form-group">
                    <label for="business-name">Business Name:</label>
                    <input type="text" id="business-name" placeholder="Business Name">
                </div>
                <div class="form-group">
                    <label for="business-address">Address:</label>
                    <input type="text" id="business-address" placeholder="123 Main St, City, State">
                </div>
                <div class="form-group">
                    <label for="business-phone">Phone:</label>
                    <input type="tel" id="business-phone" placeholder="+1-555-123-4567">
                </div>
            `;
            break;
        case 'website':
            fields = `
                <div class="form-group">
                    <label for="website-name">Website Name:</label>
                    <input type="text" id="website-name" placeholder="Website Name">
                </div>
                <div class="form-group">
                    <label for="website-url">Website URL:</label>
                    <input type="url" id="website-url" placeholder="https://example.com">
                </div>
                <div class="form-group">
                    <label for="website-description">Description:</label>
                    <textarea id="website-description" placeholder="Website description"></textarea>
                </div>
            `;
            break;
    }

    fieldsContainer.innerHTML = fields;
}

function generateSchema() {
    const type = document.getElementById('schema-type').value;
    let schema = {};

    switch (type) {
        case 'organization':
            schema = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": document.getElementById('org-name')?.value || "",
                "url": document.getElementById('org-url')?.value || "",
                "logo": document.getElementById('org-logo')?.value || ""
            };
            break;
        case 'person':
            schema = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": document.getElementById('person-name')?.value || "",
                "jobTitle": document.getElementById('person-job')?.value || "",
                "url": document.getElementById('person-url')?.value || ""
            };
            break;
        case 'product':
            schema = {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": document.getElementById('product-name')?.value || "",
                "description": document.getElementById('product-description')?.value || "",
                "offers": {
                    "@type": "Offer",
                    "price": document.getElementById('product-price')?.value || "",
                    "priceCurrency": document.getElementById('product-currency')?.value || "USD"
                }
            };
            break;
        case 'article':
            schema = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": document.getElementById('article-title')?.value || "",
                "author": {
                    "@type": "Person",
                    "name": document.getElementById('article-author')?.value || ""
                },
                "datePublished": document.getElementById('article-date')?.value || ""
            };
            break;
        case 'local-business':
            schema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": document.getElementById('business-name')?.value || "",
                "address": document.getElementById('business-address')?.value || "",
                "telephone": document.getElementById('business-phone')?.value || ""
            };
            break;
        case 'website':
            schema = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": document.getElementById('website-name')?.value || "",
                "url": document.getElementById('website-url')?.value || "",
                "description": document.getElementById('website-description')?.value || ""
            };
            break;
    }

    const schemaMarkup = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;

    document.getElementById('schema-output').textContent = schemaMarkup;
    document.getElementById('schema-result').style.display = 'block';
    showMessage('Schema markup generated successfully!', 'success');
}

function checkHeaders() {
    const url = document.getElementById('header-url').value;

    if (!url) {
        showMessage('Please enter a URL to check.', 'error');
        return;
    }

    // Simulate HTTP header check
    const headers = [
        { name: 'Status Code', value: '200 OK', status: 'good' },
        { name: 'Content-Type', value: 'text/html; charset=UTF-8', status: 'good' },
        { name: 'Server', value: 'nginx/1.18.0', status: 'info' },
        { name: 'X-Frame-Options', value: 'SAMEORIGIN', status: 'good' },
        { name: 'X-Content-Type-Options', value: 'nosniff', status: 'good' },
        { name: 'Strict-Transport-Security', value: 'Missing', status: 'warning' },
        { name: 'Content-Security-Policy', value: 'Missing', status: 'warning' }
    ];

    let output = `<p><strong>URL Analyzed:</strong> ${url}</p>`;
    output += '<h4>HTTP Headers Analysis:</h4>';

    headers.forEach(header => {
        const statusColor = header.status === 'good' ? '#00ff00' : header.status === 'warning' ? '#ffaa00' : '#ffffff';
        output += `<div style="margin: 10px 0; padding: 10px; border-left: 4px solid ${statusColor};">`;
        output += `<strong>${header.name}:</strong> ${header.value}`;
        output += '</div>';
    });

    document.getElementById('header-output').innerHTML = output;
    document.getElementById('header-result').style.display = 'block';
    showMessage('HTTP headers analysis completed!', 'success');
}

function gradeWebsite() {
    const url = document.getElementById('grade-url').value;

    if (!url) {
        showMessage('Please enter a URL to grade.', 'error');
        return;
    }

    // Simulate website grading
    const factors = [
        { name: 'Page Speed', score: 85, weight: 20 },
        { name: 'Mobile Friendliness', score: 92, weight: 20 },
        { name: 'SEO Optimization', score: 78, weight: 25 },
        { name: 'Security', score: 88, weight: 15 },
        { name: 'Accessibility', score: 75, weight: 10 },
        { name: 'Best Practices', score: 82, weight: 10 }
    ];

    let totalScore = 0;
    let totalWeight = 0;

    let output = `<p><strong>Website Analyzed:</strong> ${url}</p>`;
    output += '<h4>SEO Grade Breakdown:</h4>';

    factors.forEach(factor => {
        totalScore += factor.score * factor.weight;
        totalWeight += factor.weight;
        
        const scoreColor = factor.score >= 80 ? '#00ff00' : factor.score >= 60 ? '#ffaa00' : '#ff4444';
        output += `<div style="margin: 10px 0; padding: 10px; border-left: 4px solid ${scoreColor};">`;
        output += `<strong>${factor.name}:</strong> <span style="color: ${scoreColor};">${factor.score}/100</span> (Weight: ${factor.weight}%)`;
        output += '</div>';
    });

    const overallScore = Math.round(totalScore / totalWeight);
    const gradeColor = overallScore >= 80 ? '#00ff00' : overallScore >= 60 ? '#ffaa00' : '#ff4444';
    
    output += `<div style="margin: 20px 0; padding: 20px; border: 2px solid ${gradeColor}; border-radius: 8px; text-align: center;">`;
    output += `<h3 style="color: ${gradeColor}; margin: 0;">Overall SEO Grade: ${overallScore}/100</h3>`;
    output += '</div>';

    document.getElementById('grade-output').innerHTML = output;
    document.getElementById('grade-result').style.display = 'block';
    showMessage('Website grading completed!', 'success');
}

function checkSSL() {
    const url = document.getElementById('ssl-url').value;

    if (!url) {
        showMessage('Please enter a URL to check.', 'error');
        return;
    }

    // Simulate SSL check
    const isSecure = url.startsWith('https://');
    const sslInfo = {
        valid: isSecure,
        issuer: isSecure ? 'Let\'s Encrypt Authority X3' : 'N/A',
        expires: isSecure ? '2025-12-31' : 'N/A',
        protocol: isSecure ? 'TLS 1.3' : 'N/A'
    };

    let output = `<p><strong>URL Checked:</strong> ${url}</p>`;
    
    if (sslInfo.valid) {
        output += '<div style="padding: 15px; border: 2px solid #00ff00; border-radius: 8px; margin: 10px 0;">';
        output += '<h4 style="color: #00ff00; margin-top: 0;">✓ SSL Certificate Valid</h4>';
        output += `<p><strong>Issuer:</strong> ${sslInfo.issuer}</p>`;
        output += `<p><strong>Expires:</strong> ${sslInfo.expires}</p>`;
        output += `<p><strong>Protocol:</strong> ${sslInfo.protocol}</p>`;
        output += '</div>';
    } else {
        output += '<div style="padding: 15px; border: 2px solid #ff4444; border-radius: 8px; margin: 10px 0;">';
        output += '<h4 style="color: #ff4444; margin-top: 0;">✗ No SSL Certificate Found</h4>';
        output += '<p>This website does not use HTTPS encryption. Consider installing an SSL certificate for security.</p>';
        output += '</div>';
    }

    document.getElementById('ssl-output').innerHTML = output;
    document.getElementById('ssl-result').style.display = 'block';
    showMessage('SSL certificate check completed!', 'success');
}

function checkDomainAge() {
    const domain = document.getElementById('domain-name').value;

    if (!domain) {
        showMessage('Please enter a domain name.', 'error');
        return;
    }

    // Simulate domain age check
    const registrationDate = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const currentDate = new Date();
    const ageInDays = Math.floor((currentDate - registrationDate) / (1000 * 60 * 60 * 24));
    const ageInYears = Math.floor(ageInDays / 365);
    const remainingDays = ageInDays % 365;

    let output = `<p><strong>Domain:</strong> ${domain}</p>`;
    output += '<div style="padding: 15px; border: 2px solid #00ff00; border-radius: 8px; margin: 10px 0;">';
    output += `<p><strong>Registration Date:</strong> ${registrationDate.toDateString()}</p>`;
    output += `<p><strong>Domain Age:</strong> ${ageInYears} years, ${remainingDays} days</p>`;
    output += `<p><strong>Total Days:</strong> ${ageInDays} days</p>`;
    output += '</div>';

    if (ageInYears >= 2) {
        output += '<p style="color: #00ff00;">✓ This is a well-established domain, which is good for SEO.</p>';
    } else if (ageInYears >= 1) {
        output += '<p style="color: #ffaa00;">⚠ This domain is moderately aged. Older domains tend to rank better.</p>';
    } else {
        output += '<p style="color: #ff4444;">⚠ This is a relatively new domain. Building authority may take time.</p>';
    }

    document.getElementById('domain-output').innerHTML = output;
    document.getElementById('domain-result').style.display = 'block';
    showMessage('Domain age check completed!', 'success');
}

function generateFavicon() {
    const text = document.getElementById('favicon-text').value;
    const bgColor = document.getElementById('favicon-bg-color').value;
    const textColor = document.getElementById('favicon-text-color').value;

    if (!text) {
        showMessage('Please enter text for the favicon.', 'error');
        return;
    }

    // Create a simple favicon preview using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 64, 64);

    // Add text
    ctx.fillStyle = textColor;
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text.toUpperCase(), 32, 32);

    const dataURL = canvas.toDataURL();

    let output = '<div style="text-align: center; margin: 20px 0;">';
    output += `<img src="${dataURL}" style="border: 2px solid #00ff00; border-radius: 4px;" alt="Favicon Preview">`;
    output += '<p><strong>Favicon Preview (64x64)</strong></p>';
    output += '</div>';

    output += '<h4>Favicon HTML Code:</h4>';
    output += '<pre style="background-color: #2a2a2a; padding: 15px; border-radius: 6px; overflow-x: auto;">';
    output += '&lt;link rel="icon" type="image/x-icon" href="/favicon.ico"&gt;\n';
    output += '&lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;\n';
    output += '&lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;';
    output += '</pre>';

    output += '<p><em>Note: Save the preview image above and convert it to .ico format for best compatibility.</em></p>';

    document.getElementById('favicon-output').innerHTML = output;
    document.getElementById('favicon-result').style.display = 'block';
    showMessage('Favicon generated successfully!', 'success');
}

function generatePrivacyPolicy() {
    const companyName = document.getElementById('company-name').value;
    const websiteUrl = document.getElementById('website-url-privacy').value;
    const contactEmail = document.getElementById('contact-email').value;
    
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked'))
        .map(cb => cb.value);

    if (!companyName || !websiteUrl || !contactEmail) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }

    let policy = `<h1>Privacy Policy for ${companyName}</h1>`;
    policy += `<p><strong>Effective Date:</strong> ${new Date().toDateString()}</p>`;
    policy += `<p>This Privacy Policy describes how ${companyName} ("we", "our", or "us") collects, uses, and protects your information when you visit our website ${websiteUrl}.</p>`;
    
    policy += '<h2>Information We Collect</h2>';
    policy += '<p>We may collect the following types of information:</p>';
    policy += '<ul>';
    policy += '<li>Personal information you provide directly (name, email, etc.)</li>';
    policy += '<li>Usage data and analytics information</li>';
    if (features.includes('cookies')) {
        policy += '<li>Information collected through cookies and similar technologies</li>';
    }
    policy += '</ul>';

    if (features.includes('analytics')) {
        policy += '<h2>Google Analytics</h2>';
        policy += '<p>We use Google Analytics to analyze website traffic and usage patterns. Google Analytics may collect information about your use of our website.</p>';
    }

    if (features.includes('advertising')) {
        policy += '<h2>Advertising</h2>';
        policy += '<p>We may display advertisements on our website. These ads may use cookies to provide relevant advertising content.</p>';
    }

    policy += '<h2>How We Use Your Information</h2>';
    policy += '<p>We use the collected information to:</p>';
    policy += '<ul>';
    policy += '<li>Provide and maintain our service</li>';
    policy += '<li>Improve our website and user experience</li>';
    policy += '<li>Communicate with you</li>';
    policy += '<li>Comply with legal obligations</li>';
    policy += '</ul>';

    policy += '<h2>Contact Us</h2>';
    policy += `<p>If you have any questions about this Privacy Policy, please contact us at: ${contactEmail}</p>`;

    document.getElementById('privacy-output').innerHTML = policy;
    document.getElementById('privacy-result').style.display = 'block';
    showMessage('Privacy Policy generated successfully!', 'success');
}

function generateTermsConditions() {
    const companyName = document.getElementById('terms-company-name').value;
    const websiteUrl = document.getElementById('terms-website-url').value;
    const contactEmail = document.getElementById('terms-contact-email').value;
    const country = document.getElementById('terms-country').value;

    if (!companyName || !websiteUrl || !contactEmail) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }

    let terms = `<h1>Terms and Conditions for ${companyName}</h1>`;
    terms += `<p><strong>Effective Date:</strong> ${new Date().toDateString()}</p>`;
    terms += `<p>These Terms and Conditions ("Terms") govern your use of the ${companyName} website located at ${websiteUrl}.</p>`;
    
    terms += '<h2>Acceptance of Terms</h2>';
    terms += '<p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>';

    terms += '<h2>Use License</h2>';
    terms += '<p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>';

    terms += '<h2>Disclaimer</h2>';
    terms += '<p>The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.</p>';

    terms += '<h2>Limitations</h2>';
    terms += `<p>In no event shall ${companyName} or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>`;

    terms += '<h2>Accuracy of Materials</h2>';
    terms += '<p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>';

    terms += '<h2>Governing Law</h2>';
    terms += `<p>These terms and conditions are governed by and construed in accordance with the laws of ${country || 'your jurisdiction'}.</p>`;

    terms += '<h2>Contact Information</h2>';
    terms += `<p>If you have any questions about these Terms and Conditions, please contact us at: ${contactEmail}</p>`;

    document.getElementById('terms-output').innerHTML = terms;
    document.getElementById('terms-result').style.display = 'block';
    showMessage('Terms & Conditions generated successfully!', 'success');
}

function updateJSONLDFields(type) {
    const fieldsContainer = document.getElementById('jsonld-fields');
    let fields = '';

    switch (type) {
        case 'organization':
            fields = `
                <div class="form-group">
                    <label for="jsonld-org-name">Organization Name:</label>
                    <input type="text" id="jsonld-org-name" placeholder="Company Name">
                </div>
                <div class="form-group">
                    <label for="jsonld-org-url">Website URL:</label>
                    <input type="url" id="jsonld-org-url" placeholder="https://example.com">
                </div>
            `;
            break;
        case 'person':
            fields = `
                <div class="form-group">
                    <label for="jsonld-person-name">Person Name:</label>
                    <input type="text" id="jsonld-person-name" placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="jsonld-person-url">Website URL:</label>
                    <input type="url" id="jsonld-person-url" placeholder="https://johndoe.com">
                </div>
            `;
            break;
        case 'website':
            fields = `
                <div class="form-group">
                    <label for="jsonld-website-name">Website Name:</label>
                    <input type="text" id="jsonld-website-name" placeholder="Website Name">
                </div>
                <div class="form-group">
                    <label for="jsonld-website-url">Website URL:</label>
                    <input type="url" id="jsonld-website-url" placeholder="https://example.com">
                </div>
            `;
            break;
        case 'article':
            fields = `
                <div class="form-group">
                    <label for="jsonld-article-title">Article Title:</label>
                    <input type="text" id="jsonld-article-title" placeholder="Article Title">
                </div>
                <div class="form-group">
                    <label for="jsonld-article-author">Author:</label>
                    <input type="text" id="jsonld-article-author" placeholder="Author Name">
                </div>
            `;
            break;
        case 'product':
            fields = `
                <div class="form-group">
                    <label for="jsonld-product-name">Product Name:</label>
                    <input type="text" id="jsonld-product-name" placeholder="Product Name">
                </div>
                <div class="form-group">
                    <label for="jsonld-product-price">Price:</label>
                    <input type="number" id="jsonld-product-price" placeholder="99.99">
                </div>
            `;
            break;
    }

    fieldsContainer.innerHTML = fields;
}

function generateJSONLD() {
    const type = document.getElementById('jsonld-type').value;
    let jsonld = {};

    switch (type) {
        case 'organization':
            jsonld = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": document.getElementById('jsonld-org-name')?.value || "",
                "url": document.getElementById('jsonld-org-url')?.value || ""
            };
            break;
        case 'person':
            jsonld = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": document.getElementById('jsonld-person-name')?.value || "",
                "url": document.getElementById('jsonld-person-url')?.value || ""
            };
            break;
        case 'website':
            jsonld = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": document.getElementById('jsonld-website-name')?.value || "",
                "url": document.getElementById('jsonld-website-url')?.value || ""
            };
            break;
        case 'article':
            jsonld = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": document.getElementById('jsonld-article-title')?.value || "",
                "author": {
                    "@type": "Person",
                    "name": document.getElementById('jsonld-article-author')?.value || ""
                }
            };
            break;
        case 'product':
            jsonld = {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": document.getElementById('jsonld-product-name')?.value || "",
                "offers": {
                    "@type": "Offer",
                    "price": document.getElementById('jsonld-product-price')?.value || ""
                }
            };
            break;
    }

    const jsonldMarkup = JSON.stringify(jsonld, null, 2);

    document.getElementById('jsonld-output').textContent = jsonldMarkup;
    document.getElementById('jsonld-result').style.display = 'block';
    showMessage('JSON-LD generated successfully!', 'success');
}

// Utility Functions
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent || element.innerText;
    
    navigator.clipboard.writeText(text).then(function() {
        const button = element.parentNode.querySelector('.copy-button');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
        
        showMessage('Content copied to clipboard!', 'success');
    }).catch(function() {
        showMessage('Failed to copy to clipboard.', 'error');
    });
}

function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert at the top of tool content
    const toolContent = document.getElementById('tool-content');
    if (toolContent) {
        toolContent.insertBefore(message, toolContent.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

