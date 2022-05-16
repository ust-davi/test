import Slide from '../components/Slide';
import SubBanner from '../components/EventBanner';
import Layout from './Layout';
import Notice from '../common/components/Notice';
import ChiefInfo from '../components/ChiefInfo';
import IntroEffects from '../components/IntroEffects';
import StoreStep from '../components/StoreStep';

const Main = () => {
  return (
    <Layout shopManagement={false}>
      <Slide />
      <IntroEffects />
      <SubBanner />
      <ChiefInfo />
      <StoreStep />
      <Notice />
      {/* <Academy /> */}
    </Layout>
  );
};

export default Main;
