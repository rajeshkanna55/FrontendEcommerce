import React, { useState } from "react";
import { Menu, Dropdown, Button, Drawer } from "antd";
import { UserOutlined, ShoppingCartOutlined, MenuOutlined, LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TopBar = ({ isAuthenticated }) => {
  const [visible, setVisible] = useState(false);

  // Profile Dropdown
  const profileMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/orders">Orders</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="topbar">
      <div className="topbar-container">
        {/* Left: Logo */}
        <Link to="/" className="logo">
          ShopLogo
        </Link>

        {/* Right: Navigation Links (Desktop) */}
        <nav className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/cart">
            <ShoppingCartOutlined /> Cart
          </Link>

          {isAuthenticated ? (
            <Dropdown overlay={profileMenu} placement="bottomRight">
              <Button icon={<UserOutlined />} type="text">Profile</Button>
            </Dropdown>
          ) : (
            <Link to="/login">
              <Button icon={<LoginOutlined />} type="primary">Login</Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button className="menu-btn" icon={<MenuOutlined />} type="text" onClick={() => setVisible(true)} />

        {/* Mobile Menu Drawer */}
        <Drawer title="Menu" placement="right" onClose={() => setVisible(false)} visible={visible}>
          <Link to="/products" onClick={() => setVisible(false)}>Products</Link>
          <Link to="/cart" onClick={() => setVisible(false)}>Cart</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" onClick={() => setVisible(false)}>Profile</Link>
              <Link to="/logout" onClick={() => setVisible(false)}>Logout</Link>
            </>
          ) : (
            <Link to="/login" onClick={() => setVisible(false)}>Login</Link>
          )}
        </Drawer>
      </div>
    </header>
  );
};

export default TopBar;
