import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './components/reducer'
import ActionList from './components/actionList'
import Header from './components/header'
import CountryPage from './components/countryPage'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',

}

const store = createStore(reducer, initialState)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

 
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;