
    var renderedCaptchas = [];

    function renderAPCaptcha(id, size) {
        log("rendering captcha:" + id + " " + size);

        var captchaKey = id + "-" + size;

        if (!renderedCaptchas.includes(captchaKey)) {
            grecaptcha.render(id, {
                'sitekey': '6LfZbQsTAAAAAF6bp4-yMr9JwkgwpRVdIC30FvLm',
                'size': size
            });

            renderedCaptchas.push(captchaKey);
        } else {
            log(" - already rendered");
        }
    }

    function prepCaptchas() {
        var captchas = [
            ['g-recaptcha-container', 'normal', ''],
            ['g-recaptcha-container-password', 'normal', ''],
            ['g-recaptcha-container-signup', 'normal', ''],
            ['g-recaptcha-container-modal-password', 'compact', 'login-modal'],
            ['g-recaptcha-container-modal-signup', 'compact', 'login-modal'],
            ['g-recaptcha-container-contact', 'normal', 'contact-us-modal'],
        ];

        for (var i in captchas) {
            let cap = captchas[i];
            let id = cap[0];
            let size = cap[1];
            let modalId = cap[2];

            // if we have this element, render it when necessary
            if ($('#' + id).length) {
                // we've found the element
                // if it's in a modal, set it up to be shown only when necessary
                if (modalId.length) {
                    $("#" + modalId).bind('shown.bs.modal', function () {
                        renderAPCaptcha(id, size);
                    });
                } else {
                    renderAPCaptcha(id, size);
                }
            }
        }
    }

    (function(){
      var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||
      
      {

      },N='grecaptcha';var gr=w[N]=w[N]||
      {

      };gr.ready=gr.ready||function(f)
      
      {(cfg['fns']=cfg['fns']||[]).push(f);
    
    };w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('onload');(cfg['onload']=cfg['onload']||[]).push('prepCaptchas');w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true;po.src='https://www.gstatic.com/recaptcha/releases/6TWYOsKNtRFaLeFqv5xN42-l/recaptcha__en.js';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();

