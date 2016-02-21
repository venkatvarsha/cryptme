if (Meteor.isClient) {

  Session.setDefault('encrypted_message', 'Encrypted message will be displayed here');

  function encrypt() {
    var message = $("#message").val();
    Session.set('encrypted_message', shuffle(message));
  }

  function shuffle(string) {
    return string.substring(string.length/2) + string.substring(0, string.length/2);
  }

  Template.encryption_form.helpers({
    encrypted_message: function() {
      return Session.get('encrypted_message');
    }
  });

  Template.encryption_form.events({

    "click #encrypt": function(event, template) {
      event.preventDefault();
      encrypt();
    },

    "click #send": function(event, template) {
      encrypt();
      alert("Your message has been sent!");
    }

  });

}
