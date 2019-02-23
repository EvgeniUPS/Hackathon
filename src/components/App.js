import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header } from './organisms/Header'
import { setCategory } from '../store/actions/getCategoryAction'
import { getRandomJoke, getJoke } from '../store/actions/getJokeAction'

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        App
      </>
    )
  }
}
const mapSate = ({ category, joke }) => ({
  category,
  joke,
})
export default connect(
  mapSate,
  { setCategory, getRandomJoke, getJoke }
)(App)
