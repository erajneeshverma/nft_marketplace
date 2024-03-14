import React from 'react';
import Image from 'next/image';
import {BsCircleFill} from 'react-icons/bs';
import images from '../../img';

//internal import
import Style from './Category.module.css';


const Category = () => {
    const categoryArray = [1,2,3,4,5];
    return(
        <div className={Style.category}>
            {categoryArray.map((el,i)=>{
                <div className={Style.category_box}> </div>
            })}
        </div>
    )
}

export default Category;