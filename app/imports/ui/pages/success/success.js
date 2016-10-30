import './success.html';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.page_success.onRendered(() => {
  $(".qr-code").qrcode({
    render: 'canvas',
    text: Session.get('token')
  });
});
