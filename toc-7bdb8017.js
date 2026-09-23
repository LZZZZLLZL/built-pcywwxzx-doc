// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="介绍.html">介绍</a></span></li><li class="chapter-item expanded "><li class="part-title">软件部分</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/用户上限.html"><strong aria-hidden="true">1.</strong> 校园网</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/黑名单.html"><strong aria-hidden="true">1.1.</strong> 黑名单</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/无法弹出验证界面.html"><strong aria-hidden="true">1.2.</strong> 无法弹出验证界面</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/网线无用.html"><strong aria-hidden="true">1.3.</strong> 网线无用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/用户名无效.html"><strong aria-hidden="true">1.4.</strong> 用户名无效</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/DNS解析错误.html"><strong aria-hidden="true">1.5.</strong> DNS解析错误</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/刷新系统DNS缓存.html"><strong aria-hidden="true">1.6.</strong> 刷新系统DNS缓存</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="校园网/反正就是没网.html"><strong aria-hidden="true">1.7.</strong> 反正就是没网</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/C盘空间不足.html"><strong aria-hidden="true">2.</strong> 磁盘</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/磁盘分区.html"><strong aria-hidden="true">2.1.</strong> 磁盘分区</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/扩盘.html"><strong aria-hidden="true">2.2.</strong> 扩盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/不认硬盘.html"><strong aria-hidden="true">2.3.</strong> 不认硬盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/分区备份.html"><strong aria-hidden="true">2.4.</strong> 分区备份</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/误删文件找回.html"><strong aria-hidden="true">2.5.</strong> 误删文件找回</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="磁盘/关闭BitLocker.html"><strong aria-hidden="true">2.6.</strong> 关闭BitLocker</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="无法开机/完全黑屏.html"><strong aria-hidden="true">3.</strong> 无法开机</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="无法开机/电源灯闪一下又灭不能启动.html"><strong aria-hidden="true">3.1.</strong> 电源灯闪一下又灭不能启动</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="无法开机/能显示logo进不去系统.html"><strong aria-hidden="true">3.2.</strong> 能显示logo进不去系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="无法开机/进系统蓝屏.html"><strong aria-hidden="true">3.3.</strong> 进系统蓝屏</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="无法开机/锁屏界面进不去系统.html"><strong aria-hidden="true">3.4.</strong> 锁屏界面进不去系统</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="常见BIOS操作/进出BIOS.html"><strong aria-hidden="true">4.</strong> 常见BIOS操作</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="常见BIOS操作/调整语言.html"><strong aria-hidden="true">4.1.</strong> 调整语言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="常见BIOS操作/恢复默认设置.html"><strong aria-hidden="true">4.2.</strong> 恢复默认设置</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="常见BIOS操作/更改启动顺序.html"><strong aria-hidden="true">4.3.</strong> 更改启动顺序</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="常见BIOS操作/开关安全启动.html"><strong aria-hidden="true">4.4.</strong> 开关安全启动</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="系统/蓝屏_死机.html"><strong aria-hidden="true">5.</strong> 系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="系统/安装软件_Adobe_Office.html"><strong aria-hidden="true">5.1.</strong> 安装软件_Adobe_Office</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="系统/卸载流氓软件.html"><strong aria-hidden="true">5.2.</strong> 卸载流氓软件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="系统/激活系统_Office.html"><strong aria-hidden="true">5.3.</strong> 激活系统_Office</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="驱动/常见驱动问题体现.html"><strong aria-hidden="true">6.</strong> 驱动</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="驱动/安装_卸载网卡驱动.html"><strong aria-hidden="true">6.1.</strong> 安装_卸载网卡驱动</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="驱动/安装_卸载显卡驱动.html"><strong aria-hidden="true">6.2.</strong> 安装_卸载显卡驱动</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="驱动/安装_卸载声卡驱动.html"><strong aria-hidden="true">6.3.</strong> 安装_卸载声卡驱动</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="驱动/如何下载驱动.html"><strong aria-hidden="true">6.4.</strong> 如何下载驱动</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/常见的PE系统.html"><strong aria-hidden="true">7.</strong> PE系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/制作PE启动盘.html"><strong aria-hidden="true">7.1.</strong> 制作PE启动盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/Ventoy制作启动U盘.html"><strong aria-hidden="true">7.2.</strong> Ventoy制作启动U盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/重装系统.html"><strong aria-hidden="true">7.3.</strong> 重装系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/修复引导.html"><strong aria-hidden="true">7.4.</strong> 修复引导</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="PE系统/下载系统镜像.html"><strong aria-hidden="true">7.5.</strong> 下载系统镜像</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

