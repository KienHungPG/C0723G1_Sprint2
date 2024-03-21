import AutoplaySlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import '../Home/Home.css'
function Home() {
  return (
    <>
      <main id="main" className="main-content">
        <div className="container-fluid">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            className="slider_img_intro"
          >
            <div data-src="https://firebasestorage.googleapis.com/v0/b/c0823g1-sprint2.appspot.com/o/chopard-luxshopping2.jpg?alt=media&token=2a168e99-2653-4c56-bf72-11855a59de35" />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/c0823g1-sprint2.appspot.com/o/dongholimited-edition.png?alt=media&token=e1e55219-ac1e-434d-916a-60f41992cac6" />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/c0823g1-sprint2.appspot.com/o/versace-luxshopping2.jpg?alt=media&token=662dd0be-c593-41c7-beb3-a530367245b3" />
          </AutoplaySlider>
        </div>
      </main>
    </>
  );
}

export default Home;
