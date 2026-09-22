import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants/site';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = [
      `보낸 사람: ${name}`,
      `회신 주소: ${email}`,
      '',
      message,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: MapPin,
      title: '위치',
      value: '서울, 대한민국',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/santarosalia', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            연락하기
          </h2>
          <p className="section-subtitle">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락해주세요.
            <span className="block mt-1 text-dark-600 dark:text-dark-300">
              폼 작성 후 이메일 앱으로 전송됩니다.
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-700 rounded-xl p-6 sm:p-8 shadow-md ring-1 ring-slate-200/80 dark:ring-dark-600"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              메시지 보내기
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="프로젝트 협업 제안"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="프로젝트에 대해 자세히 설명해주세요..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                이메일 앱으로 보내기
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const content = (
                    <>
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <info.icon size={20} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-900 dark:text-white">
                          {info.title}
                        </h4>
                        <p className="helper-text">
                          {info.value}
                        </p>
                      </div>
                    </>
                  );

                  return info.href ? (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md ring-1 ring-slate-200/60 dark:ring-dark-600 transition-all duration-200 interactive-focus"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm ring-1 ring-slate-200/60 dark:ring-dark-600"
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                소셜 미디어
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md ring-1 ring-slate-200/60 dark:ring-dark-600 transition-all duration-200 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 interactive-focus"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white shadow-md">
              <h4 className="text-xl font-bold mb-2">현재 상태</h4>
              <p className="mb-4 text-primary-50 leading-relaxed">
                새로운 프로젝트와 협업 기회를 찾고 있습니다.
                흥미로운 제안이나 기술적인 논의가 있으시면 언제든 연락해주세요!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-white">즉시 응답 가능</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
