/* ============================================================
   CIC · shared.js
   Toggle de tema + funcionalidades comuns
   ============================================================ */

(function() {
  // Aplicar tema salvo
  const savedTheme = localStorage.getItem('cic-theme') || 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const cic = document.querySelector('.cic');
    if (cic) {
      cic.classList.remove('light', 'dark');
      cic.classList.add(savedTheme);

      // Atualizar botões do toggle
      const buttons = cic.querySelectorAll('.toggle button');
      buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === savedTheme);
      });
    }
  });

  // Toggle theme handler global
  window.toggleTheme = function(theme) {
    const cic = document.querySelector('.cic');
    if (!cic) return;
    cic.classList.remove('light', 'dark');
    cic.classList.add(theme);
    localStorage.setItem('cic-theme', theme);

    const buttons = cic.querySelectorAll('.toggle button');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  };

  // Auto-bind buttons de toggle
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle button[data-theme]');
    if (btn) {
      window.toggleTheme(btn.dataset.theme);
    }
  });
})();
