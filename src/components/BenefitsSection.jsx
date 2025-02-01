const BenefitsSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 text-left">
        {/* Free Delivery */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            Free Delivery
          </h3>
          <p className="text-gray-400 text-base">
            Get free delivery on all orders over $50 with no hidden fees.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            90 Days Return
          </h3>
          <p className="text-gray-400 text-base ">
            {' '}
            If you are not satisfied, return your product within 90 days.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            Secure Payment
          </h3>
          <p className="text-gray-400 text-base">
            Your financial information remains private and never shared with
            third parties..
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
