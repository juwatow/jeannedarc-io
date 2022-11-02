import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();
  
    const meta = {
      title: "Jeanne d'Arc Uwatowenimana - Software Engineer, Engineering Manager",
      description: `Guide engineering teams to achieve results through partnership with various stakeholders: founders, PMs, Designers, SW engineers, ... and continuous improvements`,
      image: "/avatar.png",
      type: "website",
      ...customMeta,
    };
    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://jeannedarc.io${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://jeannedarc.io${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Jeanne d'Arc Uwatowenimana" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@juwatow" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <main className="dark:bg-gray-800 w-full">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </main>
      </div>
    );
  }