/**
 * main.js
 *
 * For all custom js codes.
 */
$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });
  var data_member = [
    {
      title: 'Ae',
      detail: '<span class="highlight">ชื่อจริง: </span>วาสนา พิมพ์จันทร์<br><span class="highlight">ชื่อเล่น: </span>เอ๋<br><span class="highlight">ฉายา: </span>คุณวาสนา, สตาฟไอดอล<br><span class="highlight">วันเกิด: </span>21 กันยายน<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>สามารถเป็นทีมงานและไอดอลได้ในเวลาเดียวกัน<br>',
      pic: 'assets/images/ae.jpg',
      facebook: 'https://www.facebook.com/Ae-Sweat16-709046175950703/',
      twitter: 'https://twitter.com/ae_sweat16',
      instagram: 'https://www.instagram.com/ae_sweat16/',
      twitch: 'https://www.twitch.tv/ae_sweat16'
    },
    {
      title: 'Anny',
      detail: '<span class="highlight">ชื่อจริง: </span>อรรฆพร สร้อยสุข<br><span class="highlight">ชื่อเล่น: </span>แอนนี่<br><span class="highlight">ฉายา: </span>หมาเด็ก<br><span class="highlight">วันเกิด: </span>1 มกราคม<br><span class="highlight">กรุ๊ปเลือด: </span>O<br><span class="highlight">ความสามารถพิเศษ: </span>Swag Girl เด็กมหัศจรรย์ไม่เคยเกลียดใครตั้งแต่จำความได้<br>',
      pic: 'assets/images/anny.jpg',
      facebook: 'https://www.facebook.com/Anny-Sweat16-809228849236630/',
      twitter: 'https://twitter.com/anny_sweat16',
      instagram: 'https://www.instagram.com/anny_sweat16/',
      twitch: 'https://www.twitch.tv/anny_sweat16'
    },
    {
      title: 'Ant',
      detail: '<span class="highlight">ชื่อจริง: </span>วรินดา เนินเพิ่มพิสุทธิ์<br><span class="highlight">ชื่อเล่น: </span>แอ๊นท์<br><span class="highlight">ฉายา: </span>เต่าฟันเหยิน ปุ๋งปุ๋ง<br><span class="highlight">วันเกิด: </span>10 กรกฎาคม<br><span class="highlight">กรุ๊ปเลือด: </span>B<br><span class="highlight">ความสามารถพิเศษ: </span>สวย แซ่บ ฮา เจ้าแม่ขาแดนซ์ 10 10 10 ไปเลยจ้าาาา<br>',
      pic: 'assets/images/ant.jpg',
      facebook: 'https://www.facebook.com/Ant-Sweat16-445003689233126/',
      twitter: 'https://twitter.com/ant_sweat16',
      instagram: 'https://www.instagram.com/ant_sweat16/',
      twitch: 'https://www.twitch.tv/ant_sweat16'
    },
    {
      title: 'Fame',
      detail: '<span class="highlight">ชื่อจริง: </span>สุธาสินิ เอมทอง<br><span class="highlight">ชื่อเล่น: </span>เฟรม<br><span class="highlight">ฉายา: </span>ทาสแมว<br><span class="highlight">วันเกิด: </span>5 สิงหาคม<br><span class="highlight">กรุ๊ปเลือด: </span>B<br><span class="highlight">ความสามารถพิเศษ: </span>สายฮาวาไรตี้ พูดเก่งแต่ไม่รู้เรื่อง เด๋อด๋าแต่สร้างรอยยิ้มให้ทุกคนตลอด<br>',
      pic: 'assets/images/fame.jpg',
      facebook: 'https://www.facebook.com/FameSweatSixteen/',
      twitter: 'https://twitter.com/fame_sweat16',
      instagram: 'https://www.instagram.com/fame_sweat16/',
      twitch: 'https://www.twitch.tv/fame_sweat16'
    },
    {
      title: 'Mahnmook',
      detail: '<span class="highlight">ชื่อจริง: </span>ชดาธาร ด่านกุล<br><span class="highlight">ชื่อเล่น: </span>ม่านมุก<br><span class="highlight">ฉายา: </span> คุณหมู, มันหมู<br><span class="highlight">วันเกิด: </span>10 เมษายน<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>เป็นบ่อพลังงานของทั้งเมมเบอร์และแฟน ๆ<br>',
      pic: 'assets/images/mahnmook.jpg',
      facebook: 'https://www.facebook.com/Mahnmook-Sweat16-1705672169741865/',
      twitter: 'https://twitter.com/mahnmook_sweat16',
      instagram: 'https://www.instagram.com/mahnmook_sweat16/',
      twitch: 'https://www.twitch.tv/mahnmook_sweat16'
    },
    {
      title: 'Mint',
      detail: '<span class="highlight">ชื่อจริง: </span>ทสมา เทศน์ธรรม<br><span class="highlight">ชื่อเล่น: </span>มิ้น<br><span class="highlight">ฉายา: </span>กระต่ายมิ้น, มินโตมินโตะเนี้ยง, เจ่เจ้<br><span class="highlight">วันเกิด: </span>8 มกราคม<br><span class="highlight">กรุ๊ปเลือด: </span>O<br><span class="highlight">ความสามารถพิเศษ: </span>สายอนิเมะ ร้องเพลงญี่ปุ่น มีความมุ้งมิ้งสูง<br>',
      pic: 'assets/images/mint.jpg',
      facebook: 'https://www.facebook.com/Mint-Sweat16-138188866783330/',
      twitter: 'https://twitter.com/mint_sweat16',
      instagram: 'https://www.instagram.com/mint_sweat16/',
      twitch: 'https://www.twitch.tv/mint_sweat16'
    },
    {
      title: 'Music',
      detail: '<span class="highlight">ชื่อจริง: </span>จิดาภา จงสืบพันธ์<br><span class="highlight">ชื่อเล่น: </span>มิวสิค<br><span class="highlight">ฉายา: </span>จิตวิญญาณแห่งเสียงเพลง<br><span class="highlight">วันเกิด: </span>20 พฤษภาคม<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>ร้อง เต้น เล่นได้หมด แสบใช่ย่อย ร่าเริง Alert ตลอดเวลา พึ่งพาได้เสมอ<br>',
      pic: 'assets/images/music.jpg',
      facebook: 'https://www.facebook.com/Music-Sweat16-108567926503749/',
      twitter: 'https://twitter.com/music_sweat16',
      instagram: 'https://www.instagram.com/music_sweat16/',
      twitch: 'https://www.twitch.tv/music_sweat16'
    },
    {
      title: 'Nink',
      detail: '<span class="highlight">ชื่อจริง: </span>พิชชาภา กันตพิชญาธร<br><span class="highlight">ชื่อเล่น: </span>นิ้ง<br><span class="highlight">ฉายา: </span>นิ้งแก้มแตก<br><span class="highlight">วันเกิด: </span>9 พฤษภาคม<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>เล่นกีต้าร์ไฟฟ้าได้ ชอบถ่ายภาพ มุกแป้กและตีป้อม<br>',
      pic: 'assets/images/nink.jpg',
      facebook: 'https://www.facebook.com/Nink-Sweat16-333542507094850/',
      twitter: 'https://twitter.com/nink_sweat16',
      instagram: 'https://www.instagram.com/nink_sweat16/',
      twitch: 'https://www.twitch.tv/nink_sweat16'
    },
    {
      title: 'Pada',
      detail: '<span class="highlight">ชื่อจริง: </span>ปภาดา ตันติประสงค์ชัย<br><span class="highlight">ชื่อเล่น: </span>พาด้า<br><span class="highlight">ฉายา: </span>แม่พระ, คนนิ่ง<br><span class="highlight">วันเกิด: </span>11 สิงหาคม<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>นิ่งสงบ สยบความเคลื่อนไหว แต่ถ้าขยับเมื่อไหร่รับรอง..!!<br>',
      pic: 'assets/images/pada.jpg',
      facebook: 'https://www.facebook.com/PadaSweat16/',
      twitter: 'https://twitter.com/pada_sweat16',
      instagram: 'https://www.instagram.com/pada_sweat16/',
      twitch: 'https://www.twitch.tv/pada_sweat16'
    },
    {
      title: 'Petch',
      detail: '<span class="highlight">ชื่อจริง: </span>พรรษา บุณยะกลัมพ<br><span class="highlight">ชื่อเล่น: </span>เพชร<br><span class="highlight">ฉายา: </span>ไดมอนด์พี, คุณเพชร ไอจี 100 สตอรี่<br><span class="highlight">วันเกิด: </span>3 สิงหาคม<br><span class="highlight">กรุ๊ปเลือด: </span>O<br><span class="highlight">ความสามารถพิเศษ: </span>สายบุ๋น ได้ทุกศาสตร์ทุกแขนง ยกเว้น...เส้นทาง<br>',
      pic: 'assets/images/petch.jpg',
      facebook: 'https://www.facebook.com/PadaSweat16/',
      twitter: 'https://twitter.com/petch_sweat16',
      instagram: 'https://www.instagram.com/petch_sweat16/',
      twitch: 'https://www.twitch.tv/petch_sweat16'
    },
    {
      title: 'Pim',
      detail: '<span class="highlight">ชื่อจริง: </span>พิม ขจรเวคิน<br><span class="highlight">ชื่อเล่น: </span>พิม<br><span class="highlight">ฉายา: </span>คุณพิมคนเท่, เจแปนนิสเกิร์ล<br><span class="highlight">วันเกิด: </span>5 พฤษภาคม<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>มีความอึด สูงยาวเข่าดี คิดบวก เท่ได้ ตลกด้วย<br>',
      pic: 'assets/images/pim.jpg',
      facebook: 'https://www.facebook.com/Pim-Sweat16-799444370230832/',
      twitter: 'https://twitter.com/pim_sweat16',
      instagram: 'https://www.instagram.com/pim_sweat16/',
      twitch: 'https://www.twitch.tv/pim_sweat16'
    },
    {
      title: 'Proud',
      detail: '<span class="highlight">ชื่อจริง: </span>ปัทมาริษา ปัดภัย<br><span class="highlight">ชื่อเล่น: </span>พราวด์<br><span class="highlight">ฉายา: </span>เป็ดติดหนวด<br><span class="highlight">วันเกิด: </span>21 สิงหาคม<br><span class="highlight">กรุ๊ปเลือด: </span>A<br><span class="highlight">ความสามารถพิเศษ: </span>กินเผ็ดเก่งมากกกก เพราะความรู้สึกช้า ร้องไห้ง่าย ติดอนิเมะ<br>',
      pic: 'assets/images/proud.jpg',
      facebook: 'https://www.facebook.com/Proud-Sweat16-120406398606162/',
      twitter: 'https://twitter.com/proud_sweat16',
      instagram: 'https://www.instagram.com/proud_sweat16/',
      twitch: 'https://www.twitch.tv/proud_sweat16'
    },
    {
      title: 'Sonja',
      detail: '<span class="highlight">ชื่อจริง: </span>ซอนญา ชิษณุชา ดอนเนลลี่<br><span class="highlight">ชื่อเล่น: </span>ซอนญา<br><span class="highlight">ฉายา: </span>คนคูล<br><span class="highlight">วันเกิด: </span>16 กุมภาพันธ์<br><span class="highlight">กรุ๊ปเลือด: </span>B<br><span class="highlight">ความสามารถพิเศษ: </span>ลูกครึ่งสุดเท่ สายลุย นักกีฬาตัวจริง ชอบออกกำลังกาย ใจกล้า บ้าบิ่น ไม่กลัวอะไรเลยยยยย ฮะฮะฮะ<br>',
      pic: 'assets/images/sonja.jpg',
      facebook: 'https://www.facebook.com/Sweat16Sonja/',
      twitter: 'https://twitter.com/sonja_sweat16',
      instagram: 'https://www.instagram.com/sonja_sweat16/',
      twitch: 'https://www.twitch.tv/sonja_sweat16'
    },
  ]
  var data_music = [
    { title: 'วิ่ง',
      title_en: 'Run',
      album: '1st Single Album',
      youtube: 'cbF1P2Hxo2s',
      other: 'Released: 20 Nov 2017',
      link_itune: 'https://itunes.apple.com/th/album/%E0%B8%A7-%E0%B8%87-single/1308329682',
      link_spotify: 'https://open.spotify.com/album/2yBdZ64NzwklgsnyvN0IY3',
      link_joox: 'http://music.sanook.com/music/song/5ytqtOsHvae6wrSvaHV2qw==/lyric/',
    },
    { title: 'มุ้งมิ้ง (Love Attention)',
      title_en: 'Love Attention',
      album: '2nd Single Album',
      youtube: 'qNSUoFfoP4k',
      other: 'Released: 22 Dec 2017',
      link_itune: 'https://itunes.apple.com/th/album/%E0%B8%A1-%E0%B8%87%E0%B8%A1-%E0%B8%87/1368494356?i=1368494576',
      link_spotify: 'https://open.spotify.com/album/6T8p8wkH3TU2pkFXHxqaml',
      link_joox: 'http://music.sanook.com/music/song/PaVHFUX8nLTaHSuY6sdL9g==/lyric/'
    },
    { title: 'ความทรงจำที่สวยงาม (Beautiful Memories)',
      title_en: 'Beautiful Memories',
      album: '2nd Single Album',
      youtube: 'd3VdgbW2JfM',
      other: 'Released: 09 May 2018',
      link_itune: 'https://itunes.apple.com/th/album/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%88%E0%B8%B3%E0%B8%97-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1-single/1384917853',
      link_spotify: 'https://open.spotify.com/album/1KErrAmu498vcdVSJb9ksI',
      link_joox: 'http://music.sanook.com/music/song/az3jOy9ZTzT85pJqTQ9pIw==/lyric/'
    },
    { title: 'TKO',
      title_en: 'TKO',
      album: '3rd Single Album',
      youtube: 'tN5HVRW2UHg',
      other: 'Released: 01 Aug 2018',
      link_itune: 'https://itunes.apple.com/th/album/tko/1423104382',
      link_spotify: 'https://open.spotify.com/album/0Z6lI7t9hKeukSJD3APs5Y',
      link_joox: 'http://music.sanook.com/music/song/CDqwegJ3SnDMJxvaivIN6Q==/lyric/',
    },
    { title: 'สักวัน (Destiny)',
      title_en: 'Destiny',
      album: 'Special Single x DDTankTH',
      youtube: 'HU-vdhRH2uY',
      other: 'Released: 08 Aug 2018',
      link_itune: null,
      link_spotify: null,
      link_joox: null,
    },
    { title: 'ปิ้งย่าง (Yakiniku)',
      title_en: 'Yakiniku',
      album: '4th Single Album',
      youtube: 'ByVeBQITTYM',
      other: 'Released: 07 Dec 2018',
      link_itune: 'https://itunes.apple.com/th/album/%E0%B8%9B-%E0%B8%87%E0%B8%A2-%E0%B8%B2%E0%B8%87-single/1444745882',
      link_spotify: 'https://open.spotify.com/album/07v7uKtoikoBEBhHXgYA3t',
      link_joox: 'http://music.sanook.com/music/song/7EJ8EGN7kNjo6NQ2Dw2ZIQ==/lyric/',
    },
  
  ];
  function loadMusic(id){
    $('.song-title').text(data_music[id].title);
    $('.song-description').html(data_music[id].album+'<br>'+data_music[id].other);
    $('#youtube-area').html('<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/'+data_music[id].youtube+'?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    $('.streaming-music-area').html("");
    var output_stream = "";
    if(data_music[id].link_itune !== null) output_stream += '<a target="_blank" href="'+data_music[id].link_itune+'" class="streaming-btn"><i class="fab fa-apple"></i></a>';
    if(data_music[id].link_spotify !== null) output_stream += '<a target="_blank" href="'+data_music[id].link_spotify+'" class="streaming-btn"><i class="fab fa-spotify"></i></a>';
    if(data_music[id].link_joox !== null) output_stream += '<a target="_blank" href="'+data_music[id].link_joox+'" class="streaming-btn"><img src="https://www.gosweat.family/wp-content/uploads/2018/07/logo-joox.png"></a>';
    $('.streaming-music-area').html(output_stream);
    $("#video")[0].src += "&autoplay=1";
  }
  $(document).on('click', '.music-list', function() {
    var id_song = $(this).data('song');
    $('.music-list').removeClass('select');
    $(this).addClass('select');
    loadMusic(id_song);
  });
  function callMember(id){
    $('#member-info .member-left').html('<img src="'+data_member[id].pic+'" class="img-fluid">');
    $('#member-info .name-title').text(data_member[id].title);
    $('#member-info .description').html(data_member[id].detail);
    $('#member-info .social-area .facebook').attr('href', data_member[id].facebook);
    $('#member-info .social-area .twitter').attr('href', data_member[id].twitter);
    $('#member-info .social-area .instagram').attr('href', data_member[id].instagram);
    $('#member-info .social-area .twitch').attr('href', data_member[id].twitch);
    $('#member-info').fadeIn();
    $('#member-info .member-left').animateCss('fadeInLeft');
    $('#member-info .member-right').animateCss('fadeInRight');
  }
  $(document).on('click', '.member-btn', function() {
    var uid = $(this).data('uid');
    callMember(uid);
  });
  $(document).ready(function($) {
    loadMusic(data_music.length-1);
  });