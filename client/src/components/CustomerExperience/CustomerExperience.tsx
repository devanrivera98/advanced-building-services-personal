import CustomerCard from './CustomerCard';

export default function CustomerExperience() {
  return (
    <>
      <div className="bg-BrandBlue">
        <div className="text-center py-5">
          <h1 className="text-white text-3xl py-1">CUSTOMER EXPERIENCE</h1>
          <span className="text-white py-3">
            We strive for experienced and diligent quantity for every project.
            What our clients are saying about us
          </span>
          <CustomerCard
            quote="A terrific place of praise"
            profileImage="./images/placeholder"
            name="Name"
            description="Description of project or city"
          />
        </div>
      </div>
    </>
  );
}
