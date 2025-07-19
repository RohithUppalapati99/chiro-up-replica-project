const PartnerLogos = () => {
  const logos = [
    { name: "American Chiropractic Association", src: "/placeholder.svg" },
    { name: "International Chiropractors Association", src: "/placeholder.svg" },
    { name: "World Federation of Chiropractic", src: "/placeholder.svg" },
    { name: "Federation of Chiropractic Licensing Boards", src: "/placeholder.svg" },
    { name: "Chiropractic College Partners", src: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Partnered with the World's Leading{" "}
            <br className="hidden md:block" />
            Chiropractic Organizations.
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="h-12 w-32 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-center text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;