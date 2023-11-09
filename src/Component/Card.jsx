import React from 'react'
import './Card.css';
let  cdata = [
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI7nBhHkkckCw-z04kLoR6G0KsE0ZXB4vXw&usqp=CAU',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 

    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI7nBhHkkckCw-z04kLoR6G0KsE0ZXB4vXw&usqp=CAU',title:'अनार', description:'हमारे यहाँ आपको विबिन्न प्रकार के अनार खरीदने को मिलेंगे '}, 

  ]
function Card() {
  return (
    <>
    <div className="cards_list">
      {cdata.map((item, index) => (
        <div className="card" id={index}>
          <img src={item.image} alt="Image" />
          <div>
            <h3>{item.title}</h3>
            <p>
              {item.description.length <= 60
                ? item.description
                : item.description.slice(0, 60)} .....
            </p>
            <button>ख़रीदे</button>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Card
