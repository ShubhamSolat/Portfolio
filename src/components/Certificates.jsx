import React from "react";

const certificates = [
  {
    name: "Coursera: Introduction to Data Science (2024)",
    file: "/certificates/certificate1.pdf"
  },
  // Add more certificates here
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Certificates
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            View my certificates below.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
              <span className="font-medium text-gray-900 dark:text-white mb-4">{cert.name}</span>
              <div className="w-full flex justify-center">
                <object
                  data={cert.file}
                  type="application/pdf"
                  className="w-48 h-64 md:w-64 md:h-80 border-2 border-blue-500 rounded-lg shadow-lg bg-white dark:bg-gray-800"
                  aria-label={cert.name}
                >
                  <p className="text-gray-500 text-center">PDF preview not supported.</p>
                </object>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
