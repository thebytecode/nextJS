import { useState } from "react";
import { Layout, Menu, Avatar, Card, List, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const blogPosts = [
  {
    title: "Are you ready to buy a new modern home...",
    date: "AUGUST 11",
    description: "The thing is that it can be fixed later on...",
    image: "/images/home.jpg",
  },
  {
    title: "The world is at your door step...",
    date: "JULY 26, 2022",
    description: "Living abroad would require...",
    image: "/images/world.jpg",
  },
  {
    title: "Starting a business in Qatar...",
    date: "JULY 20, 2022",
    description: "Advantage did had otherwise...",
    image: "/images/business.jpg",
  },
  {
    title: "Digitising your access to industrial banking...",
    date: "JULY 20, 2022",
    description: "Advantage did had otherwise...",
    image: "/images/banking.jpg",
  },
];

export default function Blog() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} className="bg-white shadow-md">
        <div className="p-4 flex items-center space-x-2">
          <Avatar size={40} icon={<UserOutlined />} />
          {!collapsed && <Text className="font-semibold">Allie Simon</Text>}
        </div>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Blogs</Menu.Item>
          <Menu.Item key="3">Reports</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white px-4 shadow-md flex items-center justify-between">
          <button onClick={() => setCollapsed(!collapsed)} className="text-lg">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
          <Title level={4}>All Blog Posts</Title>
        </Header>
        <Content className="p-6">
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={blogPosts}
            renderItem={(item) => (
              <List.Item>
                <Card cover={<img alt={item.title} src={item.image} className="h-40 object-cover" />}>
                  <Title level={5}>{item.title}</Title>
                  <Text className="text-gray-500">{item.date}</Text>
                  <p>{item.description}</p>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
