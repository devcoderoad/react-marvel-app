// import React, { useState, useEffect, useContext } from 'react';
import React from 'react'
import { connect } from 'react-redux'

/* assets */
import Logo from '../../logo.svg'

/* components */
import Header from '../header/Header'
import Footer from '../footer/Footer'

/* contexts */
// import ContextLayout from '../../contexts/ContextLayout';
// import ContextTheme from '../../contexts/ContextTheme';

// function Layout({ children, isLoading }) {
function Layout(props) {
  const { children, isLoading } = props
  const headerProps = { Logo, isLoading }

  /* contexts */
  // const layout = useContext(ContextLayout);
  // const theme = useContext(ContextTheme);

  // const [stateLayout, setStateLayout] = useState(layout);
  // const [stateTheme, setStateTheme] = useState(theme);

  // console.log(props);

  // useEffect(() => {
  //   setStateTheme({ theme: 'light' });
  //   setStateLayout({ layout: 'compact', copyright:'© 2020 MARVEL', attributionHTML:'<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>', attributionText:'Data provided by Marvel. © 2020 MARVEL' });
  // }, []);

  return (
    // <ContextLayout.Provider values={[stateLayout, setStateLayout]}>
    // <ContextTheme.Provider values={[stateTheme, setStateTheme]}>
    <div className="App">
      {/* <div className="App App-mobile-view"> */}
      <main className="App-main">
        <Header {...headerProps} />
        {!isLoading ? (
          <div className="App-content">{children}</div>
        ) : (
          <div>
            <img src="/img/marvel.svg" height="50px" alt="Logo" />
            <h2 style={{ color: 'white' }}>Marvel Comic App</h2>
            <div className="preloader">
              <img
                src={Logo}
                alt="Logo"
                className="App-logo"
                style={{ height: '65px' }}
              />
            </div>
          </div>
        )}
        {/* <Footer stateLayout={stateLayout} setStateLayout={setStateLayout}/> */}
        <Footer />
      </main>
    </div>
    // </ContextTheme.Provider>
    // </ContextLayout.Provider>
  )
}

export default connect((state) => state)(Layout)
