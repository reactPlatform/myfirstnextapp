import React from 'react'
import { useRouter } from 'next/router'
const  DeveloperPage = () => {
  const router = useRouter();
  const detailsfromdb = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  ]
  const developerId = router.query.developerId;
  const developerDetails = detailsfromdb.find(x => x.id == developerId);
  
  return (
    <div>
      {developerDetails ? `${developerDetails.name} - ${developerDetails.role}` : 'Developer Details not exist'}
    </div>

  )
}

export default  DeveloperPage