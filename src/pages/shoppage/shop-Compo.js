import React, { useState } from 'react';
import './shop-Compo.scss';
import Shop_Data from './shop.data'; // array of data
import CollectionPreview from '../../components/previewCollection/previewCompo';


const ShopPage = () => {

    const [collections, setCollections] = useState(Shop_Data);
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id}  {...otherCollectionsProps} />
                ))
            }
        </div>
    )
};

export default ShopPage;