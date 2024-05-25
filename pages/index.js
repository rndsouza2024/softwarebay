import { useState } from 'react'
import educationData from '../public/education.json'
import latestData from '../public/latest.json'
// import browsersData from '../public/browsers.json'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  const [latest, setlatest] = useState(latestData)

  const [education, seteducation] = useState(educationData.slice(0, 2)) // Only the first 2 items
  // const [browsers, setBrowsers] = useState(browsersData.slice(0, 2)) // Only the first 2 items

  const pageTitle = 'Softwarebay - Explore. Discover. Download.'

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
        height: 80
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

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://softwarebay.vercel.app/author/education/',
        name: 'Dr Trailer',
        url: 'https://softwarebay.vercel.app/author/education/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://softwarebay.vercel.app/#organization',
        name: 'Softwarebay - Explore. Discover. Download.',
        url: 'https://softwarebay.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://softwarebay.vercel.app/#website',
        url: 'https://softwarebay.vercel.app',
        name: 'Softwarebay - Explore. Discover. Download.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://softwarebay.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://softwarebay.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://softwarebay.vercel.app/#webpage',
        url: 'https://softwarebay.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://softwarebay.vercel.app/author/education/',
          name: 'Dr Trailer',
          url: 'https://softwarebay.vercel.app/author/education/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://softwarebay.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://softwarebay.vercel.app/',
            url: 'https://softwarebay.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://softwarebay.vercel.app/author/education/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/education/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://softwarebay.vercel.app/#organization',
              name: 'Softwarebay - Explore. Discover. Download.',
              url: 'https://softwarebay.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://softwarebay.vercel.app/',
            url: 'https://softwarebay.vercel.app/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://softwarebay.vercel.app/author/education/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/education/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://softwarebay.vercel.app/#organization',
              name: 'Softwarebay - Explore. Discover. Download.',
              url: 'https://softwarebay.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://softwarebay.vercel.app/',
            url: 'https://softwarebay.vercel.app/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://softwarebay.vercel.app/author/education/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/education/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://softwarebay.vercel.app/#organization',
              name: 'Softwarebay - Explore. Discover. Download.',
              url: 'https://softwarebay.vercel.app'
            }
          }
        ]
      }
    ]
  })

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <div className='container'>
        <Head>
          <title>{pageTitle}</title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://softwarebay.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='download, software, freeware, shareware, trial versions, program, utilities'
          />
          <meta
            name='description'
            content='Explore. Discover. Download - Free Your Desired Software.'
          />
          <link rel='canonical' href='https://softwarebay.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Softwarebay - Explore. Discover. Download.'
          />
          <meta
            property='og:description'
            content='Explore. Discover. Download - Free Your Desired Software.'
          />
          <meta property='og:url' content='https://softwarebay.vercel.app/' />
          <meta
            property='og:site_name'
            content='Softwarebay - Explore. Discover. Download.'
          />
          <meta
            property='og:image'
            content='https://softwarebay.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='Softwarebay - Explore. Discover. Download.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://softwarebay.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-adsense-account'
            content='ca-pub-5527677677744511'
          />
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
            content='dm0zffs8dj8pcb3gd'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr |function () { (w.webpushr.q = w.webpushr.q |[]).push(arguments) };
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

        <h1 className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold hover:text-blue-800' >
          Welcome to SoftwareBay
        </h1>
        <p
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'
          style={{
            marginTop: '15px',
           }}
        >
          {' '}
          Explore. Discover. Download - Free Your Desired Software.{' '}
        </p>

        <p
          className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            fontSize: '35px',
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
     

        <h3
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  font-bold hover:text-blue-800 text-3xl  mt-2'
          style={{
            marginTop: '15px',
            }}
        >
          Most Latest & Popular Software{' '}
        </h3>
        <div className='container'>
          <div className='flex-container'>
            <div className='category-container'>
              <div className='card-container'>
                {education.map(educationItem => (
                  <div key={educationItem.id} className='card'>
                    <a href={`/education/${educationItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={educationItem.image}
                          alt={educationItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          style={{
                            filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }} 
                        />
                        <p className='text-black text-2xl font-semibold mt-2'>
                          {educationItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {educationItem.text}
                        </div>
                        <div className='badge'>{educationItem.badge}</div>
                      </div>
                    </a>
                  </div>
                ))}
                {/* </div>
    </div>
  

    <div className='category-container'>
      <div className='card-container'> */}
                {/* {browsers.map(browsersItem => (
                  <div key={browsersItem.id} className='card'>
                    <a href={`/browsers/${browsersItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={browsersItem.image}
                          alt={browsersItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          style={{
                            filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }} 
                        />
                        <p className='text-black text-2xl font-semibold mt-2'>
                          {browsersItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {browsersItem.text}
                        </div>
                        <div className='badge'>{browsersItem.badge}</div>
                      </div>
                    </a>
                  </div>
                ))} */}
              </div>
            </div>
            <div className='sidebar'>
              <p
                className='text-black text-xl font-bold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                LATEST SOFTWARE NEWS{' '}
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
                          {/* <div className='badge'>{latestItem.badge}</div> */}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
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
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .category-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(50% - 10px); /* Adjust width to leave space between */
          }
          .categorylatest-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(100% - 0px); /* Adjust width to leave space between */
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }
          .cardlatest {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
            // border: 1px solid #ccc;
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
            // color: #fff;
            font-weight: bold;
            // text-shadow: 3px 5px 5px #000;
            margin-bottom: 10px;
            font-size: 30px; /* Corrected property */
            line-height: 1; /* Optional: Adjust line height if needed */
            height: 30px; /* Set the desired height */
          }

          .sidebar {
            width: calc(40% - 10px); /* Adjust width to leave space between */
            padding: 20px;
            // border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 40px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column; /* Stack items vertically on smaller screens */
            }

            .category-container,
            .sidebar {
              width: 100%; /* Make both full width on smaller screens */
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

export default HomePage
