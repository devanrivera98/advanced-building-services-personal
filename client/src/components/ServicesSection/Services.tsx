import './services.css';

export default function Services() {
  return (
    <>
      <section className="service-section">
        <div className="py-5">
          <h1 className="text-2xl font-hind leading-9 py-3">Services</h1>
          <p className="font-hind text-xl">
            Our team of experienced professionals are IAQ certified, provide
            24-hour emergency response, and are available for temporary
            engineering projects as part-time or full-time building engineers
          </p>
        </div>
        <div>
          <h1 className="pb-3 text-xl">Commercial HVAC</h1>
          <div className="">
            <div className="pb-5">
              <div>
                <img src="./images/services-a1.png" />
              </div>
              <div>
                <h1 className="py-2 text-lg">
                  Customized HVAC Services Contracting
                </h1>
                <span>
                  Body text for whatever you'd like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </div>
            </div>
            <div className="py-5">
              <div>
                <img src="./images/services-a2.png" />
              </div>
              <div>
                <h1 className="py-2 text-lg">
                  Daily Boiler Engineering Inspections
                </h1>
                <span>
                  Body text for whatever you'd like to claim. Add main takeaway
                  points, quotes, anecdotes, or even a very very short story.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
