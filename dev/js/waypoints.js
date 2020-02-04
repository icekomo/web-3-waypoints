var waypoint = new Waypoint({
  element: $('#section-1'),
  handler: function(direction) {
    $.notify('I am 20px from the top of the window')
  },
  offset: 20
})
