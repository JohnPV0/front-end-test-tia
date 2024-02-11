import Cover from "./Cover";
import Featured from "./Featured";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Header from "./Header";
import Photos from "./Photos";

export default function Dashboard() {
  return (
    <div className="container-fluid" style={{ width: "100%", margin: 0, padding: 0 }}>
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Header />
        </div>
      </div>
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Cover />
        </div>
      </div>
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Featured />
        </div>
      </div>
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Photos />
        </div>
      </div>
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Feedback />
        </div>
      </div>  
      <div className="row p-0 full-width-row">
        <div className="col-lg-12 p-0 full-width-col">
          <Footer />
        </div>
      </div>
    </div>
  )
}
