import React from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            { id && <h2>This is Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Category;