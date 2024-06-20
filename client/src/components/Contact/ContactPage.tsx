import './contactPage.css';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <div className="contact-section">
        <div className="flex ">
          <div className="w-7/12">
            <h1>How can we help?</h1>
            <span>
              Once we receive the details of your project, a representative will
              reach out to schedule a meeting. We look forward to partnering
              with you.
            </span>
            <ContactForm />
          </div>
          <div className="w-6/12 flex flex-wrap justify-center">
            <div className="w-11/12">
              <img src="./images/form-image.png" className="w-full" />
            </div>
            <div>
              <h1>Proud to be employee-owned.</h1>
              <span>
                Serving the Washington DC, Maryland, and Virginia area since
                1997
              </span>
              <div>
                <h1>Advanced Building Services, Inc.</h1>
                <span>23475 Rock Haven Way #135</span>
                <span>Sterling, VA 20166</span>
                <span>(703)661-4280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
