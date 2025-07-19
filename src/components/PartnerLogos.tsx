import React from "react";

const PartnerLogos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Partnered with the World's Leading Chiropractic Organizations.
          </h2>
        </div>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          {/* Partner logo images would go here - using existing uploaded logos */}
          <img src="/lovable-uploads/8c010cac-947b-4738-ba42-ff039acf452f.png" alt="Partner Logo" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/281c97dd-73ff-4bf1-9a02-c8d5b7ec082f.png" alt="Partner Logo" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/0ebb1b83-d025-4ffb-ba05-886ab014bd7a.png" alt="Partner Logo" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/a870638b-bd0c-4e01-b18f-e76f07aea46a.png" alt="Partner Logo" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/16ae2875-736a-4b94-8d3a-c893927a59a0.png" alt="Partner Logo" className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;