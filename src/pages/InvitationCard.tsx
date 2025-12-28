import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvitationCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!cardRef.current) return;
    
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });
    
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("नववर्ष_निमंत्रण_2026.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Download Button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={downloadPDF}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-8 py-3 rounded-full shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            PDF डाउनलोड करें
          </Button>
        </div>

        {/* Invitation Card */}
        <div
          ref={cardRef}
          className="relative bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 rounded-lg overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #f5e6c8 0%, #ecd9a8 50%, #f5e6c8 100%)",
            aspectRatio: "3/4.5",
          }}
        >
          {/* Ornate Border */}
          <div className="absolute inset-0 border-[12px] border-amber-700 rounded-lg" 
            style={{
              borderImage: "linear-gradient(135deg, #8B4513, #DAA520, #8B4513) 1",
            }}
          />
          <div className="absolute inset-3 border-2 border-amber-600/50 rounded-lg" />
          
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-amber-700 rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-amber-700 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-amber-700 rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-amber-700 rounded-br-lg" />

          {/* Content Container */}
          <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
            
            {/* Om and Ganesh Vandana */}
            <div className="text-amber-800 font-bold text-xl md:text-2xl mb-2 tracking-wide">
              🕉️ ॥ श्री गणेशाय नमः ॥
            </div>

            {/* Ganesha Emoji */}
            <div className="text-5xl mb-2">🙏</div>

            {/* Main Title Banner */}
            <div className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-amber-100 py-3 px-8 rounded-lg shadow-lg mb-4 w-full max-w-md">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-amber-500 rounded-l-full" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-amber-500 rounded-r-full" />
              <p className="text-lg font-bold">🌼 नव वर्ष 2026 की हार्दिक शुभकामनाएँ 🌼</p>
            </div>

            {/* Sub Title */}
            <div className="text-amber-900 font-bold text-base md:text-lg mb-4 border-b-2 border-amber-600 pb-2">
              🌸 नव वर्ष मंगल मिलन एवं शुभकामना समारोह – 2026 🌸
            </div>

            {/* Honoree Section */}
            <div className="text-amber-800 text-sm mb-1">आदरणीया, पूजनीय</div>
            
            <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-amber-100 py-3 px-6 rounded-lg shadow-lg mb-3 w-full max-w-sm">
              <p className="text-xl font-bold">श्रीमती रिंकू पांडेय मैम</p>
              <p className="text-sm mt-1">सादर नमन 🙏</p>
            </div>

            {/* Main Message */}
            <div className="text-amber-900 text-sm leading-relaxed mb-3 px-4">
              <p className="mb-2">नव वर्ष 2026 के पावन अवसर पर</p>
              <p className="mb-2">✨ ईश्वर की असीम कृपा से हम एक ✨</p>
              <p className="font-bold text-red-800 mb-2">नववर्ष शुभकामना एवं सौहार्द मिलन समारोह</p>
              <p className="mb-3">का आयोजन कर रहे हैं।</p>
              
              <p className="mb-1">आपकी गरिमामयी उपस्थिति,</p>
              <p className="mb-1">स्नेहपूर्ण आशीर्वाद एवं</p>
              <p className="mb-2">प्रेरणादायी मार्गदर्शन</p>
              <p>हम सभी के लिए अत्यंत गौरव एवं सौभाग्य का विषय होगा।</p>
            </div>

            {/* Shayari Section */}
            <div className="relative bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 border-2 border-amber-600 rounded-lg p-4 mb-4 w-full max-w-sm shadow-inner">
              <div className="text-red-800 font-bold text-sm mb-2">🌷 सम्मानजनक शायरी 🌷</div>
              <div className="text-amber-900 text-xs italic leading-relaxed">
                <p>नव प्रभात हो, नव उजास हो,</p>
                <p>जीवन में केवल विश्वास हो।</p>
                <p>आपका आशीष सदा बना रहे,</p>
                <p>हर पथ पर सफलता का वास हो। 🌷</p>
              </div>
            </div>

            {/* Request */}
            <div className="text-amber-900 text-xs mb-3 px-4">
              <p>अतः आपसे विनम्र निवेदन है कि</p>
              <p>इस शुभ अवसर पर पधार कर</p>
              <p>कार्यक्रम की शोभा एवं गरिमा को बढ़ाने की कृपा करें।</p>
            </div>

            {/* Event Details */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg p-3 mb-3 w-full max-w-xs shadow-lg">
              <p className="font-bold text-sm mb-2">📋 कार्यक्रम विवरण</p>
              <div className="text-xs space-y-1">
                <p>📅 दिनांक: 03/01/2026</p>
                <p>⏰ समय: दोपहर 12:30 बजे</p>
                <p>📍 स्थान: AAM पंडवा</p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-amber-900 text-xs mb-2">
              <p>आपकी गरिमामयी उपस्थिति की</p>
              <p>प्रतीक्षा में</p>
            </div>

            {/* Inviter Section */}
            <div className="text-amber-800 text-xs">
              <p className="font-bold">सादर</p>
              <p className="font-bold text-red-800">आमंत्रक</p>
              <p className="font-bold">समस्त उपनी सेक्टर</p>
            </div>

            {/* Bottom Banner */}
            <div className="mt-auto bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-amber-100 py-2 px-6 rounded-lg w-full max-w-md">
              <p className="text-sm font-bold">✨ नव वर्ष 2026 मंगलमय हो ✨</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 text-3xl">🪔</div>
            <div className="absolute bottom-4 right-4 text-3xl">🌺</div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="flex justify-center mt-6">
          <a
            href="/"
            className="text-amber-700 hover:text-amber-900 underline font-medium"
          >
            ← वापस होम पर जाएं
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
