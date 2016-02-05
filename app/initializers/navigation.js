export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'navigation',
  initialize: function() {
    let application = arguments[1] || arguments[0];
    application.inject("component:nop-navigation-item", "router", "router:main");
    // application.inject("component:bread-crumbs", "applicationController", "controller:application");
  }
};
