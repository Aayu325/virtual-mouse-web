import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MousePointerClick, Lock, Hand } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function VirtualMousePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          🖱️ Virtual Mouse
        </motion.h1>

        <motion.p
          className="text-center text-lg mb-10 text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Control your computer with hand gestures using your webcam — no physical mouse required!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i + 2}
            >
              <Card className="bg-gray-800 border border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    {i === 0 ? "📦 Features" : "🔧 Instructions"}
                  </h2>
                  <ul className={`text-gray-200 ${i === 0 ? "space-y-3" : "list-disc ml-5 space-y-2"}`}>
                    {i === 0 ? (
                      <>
                        <li><MousePointerClick className="inline mr-2" /> Move cursor using your thumb</li>
                        <li><MousePointerClick className="inline mr-2" /> Left click: Pinch thumb + index</li>
                        <li><MousePointerClick className="inline mr-2" /> Right click: Pinch thumb + middle</li>
                        <li><Lock className="inline mr-2" /> Lock/unlock cursor: Make a fist and open</li>
                        <li><Hand className="inline mr-2" /> Works with just your webcam</li>
                      </>
                    ) : (
                      <>
                        <li>Ensure webcam is connected and working</li>
                        <li>Run the downloaded file: <code>virtualmouse.exe</code></li>
                        <li>Allow camera access when prompted</li>
                        <li>Use gestures to control your PC</li>
                        <li>Move mouse to screen corner to force quit (PyAutoGUI safe-exit)</li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="https://drive.google.com/file/d/12v3lcS1koyVJ_OVH632W4wFkiKG6VfpT/view"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            <Download className="w-5 h-5" /> Download Virtual Mouse (EXE)
          </a>
          <p className="mt-2 text-gray-400 text-sm">
            Compatible with Windows 10+ | No install needed
          </p>
        </motion.div>

        <motion.footer
          className="mt-16 text-center text-sm text-gray-500"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          Built with ❤️ by Aayush Goyal
        </motion.footer>
      </div>
    </main>
  );
}
