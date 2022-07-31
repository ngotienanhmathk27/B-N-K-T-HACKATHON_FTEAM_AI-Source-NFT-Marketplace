import React from 'react'
import {

} from './home.elements'
import Banner from './components/banner'
import Statistic from './components/statistic'
import TopCollections from './components/top-collections'
import ListNft from '../list-nft'

function Home() {
  return (
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Birthday</th>
        <th>Phone</th>
        <th>Sex</th>
        <th></th>
      </tr>
    <tr>  
      <td>1</td>
      <td>Giacomo</td>
      <td>5/5/2000</td>
      <td>0358926567</td>
      <td>Males</td>
      <td>Germany</td>
    </tr>
</table>
  )
}

export default Home