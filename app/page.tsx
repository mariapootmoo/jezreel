"use client";
import { Menu } from "./component/menu";
import { Server } from "./component/server";
import "./globals.css";
import { Work } from "./component/work";
import { Clients } from "./component/clients";
import { Contfooter } from "./component/footer";
import Hero from "./component/hero";
import { We } from "./component/we";

export default function Home() {
  return (
    <div>
      <header
        className="bg-gradient-to-r from-slate-950
     via-slate-200 to-slate-950"
      >
        <div className="text-white">Jezreel</div>
        <Menu />
      </header>
      <main>
        <div>
          <Hero />
        </div>
        <div id="server">
          <h3 className="scroll-pt-2 font-bold  text-wrap text-slate-950">
            Innovación y tecnología para llevar tu negocio al siguiente nivel
          </h3>
          <Server />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="we"><We /></div>
        <div id="clients">
          <Clients />
        </div>
      </main>
      <footer>
        <Contfooter />
      </footer>
    </div>
  );
}
