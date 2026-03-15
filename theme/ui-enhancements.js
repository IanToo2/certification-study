(() => {
    function localizeSearchUi() {
        const helpTitle = document.querySelector('.mdbook-help-title');
        if (helpTitle) {
            helpTitle.textContent = '키보드 단축키';
        }

        const helpParagraphs = document.querySelectorAll('#mdbook-help-popup p');
        const localized = [
            '← / → : 이전 장과 다음 장으로 이동',
            '/ 또는 S : 책 전체 검색 열기',
            '? : 단축키 도움말 열기',
            'Esc : 현재 팝업 닫기',
        ];

        helpParagraphs.forEach((paragraph, index) => {
            if (localized[index]) {
                paragraph.textContent = localized[index];
            }
        });

        const searchInput = document.getElementById('mdbook-searchbar');
        if (searchInput) {
            searchInput.placeholder = '책에서 검색...';
            searchInput.setAttribute('aria-label', '책 전체 검색');
        }

        const searchToggle = document.getElementById('mdbook-search-toggle');
        if (searchToggle) {
            searchToggle.title = '검색 열기 (`/`)';
            searchToggle.setAttribute('aria-label', '검색 열기');
        }
    }

    function bindSearchTriggers() {
        const searchToggle = document.getElementById('mdbook-search-toggle');
        const searchInput = document.getElementById('mdbook-searchbar');
        if (!searchToggle || !searchInput) {
            return;
        }

        document.querySelectorAll('[data-open-search="true"]').forEach((button) => {
            button.addEventListener('click', () => {
                searchToggle.click();
                window.setTimeout(() => searchInput.focus(), 80);
            });
        });
    }

    function decorateCallouts() {
        const infoTitles = new Set(['시험 핵심 포인트']);
        const warningTitles = new Set(['시험 함정 포인트', '시험 함정']);

        document.querySelectorAll('main h2, main h3, main h4').forEach((heading) => {
            const title = heading.textContent.trim();
            let kind = null;

            if (infoTitles.has(title)) {
                kind = 'info';
            } else if (warningTitles.has(title)) {
                kind = 'warning';
            }

            if (!kind) {
                return;
            }

            const content = heading.nextElementSibling;
            if (!content) {
                return;
            }

            const allowed = new Set(['UL', 'OL', 'P', 'DIV', 'TABLE']);
            if (!allowed.has(content.tagName)) {
                return;
            }

            heading.classList.add('callout-heading');
            content.classList.add('callout-box');
            if (kind === 'warning') {
                content.classList.add('warning');
            }
        });
    }

    function applyPageClasses() {
        const path = window.location.pathname;
        const body = document.body;
        if (!body) {
            return;
        }

        if (path.endsWith('/') || path.endsWith('/index.html')) {
            body.classList.add('home-page');
        }

        if (path.includes('/exam-questions/')) {
            body.classList.add('exam-page');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        localizeSearchUi();
        bindSearchTriggers();
        decorateCallouts();
        applyPageClasses();
    });
})();
