import {  AccountBookOutlined, BarsOutlined, DashboardOutlined, FormOutlined, OrderedListOutlined, SettingOutlined, SubnodeOutlined, TableOutlined, UsergroupAddOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import {Link } from "react-router-dom";
export const siderMenuItems = [
    {
        label: <Link to="/admin">DashBoard</Link>,
        key: "/admin",
        icon: <DashboardOutlined />,
    },
     {
        label: "用户管理",
        key: "/admin/user/#",
        icon: <UserOutlined />,
        children:[
            {
                label: "用户列表",
                key: "/admin/user/list",
            }, {
                label: "添加用户",
                key: "/admin/user/add",
            }, {
                label: "修改用户",
                key: "/admin/user/edit",
            }
        ]
    }, {
        label: "权限管理",
        key: "/admin/authority",
        icon: <UserSwitchOutlined />,
        children: [
            {
                label: <Link to="/admin/authority/link">菜单管理</Link>,
                key: "/admin/authority/link",
            }, {
                label: <Link to="/admin/authority/role">角色管理</Link>,
                key: "/admin/authority/role",
            }, {
                label: <Link to="/admin/authority/addUser">添加用户</Link>,
                key: "/admin/authority/addUser",
            },{
                label: <Link to="/admin/authority/addRole">添加角色</Link>,
                key: "/admin/authority/addRole",
            }
        ]
    }, {
        label: <Link to="/admin/goods">商品管理</Link>,
        key: "/admin/goods",
        icon: <TableOutlined />
    }, {
        label: "分类管理",
        key: "/admin/category",
        icon: <BarsOutlined />,
        children: [
            {
                label: "一级分类",
                key: "/admin/category/list1",
            }, {
                label: "二级分类",
                key: "/admin/category/list2",
            }
        ]
    }, {
        label: <Link to="/admin/order">订单管理</Link>,
        key: "/admin/order",
        icon: <AccountBookOutlined />
    }, 
    
    {
        label: <Link to="/admin/purchase">采购管理</Link>,
        key: "/admin/purchase",
        icon: <OrderedListOutlined />
    }
    ,{
        label: <Link to="/admin/supplier">供应商管理</Link>,
        key: "/admin/supplier",
        icon: <SubnodeOutlined />
    }, {
        label: <Link to="/admin/stock">库存管理</Link>,
        key: "/admin/stock",
        icon: <FormOutlined />
    }, {
        label: <Link to="/admin/member">会员管理</Link>,
        key: "/admin/member",
        icon: <UsergroupAddOutlined />
    }, {
        label: <Link to="/admin/setting">系统设置</Link>,
        key: "/admin/setting",
        icon: <SettingOutlined />
    }

]