import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout>
            <div>f</div>
        </Layout>
        // <div className="App">
        //     <header className="App-header">
        //         <Sidebar />
        //         <Header />
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
