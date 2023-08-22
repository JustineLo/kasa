import Banner from "../components/Banner";
import banner from "../assets/homeBanner.png";
import Thumbnail from "../components/Thumbnail";

const Home = ({ logements }) => {
  const bannerText = "Chez vous, partout et ailleurs";

  return (
    <>
      <Banner image={banner} text={bannerText} />
      <div className="logements-container">
        {logements.map((logement) => (
          <Thumbnail
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
