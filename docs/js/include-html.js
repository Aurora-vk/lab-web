// 动态加载外部 HTML 文件内容
async function includeHTML() {
    console.log('开始初始化include-html功能...');
    const elements = document.querySelectorAll('[data-include]');
    console.log(`找到 ${elements.length} 个需要处理的元素`);
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const file = element.dataset.include;
        console.log(`处理元素 ${i + 1}/${elements.length}: ${file}`);
        
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                console.log(`成功加载文件: ${file}`);
                
                element.addEventListener('click', function () {
                    console.log(`点击了菜单项: ${file}`);
                    
                    // 更新内容
                    const tabContent = document.getElementById('tab-content');
                    if (tabContent) {
                        tabContent.innerHTML = html;
                        console.log('内容已更新到tab-content');
                        
                        // 高亮点击的子菜单和其父菜单
                        highlightClickedMenu(this);
                        
                        // ✅ 添加执行脚本的函数
                        executeScriptsInElement(tabContent);
                    } else {
                        console.error('找不到tab-content元素');
                    }
                });
            } else {
                console.error(`Failed to load ${file}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error loading ${file}: ${error.message}`);
        }
    }
    console.log('include-html初始化完成');
}
// 执行指定元素中的所有脚本
function executeScriptsInElement(element) {
    // 记录执行开始
    console.log('开始执行动态脚本...');
    
    // 获取所有脚本元素
    const scripts = element.querySelectorAll('script');
    console.log('找到脚本数量:', scripts.length);
    
    // 遍历并执行每个脚本
    scripts.forEach((script, index) => {
        console.log(`处理脚本 ${index + 1}/${scripts.length}:`, script.src || '内联脚本');        
        // 创建新的脚本元素
        const newScript = document.createElement('script');        
        // 复制所有属性
        Array.from(script.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });        
        // 根据脚本类型处理内容
        if (script.src) {
            // 外部脚本 - 添加加载完成回调
            newScript.onload = () => {
                console.log(`外部脚本加载完成: ${script.src}`);
            };
            newScript.onerror = () => {
                console.error(`外部脚本加载失败: ${script.src}`);
            };
        } else {
            // 内联脚本 - 复制内容
            newScript.textContent = script.textContent;
        }        
        // 替换原脚本元素（确保执行顺序）
        script.parentNode.replaceChild(newScript, script);
        console.log(`脚本 ${index + 1} 已替换并执行`);
    });
    
    console.log('所有动态脚本处理完成');
}

// 高亮点击的子菜单和其父菜单
function highlightClickedMenu(clickedElement) {
    // 移除所有子菜单的高亮样式
    document.querySelectorAll('.sub-nav-item-active').forEach(item => {
        item.classList.remove('sub-nav-item-active');
    });
    // 移除所有父菜单的高亮样式
    document.querySelectorAll('.nav-item-active').forEach(item => {
        item.classList.remove('nav-item-active');
    });

    // 高亮点击的子菜单
    clickedElement.classList.add('sub-nav-item-active');

    // 找到其父菜单并高亮
    const parentMenu = clickedElement.closest('.group').querySelector('a[href^="#"]');
    if (parentMenu) {
        parentMenu.classList.add('nav-item-active');
    }
}
