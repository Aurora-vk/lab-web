document.addEventListener('DOMContentLoaded', function() {
    // 加载新闻数据
    fetch('api/index.php?action=get_news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            if (newsContainer && data.length > 0) {
                data.forEach(item => {
                    const newsElement = document.createElement('div');
                    if (item.is_major == 1) {
                        newsElement.innerHTML = `<div class="major-news">重要新闻</div>`;
                    }
                    newsElement.innerHTML += `
                        <p>${item.content}</p>
                    `;
                    newsContainer.appendChild(newsElement);
                });
            }
        })
        .catch(error => console.error('新闻加载错误:', error));

    // 加载研究方向数据
    fetch('api/index.php?action=get_research_areas')
        .then(response => response.json())
        .then(data => {
            const researchList = document.getElementById('research-list');
            if (researchList && data.length > 0) {
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.description;
                    researchList.appendChild(li);
                });
            }
        })
        .catch(error => console.error('研究方向加载错误:', error));

    // 加载发表的模型数据
    fetch('api/index.php?action=get_published_models')
        .then(response => response.json())
        .then(data => {
            const modelsList = document.getElementById('models-list');
            if (modelsList && data.length > 0) {
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${item.url}">${item.name}</a> - ${item.description}`;
                    modelsList.appendChild(li);
                });
            }
        })
        .catch(error => console.error('模型数据加载错误:', error));

    // 记录访问
    fetch('api/index.php?action=record_visit', {
        method: 'POST'
    })
        .then(response => response.json())
        .catch(error => console.error('访问记录错误:', error));

    // 获取总访问量
    fetch('api/index.php?action=get_visit_count')
        .then(response => response.json())
        .then(data => {
            const visitCounter = document.getElementById('visit-counter');
            if (visitCounter && data.total !== undefined) {
                visitCounter.textContent = `自2025年6月以来的访问量: ${data.total}`;
            }
        })
        .catch(error => console.error('访问计数错误:', error));

    // 移动设备下的导航菜单处理
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    if (window.innerWidth <= 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.parentElement;
                const dropdownMenu = parent.querySelector('.dropdown-menu');
                
                // 关闭所有其他菜单
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.style.display = 'none';
                    }
                });
                
                // 切换当前菜单
                if (dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                } else {
                    dropdownMenu.style.display = 'block';
                }
            });
        });
    }
});