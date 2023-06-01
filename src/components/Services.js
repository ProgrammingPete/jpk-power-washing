import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <div style={{marginTop:'20rem',width:'100%',height:'30px'}} className="services"></div>
        <h2 className="main-title text-center">WHAT WE DO</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <Card title="Residential" img="card1.png" text="At J.P.K. Power Washing Service, we understand that your home is a special place that needs to be kept clean.
                            That's why we offer power washing services to residential clients, using the latest technologies and equipment to get the job done right. We strive to provide the highest quality of service and professionalism to every customer.
                            Our commitment to excellence ensures that your home is looking its best." />
                    </div>
                    <div className="col-md-3 mb-2">
                        <Card title="Commercial" img="card2.png" text="Our commercial power washing service is perfect for businesses who need a deep clean for their exterior and hard surfaces. 
                        We use high pressure hoses and specialized cleaning products to ensure every surface is thoroughly cleaned and sanitized. 
                        With our commercial power washing service, businesses can keep their exterior looking spotless and welcoming." />
                    </div>
                    <div className="col-md-3 mb-2">
                        <Card title="Power Washing" img="card3.png" text="We are power washing experts. Our power washing service uses the most up-to-date technologies 
                        to make sure that he the surface that gets cleaned, stays clean. On top of this, we are very careful with our power washing, so keep the siding safe from scratches." />
                    </div>
                    <div className="col-md-3 mb-2">
                        <Card title="Solar Panel Cleaning" img="card3.png" text="We also have specialized tooling to carefully clean Solar Panels that exist on top of your residential home! Please contact us for more information. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
