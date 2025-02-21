import React from "react";
import { Card, Button, Input, List, Typography } from "antd";
import { ShoppingCartOutlined, EditOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const cartItems = [
  {
    id: 1,
    name: "Bustier, Calvin Klein Underwear",
    color: "sonata, size S",
    price: 24.45,
    image: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    name: "Bikini-top, Tommy Hilfiger",
    color: "navy blazer, size S",
    price: 39.95,
    image: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    name: "Short tights, Nike Performance",
    color: "thunder gray, size S",
    price: 29.95,
    image: "https://via.placeholder.com/60",
  },
];

const ShoppingCart = () => {
  return (
    <div className="container">
      <Card className="cart-container">
        <Title level={2}>Shopping Cart <Text type="danger">{cartItems.length} items</Text></Title>
        <List
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item>
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <Text strong>{item.name}</Text>
                <Text type="secondary">{item.color}</Text>
              </div>
              <Text strong>€ {item.price.toFixed(2)}</Text>
            </List.Item>
          )}
        />
      </Card>
      <Card className="summary-container">
        <Title level={4}>Jessica Taylor <EditOutlined /></Title>
        <Text>Neubaugasse 30, 1070 Vienna, Austria</Text>
        <Title level={5}>Payment Method <EditOutlined /></Title>
        <Text>Credit Card **** 5057</Text>
        <Title level={5}>Discount Code</Title>
        <Input placeholder="Your code here" suffix={<Button type="primary">Apply</Button>} />
        <div className="total-section">
          <Text>Subtotal ({cartItems.length} items): € {cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</Text>
          <Text>Shipping Costs: <Text type="success">FREE!</Text></Text>
          <Title level={3}>Total: € 94.35</Title>
          <Button type="primary" size="large" icon={<ShoppingCartOutlined />}>Checkout</Button>
        </div>
      </Card>
    </div>
  );
};

export default ShoppingCart;

// CSS for responsiveness and styling
const styles = `
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 900px;
  margin: auto;
}
.cart-container, .summary-container {
  margin-bottom: 20px;
  padding: 20px;
}
.product-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 15px;
}
.total-section {
  margin-top: 20px;
}
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: 20px;
  }
  .cart-container {
    flex: 2;
  }
  .summary-container {
    flex: 1;
  }
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
