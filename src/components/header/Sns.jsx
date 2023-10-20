import React from 'react'
import { snsText } from '../../data/header'

const Sns = () => {
  return (
    <div className='header__sns'>

                <ul>
                    {snsText.map((sns, key) => (
                        <li key={key}>
                            <a 

                                href={sns.src} 
                                target='_blank' 
                                rel="nonopener noreferrer"
                        >
                                <span>{sns.icon}</span>
                             </a>        
                        </li>
                    )) }
                </ul>
            </div>
  )
}

export default Sns