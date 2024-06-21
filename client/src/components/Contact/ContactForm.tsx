export default function ContactForm() {
  return (
    <>
      <div className="w-100">
        <div className="flex">
          <div className="w-1/2">
            <span className="font-bold">First Name*</span>
            <input
              className="outline outline-1 w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
              placeholder="John"
              required></input>
          </div>
          <div className="w-1/2">
            <span className="font-bold">Last Name*</span>
            <input
              className="outline outline-1 w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
              placeholder="Doe"
              required></input>
          </div>
        </div>
        <div>
          <div className="w-11/12">
            <span className="font-bold">
              Your title or role for this project
            </span>
            <input
              className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
              placeholder="Property Manager"></input>
          </div>
        </div>
        <div>
          <div className="w-11/12">
            <span className="font-bold">Email Address*</span>
            <input
              className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
              placeholder="email@domain.com"
              required></input>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-1/2">
              <span className="font-bold">Phone number*</span>
              <input
                className="outline outline-1 w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
                placeholder="(XXX) XXX-XXXX"
                required></input>
            </div>
            <div className="w-1/2">
              {/* the input below will need to be a drop down menu with a custom arrow */}
              <span className="font-bold">Preferred contact method</span>
              <input
                className="outline outline-1 w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
                placeholder="Select method"
                required></input>
            </div>
          </div>
        </div>
        <div>
          <div className="w-11/12">
            <span className="font-bold">Project type</span>
            <input
              className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlue rounded"
              placeholder="Select type"
              required></input>
          </div>
        </div>
        <div>
          <div className="w-11/12">
            <span className="font-bold">Project details or message*</span>
            <textarea
              className="outline outline-1 w-full pt-2 pb-20 pl-3 placeholder-BrandBlue rounded"
              placeholder="Enter the details of the project, your question, or another message."
              required></textarea>
          </div>
        </div>
        <div>
          <button className="w-11/12 bg-BrandBlue text-white py-3 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
