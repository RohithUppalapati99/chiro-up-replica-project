import React from "react";

const PartnerLogos = () => {
  const partnerLogos = [
    {
      src: "/lovable-uploads/8c010cac-947b-4738-ba42-ff039acf452f.png",
      alt: "Partner Logo 1"
    },
    {
      src: "/lovable-uploads/281c97dd-73ff-4bf1-9a02-c8d5b7ec082f.png",
      alt: "Partner Logo 2"
    },
    {
      src: "/lovable-uploads/0ebb1b83-d025-4ffb-ba05-886ab014bd7a.png",
      alt: "Partner Logo 3"
    },
    {
      src: "/lovable-uploads/a870638b-bd0c-4e01-b18f-e76f07aea46a.png",
      alt: "Partner Logo 4"
    },
    {
      src: "/lovable-uploads/16ae2875-736a-4b94-8d3a-c893927a59a0.png",
      alt: "Partner Logo 5"
    },
    {
      src: "/lovable-uploads/5860fbb6-4ed7-4934-8ea2-6c4f9c114e5d.png",
      alt: "MCM - Modern Chiropractic Marketing"
    },
    {
      src: "/lovable-uploads/8d099948-87b6-46da-afc5-dc1a2a4c590e.png",
      alt: "Partner Logo C"
    },
    {
      src: "/lovable-uploads/7f80f9f7-e392-4bf0-bda1-66035a8f440d.png",
      alt: "The Academy - Clinical Excellence"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Partnered with the World's Leading Chiropractic Organizations.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by industry leaders and recognized organizations worldwide
          </p>
        </div>
        
        {/* Sliding logos row */}
        <div className="relative">
          <div className="flex animate-marquee space-x-12 items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 group">
                <div className="flex items-center justify-center w-40 h-24 hover:scale-110 transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-20 max-w-36 object-contain opacity-80 hover:opacity-100 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl" 
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Gradient overlays for seamless effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;