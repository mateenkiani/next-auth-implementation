import type { NextPage } from "next";
import { useSession} from 'next-auth/react'
import Link from "next/link";

const Home: NextPage = () => {
  const session =  useSession();

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <p className="mb-8 text-center">{JSON.stringify(session)}</p>
          {session.data ? <Link href={"/api/auth/signout"}><a>sign Out</a></Link>: <Link href={"/api/auth/signin"}><a>sign In</a></Link>}
        </div>
      </div>
    </div>
  );
};

export default Home;
