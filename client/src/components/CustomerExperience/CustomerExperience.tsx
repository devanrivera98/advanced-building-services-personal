import CustomerCard from './CustomerCard';
import './customerExperience.css';

export default function CustomerExperience() {
  return (
    <>
      <div className="bg-BrandBlue py-5">
        <div className="customer-section">
          <div className="text-center pb-5">
            <h1 className="text-white text-3xl py-1">CUSTOMER EXPERIENCE</h1>
            <span className="text-white py-3">
              We strive for experienced and diligent quantity for every project.
              What our clients are saying about us
            </span>
          </div>
          <div className="flex justify-between">
            <CustomerCard
              quote="A terrific place of praise"
              profileImage="./images/profile-icon.png"
              name="Name"
              description="Description of project or city"
            />
            <CustomerCard
              quote="A fantastic bit of feedback"
              profileImage="./images/profile-icon.png"
              name="Name"
              description="Description of project or city"
            />
            <CustomerCard
              quote="A genuinely glowing review"
              profileImage="./images/profile-icon.png"
              name="Name"
              description="Description of project or city"
            />
          </div>
        </div>
      </div>
    </>
  );
}
