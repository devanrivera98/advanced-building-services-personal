import './contactPage.css';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <div className="contact-section">
        <div className="flex">
          <div className="w-6/12">
            <h1 className="font-hind text-4xl font-medium">How can we help?</h1>
            <span className="font-maven">
              Once we receive the details of your project, a representative will
              reach out to schedule a meeting. We look forward to partnering
              with you.
            </span>
            <ContactForm />
          </div>
          <div className="w-6/12 flex flex-wrap justify-center">
            <div className="w-10/12">
              <img src="./images/form-image.png" className="w-full" />
            </div>
            <div className="flex flex-wrap justify-center px-10">
              <h1 className="text-3xl pt-5">Proud to be employee-owned.</h1>
              <span className="text-lg px-10 py-5 text-center">
                Serving the Washington DC, Maryland, and Virginia area since
                1997.
              </span>
              <div className="flex flex-wrap text-center">
                <span className="w-full font-bold">
                  Advanced Building Services, Inc.
                </span>
                <span className="w-full">23475 Rock Haven Way #135</span>
                <span className="w-full">Sterling, VA 20166</span>
                <span className="w-full">(703)661-4280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
