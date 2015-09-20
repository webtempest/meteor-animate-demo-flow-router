FlowRouter.route('/', {
  action: function(){
    FlowRouter.redirect('/one')
  }
});

FlowRouter.route('/one', {
  action: function(){
    BlazeLayout.render('layout', {content: 'one'});
  }
});

FlowRouter.route('/two', {
  action: function(){
    BlazeLayout.render('layout', {content: 'two'});
  }
});
