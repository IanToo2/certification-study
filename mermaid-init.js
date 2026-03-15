(() => {
    const darkThemes = ['ayu', 'navy', 'coal'];
    const lightThemes = ['light', 'rust'];
    const classList = document.documentElement.classList;
    let lastThemeWasLight = true;

    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

    const theme = lastThemeWasLight ? 'default' : 'dark';
    mermaid.initialize({ startOnLoad: false, theme });

    const blocks = Array.from(document.querySelectorAll('pre code.language-mermaid'));
    const nodes = [];

    for (const block of blocks) {
        const container = document.createElement('div');
        container.className = 'mermaid';
        container.textContent = block.textContent;
        block.parentElement.replaceWith(container);
        nodes.push(container);
    }

    if (nodes.length > 0) {
        mermaid.run({ nodes }).catch((error) => {
            console.error('Mermaid diagram rendering failed.', error);
        });
    }

    for (const darkTheme of darkThemes) {
        const element = document.getElementById(darkTheme);
        if (!element) {
            continue;
        }
        element.addEventListener('click', () => {
            if (lastThemeWasLight) {
                window.location.reload();
            }
        });
    }

    for (const lightTheme of lightThemes) {
        const element = document.getElementById(lightTheme);
        if (!element) {
            continue;
        }
        element.addEventListener('click', () => {
            if (!lastThemeWasLight) {
                window.location.reload();
            }
        });
    }
})();
