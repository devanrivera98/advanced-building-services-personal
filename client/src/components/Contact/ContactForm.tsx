export default function ContactForm() {
  return (
    <>
      <div className="w-100">
        <div className="flex">
          <div className="w-1/2">
            <span>First Name*</span>
            <input
              className="outline outline-1 w-10/12 pt-2 placeholder-BrandBlue"
              placeholder="John"></input>
          </div>
          <div className="w-1/2">
            <span>Last Name</span>
            <input
              className="outline outline-1 w-10/12 pt-2 placeholder-BrandBlue"
              placeholder="Doe"></input>
          </div>
        </div>
      </div>
    </>
  );
}
