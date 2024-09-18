import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            From histroycal citieirs to narltuf
                            sperckthr coen set the vest of  the worle!
                        </p>
                    </div>
                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon'/>
                        <BsArrowRightShort className='icon'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
