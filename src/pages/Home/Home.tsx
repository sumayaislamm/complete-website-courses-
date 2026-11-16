import Banner from "./Banner/Banner.js";
import Counting from "./Counting/Counting.js";
import HowItWorks from "./HowItWorks/HowItWorks.js";
import Ladder from "./Ladder/Ladder.js";



const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Counting></Counting>
        <Ladder></Ladder>
        <HowItWorks></HowItWorks>
       </>
    );
};

export default Home;