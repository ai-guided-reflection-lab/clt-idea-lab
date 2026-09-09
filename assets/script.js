(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Compose an email to the lab from the contact form using the visitor's mail client.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('name').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var topic = (document.getElementById('topic').value || '').trim();
      var message = (document.getElementById('message').value || '').trim();
      var subject = encodeURIComponent(topic ? ('CIDEA Lab inquiry: ' + topic) : 'CIDEA Lab inquiry');
      var body = encodeURIComponent(
        message + '\n\n— ' + name + (email ? ' (' + email + ')' : '')
      );
      window.location.href = 'mailto:mdorodch@charlotte.edu?subject=' + subject + '&body=' + body;
    });
  }
})();
