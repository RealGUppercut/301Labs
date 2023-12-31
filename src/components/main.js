import React from 'react'
import "../components/main.css"
import HornedBeast from "./hornedbeast"
import data from "../data.json"

export default function Main() {
    return (
        <main>
            <HornedBeast title={data[1].title} image_url={data[1].image_url} description= {data[1].description} />
            <HornedBeast title={data[2].title} image_url={data[2].image_url} description= {data[2].description} />
            <HornedBeast title={data[3].title} image_url={data[3].image_url} description= {data[3].description} />
            <HornedBeast title={data[4].title} image_url={data[4].image_url} description= {data[4].description} />
            <HornedBeast title={data[5].title} image_url={data[5].image_url} description= {data[5].description} />
            <HornedBeast title={data[6].title} image_url={data[6].image_url} description= {data[6].description} />
            <HornedBeast title={data[7].title} image_url={data[7].image_url} description= {data[7].description} />
            <HornedBeast title={data[8].title} image_url={data[8].image_url} description= {data[8].description} />
            <HornedBeast title={data[9].title} image_url={data[9].image_url} description= {data[9].description} />
            <HornedBeast title={data[10].title} image_url={data[10].image_url} description= {data[10].description} />
            <HornedBeast title={data[11].title} image_url={data[11].image_url} description= {data[11].description} />
            <HornedBeast title={data[12].title} image_url={data[12].image_url} description= {data[12].description} />
            <HornedBeast title={data[13].title} image_url={data[13].image_url} description= {data[13].description} />
            <HornedBeast title={data[14].title} image_url={data[14].image_url} description= {data[14].description} />
            <HornedBeast title={data[15].title} image_url={data[15].image_url} description= {data[15].description} />
            <HornedBeast title={data[16].title} image_url={data[16].image_url} description= {data[16].description} />
            <HornedBeast title={data[17].title} image_url={data[17].image_url} description= {data[17].description} />
            <HornedBeast title={data[18].title} image_url={data[18].image_url} description= {data[18].description} />
            <HornedBeast title={data[19].title} image_url={data[19].image_url} description= {data[19].description} />
            <HornedBeast title={data[20].title} image_url={data[20].image_url} description= {data[20].description} />
        </main>

    )
    }