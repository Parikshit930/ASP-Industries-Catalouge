import React, { useState } from 'react';
import { Cpu, CheckCircle2, ShieldCheck, ArrowUpRight, Wrench, Layers, Database } from 'lucide-react';
import { inHouseMachinery, cadCamSuite, generateWhatsAppUrl } from '../data/catalogueData';

export default function MachineFacilities() {
  const [selectedMachine, setSelectedMachine] = useState(null);

  return (
    <section id="facilities" className="py-24 bg-[#0B1726] border-b border-[#202A33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-[#202A33] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
                VERIFIED IN-HOUSE INFRASTRUCTURE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5]">
              Machine Facilities & Technical Specifications
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#AEB8C2] mt-3 max-w-3xl font-light leading-relaxed">
              Equipped with USA-built HAAS CNC Vertical Machining Centres, Toshiba 180T & Electronica 110T injection moulding, AMS J300LM CNC Turning, Robo Machines Drill ZNC, ZNC spark erosion, Ecoline wirecut, and precision grinding bays.
            </p>
          </div>

          <div className="font-mono text-xs text-[#3B82C4] px-3.5 py-1.5 bg-[#151C24] border border-[#3B82C4]/40 self-start lg:self-end">
            13 VERIFIED PRODUCTION MACHINES IN-HOUSE
          </div>
        </div>

        {/* CAD / CAM Design Capability Banner */}
        <div className="mb-12 p-6 sm:p-8 bg-[#151C24] border border-[#3B82C4]/40 rounded-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#3B82C4] uppercase tracking-wider font-semibold">
                <Database className="w-4 h-4" />
                <span>Computer Integrated Manufacturing & CAD/CAM Suite</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F4F5] mb-3">
                Core & Cavity Extraction with Siemens NX & Cimatron
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AEB8C2] font-light max-w-2xl leading-relaxed mb-4">
                Our CAD/CAM department directly extracts complex cores and cavities from client 3D step files, minimizing tool design lead time and preventing on-machine collisions.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {[...cadCamSuite.cadSoftware, ...cadCamSuite.camSoftware].filter((v, i, a) => a.indexOf(v) === i).map((sw, idx) => (
                  <span key={idx} className="font-mono text-[11px] text-[#F2F4F5] px-2.5 py-1 bg-[#0B1726] border border-[#202A33]">
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("CAD/CAM Tooling & 3D Model Review")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Share 3D Model / Drawing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Machine Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {inHouseMachinery.map((mach, idx) => (
            <div 
              key={idx}
              className="p-6 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Machine Photo Header */}
                {mach.image && (
                  <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-[#202A33] bg-[#0B1726]">
                    <img
                      src={mach.image}
                      alt={`${mach.brand} ${mach.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151C24] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0B1726]/90 backdrop-blur-sm border border-[#3B82C4]/40 font-mono text-[10px] text-[#3B82C4] font-medium">
                      {mach.brand}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#0B1726]/90 backdrop-blur-sm border border-[#202A33] font-mono text-[10px] text-[#AEB8C2]">
                      BAY {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#3B82C4] uppercase tracking-wider font-semibold">
                    {mach.type}
                  </span>
                  {!mach.image && (
                    <span className="font-mono text-[10px] text-[#58748D]">
                      BAY 0{idx + 1}
                    </span>
                  )}
                </div>

                <h4 className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5] group-hover:text-white transition-colors mb-4">
                  {mach.model}
                </h4>

                {/* Technical Parameters Pill List */}
                <div className="space-y-2 mb-5 font-mono text-xs bg-[#0B1726] p-3.5 border border-[#202A33]">
                  {mach.travel && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Travel (X/Y/Z):</span>
                      <span className="text-[#F2F4F5] text-right font-medium">{mach.travel}</span>
                    </div>
                  )}
                  {mach.spindleSpeed && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Spindle RPM:</span>
                      <span className="text-[#3B82C4] text-right">{mach.spindleSpeed}</span>
                    </div>
                  )}
                  {mach.accuracy && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Accuracy:</span>
                      <span className="text-emerald-400 text-right">{mach.accuracy}</span>
                    </div>
                  )}
                  {mach.clampingForce && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Clamp Tonnage:</span>
                      <span className="text-[#3B82C4] text-right font-bold">{mach.clampingForce}</span>
                    </div>
                  )}
                  {mach.tieBarDistance && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Tie Bar Spacing:</span>
                      <span className="text-[#F2F4F5] text-right">{mach.tieBarDistance}</span>
                    </div>
                  )}
                  {mach.maxJobSize && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Max Job Size:</span>
                      <span className="text-[#F2F4F5] text-right">{mach.maxJobSize}</span>
                    </div>
                  )}
                  {mach.maxJobLength && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Max Length / Dia:</span>
                      <span className="text-[#F2F4F5] text-right">{mach.maxJobLength} / {mach.maxDia || 'N/A'}</span>
                    </div>
                  )}
                  {mach.electrodeRange && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Electrode Dia:</span>
                      <span className="text-amber-400 text-right font-medium">{mach.electrodeRange}</span>
                    </div>
                  )}
                  {mach.maxMouldWeight && (
                    <div className="flex justify-between border-b border-[#151C24] pb-1">
                      <span className="text-[#58748D]">Max Mould Wt:</span>
                      <span className="text-[#F2F4F5] text-right">{mach.maxMouldWeight}</span>
                    </div>
                  )}
                  {mach.maxJobWeight && (
                    <div className="flex justify-between">
                      <span className="text-[#58748D]">Max Weight:</span>
                      <span className="text-[#F2F4F5] text-right">{mach.maxJobWeight}</span>
                    </div>
                  )}
                </div>

                <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed font-light mb-6">
                  {mach.workPurpose}
                </p>
              </div>

              <div className="pt-4 border-t border-[#202A33]">
                <a
                  href={generateWhatsAppUrl(`${mach.brand} ${mach.model} Capacity Query`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-mono uppercase tracking-wider text-[#AEB8C2] hover:text-white bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] transition-colors"
                >
                  <span>Inquire Machine Capacity</span>
                  <ArrowUpRight className="w-3 h-3 text-[#3B82C4]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
