export default function ContactForm() {
  return (
    <>
      <div className="w-full space-y-8">
        <div className="flex flex-wrap lg:flex-nowrap w-full">
          <div className="flex-wrap w-full lg:w-1/2">
            <span className="font-bold">First Name*</span>
            <input
              className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
              placeholder="John"
              required></input>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <span className="font-bold">Last Name*</span>
            <input
              className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
              placeholder="Doe"
              required></input>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-11/12">
            <span className="font-bold">
              Your title or role for this project
            </span>
            <input
              className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
              placeholder="Property Manager"></input>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-11/12">
            <span className="font-bold">Email Address*</span>
            <input
              className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
              placeholder="email@domain.com"
              required></input>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <span className="font-bold">Phone number*</span>
              <input
                className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                placeholder="(XXX) XXX-XXXX"
                required></input>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              {/* the input below will need to be a drop down menu with a custom arrow */}
              <span className="font-bold">Preferred contact method</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path fill="currentColor" stroke="currentColor" d="M36 19L24 31L12 19z" />
              </svg> */}
              <select
                className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 text-BrandBlueText rounded h-9"
                required
                defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Email">Email</option>
                <option value="Phone Number">Phone Number</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-11/12">
            <span className="font-bold">Project type</span>
            <select
              className="outline outline-1 w-full pt-2 pb-1 pl-3 text-BrandBlueText rounded h-9"
              required
              defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="Installation">Installation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-11/12">
            <span className="font-bold">Project details or message*</span>
            <textarea
              className="outline outline-1 w-full pt-2 pb-20 pl-3 placeholder-BrandBlueText rounded"
              placeholder="Enter the details of the project, your question, or another message."
              required></textarea>
          </div>
        </div>
        <div>
          <button className="w-full lg:w-11/12 bg-BrandBlue text-white py-3 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
