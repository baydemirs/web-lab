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
        <h1 className="site-title">Emirhan Aydemir</h1>

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
          <div className="about-content">
            <figure>
              <img src="logo.jpeg" alt="Emirhan Aydemir'in vesikalık fotoğrafı" />
              <figcaption>Emirhan Aydemir</figcaption>
            </figure>
            <p>
              Merhaba! Ben Emirhan Aydemir. Web geliştirme alanında kendimi sürekli
              geliştiren bir yazılımcıyım. Modern teknolojilerle kullanıcı dostu ve
              erişilebilir projeler üretmeyi seviyorum.
            </p>
          </div>
          <h3>Kullandığım Teknolojiler</h3>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="https://placehold.co/400x200?text=E-Ticaret" alt="E-Ticaret sitesi anasayfa ekran görüntüsü" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://placehold.co/400x200?text=Blog" alt="Blog uygulaması yazı listesi görünümü" />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://placehold.co/400x200?text=Hava+Durumu" alt="Hava durumu uygulaması arayüzü" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
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