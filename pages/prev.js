import Editor from 'components/Editor';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Head from 'next/head'

export default function Prev () {
  const router = useRouter();
  let [payload, setPayload] = useState({});
  const queryid = router.query.id;
  useEffect(() => {
    if (queryid) {
      const p = window.atob(queryid);
      if (p) {
        setPayload(JSON.parse(p))
      }
    } 
  }, [queryid])
  return (
    <>
      <Head>
        <title>Eid From {payload.from}</title>
        <meta name="description" content="Eid Mubarak May Allah accept our dua, fast, prayer, and all of our good deeds in the Ramadhan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor payload={payload} editor={false} />
    </>
  )
}