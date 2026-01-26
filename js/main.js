// Main Logic
// Assumes 'data' is available in global scope (loaded via script tag before this file)

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderTab('about');

    // Event Listeners for tabs
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked
            item.classList.add('active');

            const tabName = item.getAttribute('data-tab');
            renderTab(tabName);

            // On mobile, scroll to content
            if (window.innerWidth <= 768) {
                const contentArea = document.querySelector('.content-area');
                if (contentArea) contentArea.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function renderTab(tabName) {
    const contentContainer = document.getElementById('tab-content');
    if (!contentContainer) return;

    // Clear current content and add fade effect reset
    contentContainer.style.opacity = '0';

    setTimeout(() => {
        let html = '';

        // Use the global 'data' object
        switch (tabName) {
            case 'about':
                html = renderAbout();
                break;
            case 'experience':
                html = renderSection('Experience', data.experience);
                break;
            case 'education':
                html = renderSection('Education', data.education);
                break;
            case 'publications':
                html = renderPublications(data.publications);
                break;
            case 'grants':
                html = renderSection('Grants and Awards', data.grants);
                break;
            case 'talks':
                html = renderSection('Invited Talks', data.talks);
                break;
            case 'teaching':
                html = renderSection('Teaching and Supervision', data.teaching);
                break;
            case 'skills':
                html = renderSkills(data.skills);
                break;
            default:
                html = renderAbout();
        }

        contentContainer.innerHTML = html;
        contentContainer.style.opacity = '1';
    }, 150); // Small delay for fade out
}

function renderAbout() {
    return `
        <h2 class="section-title">About Me</h2>
        <div class="card">
            <p>${data.about.bio}</p>
        </div>
        
        <h3 style="margin-top: 2rem;">Contact</h3>
        <div class="card">
            <p><i class="fas fa-envelope"></i> <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
            <p><i class="fas fa-phone"></i> ${data.contact.phone}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${data.contact.address}</p>
            <p style="margin-top:10px;">
                <a href="${data.contact.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a> &nbsp;|&nbsp;
                <a href="${data.contact.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a> &nbsp;|&nbsp;
                <a href="${data.contact.orcid}" target="_blank"><i class="fab fa-orcid"></i> ORCID</a>
            </p>
        </div>
    `;
}

function renderSection(title, items) {
    if (!items || items.length === 0) return `<h2 class="section-title">${title}</h2><p>No information available.</p>`;

    const itemsHtml = items.map(item => `
        <div class="card">
            <div class="item-header">
                <div class="item-title">${item.title || item.role}</div>
                <div class="item-date">${item.date || item.year || ''}</div>
            </div>
            <div class="item-subtitle">${item.institution || item.organization || item.award}</div>
            <div class="item-description">${item.description || ''}</div>
        </div>
    `).join('');

    return `
        <h2 class="section-title">${title}</h2>
        <div class="section-list">
            ${itemsHtml}
        </div>
    `;
}

function renderPublications(items) {
    if (!items || items.length === 0) return `<h2 class="section-title">Publications</h2><p>No publications listed.</p>`;

    const pubsHtml = items.map(pub => `
        <div class="card publication-item">
            <div class="pub-title">${pub.title}</div>
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-meta">${pub.venue}, ${pub.year}</div>
            ${pub.url ? `<a href="${pub.url}" target="_blank" style="font-size:0.9rem; display:inline-block; margin-top:5px;"><i class="fas fa-external-link-alt"></i> View Paper</a>` : ''}
        </div>
    `).join('');

    return `
        <h2 class="section-title">Publications</h2>
        ${pubsHtml}
    `;
}

function renderSkills(skills) {
    if (!skills) return '';

    let content = '';

    if (typeof skills === 'object' && !Array.isArray(skills)) {
        content = Object.entries(skills).map(([category, skillList]) => `
            <div class="card">
                <div class="item-title" style="margin-bottom:10px;">${category}</div>
                <div>
                    ${skillList.split(',').map(s => `<span class="skill-tag">${s.trim()}</span>`).join('')}
                </div>
            </div>
        `).join('');
    } else {
        content = `<div class="card"><p>${skills}</p></div>`;
    }

    return `
        <h2 class="section-title">Skills</h2>
        ${content}
    `;
}
