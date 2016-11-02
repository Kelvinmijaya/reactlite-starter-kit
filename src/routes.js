import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from './layouts/CoreLayout/CoreLayout'
import { HomeView } from './module/home'

export default (store) => (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView} />
    </Route>
)
