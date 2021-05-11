import Editor from 'components/Editor';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Head from 'next/head'
import { decode } from 'js-base64';

export default function Prev () {
  const router = useRouter();
  let [payload, setPayload] = useState({});
  const queryid = router.query.id;
  useEffect(() => {
    if (queryid) {
      let filtered = queryid.replace(/ /g, '+');
      const p = decode(filtered);
      // console.log(p);
      if (p) {
        setPayload(JSON.parse(p))
      }
    } 
  }, [queryid])
  return (
    <>
      <Head>
        <title>Eid From {payload.from}</title>
        <meta name="description" content="Eid Mubarak May Allah accepts our dua, fast, prayer, and all of our good deeds in the Ramadhan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Editor payload={payload} editor={false} />
    </>
  )
}