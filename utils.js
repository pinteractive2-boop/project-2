(function(root){
  function escapeHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  var utils={
    greeting:function(name){return 'Hello, '+(name||'Guest')+'!';},
    createCard:function(title,body){
      var card=document.createElement('div');
      card.className='card';
      card.innerHTML='<strong>'+escapeHtml(title)+'</strong><p>'+escapeHtml(body)+'</p>';
      return card;
    },
    formatDate:function(d){return new Date(d).toLocaleDateString();}
  };
  if(typeof module!=='undefined'&&module.exports)module.exports=utils;
  else root.utils=utils;
})(typeof window!=='undefined'?window:globalThis);
