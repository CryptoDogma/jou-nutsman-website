"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

<Head>
  <title>Jou Nutsman | Handyman, Solar & Security Services</title>
</Head>


export default function Home() {
  const [lang, setLang] = useState("af");
  const t = {
    af: {
      title: "Jou Nutsman Pty Ltd",
      subtitle: "Die professionele alternatief",
      services: "Ons Dienste",
      maintenance: "Instandhouding",
      maintenanceDesc: "Ons help met alle tipe herstelwerk, verf, en algemene instandhouding.",
      it: "IT Dienste",
      itDesc: "Rekenaar ondersteuning, netwerk installasies en slim huis oplossings.",
      security: "Sekuriteit Stelsels / Electries ",
      securityDesc: "Kamera installasies, alarms,Son Stelsels en rugsteunkrag, elektriese hekke – professioneel en betroubaar.",
      gallery: "Galery",
      location: "Waar is ons?",
      contact: "Kontak Ons",
      name: "Stephan Kruger",
      phone: "📞 081 497 9144",
      email: "📧 stephan@jounutsman.co.za",
      whatsapp: "Stuur 'n WhatsApp",
      copyright: "Alle regte voorbehou.",
    },
    en: {
      title: "Jou Nutsman Pty Ltd",
      subtitle: "The professional alternative",
      services: "Our Services",
      maintenance: "Maintenance",
      maintenanceDesc: "We help with all types of repairs, painting, and general maintenance.",
      it: "IT Services",
      itDesc: "Computer support, network installations, and smart home solutions.",
      security: "Security Systems / Electrical",
      securityDesc: "Camera installations, alarms, Solar and backup power, electric gates – professional and reliable.",
      gallery: "Gallery",
      location: "Where are we?",
      contact: "Contact Us",
      name: "Stephan Kruger",
      phone: "📞 081 497 9144",
      email: "📧 stephan@jounutsman.co.za",
      whatsapp: "Send a WhatsApp",
      copyright: "All rights reserved.",
    },
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Language Toggle */}
      <div className="flex justify-end p-4">
        <button
          className={`mr-2 px-3 py-1 rounded ${lang === "af" ? "bg-red-800 text-white" : "bg-gray-200"}`}
          onClick={() => setLang("af")}
        >
          Afrikaans
        </button>
        <button
          className={`px-3 py-1 rounded ${lang === "en" ? "bg-red-800 text-white" : "bg-gray-200"}`}
          onClick={() => setLang("en")}
        >
          English
        </button>
      </div>

      {/* Hero Section */}
           <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-red-800 text-white">
        <div className="bg-white p-4 rounded-full shadow-md">
          <Image
            src="/400dpiLogo.png"
            alt="Jou Nutsman Logo"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6 mb-2">{t[lang].title}</h1>
        <p className="text-xl font-light">{t[lang].subtitle}</p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">{t[lang].services}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t[lang].maintenance}</h3>
            <p>{t[lang].maintenanceDesc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t[lang].it}</h3>
            <p>{t[lang].itDesc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t[lang].security}</h3>
            <p>{t[lang].securityDesc}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t[lang].gallery}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={`/gallery/image${index}.jpeg`}
                alt={`Gallery Image ${index}`}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">{t[lang].location}</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62868.81864450088!2d18.66004657551721!3d-33.87632783345568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc517069bb8227%3A0xbc1e066d3caf5d2d!2sBrackenfell%2C%20Cape%20Town!5e1!3m2!1sen!2sza!4v1745596668768!5m2!1sen!2sza"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{t[lang].contact}</h2>
        <p className="text-center mb-2">{t[lang].name}</p>
        <p className="text-center mb-2">{t[lang].phone}</p>
        <p className="text-center mb-2">{t[lang].email}</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://wa.me/27814979144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-800 text-white rounded-full shadow hover:bg-red-700 transition"
          >
            {t[lang].whatsapp}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Jou Nutsman Pty Ltd. {t[lang].copyright}
      </footer>
    </main>
  );
}
