import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/latest.json'
import educationData from '../../public/education.json'
import Head from 'next/head'





const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Softwarebay',
    url: 'https://softwarebay.vercel.app/',
    image: ['https://softwarebay.vercel.app/wp-content/uploads/2023/05/favicon.ico'],
    logo: {
      '@type': 'ImageObject',
      url: 'https://softwarebay.vercel.app/logo.png',
      width: 280,
      height: 100
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://softwarebay.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://softwarebay.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'http://schema.org/SoftwareApplication',
  datePublished: '14-10-2019',
  dateModified: '1-12-2023',
  softwareVersion: 'Education 2024',
  url: 'https://softwarebay.vercel.app/education/',
  operatingSystem: 'Windows',
  applicationCategory: 'teaching-training',
  image: 'https://softwarebay.vercel.app/og_image.jpg',
  name: 'TypingMaster',
  interactionStatistic: 498618,
  offers: {
    '@type': 'http://schema.org/Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'http://schema.org/AggregateRating',
    '@id': 'https://softwarebay.vercel.app/education/',
    ratingValue: 8,
    ratingCount: 0,
    bestRating: '10',
    worstRating: '1'
  }
})

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Windows',
      item: 'https://softwarebay.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Education',
      item: 'https://softwarebay.vercel.app/education/'
    },
   
  ]
})

const educationPage = ({ items }) => {
  const [latest, setLatest] = useState(latestData)

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
       <Head>
        <title> Watch Education | Softwarebay</title>
        <link rel='canonical' href="https://softwarebay.vercel.app/education/" />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
       <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=" Watch Education | Softwarebay"
        />
        <meta
          property='og:description'
          content="Explore. Discover. Download - Free Your Desired Software."
        />
        <meta
          property='og:description'
          content='Explore. Discover. Download - Free Your Desired Software.'
        />
        <meta property='og:url' content= "https://softwarebay.vercel.app/education"/>
        <meta name='keywords' content=""/>
        <meta property='og:site_name' content='Softwarebay' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content= "https://softwarebay.vercel.app/og_image.jpg"
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='education' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
          <meta name='keywords' content="download, software, freeware, shareware, trial versions, program, utilities" />
        <meta
          property='og:image'
          content= "https://softwarebay.vercel.app/og_image.jpg"  />
        <meta property='og:image:width' content='1080px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        {/* <script src='https://www.youtube.com/iframe_api' /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />
       
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BO9Qy2O9EbKU_YukDi7nzisKRKUCYLKCtcH-1BKBkl8AvD_HZ7_14PKDq-OeXGOMF-wwdKnvKspavxYcr4_BgEA' });
          `
          }}
        />
      
      </Head>
      {/* <Script src='../../propler/ads.js' defer /> */}

   <div className='container'>
        <h1  className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'  style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}>Education Section</h1>

      <p
        className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '28px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Select Categories.{' '}
      </p>
      <div
        className='shadow-lg flex items-center justify-center'
        role='navigation'
      >
        <ul
          id='menu-header-menu'
          className='menu flex flex-wrap justify-center'
        >
             <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Home<span className='p'></span>
                </a>
              </li>
            </button>
        
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-284913' className='menu-softwarecategories'>
              <Link href='https://softwarebay.vercel.app/browsers/' passHref>
                <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                  Browser<span className='p'></span>
                </h3>
              </Link>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-248' className='menu-operating-systems'>
              <a
                href='https://softwarebay.vercel.app/desktop/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Desktop<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-11605' className='menu-3dcad'>
              <a
                href='https://softwarebay.vercel.app/multimedia/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Multimedia<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-11610' className='menu-graphicdesign'>
              <a
                href='https://softwarebay.vercel.app/graphicdesign/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Graphic Design<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-196' className='menu-multimedia'>
              <a
                href='https://softwarebay.vercel.app/network/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Network<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-161' className='menu-development'>
              <a
                href='https://softwarebay.vercel.app/development/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Development<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='https://softwarebay.vercel.app/filesharing/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  File Sharing<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='https://softwarebay.vercel.app/security/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Security<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-education'>
                <a
                  href='https://softwarebay.vercel.app/games/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Games<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-35' className='menu-home active'>
              <a
                href='https://softwarebay.vercel.app/education'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Education<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-11606' className='menu-education'>
              <a
                href='https://softwarebay.vercel.app/utilities/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Utilities<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-194' className='menu-tutorials'>
              <a
                href='https://softwarebay.vercel.app/othersoftware/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Other Software<span className='p'></span>
              </a>
            </li>
          </button>
        </ul>
      </div>
      </div>
      <div className='container'>
        {/* <h1  className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>education Section</h1> */}
        <div className='flex-container'>
          <div className='main-content'>
            <div className='card-container'>
            {educationData.map(item => (
          <div key={item.id}>
                {/* <div key={item.id} className='card'> */}
                  <Link href={`/education/${item.id}`}>
                    <div className='relative'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className='rounded-lg'
                        width={140} // Specify the desired width
                        height={140} // Specify the desired height
                        style={{
                            filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }} 
                      />
                      <p className='text-black text-2xl font-semibold mt-2'>
                        {item.name}
                      </p>
                      <p className='text-black text-bg font-semibold mt-2'>
                      License: {item.license}, Version: {item.version}
                      </p>
                      <p className='text-black text-bg font-semibold mt-2'>
                      Developers: {item.developers}
                      </p>
                      <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                        {item.text}
                      </div>
                      <div className='badge'>{item.badge}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='sidebar'>
            <p
              className='text-black text-xl font-bold mt-2'
              style={{
                marginTop: '15px',
                color: '#000',
                font: 'bold',
                textShadow: '1px 2px 2px #000'
              }}
            >
              LATEST SOFTWARE NEWS
            </p>
            <div className='categorylatest-container'>
              <div className='cardlatest-container'>
                {latest.map(latestItem => (
                  <div key={latestItem.id} className='cardlatest'>
                    <a href={`/latest/${latestItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={latestItem.image}
                          alt={latestItem.title}
                          className='rounded-lg mx-auto'
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          style={{
                            filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }} 
                        />
                        <p className='text-black text-lg font-semibold mt-2'>
                          {latestItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                          {latestItem.text}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Global styles */
          body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .section-title {
            color: #000;
            font-weight: bold;
            font-size: 30px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
          }

          .main-content {
            flex: 3; /* 60% of the width */
          }

          .sidebar {
            flex: 2; /* 40% of the width */
            padding: 10px;
            border-radius: 8px;
            margin-top: 1px;
          }

          .card-container,
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card,
          .cardlatest {
            width: 100%;
            max-width: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }

          .relative {
            position: relative;
          }

          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            color: #000;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
          }

          .card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .text-center {
            text-align: center;
          }

          h1 {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 30px;
            line-height: 1;
            height: 30px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }

            .main-content,
            .sidebar {
              width: 100%;
            }

            .sidebar {
              margin-top: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://softwarebay.vercel.app/education.json');
    const data = await res.json();
    
    return {
      props: {
        items: data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        items: []
      }
    };
  }
}


export default educationPage
