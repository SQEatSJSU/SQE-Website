import type { Metadata } from "next";
import { QRCodeSVG } from "qrcode.react";
import Header from "../components/Header";
import Footer from "../components/footer";

const websiteUrl = "https://sqeatsjsu.org";
const discordUrl = "https://discord.gg/j5x7jWx3sa";

export const metadata: Metadata = {
  title: "QR Codes | SQE Society of Quantum Engineers at SJSU",
  description: "Scan QR codes to visit the SQE website or join the SQE Discord community.",
};

const qrCodes = [
  {
    title: "SQE Website",
    url: websiteUrl,
  },
  {
    title: "SQE Discord",
    url: discordUrl,
  },
];

export default function QRCodesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#181818] text-white">
      <Header />

      <main className="flex-grow px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Connect with SQE
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {qrCodes.map((qrCode) => (
              <section
                key={qrCode.title}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10"
              >
                <div className="rounded-xl bg-white p-4 shadow-2xl shadow-black/30">
                  <QRCodeSVG
                    value={qrCode.url}
                    size={240}
                    level="H"
                    marginSize={1}
                    bgColor="#ffffff"
                    fgColor="#181818"
                    title={`${qrCode.title} QR code`}
                  />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">
                  {qrCode.title}
                </h2>
              </section>
            ))}
          </div>
        </div>
      </main>

      <div className="h-px w-full bg-zinc-800/70" />
      <Footer />
    </div>
  );
}
