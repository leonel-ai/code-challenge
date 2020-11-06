import Head from 'next/head'
// import Search from '../components/search'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NYT Science | Top Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <header>
        <div className="block__container">
          <div className="block__content-wrapper">
            <nav role="navigation" className="header-nav">
              <ul className="nav-list">
                <li><a href="https://www.nytimes.com/section/science" className="" id="science-link">Science</a></li>
                <li><a href="https://www.nytimes.com/section/technology" className="" id="tech-link">Tech</a></li>
                <li><a href="https://www.nytimes.com/section/health" className="" id="health-link">Health</a></li>
                <li><span className="date">Friday, November 6, 2020</span></li>
              </ul>
            </nav>
            <div role="banner" className="header-logo">
              <a href="https://www.nytimes.com/" className="header-logo-link">
              <img src="https://1000logos.net/wp-content/uploads/2017/04/New-York-Times-Logo.png" alt="The New York Times" className="site-logo dark"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="block__container">
          <div className="block__content-wrapper">
            <div className="block__search-banner">
              <div className="block__search-header">
                <h1>NYT Science</h1>
                <p>Every week, we'll bring you top science stories that capture the wonders of the human body, nature and the cosmos.</p>
              </div>
              <form id="searchForm" action="" autoComplete="off">
                <label htmlFor="search">Search </label>
                <input id="search" type="text" name="query" />
                <label htmlFor="select">Filter </label>
                <div className="block__search-dropdown">
                  <select id="select">
                    <option disabled defaultValue></option>
                    <option value="title">Title</option>
                    <option value="byline">Byline</option>
                    <option value="abstract">Abstract</option>
                  </select>
                </div>
                <button className="button button-submit"><i className="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="block__container">
          <div className="block__content-wrapper">
            <div className="block__search-results">
              <div className="block__search-results--list">
                <h3 id="resultsLabel" className="active">Search Results</h3>
                <ul id="searchResults">
                  <li><a href="#">A Sample Story Headline with Link for Testing Purposes</a></li>
                </ul>
              </div>
              <div className="block__search-results--assets">
                <img alt="tester" src="https://static01.nyt.com/images/2020/11/04/science/04TB-SPIDERSILK/04TB-SPIDERSILK-videoLarge.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Search/> */}

      <footer className="early">
        <article>
          <h3>THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES
          THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES
          THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES
          THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES
          THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES THE FAILING NEW YORK TIMES</h3>

          <h3>SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE</h3>

          <h3>BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS
          BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS
          BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS
          BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS
          BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS BREAKING NEWS
          </h3>
          <h3>SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE SCIENCE
          </h3>
        </article>
      </footer>
      </main>
    </div>
  )
}
