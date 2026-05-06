export function Footer() {
  return (
    <footer className="border-t border-line py-14 mt-10 bg-ivory/60">
      <div className="mx-auto flex max-w-[110rem] flex-col gap-8 px-6 md:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-base tracking-[0.22em] uppercase text-graphite font-medium">
            <span className="gold-mark" />
            GOLD &amp; TIME
          </div>
          <p className="mt-3 max-w-sm text-[0.78rem] leading-relaxed text-graphite/65">
            Ателье эксклюзивных часов и&nbsp;ювелирных украшений.
            Закрытые показы по предварительной записи.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.7rem] uppercase tracking-[0.22em] text-graphite/70">
          <a href="#maisons" className="hover:text-graphite">Дома</a>
          <a href="#watches" className="hover:text-graphite">Часы</a>
          <a href="#jewelry" className="hover:text-graphite">Украшения</a>
          <a href="#about" className="hover:text-graphite">Atelier</a>
          <a href="#contact" className="hover:text-graphite">Контакты</a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[110rem] px-6 md:px-10">
        <div className="divider-thin" />
        <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-graphite/45">
          © {new Date().getFullYear()} Gold &amp; Time · все права защищены
        </p>
      </div>
    </footer>
  );
}
