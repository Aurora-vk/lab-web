<?php
// 数据库连接配置
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "main-page";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

// 获取请求类型
$type = $_GET['type'];

switch ($type) {
    case 'major_news':
        // 查询主要新闻数据
        $sql = "SELECT content FROM major_news LIMIT 1";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        }
        break;
    case 'research_focus':
        // 查询研究重点数据
        $sql = "SELECT title, description FROM research_focus";
        $result = $conn->query($sql);
        $data = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        echo json_encode($data);
        break;
    case 'research_goals':
        // 查询研究目标和数据库数据
        $sql = "SELECT goal, resources FROM research_goals LIMIT 1";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $resources = explode(',', $row['resources']);
            $data = [
                'goal' => $row['goal'],
                'resources' => $resources
            ];
            echo json_encode($data);
        }
        break;
    case 'quote':
        // 查询名言引用数据
        $sql = "SELECT quote, author FROM quotes LIMIT 1";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        }
        break;
    default:
        echo json_encode(['error' => 'Invalid request type']);
}

// 关闭连接
$conn->close();
?>