import React from 'react'
import '../css/Service.css';
export default function Service() {
  return (
    <div>
      <div className='center'><b>Git Commands</b></div>
        <div className='service'>
            <div className='service-item'><p>git init</p></div>
            <div className='service-item'><p>git add .</p></div>
            <div className='service-item'><p>git commit -u "name"</p></div>
            <div className='service-item'><p>git remote add origin</p></div>
            <div className='service-item'><p>git push -u origin master</p></div>
            <div className='service-item'><p>git status</p></div>
        </div>
    </div>
  )
}
