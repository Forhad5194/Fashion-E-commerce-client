import BestSeller from "../components/BestSeller";
import LatestCollections from "../components/LatestCollections";
import NewsLatterBox from "../components/NewsLatterBox";
import OurPolicy from "../components/OurPolicy";
import Banner from "../components/shared/Banner";

const Home = () => {
    return (
        <div>
           <Banner />   
           <LatestCollections />   
           <BestSeller />    
           <OurPolicy /> 
           <NewsLatterBox />
        </div>
    );
};

export default Home;