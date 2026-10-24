/* H&H Universe shared family navigation — master candidate v1.
   Keep a copy synchronized in each independently deployed website. */
(()=>{
  const links=[
    ['Universe Home','https://www.hollerandhellfire.net/'],
    ['Books','https://www.hollerandhellfire.net/books.html'],
    ['The Holler · Blog','https://www.hollerandhellfire.net/blog.html'],
    ['The Codex','https://www.hollerandhellfire.net/bible.html'],
    ['H&H Records','https://records.hollerandhellfire.net/'],
    ['Digital Store','https://store.hollerandhellfire.net/'],
    ['Author','https://author.hollerandhellfire.net/'],
    ['WEBBS Entrepreneurship','https://business.hollerandhellfire.net/'],
    ['Brian Webb','https://brianwebb.hollerandhellfire.net/'],
    ['Kiro','https://kiro.hollerandhellfire.net/'],
    ['Lamplight','https://lamplight.hollerandhellfire.net/'],
    ['Physical Merchandise','https://holler-n-hellfire-shop.fourthwall.com/']
  ];
  const nav=document.getElementById('familyNav'),toggle=document.getElementById('familyToggle');
  if(!nav||!toggle)return;
  const grid=document.createElement('div');grid.className='family-grid';
  for(const [label,url] of links){const a=document.createElement('a');a.href=url;a.textContent=label;if(label==='Lamplight')a.setAttribute('aria-current','page');grid.append(a)}
  nav.append(grid);
  toggle.addEventListener('click',()=>{const open=nav.hidden;nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open))});
})();
