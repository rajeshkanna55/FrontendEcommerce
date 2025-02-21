import React, { useState, useEffect } from "react";
import { List, Card, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const PAGE_SIZE = 10;

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.example.com/data?page=${page}&limit=${PAGE_SIZE}`
      );
      const newData = response.data;

      setData((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
      setHasMore(newData.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMoreData();
  }, []);


  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Spin size="large" style={{ display: "block", textAlign: "center", margin: 20 }} />}
    >
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>{item.description}</Card>
          </List.Item>
        )}
      />
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
