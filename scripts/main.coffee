# Scroll hire me button to contact page
$('.contact-me').click ->
  $('html, body').animate
    scrollTop: $($(this).attr('href')).offset().top
    500
  false

# Sticky menu
$(".navbar").sticky
  topSpacing: 0


# Scroll spy and scroll filter
$('#main-menu').onePageNav
  currentClass: "active",
  changeHash: false,
  scrollThreshold: 0.5,
  scrollSpeed: 750,
  filter: "",
  easing: "swing"

# Charts
$('.chart').waypoint (->
    $(this).easyPieChart
      barColor: '#3498db',
      size: '150',
      easing: 'easeOutBounce',
      onStep: (from, to, percent) ->
        $(@el).find('.percent').text Math.round(percent)
    ),
    triggerOnce: true
    offset: 'bottom-in-view'


# Vegas Home Slider
$('#page-welcome').vegas
  slides: [
    {src: 'dist/img/3.jpg'}
    {src: 'dist/img/2.jpg'}
    {src: 'dist/img/4.jpg'}
    {src: 'dist/img/1.jpg'}
  ]
  overlay: true

$("#vegas-next").click ->
  $('#page-welcome').vegas('next')

$("#vegas-prev").click ->
  $('#page-welcome').vegas('previous')
