const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
	name: "双人舞 第二幕第三场第14首",
	artist: 'Pyotr Ilyich Tchaikovsky',
	url: 'http://103.224.249.63/双人舞 第二幕第三场第14首.mp3',
	},

	{
	name: "莫扎特 - 小步舞曲",
        artist: 'Wolfgang Amadeus Mozart',
        url: 'http://103.224.249.63/莫扎特 - 小步舞曲.mp3',
      },

	{
        name: "原来",
        artist: '林俊杰',        
	url: 'http://103.224.249.63/原来.mp3',
      },

	{
        name: "倒带",
        artist: '蔡依林',
        url: 'http://103.224.249.63/倒带.mp3',
      },

	
    ]
});
