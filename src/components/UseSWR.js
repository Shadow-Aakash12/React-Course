import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {

  const {
    data: users,

  } = useSWR('https://jsonplaceholder.typicode.com/users',fetcher);


  return (
    <div>
      <h1>Using useSWR in React JS</h1>
      <h4>Fetching email of the 10 users</h4>
      {
        users &&
         users.map((data,id) =>(
          <p key={id}>{data.email}</p>
         ))
      }
    </div>
  )
}

export default Swr