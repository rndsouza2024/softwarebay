import { useRouter } from 'next/router'
import browsersData from '../../../public/browsers.json'
import latestData from '../../../public/latest.json'
import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeStyles from '@styles/styles.module.css'
import Script from 'next/script'



const browsersDetail = ({ browsersItem }) => {
  const router = useRouter()
  const { id } = router.query

  const [latest, setLatest] = useState(latestData)
  const [playerReady, setPlayerReady] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [seconds, setSeconds] = useState(10) // Example timer duration
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const playerRef = useRef(null)
  const currentIndexRef = useRef(0)

  const handleDownloadClick = () => {
    setShowTimer(true)
    setSeconds(30) // Example timer duration
  }

  useEffect(() => {
    const detectMobileDevice = () => {
      const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent
      const mobile = Boolean(
        userAgent.match(
          /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
      setIsMobileDevice(mobile)
    }

    detectMobileDevice()
  }, [])

  useEffect(() => {
    let timer
    if (showTimer && seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [showTimer, seconds])

  useEffect(() => {
    const handleResize = () => {
      const player = document.getElementById('player')
      if (player) {
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        )
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        )
        player.style.width = vw + 'px'
        player.style.height = vh + 'px'
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const onYouTubeIframeAPIReady = () => setPlayerReady(true)
      if (typeof window !== 'undefined' && typeof YT === 'undefined') {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
      } else {
        onYouTubeIframeAPIReady()
      }
      return () => delete window.onYouTubeIframeAPIReady
    }

    loadYouTubeAPI()
  }, [])

  useEffect(() => {
    if (!playerReady || !showTimer) return

    const initializePlayer = () => {
      const videoIds = browsersItem.videoitem
      const randomVideoId =
        videoIds[Math.floor(Math.random() * videoIds.length)]

      playerRef.current = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: randomVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          disablekb: 1,
          playsinline: 1,
          enablejsapi: 1,
          modestbranding: 1,
          origin: window.location.origin,
          rel: 0,
          quality: 'hd1080'
        },
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.ENDED) {
              // If video has ended, move to the next video or loop back to the beginning
              currentIndexRef.current =
                (currentIndexRef.current + 1) % videoIds.length
              playerRef.current.cueVideoById({
                videoId: videoIds[currentIndexRef.current],
                startSeconds: 0 // Start from the beginning of the next video
              })
              playerRef.current.playVideo()
            }
          }
        }
      })
    }

    initializePlayer()
  }, [playerReady, showTimer, browsersItem])



  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Softwarebay',
      url: 'http://softwarebay.vercel.app/',
      image: ['http://softwarebay.vercel.app/wp-content/uploads/2023/05/favicon.ico'],
      logo: {
        '@type': 'ImageObject',
        url: 'http://softwarebay.vercel.app/logo.png',
        width: 280,
        height: 100
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'http://softwarebay.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'http://softwarebay.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const softwareSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'http://schema.org/SoftwareApplication',
    datePublished: browsersItem.datePublished,
    dateModified: browsersItem.dateModified,
    softwareVersion: browsersItem.softwareVersion,
    url: browsersItem.siteurl,
    operatingSystem: browsersItem.operatingSystem,
    applicationCategory: browsersItem.applicationCategory,
    image: browsersItem.image,
    name: browsersItem.name,
    interactionStatistic: browsersItem.interactionStatistic,
    offers: {
      '@type': 'http://schema.org/Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'http://schema.org/AggregateRating',
      '@id': browsersItem.siteurl,
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
        item: 'http://softwarebay.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'browsersItem',
        item: browsersItem.baseurl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: browsersItem.name,
        item: browsersItem.siteurl,
      }
      
    ]
  })

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'http://softwarebay.vercel.app#website',
        url: 'http://softwarebay.vercel.app',
        name: 'Softwarebay',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `${browsersItem.siteurl}#webpage`,
        url: browsersItem.siteurl,
        name: `${browsersItem.name} | Softwarebay`,
        datePublished: browsersItem.datePublished,
        dateModified: browsersItem.dateModified,
        isPartOf: {
          '@id': 'http://softwarebay.vercel.app#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'http://softwarebay.vercel.appauthor/softwarebay/',
        name: 'Dr Trailer',
        url: 'http://softwarebay.vercel.appauthor/softwarebay/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['http://softwarebay.vercel.app']
      },
      {
        '@type': 'Article',
        '@id': `${browsersItem.siteurl}#article`,
        headline: `Download ${browsersItem.name} | Softwarebay`,
        datePublished: browsersItem.datePublished,
        dateModified: browsersItem.dateModified,
        articleSection: 'browsers',
        author: {
          '@id': 'http://softwarebay.vercel.appauthor/browsersItem/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Explore. Discover. Download - Free Your Desired Software.`,
        image: browsersItem.image,
        name: `Download ${browsersItem.name} | Softwarebay`,
        isPartOf: {
          '@id': `${browsersItem.siteurl}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `${browsersItem.siteurl}#webpage`
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': `${browsersItem.siteurl}#blogPost`,
        headline: `Download ${browsersItem.name} | Softwarebay`,
        datePublished: browsersItem.datePublished,
        dateModified: browsersItem.dateModified,
        articleSection: 'browsers',
        author: {
          '@id': 'http://softwarebay.vercel.app/author/softwarebay/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Explore. Discover. Download - Free Your Desired Software.`,
        image: browsersItem.image,
        name: `Download ${browsersItem.name} | Softwarebay`,
        '@id': `${browsersItem.siteurl}#richSnippet`,
        isPartOf: {
          '@id': `${browsersItem.siteurl}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `${browsersItem.siteurl}#webpage`
        }
      }
    ]
  })

  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id':  `${browsersItem.siteurl}#webpage`, // Add a comma here
    name: browsersItem.title,
    url: browsersItem.siteurl,
    description: browsersItem.news1,
    image: browsersItem.image,
    datePublished: browsersItem.startDate,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: browsersItem.title,
        urlTemplate: browsersItem.siteurl,
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: browsersItem.country
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Softwarebay',
      logo: {
        '@type': 'ImageObject',
        url: 'http://softwarebay.vercel.app/og_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  };
  
  // Convert newsArticleSchema and videoObjects to JSON strings
  const newsArticleJson = JSON.stringify(newsArticleSchema);
  

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> Download {browsersItem && browsersItem.name} | Softwarebay</title>
        <link rel='canonical' href={browsersItem && browsersItem.siteurl} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${browsersItem && browsersItem.name} - Softwarebay`}
        />
        <meta
          property='og:description'
          content='Explore. Discover. Download - Free Your Desired Software.'
        />
        <meta
          property='og:description'
          content='Explore. Discover. Download - Free Your Desired Software.'
        />
        <meta property='og:url' content={`${browsersItem && browsersItem.url}`} />
        <meta name='keywords' content={`${browsersItem && browsersItem.keywords}`} />
        <meta property='og:site_name' content='Softwarebay' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content={`${browsersItem && browsersItem.group}`}
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='browsersItem' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          property='og:image'
          content={`${browsersItem && browsersItem.backimage}`}
        />

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

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />
       
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: newsArticleJson }}
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
      <Script src="../../propler/ads.js" defer />
        <Script src="../../propler/ads2.js" defer />

      <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-3xl'
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            marginBottom: '12px'
        }}
        >
          {browsersItem.title}
        </h1>
       
        <p
          className='px-0 text-black font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 mt-2'
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
        </div>
        <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
        <div
          className='shadow-lg flex items-center justify-center '
          role='navigation'
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '15px'
          }}
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
            <a href='http://softwarebay.vercel.app/browsers/' >
                <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                  Browser<span className='p'></span>
                </h3>
                </a>
            </li>
          </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-248' className='menu-operating-systems'>
                <a
                  href='http://softwarebay.vercel.app/desktop/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Desktop<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11605' className='menu-3dcad'>
                <a
                  href='http://softwarebay.vercel.app/multimedia/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Multimedia<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='http://softwarebay.vercel.app/graphic-design/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Graphic Design<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-196' className='menu-browsers'>
                <a
                  href='http://softwarebay.vercel.app/network/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Network<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-161' className='menu-development'>
                <a
                  href='http://softwarebay.vercel.app/development/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Development<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='http://softwarebay.vercel.app/file-sharing/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  File Sharing<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='http://softwarebay.vercel.app/security/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Security<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-browsersItem'>
                <a
                  href='http://softwarebay.vercel.app/games/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Games<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='http://softwarebay.vercel.app/education'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Education<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-35' className='menu-home active'>
              <a
                href='http://softwarebay.vercel.app/mobile'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Mobile<span className='p'></span>
              </a>
            </li>
          </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-browsersItem'>
                <a
                  href='http://softwarebay.vercel.app/utilities/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Utilities<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='http://softwarebay.vercel.app/other-software/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Other Software<span className='p'></span>
                </a>
              </li>
            </button>
          </ul>
        </div>

        <div className='flex-container'>
          <div className='category-container'>
            <Image
              src={browsersItem.channelposter}
              alt={browsersItem.title}
              width={600}
              height={300}
              // priority
              objectFit='cover'
              loading='lazy'
              style={{
                // maxWidth: '50%',
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '50px',
                boxShadow: '0 0 10px 0 #fff',
                filter:
                  'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
              }}
            />
            <div
              style={{ maxWidth: '800px', width: '100%', marginBottom: '20px' }}
            >
              <h2
                className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-2xl'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  marginBottom: '12px'               
                }}
              >
                {browsersItem.title}
              </h2>

            
              <p className='text-black text-bg font-semibold mt-2'>
                License: {browsersItem.license}, Version: {browsersItem.version}
              </p>
              <p className='text-black text-bg font-semibold mt-2'>
                Developers: {browsersItem.developers}
              </p>
              <div
                className='flex flex-col items-center justify-center'
                style={{
                  marginTop: '50px',
                  marginBottom: '50px',
                  filter:
                    'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              >
                {!showTimer ? (
                  <button
                    onClick={handleDownloadClick}
                    className=' animate-pulse bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                  >
                    Download Now
                  </button>
                ) : (
                  <>
                    <p className='text-3xl font-bold mb-4'>
                      <p>Password is 123</p>
                      Your download link will be ready in {seconds} seconds...
                    </p>
                    <p className='text-3xl font-bold mb-4'>
                      Installation Video
                    </p>
                   
                    <div
                      id='player'
                     style={{
                        filter:
                          'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
                        maxWidth: '100%',
                        height:'400px',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        maxHeight: isMobileDevice ? '50vh' : '200vh',
                        border: '3px solid',
                        // boxShadow: '0px 0px 5px 5px rgba(245, 158, 11, 0.5), 0px 0px 5px 5px rgba(236, 72, 153, 0.5)'
                        // borderImage: 'linear-gradient(to left, #f59e0b, #ec4899) 1'
                      }}
                    ></div>
                  
                    {seconds === 0 && (
                      <Link href={browsersItem.downloadlink} target='_blank'>
                        <div
                          target='_blank'
                          className='bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                          style={{
                            margin: 'auto',
                            marginBottom: '50px',
                            borderRadius: '50px',
                            boxShadow: '0 0 10px 0 #fff',
                            filter:
                              'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                          }}
                        >
                          Click Here to Download
                        </div>
                      </Link>
                    )}
                  </>
                )}
              </div>

              <p className='text-black text-bg font-semibold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong> {browsersItem.head1} </strong>
              </p>
              <Image
                src={browsersItem.image1}
                alt={browsersItem.name}
                width={1280}
                height={720}
                // priority
                objectFit='cover'
                loading='lazy'
                style={{
                  // maxWidth: '50%',
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  // filter:
                  //   'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              />
              {browsersItem.news1.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}
              <p className='text-black text-bg font-semibold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong> {browsersItem.head2} </strong>
              </p>
              <Image
                src={browsersItem.image2}
                alt={browsersItem.name}
                width={1280}
                height={720}
                // priority
                objectFit='cover'
                loading='lazy'
                style={{
                  // maxWidth: '50%',
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  // filter:
                  //   'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              />
              {browsersItem.news2.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}
                <p className='text-black text-bg font-semibold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong> {browsersItem.head3} </strong>
              </p>
              <Image
                src={browsersItem.image3}
                alt={browsersItem.name}
                width={1280}
                height={720}
                // priority
                objectFit='cover'
                loading='lazy'
                style={{
                  // maxWidth: '50%',
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  // filter:
                  //   'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              />
              {browsersItem.news3.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}
                <p className='text-black text-bg font-semibold mt-2 text-3xl mb-2 items-center justify-center '>
                <strong> {browsersItem.head4} </strong>
              </p>
              <Image
                src={browsersItem.image4}
                alt={browsersItem.name}
                width={1280}
                height={720}
                // priority
                objectFit='cover'
                loading='lazy'
                style={{
                  // maxWidth: '50%',
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              />
              {browsersItem.news4.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}
              {/* </div>
  </div> */}
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

export async function getStaticPaths() {
  const paths = browsersData.map(item => ({
    params: { id: item.id }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const browsersItem = browsersData.find(item => item.id === params.id);
  return { props: { browsersItem } };
}
export default browsersDetail
