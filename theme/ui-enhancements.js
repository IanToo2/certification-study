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

        document.querySelectorAll('[data-search-term]').forEach((button) => {
            button.addEventListener('click', () => {
                const term = button.getAttribute('data-search-term');
                searchToggle.click();
                window.setTimeout(() => {
                    searchInput.focus();
                    searchInput.value = term || '';
                    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                }, 80);
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

        if (path.includes('service_comparisons')) {
            body.classList.add('comparison-page');
        }
    }

    function slugify(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\u3131-\uD79D]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function createButton(label, className, onClick) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = label;
        if (className) {
            button.className = className;
        }
        button.addEventListener('click', onClick);
        return button;
    }

    function createExamToolbar(questionIds) {
        const toolbar = document.createElement('section');
        toolbar.className = 'exam-toolbar';

        const title = document.createElement('p');
        title.className = 'exam-toolbar-title';
        title.textContent = '시험 모드 탐색';
        toolbar.appendChild(title);

        const actions = document.createElement('div');
        actions.className = 'exam-toolbar-actions';

        const toggleAll = createButton('정답 모두 열기', 'exam-toolbar-primary', () => {
            const detailsList = document.querySelectorAll('.exam-answer');
            const shouldOpen = Array.from(detailsList).some((details) => !details.open);
            detailsList.forEach((details) => {
                details.open = shouldOpen;
            });
            toggleAll.textContent = shouldOpen ? '정답 모두 닫기' : '정답 모두 열기';
        });
        actions.appendChild(toggleAll);

        const jumpToggle = createButton('문제 번호 보기', '', () => {
            jumpList.classList.toggle('is-open');
        });
        actions.appendChild(jumpToggle);

        const searchButton = createButton('검색', '', () => {
            const trigger = document.querySelector('[data-open-search="true"]');
            if (trigger) {
                trigger.click();
            } else {
                const searchToggle = document.getElementById('mdbook-search-toggle');
                if (searchToggle) {
                    searchToggle.click();
                }
            }
        });
        actions.appendChild(searchButton);

        const topLink = document.createElement('a');
        topLink.href = '#';
        topLink.textContent = '맨 위로';
        actions.appendChild(topLink);

        toolbar.appendChild(actions);

        const jumpList = document.createElement('div');
        jumpList.className = 'exam-jump-list';
        questionIds.forEach((id, index) => {
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = String(index + 1);
            jumpList.appendChild(link);
        });
        toolbar.appendChild(jumpList);

        return toolbar;
    }

    function enhanceExamPages() {
        if (!document.body.classList.contains('exam-page')) {
            return;
        }

        const main = document.querySelector('main');
        if (!main) {
            return;
        }

        const headings = Array.from(main.querySelectorAll('h2')).filter((heading) => /^\d+$/.test(heading.textContent.trim()));
        if (!headings.length) {
            return;
        }

        const questionIds = [];

        headings.forEach((heading, index) => {
            const section = document.createElement('section');
            const questionNumber = heading.textContent.trim();
            const questionId = `exam-question-${questionNumber}`;
            section.className = 'exam-question-card';
            section.id = questionId;
            questionIds.push(questionId);

            const meta = document.createElement('p');
            meta.className = 'exam-question-meta';
            meta.textContent = `문제 ${questionNumber} / ${headings.length}`;

            const firstBodyNode = heading.nextSibling;
            heading.parentNode.insertBefore(section, heading);
            section.appendChild(meta);
            section.appendChild(heading);

            let node = firstBodyNode;
            const collected = [];
            while (node && !(node.nodeType === Node.ELEMENT_NODE && node.tagName === 'H2')) {
                const next = node.nextSibling;
                if (!(node.nodeType === Node.ELEMENT_NODE && node.tagName === 'HR')) {
                    collected.push(node);
                    section.appendChild(node);
                } else {
                    node.parentNode.removeChild(node);
                }
                node = next;
            }

            const answerNode = collected.find((item) => item.nodeType === Node.ELEMENT_NODE && item.tagName === 'P' && item.textContent.trim().startsWith('정답:'));
            const explanationNode = collected.find((item) => item.nodeType === Node.ELEMENT_NODE && item.tagName === 'P' && item.textContent.trim().startsWith('해설:'));

            if (answerNode && explanationNode) {
                const details = document.createElement('details');
                details.className = 'exam-answer';

                const summary = document.createElement('summary');
                summary.textContent = '정답 / 해설 보기';
                details.appendChild(summary);

                const content = document.createElement('div');
                content.className = 'exam-answer-content';

                const key = document.createElement('div');
                key.className = 'exam-answer-key';
                key.textContent = answerNode.textContent.trim();
                content.appendChild(key);

                const explanation = document.createElement('p');
                explanation.innerHTML = explanationNode.innerHTML.replace(/^해설:\s*/, '');
                content.appendChild(explanation);

                answerNode.remove();
                explanationNode.remove();
                details.appendChild(content);
                section.appendChild(details);
            }

            const nav = document.createElement('div');
            nav.className = 'exam-question-nav';
            if (index > 0) {
                const prev = document.createElement('a');
                prev.href = `#exam-question-${headings[index - 1].textContent.trim()}`;
                prev.textContent = '이전 문제';
                nav.appendChild(prev);
            }
            if (index < headings.length - 1) {
                const next = document.createElement('a');
                next.href = `#exam-question-${headings[index + 1].textContent.trim()}`;
                next.textContent = '다음 문제';
                nav.appendChild(next);
            }
            if (nav.children.length) {
                section.appendChild(nav);
            }
        });

        const firstQuestion = document.getElementById(questionIds[0]);
        if (firstQuestion) {
            main.insertBefore(createExamToolbar(questionIds), firstQuestion);
        }
    }

    function createComparisonCardStack(table) {
        const rows = Array.from(table.querySelectorAll('tr'));
        if (rows.length < 2) {
            return null;
        }

        const headers = Array.from(rows[0].querySelectorAll('th, td')).map((cell) => cell.textContent.trim());
        if (headers.length < 2) {
            return null;
        }

        const stack = document.createElement('div');
        stack.className = 'table-card-stack';

        if (headers.length === 2) {
            rows.slice(1).forEach((row) => {
                const cells = Array.from(row.querySelectorAll('th, td'));
                if (cells.length < 2) {
                    return;
                }

                const card = document.createElement('article');
                card.className = 'table-card';

                const title = document.createElement('h4');
                title.textContent = cells[0].textContent.trim();
                card.appendChild(title);

                const body = document.createElement('p');
                body.textContent = cells[1].textContent.trim();
                card.appendChild(body);

                stack.appendChild(card);
            });
            return stack;
        }

        for (let columnIndex = 1; columnIndex < headers.length; columnIndex += 1) {
            const card = document.createElement('article');
            card.className = 'table-card';

            const title = document.createElement('h4');
            title.textContent = headers[columnIndex];
            card.appendChild(title);

            const list = document.createElement('dl');
            rows.slice(1).forEach((row) => {
                const cells = Array.from(row.querySelectorAll('th, td'));
                if (cells.length <= columnIndex) {
                    return;
                }

                const term = document.createElement('dt');
                term.textContent = cells[0].textContent.trim();
                list.appendChild(term);

                const description = document.createElement('dd');
                description.textContent = cells[columnIndex].textContent.trim();
                list.appendChild(description);
            });

            card.appendChild(list);
            stack.appendChild(card);
        }

        return stack;
    }

    function enhanceTables() {
        document.querySelectorAll('.table-wrapper table').forEach((table) => {
            if (table.dataset.mobileCards === 'done') {
                return;
            }

            const stack = createComparisonCardStack(table);
            if (!stack) {
                return;
            }

            table.dataset.mobileCards = 'done';
            table.parentElement.insertAdjacentElement('afterend', stack);
        });
    }

    function createChapterToolbar() {
        const main = document.querySelector('main');
        if (!main || document.body.classList.contains('exam-page') || document.body.classList.contains('home-page')) {
            return;
        }

        const headings = Array.from(main.querySelectorAll('h2[id]')).filter((heading) => !/^\d+$/.test(heading.textContent.trim()));
        if (headings.length < 4) {
            return;
        }

        const firstSection = headings[0];
        if (!firstSection || main.querySelector('.chapter-toolbar')) {
            return;
        }

        const toolbar = document.createElement('section');
        toolbar.className = 'chapter-toolbar';

        const title = document.createElement('p');
        title.className = 'chapter-toolbar-title';
        title.textContent = '이 장 빠른 이동';
        toolbar.appendChild(title);

        const actions = document.createElement('div');
        actions.className = 'chapter-toolbar-actions';

        const toggle = createButton('섹션 보기', 'chapter-toolbar-primary', () => {
            jumpList.classList.toggle('is-open');
        });
        actions.appendChild(toggle);

        const search = createButton('검색', '', () => {
            const trigger = document.querySelector('[data-open-search="true"]');
            if (trigger) {
                trigger.click();
            } else {
                const searchToggle = document.getElementById('mdbook-search-toggle');
                if (searchToggle) {
                    searchToggle.click();
                }
            }
        });
        actions.appendChild(search);

        const topLink = document.createElement('a');
        topLink.href = '#';
        topLink.textContent = '맨 위로';
        actions.appendChild(topLink);

        toolbar.appendChild(actions);

        const jumpList = document.createElement('div');
        jumpList.className = 'chapter-jump-list';
        headings.forEach((heading) => {
            const id = heading.id || slugify(heading.textContent);
            if (!heading.id) {
                heading.id = id;
            }
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent.trim();
            jumpList.appendChild(link);
        });

        toolbar.appendChild(jumpList);
        main.insertBefore(toolbar, firstSection);
    }

    function addMobileQuickActions() {
        if (document.querySelector('.mobile-fab')) {
            return;
        }

        const fab = document.createElement('div');
        fab.className = 'mobile-fab';

        const searchButton = createButton('검색', '', () => {
            const trigger = document.querySelector('[data-open-search="true"]');
            if (trigger) {
                trigger.click();
            } else {
                const searchToggle = document.getElementById('mdbook-search-toggle');
                if (searchToggle) {
                    searchToggle.click();
                }
            }
        });
        fab.appendChild(searchButton);

        const topLink = document.createElement('a');
        topLink.href = '#';
        topLink.textContent = '위';
        fab.appendChild(topLink);

        document.body.appendChild(fab);
    }

    document.addEventListener('DOMContentLoaded', () => {
        applyPageClasses();
        localizeSearchUi();
        bindSearchTriggers();
        decorateCallouts();
        enhanceExamPages();
        enhanceTables();
        createChapterToolbar();
        addMobileQuickActions();
    });
})();
