import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';

import Card from "./Card"

import styles from "./Search.module.css"


function Search() {

    const [articles, setArticles] = useState([]) // At the begining we do not have articles
    const [search, setSearch] = useState("") // At the begining we do not have articles



    async function getArticles() {  // The function is asynchronous
        const articles = (await axios.get('http://localhost:8000/api/search?search=' + search)).data
        console.log(articles)
        setArticles(articles)
    }


    async function changeSearch(e) {
        e.preventDefault()
        console.log(e)

        setSearch(e.target[0].value)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getArticles()
    }, [search])

    return (
        <>
            <div className={styles.searchContainer}>
                <h1>Search</h1>
                <form onSubmit={e => changeSearch(e)}>
                    <Input.Search name={search} size="large" placeholder="Search e.g. 'title'" enterButton />
                </form>
            </div>
            <div className={styles.cardsTile}>
                {articles.map(article => (
                    <Card key={article.id} article={article} />
                ))}
            </div>

        </>
    )




    /*const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
    const searchResult = (query) =>
        Array.from({
            length: getRandomInt(5),
        })
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}`;
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
                                    href={`https://localhost:8000/searchcount?search=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)}12 results</span>
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

    const [articles, setArticles] = useState([]) // At the begining we do not have articles

    async function getArticles() {  // The function is asynchronous
        const articles = (await axios.get('http://localhost:8000/api/articles')).data
        console.log(articles)
        setArticles(articles)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getArticles()
    }, []);

    return (
        <main>
            <div className={styles.searchContainer}>
                <h1>Popular</h1>
                <AutoComplete
                    className={styles.search}
                    popupMatchSelectWidth={252}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    size="large"
                >
                    <Input.Search
                        size="large"
                        placeholder="Search e.g. 'title'"
                    />
                </AutoComplete>
            </div>

            <div className={styles.cardsTile}>
                {articles.map(article => (
                    <Card key={article.id} article={article} />
                ))}
            </div>
        </main>
    )
        */
}

export default Search;
