import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Alert from './components/Alert'
import Input from './components/Input'
import './App.css'

function App() {
  const [errors, setErrors] = useState({})

  function validateForm(formData) {
    const newErrors = {}
    const name = formData.get('name')?.trim() || ''
    const email = formData.get('email')?.trim() || ''
    const subject = formData.get('subject') || ''
    const message = formData.get('message')?.trim() || ''

    if (name.length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır.'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.'
    }
    if (!subject) {
      newErrors.subject = 'Lütfen bir konu seçiniz.'
    }
    if (message.length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newErrors = validateForm(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      alert('Form başarıyla gönderildi!')
      e.target.reset()
    }
  }

  function toggleDark() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50
                   bg-gray-200 dark:bg-gray-700
                   text-gray-800 dark:text-gray-200
                   p-2 rounded-full shadow-lg
                   hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        {/* Açık temada ay, karanlık temada güneş */}
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-primary dark:text-blue-400">Emirhan Aydemir</h1>
        <nav aria-label="Ana navigasyon">
          <ul className="flex flex-wrap list-none gap-2 p-0 m-0">
            <li><a href="#hakkimda" className="inline-block px-4 py-1 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors">Hakkımda</a></li>
            <li><a href="#projeler" className="inline-block px-4 py-1 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors">Projeler</a></li>
            <li><a href="#buttons" className="inline-block px-4 py-1 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors">Button</a></li>
            <li><a href="#iletisim" className="inline-block px-4 py-1 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="px-4 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-blue-400">Hakkımda</h2>
          <div className="flex flex-col items-center gap-6 text-center mb-6">
            <figure className="max-w-[200px]">
              <img src="logo.jpeg" alt="Emirhan Aydemir'in vesikalık fotoğrafı" className="rounded-full aspect-square object-cover" />
              <figcaption className="text-sm text-muted mt-2">Emirhan Aydemir</figcaption>
            </figure>
            <p className="text-gray-600 dark:text-gray-300">
              Merhaba! Ben Emirhan Aydemir. Web geliştirme alanında kendimi sürekli
              geliştiren bir yazılımcıyım. Modern teknolojilerle kullanıcı dostu ve
              erişilebilir projeler üretmeyi seviyorum.
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-3">Kullandığım Teknolojiler</h3>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git'].map(tag => (
              <li key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm dark:bg-blue-600">{tag}</li>
            ))}
          </ul>
        </section>

        {/* Projelerim - Responsive Grid */}
        <section id="projeler" className="px-4 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-blue-400">Projelerim</h2>

          {/* Mobil:1 sütun, Tablet:2 sütun, Desktop:3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/400x200?text=E-Ticaret" alt="E-Ticaret" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">E-Ticaret Sitesi</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">React ve Node.js ile.</p>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/400x200?text=Blog" alt="Blog uygulaması yazı listesi görünümü" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Blog Uygulaması</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src="https://placehold.co/400x200?text=Hava+Durumu" alt="Hava durumu uygulaması arayüzü" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Hava Durumu</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">OpenWeather API ile anlık hava durumu bilgisi.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Button Component Varyantları */}
        <section id="buttons" className="space-y-8 p-8">
          <h2 className="text-2xl font-bold">Button</h2>

          {/* Boyut varyantları */}
          <div className="flex flex-wrap items-end gap-4">
            <Button size="sm">Kucuk</Button>
            <Button size="md">Orta</Button>
            <Button size="lg">Buyuk</Button>
          </div>

          {/* Renk varyantları */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          {/* Disabled durumu */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">
              Disabled
            </Button>
          </div>
        </section>

        {/* Card Component Varyantları */}
        <section className="space-y-8 p-8">
          <h2 className="text-2xl font-bold">Card</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Proje A"
              image="https://placehold.co/400x200?text=Proje+A"
              imageAlt="Proje ekran goruntusu">
              <p>Bu bir elevated (gölgeli) kart.</p>
            </Card>
            <Card variant="outlined" title="Proje B">
              <p>Bu bir outlined (çerçeveli) kart.</p>
            </Card>
            <Card variant="filled" title="Proje C"
              footer={<Button size="sm">Detay</Button>}>
              <p>Bu bir filled (dolgulu) kart.</p>
            </Card>
          </div>
        </section>

        {/* Alert Component Varyantları */}
        <section className="space-y-8 p-8">
          <h2 className="text-2xl font-bold">Alert</h2>
          <div className="space-y-4">
            <Alert variant="info" title="Bilgi">
              Formunuz başarıyla kaydedildi.
            </Alert>
            <Alert variant="success" title="Basarili">
              İşlem tamamlandı!
            </Alert>
            <Alert variant="warning" title="Uyari">
              Oturum 5 dakika sonra sona erecek.
            </Alert>
            <Alert variant="error" title="Hata" dismissible
              onDismiss={() => console.log('kapatildi')}>
              Bağlantı kurulamadı. Tekrar deneyin.
            </Alert>
          </div>
        </section>

        {/* Input Component Varyantları */}
        <section className="space-y-8 p-8 max-w-md">
          <h2 className="text-2xl font-bold">Input</h2>
          <div className="space-y-4">
            <Input id="name-demo" label="Ad Soyad" placeholder="Ahmet Yılmaz" />
            <Input id="email-demo" label="E-posta" type="email" helpText="Örnek: ad@mail.com" />
            <Input id="pass-demo" label="Şifre" type="password" error="En az 8 karakter olmalı" />
            <Input id="disabled-demo" label="Devre Dışı" disabled value="Düzenlenemez" />
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="px-4 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-blue-400">İletişim</h2>

          <form onSubmit={handleSubmit} noValidate className="max-w-lg mx-auto">
            <fieldset className="border-0 p-0">
              <legend className="text-xl font-semibold mb-4">İletişim Formu</legend>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-semibold">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="2"
                  aria-describedby="name-error"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:border-primary focus:outline-2 focus:outline-secondary"
                />
                <small id="name-error" className="text-error text-sm" role="alert">
                  {errors.name || ''}
                </small>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-semibold">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:border-primary focus:outline-2 focus:outline-secondary"
                />
                <small id="email-error" className="text-error text-sm" role="alert">
                  {errors.email || ''}
                </small>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1 font-semibold">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:border-primary focus:outline-2 focus:outline-secondary"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="text-error text-sm" role="alert">
                  {errors.subject || ''}
                </small>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-semibold">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  minLength="10"
                  aria-describedby="message-error"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:border-primary focus:outline-2 focus:outline-secondary"
                ></textarea>
                <small id="message-error" className="text-error text-sm" role="alert">
                  {errors.message || ''}
                </small>
              </div>

              <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors dark:bg-blue-600 dark:hover:bg-blue-500">
                Gönder
              </button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="text-center py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-muted text-sm">
        <p>&copy; 2025 Emirhan Aydemir. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları" className="mt-2">
          <ul className="flex justify-center gap-4 list-none p-0 m-0">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App