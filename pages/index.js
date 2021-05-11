import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { encode } from 'js-base64';

import Sidebar from "components/Sidebar"
import Editor from 'components/Editor';

export async function getStaticProps() {
  const baseurl = process.env.BASE_URL;
  return {
    props: {
      baseurl 
    }
  }
}

export default function Home({baseurl}) {
  const url = baseurl;
  const [payload, setPayload] = useState({
    from: 'Ahmed & Fams',
    text: 'Eid Mubarak! May this special day bring peace, happiness and prosperity to everyone.',
    bgImage: 'https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVpZCUyMG11YmFyYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    bgOverlay: '#000',
    bgOpacity: '0.6',
    txtColor: '#feffff',
    fontfamily: 'default-fontfamily'  // class name
  });
  const changePayload = (val) => {
    const {name, value} = val.target;
    setPayload(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const [showAlert, setShowAlert] = useState(false);
  const getUrl = () => {
    let string = JSON.stringify(payload);
    let code = encode(string);
    console.log(code);
    const urls = `${url}/prev?id=${code}`;
    navigator.clipboard.writeText(urls);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }
  const downloadImage = () => {
    htmlToImage.toPng(document.getElementById('card-image'))
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Eid From Me</title>
        <meta name="description" content="Eid Mubarak May Allah accepts our dua, fast, prayer, and all of our good deeds in the Ramadhan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="d-flex align-items-center mt-5">
        <Image src="https://i.ibb.co/mq3jPrD/ketupat.png" alt="Vercel Logo" width={46} height={46} />
        <p className="ms-3 fw-bold m-0 fs-3">Eid From Me</p>
      </div>

      <main className={`${styles.main} default-fontfamily`}>
        <div className="d-flex">
          <div>
            <div className="d-block d-md-none alert alert-primary" role="alert">
              Use desktop for better experience!
            </div>
            <div style={{height: '400px', overflowY: 'auto'}}>
              <Sidebar payload={payload} changePayload={changePayload} />
            </div>
            <div className="mb-3">
              <button onClick={() => getUrl()} className="btn btn-sm btn-primary me-2">Copy URL</button>
              <button onClick={() => downloadImage()} className="d-none d-md-inline-block btn btn-sm btn-primary">Download card</button>
            </div>
            {
              showAlert && (
                <div className="alert alert-primary" role="alert">
                  Copied!
                </div>
              )
            }
          </div>
          <div className="ms-5 overflow-y-auto d-none d-md-block">
            <div id="card-image">
              <Editor payload={payload} editor={true} />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a
          href="https://github.com/burhanahmeed/eid-from-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
        <a
          href="https://www.buymeacoffee.com/zokt07a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy me a coffee
        </a>
        <a
          href="https://twitter.com/BurhannAhm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    </div>
  )
}
