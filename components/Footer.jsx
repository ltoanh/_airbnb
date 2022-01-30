import React from "react";

function Footer() {
  return (
    <div className="bg-gray-200">
      <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  max-w-6xl mx-auto px-16 md:px-10 py-10">
        <div>
          <h5 className="uppercase mb-1 font-semibold">About</h5>
          <ul>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase mb-1 font-semibold">Community</h5>
          <ul>
            <li>Accessibility</li>
            <li>This is not a real site</li>
            <li>Its a pretty awesome clone</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase mb-1 font-semibold">Host</h5>
          <ul>
            <li>PapaReact</li>
            <li>Presents</li>
            <li>Zero to Full Stack Hero</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase mb-1 font-semibold">Support</h5>
          <ul>
            <li>Help Centre</li>
            <li>Trust & Safety</li>
            <li>Say Hi Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
