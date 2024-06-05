const About = () => {
  return (
    <div className="">
      <div className="bg-white">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-blue-700 sm:text-4xl lg:col-span-3">
            Terms of service
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              By using our e-commerce website, you agree to our Terms of
              Service. These include compliance with our privacy policy,
              accurate account information, and responsible use of our platform.
              We reserve the right to modify or terminate services, refuse
              service, and manage content. Violations may result in account
              suspension or legal action.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
      <div className="bg-gray-100">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 border-b border-gray-300 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-gray-800 sm:text-4xl lg:col-span-3">
            Privacy Policy
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information. By using our e-commerce site, you consent to
              data collection for order processing, personalized services, and
              marketing. We ensure data security and do not share your
              information with third parties without consent, except as required
              by law.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
      <div className="bg-gray-100">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-gray-800 sm:text-4xl lg:col-span-3">
            User Conduct
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              Users must conduct themselves responsibly and respectfully on our
              e-commerce platform. Prohibited actions include fraudulent
              activities, spamming, and violating others rights. Users must
              provide accurate information and refrain from illegal or harmful
              behavior. Any violations may result in account suspension,
              termination, or legal action.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
