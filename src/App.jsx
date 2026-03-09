import { useState } from 'react'
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

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Emirhan Aydemir</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="logo.jpeg" alt="Emirhan Aydemir'in vesikalık fotoğrafı" />
            <figcaption>Emirhan Aydemir</figcaption>
          </figure>
          <p>
            Merhaba! Ben Emirhan Aydemir. Web geliştirme alanında kendimi sürekli
            geliştiren bir yazılımcıyım. Modern teknolojilerle kullanıcı dostu ve
            erişilebilir projeler üretmeyi seviyorum.
          </p>
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vite</li>
            <li>Git &amp; GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article className="proje-karti">
            <h3>Portföy Web Sitesi</h3>
            <p>
              Kişisel portföy sayfam. React ve Vite kullanılarak geliştirildi.
              Erişilebilirlik ve semantik HTML prensiplerine uygun olarak tasarlandı.
            </p>
            <p><strong>Teknolojiler:</strong> React, Vite, CSS</p>
            <img
              src="https://placehold.co/400x200?text=Portf%C3%B6y"
              alt="Portföy web sitesi ekran görüntüsü"
            />
          </article>

          <article className="proje-karti">
            <h3>Görev Yöneticisi Uygulaması</h3>
            <p>
              Günlük görevlerini takip etmek için geliştirilmiş bir to-do uygulaması.
              Kullanıcılar görev ekleyip, tamamlayıp silebilir.
            </p>
            <p><strong>Teknolojiler:</strong> JavaScript, HTML, CSS</p>
            <img
              src="https://placehold.co/400x200?text=G%C3%B6rev+Y%C3%B6neticisi"
              alt="Görev yöneticisi uygulaması ekran görüntüsü"
            />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          {/* Doğrulamalı İletişim Formu */}
          <form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="2"
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert">
                  {errors.name || ''}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert">
                  {errors.email || ''}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert">
                  {errors.subject || ''}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  minLength="10"
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert">
                  {errors.message || ''}
                </small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Emirhan Aydemir. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları">
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App