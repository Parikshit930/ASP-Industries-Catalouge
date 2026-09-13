import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { companyDetails, generateWhatsAppUrl } from '../data/catalogueData';
import GoogleMapEmbed from './GoogleMapEmbed';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const defaultWhatsAppMsg = "Hello ASP Industries, I would like to enquire about your industrial machinery / engineering solutions. Please share more details.";
  const defaultWhatsAppUrl = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMsg)}`;

  return (
    <section id="contact" className="py-24 bg-[#0B1726] border-b border-[#202A33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-[#3B82C4]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#AEB8C2]">
              BUSINESS ENQUIRIES & SOURCING
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F4F5]">
            Let’s discuss your next requirement.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#AEB8C2] mt-4 font-light leading-relaxed">
            Looking for industrial machinery, tool room solutions, or EDM job work? Get in touch with ASP Industries for prompt procurement assistance and technical review.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: WhatsApp & Phone */}
          <div className="p-8 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4]/70 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#0B1726] border border-[#202A33] flex items-center justify-center mb-6 text-[#3B82C4]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#58748D] mb-1">
                WhatsApp & Direct Call
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#F2F4F5] mb-2">
                {companyDetails.phone}
              </div>
              <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed mb-6">
                Fastest channel for catalogue queries, technical specifications, and machine inquiries.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#202A33]">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3B82C4] hover:bg-[#4F9BE3] text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyToClipboard(companyDetails.phone, 'phone')}
                className="p-2.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-8 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4]/70 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#0B1726] border border-[#202A33] flex items-center justify-center mb-6 text-[#3B82C4]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#58748D] mb-1">
                Official Business Email
              </div>
              <div className="font-display text-lg sm:text-xl font-bold text-[#F2F4F5] mb-2 break-all">
                {companyDetails.email}
              </div>
              <p className="font-sans text-xs text-[#AEB8C2] leading-relaxed mb-6">
                Send formal RFQs, tender enquiries, technical drawings, or machinery requirements.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#202A33]">
              <a
                href={`mailto:${companyDetails.email}?subject=${encodeURIComponent("Industrial Machinery Enquiry - ASP Industries")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B1726] border border-[#58748D]/40 hover:border-[#3B82C4] text-[#F2F4F5] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Send an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82C4]" />
              </a>

              <button
                onClick={() => copyToClipboard(companyDetails.email, 'email')}
                className="p-2.5 bg-[#0B1726] border border-[#202A33] hover:border-[#3B82C4] text-[#AEB8C2] hover:text-white transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 3: Works & Corporate Offices */}
          <div className="p-8 bg-[#151C24] border border-[#202A33] hover:border-[#3B82C4]/70 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#0B1726] border border-[#202A33] flex items-center justify-center mb-6 text-[#3B82C4]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#58748D] mb-1">
                Manufacturing & Offices
              </div>
              <div className="font-display text-lg font-bold text-[#F2F4F5] mb-2">
                Gurgaon Works & Delhi Office
              </div>
              
              <div className="space-y-3 font-sans text-xs text-[#AEB8C2] leading-relaxed mb-6">
                <div>
                  <span className="font-mono text-[10px] text-[#3B82C4] block uppercase">Works Facility:</span>
                  <span>{companyDetails.address.full}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#58748D] block uppercase">Registered Office:</span>
                  <span>{companyDetails.registeredOffice.address}</span>
                </div>
                <div className="pt-2 border-t border-[#202A33] font-mono text-[11px] text-[#AEB8C2]">
                  <span>GSTIN: </span><span className="text-[#F2F4F5]">{companyDetails.gstin}</span>
                  <span className="block text-[10px] text-[#3B82C4] mt-0.5">{companyDetails.msmeRegistration}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#202A33]">
              <a
                href={companyDetails.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#3B82C4] hover:text-[#4F9BE3] transition-colors"
              >
                <span>Open Gurgaon Works in Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Integrated Google Maps Container */}
        <div>
          <GoogleMapEmbed />
        </div>

      </div>
    </section>
  );
}
