import React from 'react';
import {css} from 'glamor'





 const NewsItem = ({item}) =>
 {
     let news_item=css({
         padding:'20px',
         boxSizing:'border-box',
        borderBottom:'1px solid grey',
        ':hover':{
            color:'#b04040 '
        },
        fontFamily:'Roboto Slab',
        '@media(max-width:500px)':{
            color:'blue'
        }
     })

     





     return(
         <div {...news_item}>

                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
        </div>
         
     )
 }


 export default NewsItem;