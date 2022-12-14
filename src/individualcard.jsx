import React, { useState, useEffect } from 'react';
import * as config from './config';


const IndividualCard = () => {

    const [element, setElement] = useState([]);


    useEffect(() => {

        getElementsAsync();
    }, [])

    const getElementsAsync = async () => {

        let url = config.URL_IMG + config.PLANETS
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            setElement(data.results);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='row'>
            {
                !!element && element.length > 0 && element.map((elem) => {
                    return (
                        <div className='col-3 mb-3' key={elem.uid}>
                            <div className="card rounded-0">
                                <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{elem.name}</h5>
                                    <a href="#" className="btn btn-outline-dark rounded-0">DATABASE</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default IndividualCard;