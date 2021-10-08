import React, { memo } from 'react'
import { Card, Header } from '../components'
import Cards from '../components/Cards';
import '../App.css';
import BackButton from './HomeButton';

const mock = [
    { name: 'Michele', caption: 'weee', color: 'detailprimary' }
]


export default function Detail({ }) {
    return (
        <div className='App'>
           <BackButton/> 
           <Header />
            <Cards items={mock} />
        </div>
    )
}
