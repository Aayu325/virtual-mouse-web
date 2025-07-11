import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MousePointerClick, Lock, Hand } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  { icon: MousePointerClick, title: "Cursor Control", description: "Move cursor using thumb gestures." },
  { icon: MousePointerClick, title: "Left Click", description: "Pinch thumb + index finger." },
  { icon: MousePointerClick, title: "Right Click", description: "Pinch thumb + middle finger." },
  { icon: Lock, title: "Lock/Unlock", description: "Make a fist to toggle mouse control." },
  { icon: Hand, title: "Webcam Based", description: "No physical mouse needed." },
];

const instructions = [
  "Ensure your webcam is connected and functional.",
  "Download the file: virtualmouse.exe from the button below.",
  "Double-click to run the file after download.",
  "If Windows shows a warning, click 'More Info' → 'Run Anyway'.",
  "Allow camera access when prompted.",
  "Use your hand gestures to control the mouse.",
  "Move your hand to the corner of screen to safely exit (via PyAutoGUI).",
];

export default function VirtualMousePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero */}
        <motion.div
          className="text-center space-y-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="text-5xl font-bold tracking-tight">🖱️ Virtual Mouse</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Use hand gestures with your webcam to fully control your PC — no mouse required.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-center">📦 Key Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={i + 2}
              >
                <Card className="bg-gray-800 border border-gray-700 shadow-md rounded-xl hover:shadow-lg transition">
                  <CardContent className="p-6 text-center space-y-3">
                    <item.icon className="w-10 h-10 mx-auto text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Instructions Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center">🔧 How to Use</h2>
          <Card className="bg-gray-800 border border-gray-700 shadow-md rounded-xl">
            <CardContent className="p-6">
              <ul className="list-decimal ml-6 text-gray-300 space-y-2 text-base">
                {instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Download Section */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=12v3lcS1koyVJ_OVH632W4wFkiKG6VfpT"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Virtual Mouse (EXE)
          </a>
          <p className="text-sm text-gray-400 mt-2">
            Compatible with Windows 10+
          </p>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="text-center text-sm text-gray-500 pt-10 border-t border-gray-700"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          Built with ❤️ by Aayush Goyal — Powered by OpenCV, MediaPipe & PyAutoGUI
        </motion.footer>
      </div>
    </main>
  );
}
