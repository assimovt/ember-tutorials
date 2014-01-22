App = Ember.Application.create();

// Ember Router maps URLs to application resources
App.Router.map(function() {
  this.resource("contacts", function() {
    this.resource("contact", { path: ":contact_id" });
  });
});

// Ember Routes responsible for hooking models
App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return contacts;
  }
});

App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return contacts.findBy("id", params.contact_id);
  }
});

// Ember Controllers process actions and interact with a model
App.ContactController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    }
  }
});

// Ember Helpers help to keep the views DRY
Ember.Handlebars.helper("format-date", function(date) {
  return moment(date).format("Do MMMM YYYY");
});

var contacts = [{
  id: "1",
  name: "Juan Carlos",
  avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",
  bio: "My friend from Argentina",
  birthday: new Date("12-12-1979"),
  phone: "+34 614 587 123",
  notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, ante eget pharetra accumsan, lorem felis auctor magna, sit amet vestibulum metus elit a nibh. Praesent id dolor malesuada, suscipit erat non, posuere mi. Phasellus ac augue eu urna dignissim porttitor. Aliquam nisl lacus, hendrerit nec neque sit amet, adipiscing hendrerit mi. Nam tincidunt, urna a varius laoreet, nibh nulla eleifend velit, vitae porta mauris nisl sit amet mauris. Sed egestas justo velit, sit amet ultrices velit lacinia eu. Aenean nec nulla convallis, luctus dui quis, pulvinar tellus. Donec nec augue massa. Donec commodo diam nulla, sed condimentum purus facilisis et. Nulla at sodales nulla."
}, {
  id: "2",
  name: "Dustin More",
  avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/michzen/128.jpg",
  bio: "Helped me with moving to Spain",
  birthday: new Date("02-20-1981"),
  phone: "+34 615 222 115",
  notes: "Etiam pharetra nunc non est ultrices condimentum. Duis consectetur dui quis ligula venenatis fermentum. Suspendisse auctor augue purus, sit amet feugiat est aliquam eget. Suspendisse auctor libero eu semper consectetur. Praesent sit amet rhoncus nunc, sed ornare tellus. Curabitur ultricies dolor sed ultricies imperdiet. Pellentesque bibendum bibendum imperdiet. Sed aliquet elit ac ante dictum, et iaculis massa faucibus."
}];

