export function Footer() {
  return (
    <footer className="border-t border-line py-14 mt-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-2xl tracking-[0.2em] text-gold-gradient">
            GOLD &amp; TIME
          </div>
          <p className="mt-3 max-w-sm text-[0.78rem] leading-relaxed text-champagne/55">
            Ателье эксклюзивных часов и&nbsp;ювелирных украшений.
            Закрытые показы по предварительной записи.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.7rem] uppercase tracking-[0.24em] text-champagne/60">
          <a href="#maisons" className="hover:text-gold">Дома</a>
          <a href="#watches" className="hover:text-gold">Часы</a>
          <a href="#jewelry" className="hover:text-gold">Украшения</a>
          <a href="#about" className="hover:text-gold">Atelier</a>
          <a href="#contact" className="hover:text-gold">Контакты</a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6">
        <div className="divider-gold" />
        <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-champagne/35">
          © {new Date().getFullYear()} Gold &amp; Time · все права защищены
        </p>
      </div>
    </footer>
  );
}
