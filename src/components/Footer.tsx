const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Srinivasulu Reddy Sandireddy. AWS Certified Cloud Practitioner.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
