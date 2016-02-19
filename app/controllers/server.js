import Ember from 'ember';


export default Ember.Controller.extend({
  stats: {
    type: "Linux",
    arch: "x64",
    platform: "linux",
    release: "4.4.0-4-ARCH",
    uptime: "20 days",
    loadpercent: 26.53,
    mempercent: 75.34
  }
});
