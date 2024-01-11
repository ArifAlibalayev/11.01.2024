import React, { useEffect, useState } from "react";
import "./index.scss";

function FlowersSection() {
  const [apiData, setApiData] = useState([]);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:4800/");
    const data = await res.json();
    setApiData(data);
  }



  async function deleteItem(id) {
    await fetch(`http://localhost:4800/${id}`,
    { 
        method: "DELETE",
    })
    await getData();
  }

  return (
    <section id="FlowersSection">
      <div className="flowerSectionContainer">
        <div className="flowersSectionTitle">
          <div className="upperFlowerTitle">
            <p>Devoted to wonderful beauty</p>
          </div>
          <div className="mainFlowerTitle">
            <h1>Flowers Pricing</h1>
          </div>
          <div className="filterByPrice">
            <h3>Filter by price</h3>
            <button
              onClick={() => setProperty({ sortProperty: "price", asc: true })}
            >
              low to high
            </button>
            <button
              onClick={() => setProperty({ sortProperty: "price", asc: false })}
            >
              high to low
            </button>
          </div>
        </div>
        <div className="flowersSectionWrapper">
          {apiData
          .sort((a,b)=> {
            if (property && property.asc) {
              return (a[property.sortProperty] < b[property.sortProperty]) ? -1 : (a[property.sortProperty] > b[property.sortProperty])
            }else if(property && property.asc === false){
              return (a[property.sortProperty] > b[property.sortProperty]) ? -1 : (a[property.sortProperty] < b[property.sortProperty])
            }else{
              return 0
            }
          })
          .map((x) => (
            <div className="flowersCard" key={x._id}>
              <div className="imgBox">
                <img src={x.img} alt="" />
              </div>
              <h3>{x.name}</h3>
              <p>{x.price} $</p>
              <button onClick={()=>deleteItem(x._id)}>X</button>
            </div>
          ))}
        </div>
        <div className="EventPricing">
          <div className="flowersSectionTitle">
            <div className="upperFlowerTitle">
              <p>Devoted to wonderful beauty</p>
            </div>
            <div className="mainFlowerTitle">
              <h1>Event Pricing</h1>
            </div>
          </div>
          <div className="flowersSectionWrapper">
            <div className="pricingCard">
              <div className="pricePerTable">
                <h2>$16</h2> <span>per table</span>
              </div>
              <h3>Birthday Events</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
            <div className="pricingCard">
              <div className="pricePerTable">
                <h2>$16</h2> <span>per table</span>
              </div>
              <h3>Birthday Events</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
            <div className="pricingCard">
              <div className="pricePerTable">
                <h2>$16</h2> <span>per table</span>
              </div>
              <h3>Birthday Events</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlowersSection;
