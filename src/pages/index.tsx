import { Example } from "@prisma/client";
import { GetStaticProps } from 'next'
import { getUsers } from '../server/getUser'

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers()

  return {
    props: {
      users
    }
  }
}


const Home = ({ users }: { users: Example[] }) => {
  return (
       <div>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
     </div>
  );
}

export default Home;