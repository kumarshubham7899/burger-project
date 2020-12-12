import React from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from '../container/BurgerBuilder/BurgerBuilder';

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </>
    );
  }
}

export default Home;
