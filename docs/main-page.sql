-- 主要新闻表
CREATE TABLE major_news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT
);
-- 插入主要新闻内容
INSERT INTO major_news (content) VALUES (
    '<p class="lead m-0">
        <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">重要新闻</span>
        <strong>我们的无序预测器 flDPnn 和 flDPnn2 在 CAID1 实验（DisProt 数据集；研究结果发表于
            <a href="https://www.nature.com/articles/s41592-021-01117-3" target="_new" class="text-blue-600 hover:underline">
                <i><b>《自然方法》</b></i>
            </a>）和 CAID2 实验（Disorder-NOX 数据集；研究结果发表于
            <a href="https://onlinelibrary.wiley.com/doi/10.1002/prot.26582" target="_new" class="text-blue-600 hover:underline">
                <i><b>《蛋白质期刊》</b></i>
            </a>）中均取得了顶尖成绩。
            <br>这些成就被 <a href="https://www.nature.com/articles/s41592-021-01123-5" target="_new" class="text-blue-600 hover:underline">
                <b>《自然方法》的一篇评论文章</b>
            </a> 和 <a href="https://egr.vcu.edu/news-events/news/archive/05192021-kurgan-team-recognized-at-caid-disordered-proteins.html" target="_new" class="text-blue-600 hover:underline">
                <b>新闻稿</b>
            </a> 重点报道。
        </strong>'
);

-- 研究重点表
CREATE TABLE research_focus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);
-- 插入研究重点内容
INSERT INTO research_focus (title, description) VALUES
('蛋白质与RNA结构预测', '蛋白质和小分子RNA的结构与功能预测及建模。'),
('序列-结构关系', '发现蛋白质中序列-结构/内在无序-功能的关系。'),
('分子结合研究', '小分子配体、蛋白质、RNA和DNA与靶蛋白的结合。'),
('内在无序预测', '蛋白质内在无序的预测及功能表征。'),
('结构基因组学', '高通量结构基因组学项目的靶点选择方法。');

-- 研究目标和数据库表
CREATE TABLE research_goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    goal TEXT,
    resources TEXT
);
-- 插入研究目标和资源内容
INSERT INTO research_goals (goal, resources) VALUES (
    '我们的总体目标是通过发现生物大分子的序列、结构和功能之间的关系，增进对分子水平生命现象的理解。我们设计并使用 <i>计算机模拟</i> 方法来搜索模式、生成准确的高通量预测模型，并解读蛋白质和小分子RNA中编码的信息。我们的研究涵盖从单个分子到跨越数千个蛋白质组/基因组的项目等广泛尺度，并依赖于机器学习和数据科学的前沿进展。',
    'flDPnn2 - 赢得CAID奖项的内在无序准确预测网络服务器，DescribePROT - 氨基酸水平结构和功能预测数据库，DEPICTER2 - 预测无序及多种无序功能的网络服务器，CONNECTOR - 预测蛋白质-药物相互作用的网络服务器'
);

-- 名言引用表
CREATE TABLE quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quote TEXT,
    author VARCHAR(255)
);
-- 插入名言引用内容
INSERT INTO quotes (quote, author) VALUES (
    '"科学中最令人兴奋的短语，预示着最多发现的，不是‘我找到了！’，而是‘这很有趣’"',
    '艾萨克·阿西莫夫（1920-1992）'
);
