import React, { Fragment } from 'react'
import Link from 'next/link'
const AboutUs = () => {
  const detailsfromdb = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'},
    { id : 4, name: 'Karthik', role: 'FullStack Developer'}
  ]
  return (
    <Fragment>
       <div>About Us</div>
       <div>
        {
          detailsfromdb.map(detail => <div><Link href={`/aboutus/${detail.id}`}>{detail.name}</Link></div>)
        }
       </div>
    </Fragment>
   
  )
}

export default AboutUs