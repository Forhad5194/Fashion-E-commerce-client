import BestSeller from "../components/BestSeller";
import LatestCollections from "../components/LatestCollections";
import Banner from "../components/shared/Banner";

const Home = () => {
    return (
        <div>
           <Banner />   
           <LatestCollections />   
           <BestSeller />     
        </div>
    );
};

export default Home;