import { Card, Col, Row } from 'antd';

import { Pagination } from "antd";

import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';




function Popular() {

    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
    const searchResult = (query) =>
        Array.from({
            length: getRandomInt(5),
        })
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`;
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                Found {query} on{' '}
                                <a
                                    href={`https://s.taobao.com/search?q=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    ),
                };
            });
    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };
    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    return (
        <>
            <h1>Popular</h1>
            <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                    width: 300,
                }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size="large"
            >
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" variant="borderless">
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" variant="borderless">
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" variant="borderless">
                        Card content
                    </Card>
                </Col>
            </Row>
        </>
    )
}
// <Pagination align="center" defaultCurrent={1} total={50} onChange={handleChange} />

export default Popular;
