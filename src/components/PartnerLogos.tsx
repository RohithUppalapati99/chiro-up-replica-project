import React from "react";

const PartnerLogos = () => {
  const logos = [
    { name: "ACA Rehab Council", src: "/lovable-uploads/8c010cac-947b-4738-ba42-ff039acf452f.png" },
    { name: "Colorado Chiropractic Association", src: "/lovable-uploads/4b1cc4d7-568b-49e2-a0c3-c442ac5c2378.png" },
    { name: "TCA", src: "/lovable-uploads/281c97dd-73ff-4bf1-9a02-c8d5b7ec082f.png" },
    { name: "Unified Virginia Chiropractic Association", src: "/lovable-uploads/0ebb1b83-d025-4ffb-ba05-886ab014bd7a.png" },
    { name: "Kansas Chiropractic Association", src: "/lovable-uploads/a870638b-bd0c-4e01-b18f-e76f07aea46a.png" },
    { name: "FAKTR", src: "/lovable-uploads/1a1f34c8-2013-4027-88cd-bf0c9ac9a006.png" },
    { name: "FICS", src: "/lovable-uploads/f157c4b2-0087-49cb-8533-33a9e2e45583.png" },
    { name: "International Academy of Neuromusculoskeletal Medicine", src: "/lovable-uploads/16ae2875-736a-4b94-8d3a-c893927a59a0.png" },
    { name: "FTCA", src: "/lovable-uploads/f4ffa6a8-c6d7-4638-992f-d44a074246d1.png" },
    { name: "The Academy", src: "/lovable-uploads/d5d862bd-86f3-4829-87d5-2b61093774fc.png" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Partnered with the World's Leading{" "}
            <br className="hidden md:block" />
            Chiropractic Organizations.
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <div className="bg-white rounded-xl shadow-md p-4 h-24 w-48 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <div className="bg-white rounded-xl shadow-md p-4 h-24 w-48 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;