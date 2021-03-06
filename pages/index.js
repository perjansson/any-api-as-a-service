import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps() {
  const apis = [
    { id: 1, name: 'Api 1' },
    { id: 2, name: 'Api 2' },
    { id: 3, name: 'Api 3' },
  ]

  return {
    props: { apis },
  }
}

export default function Home({ apis }) {
  return (
    <div className="container">
      <Head>
        <title>API as a service</title>
      </Head>

      <main className="apis">
        {apis.map(({ id, name }) => (
          <Link key={id} href={`/apis/${id}`}>
            <a>{name}</a>
          </Link>
        ))}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .apis {
          color: #0070f3;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .apis > a {
          color: #0070f3;
          margin: 10px 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
