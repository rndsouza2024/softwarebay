import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import ShareButtons from '@components/ShareButtons'

const contact = () => {
  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://softwarebay.vercel.app/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://softwarebay.vercel.app/author/ytmag/',
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
          '@id': 'https://softwarebay.vercel.app/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://softwarebay.vercel.app/author/ytmag/',
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
              '@id': 'https://softwarebay.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/ytmag/',
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
              '@id': 'https://softwarebay.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/ytmag/',
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
              '@id': 'https://softwarebay.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://softwarebay.vercel.app/author/ytmag/',
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

  const title = 'Download Contact | Softwarebay™'
  const description = 'Check out this amazing Software!'
  const shareMessage = 'Share this Software with your friends!'

  return (
    <div>
      <Head>
        <title>Softwarebay | Contact Us</title>

        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='https://softwarebay.vercel.app/sitemap.xml'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
          content='download, software, freeware, shareware, trial versions, program, utilities, security, network, multimedia, movies, mobile, games, graphic design, file sharing, education, development, desktop, browser'
        />
        <meta
          name='description'
          content='Explore. Discover. Download - Free Your Desired Software.'
        />
        <link
          rel='canonical'
          href='https://softwarebay.vercel.app/intro/contact'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Softwarebay ' />
        <meta
          property='og:description'
          content='SoftwareBay is the top platform for exploring and downloading software,the premier platform for the latest releases and secure downloads.'
        />
        <meta
          property='og:url'
          content='https://softwarebay.vercel.app/intro/contact/'
        />
        <meta property='og:site_name' content='Softwarebay ' />
        <meta
          property='og:image'
          content='https://softwarebay.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta property='og:image:type' content='image/jpg' />
        <meta name='application-name' content='Softwarebay ' />
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
      <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer />

      <div className='container my-24 px-6 mx-auto'>
        <section className='mb-32 text-gray-800'>
          <div className='flex flex-wrap'>
            <div className='grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6'>
              <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
              <p className='text-gray-500 mb-6'>
                Feel free to use the form below to provide us with your
                feedback, suggestions, or collaboration or request inquiries
                related to Softwarebay???. We welcome your input to help us
                echance our services and offerings.
              </p>

              <p className='text-gray-500 mb-6'>
                To submit your email the following details to{' '}
                <strong>softwarebay@outlook.com</strong>:
              </p>
            </div>
            <div className='grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6'>
              <form>
                <div className='form-group mb-6'>
                  <input
                    type='text'
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='channelId'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='form-group mb-6'>
                  <input
                    type='url'
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='videoLink'
                    placeholder='Your Email Id'
                    required
                  />
                </div>

                <div className='form-group mb-6'>
                  <textarea
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='additionalInfo'
                    rows='3'
                    placeholder='Subject'
                  ></textarea>
                </div>
                <div className='form-group form-check text-center mb-6'>
                  <input
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                    id='sendCopy'
                  />

                  <label
                    className='form-check-label inline-block text-gray-800'
                    for='sendCopy'
                  >
                    Send me a copy of this message is a Sample Format for your
                    Email
                  </label>
                </div>
              </form>
            </div>
          </div>
        </section>

        <style jsx>{`
          .share-buttons-container {
            position: fixed !important;
            top: 50% !important;
            right: 0 !important;
            transform: translateY(-50%) !important;
            display: flex !important;
            flex-direction: column !important; /* Display buttons in a column */
            gap: 10px !important;
            padding: 10px !important;
            // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
          }

          @media (max-width: 600px) {
            .share-buttons-container {
              flex-direction: column;
              right: 0;
              top: auto;
              bottom: 10px;
              transform: translateY(0);
            }
          }
        `}</style>
        <div
          className='share-buttons-container'
          style={{
            marginTop: '15px'
          }}
        >
          <ShareButtons
            title={title}
            description={description}
            shareMessage={shareMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default contact
