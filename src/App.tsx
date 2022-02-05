import React from 'react'
import './App.css'

import RoutesModule from './routesModule'
import Header from './components/nav/header'
import Footer from './components/nav/footer'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/serviceWorker.js').then(
                function (registration) {
                    console.log(
                        'Service Worker registration successful with scope: ',
                        registration.scope
                    )
                },
                function (err) {
                    console.log('Service Worker registration failed: ', err)
                }
            )
        })
    }

    return (
        <div className="App">
            <Header />
            <RoutesModule />
            <Footer />
        </div>
    )
}

export default App
