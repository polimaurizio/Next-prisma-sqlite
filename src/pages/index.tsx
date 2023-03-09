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
    <div className={'pt-5 pl-5'}>
      <h1 className={"font-bold text-[30px] pb-5"}>Utenti in DB</h1>
       <table>
        {users.map(user => (
          <tr>
            <th className={"font-light w-10 border"}>{user.id}</th>
            <th className={"font-light w-60 border"}>{user.name}</th>
            <th className={"font-light w-60 border"}>{user.email}</th>
          </tr>
        ))}
       </table>
       <button className={'rounded-full mt-4 px-3 py-2 border hover:bg-slate-200'}><a href="_addContact">Crea user</a></button>
     </div>
  );
}

export default Home;