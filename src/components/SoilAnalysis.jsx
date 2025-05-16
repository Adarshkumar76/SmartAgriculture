import React from "react";
import Header from "./Header";

const SoilAnalysis = () => {
  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">🧪 Soil Health Analysis</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded">
            Dashboard
          </button>
          <button className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded">
            Enter Data
          </button>
          <button className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded">
            Recommendations
          </button>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nutrient Analysis */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              🌿 Soil Nutrients Analysis
            </h3>
            <div className="space-y-3">
              {[
                { name: "Nitrogen (N)", current: 75, recommended: 90 },
                { name: "Phosphorus (P)", current: 45, recommended: 70 },
                { name: "Potassium (K)", current: 80, recommended: 85 },
                { name: "pH", current: 65, recommended: 65 },
                { name: "Organic Matter", current: 60, recommended: 65 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="text-sm">{item.name}</div>
                  <div className="flex gap-1">
                    <div
                      className="bg-green-500 h-4"
                      style={{ width: `${item.current}%` }}
                      title={`Current: ${item.current}`}
                    />
                    <div
                      className="bg-green-200 h-4"
                      style={{ width: `${item.recommended - item.current}%` }}
                      title={`Recommended: ${item.recommended}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Composition Pie (static) */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-2">🌀 Soil Composition</h3>
            <div className="w-40 h-40 rounded-full border-4 border-b-[16px] border-sand-300 border-r-[16px] border-clay-500 border-t-[16px] border-silt-400 rotate-45 relative">
              <div className="absolute text-sm text-center w-full -bottom-8">
                Sand: 40% | Silt: 40% | Clay: 20%
              </div>
            </div>
          </div>
        </div>

        {/* Health Score */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-1">📊 Soil Health Score</h3>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4 w-[72%]"></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>
              Your soil health is good, but there’s room for improvement in
              nitrogen and phosphorus levels.
            </span>
            <span className="font-bold">72%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoilAnalysis;
