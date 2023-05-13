import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const fooAccesstoken = ""; //pretend I have one or fetch it


/**
 * Dieser Client wird dann immer fuer useQUery ausgefuhbert
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
  /*headers: {
    authorization: `Bearer: ${fooAccesstoken}`
  }*/
});

/**
 * In diesem Projekt probiere ich keine Mutations aus. Diese sind das GraphQL Ding zu POST, PUT, DELETE 
 * da ich eine public API nutze.
 */


root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ApolloProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
