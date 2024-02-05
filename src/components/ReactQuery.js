import React from 'react'
import { useQuery } from '@tanstack/react-query';

const ReactQuery = () => {

  const {
    data: users,
  } = useQuery({
    queryFn: () => 
    fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json()
    ),
    queryKey: ['users'],
  });

  return (
    <div>
        <h1>ReactQuery</h1>
        <h3>Setup Instruction as follows</h3>
        <h5>Wrap your application, which is the Main.jsx component, with it and pass queryClient as a prop. It comes automatically from the initialized QueryClient.</h5>

        <h3>ZipCode of the Users</h3>
        {users &&
            users.map((user) => (
                <p key={user.id}>{user.website}</p>
            ))
        }
    
    </div>
  )
}

export default ReactQuery