import React,{useState} from 'react'
import Items from './Items'
function Menu() {
    const [data, setData] = useState(Items);
    let filterItem=(item)=>{
        let remainingItem=Items.filter((value)=>{
            return value.category===item;
        })
        setData([...remainingItem]);
    }
    return (
        <>
            <div className="container mt-5">
                <p className='text-center fw-bolder fs-1'>Our Menu</p>
                <hr className='w-25 mx-auto border-0 rounded ' id='headingHr' />
                <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn mx-4" onClick={()=>setData(Items)}>All</button>
                    <button type="button" className="btn mx-4" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                    <button type="button" className="btn mx-4" onClick={()=>filterItem("lunch")}>Lunch</button>
                    <button type="button" className="btn mx-4" onClick={()=>filterItem("shakes")}>Shakes</button>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {data.map((value)=>{
                        return <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5" key={value.id}>
                        <div className="row">
                            <div className="col">
                                <img src={value.image} className='img-fluid w-100 img-thumbnail' alt="" />
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-around mb-0">
                                    <p className='fw-bolder'>{value.title}</p>
                                    <p className='fw-bold text-warning'>${value.cost}</p>
                                </div>
                                <hr id='titleHr' className='' />
                                <p>{value.description}</p>
                            </div>
                        </div>
                    </div>
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Menu
