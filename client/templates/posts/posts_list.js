Template.postsList.onRendered(function() {
  var wrapper = this.find('.wrapper');
  console.log("Wrapper", wrapper);

  wrapper._uihooks = {
    moveElement: function(node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $node.outerHeight(true);

      var $inBetween = $next.nextUntil(node);
      if ($inBetween.length === 0) {
        $inBetween = $node.nextUntil(next);
      }

      $node.insertBefore(next);

      var newTop = $node.offset().top;

      $node.removeClass('animate')
          .css('top', oldTop - newTop);
      $inBetween
          .removeClass('animate')
          .css('top', oldTop < newTop ? height : -height);

      $node.offset();
      $node.addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    }
  };
});
