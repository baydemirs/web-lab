# CSS Kararlari

## 1. Breakpoint Secimi
- 640px ve 1024px breakpoint'lerini sectim cunku 640px tipik mobil/tablet gecis noktasi, 1024px ise tablet/masaustu gecis noktasidir. Bu degerler Tailwind CSS gibi populer framework'lerle de uyumludur.
- Mobilde icerik tek sutun ve dikey akar, tablette yatay duzen baslar, masaustunde icerik 1200px ile sinirlanir ve 3 sutun grid aktif olur.

## 2. Layout Tercihleri
- Header icin Flexbox sectim cunku tek boyutlu bir yatay hizalama yeterli: logo sol, nav sag. flex-wrap ile mobilde dikey yigina gecis kolaylasti.
- Proje kartlari icin CSS Grid sectim cunku iki boyutlu bir duzene ihtiyac vardi. repeat(auto-fit, minmax(280px, 1fr)) ile media query yazmadan otomatik responsive grid elde ettim.
- auto-fit kullandim cunku mevcut alana gore sutun sayisi otomatik ayarlaniyor; auto-fill yerine auto-fit bos sutunlari daraltarak daha temiz bir gorunum sagliyor.

## 3. Design Tokens
- Mavi tonlarini (primary: #2563EB, primary-dark: #1E3A8A) sectim cunku profesyonel ve guvenilir bir his veriyor. Secondary olarak gri (#64748B) ile kontrast dengesini sagladim.
- Spacing skalasini 0.25rem (xs) ile 4rem (3xl) arasinda 8 kademeli olarak belirledim; tutarli bosluk hiyerarsisi sayesinde gorsel ritim bozulmuyor.
- Fluid typography icin clamp() fonksiyonunu kullandim. Ornegin --text-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem) ile minimum 1rem, maksimum 1.19rem arasinda viewport'a gore akici gecis sagladim. Bu sayede media query olmadan yazi boyutu uyum sagliyor.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini uyguladim: once mobil stilleri yazdim, sonra min-width media query'leriyle tablet ve masaustu katmanlarini ekledim. Bu yontem daha az CSS kodu ve daha iyi performans sagliyor.
- Mobilde header ve nav dikey yigina geciyor (flex-direction: column), tablette about-content yatay oluyor (flex-direction: row), masaustunde proje grid'i 3 sutuna sabitleniyor.
- Gorselleri max-width: 100% ve object-fit: cover ile responsive yaptim; kart icindeki gorseller sabit 200px yukseklikte kalirken genislik karta uyum sagliyor.
