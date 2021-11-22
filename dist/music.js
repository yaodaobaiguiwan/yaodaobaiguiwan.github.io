const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
	name: "双人舞 第二幕第三场第14首",
	artist: 'Pyotr Ilyich Tchaikovsky',
	url: 'http://xz.itcytblog.cn/双人舞 第二幕第三场第14首.mp3',
	},

	{
	name: "莫扎特 - 小步舞曲",
        artist: 'Wolfgang Amadeus Mozart',
        url: 'http://xz.itcytblog.cn/莫扎特 - 小步舞曲.mp3',
      },

	{
        name: "原来",
        artist: '林俊杰',        
	url: 'http://xz.itcytblog.cn/原来.mp3',
      },

	{
        name: "倒带",
        artist: '蔡依林',
        url: 'http://xz.itcytblog.cn/倒带.mp3',
      },
	{
	name: "世界末日",
        artist: '周杰伦',
        url: 'http://xz.itcytblog.cn/周杰伦 - 世界末日.mp3',
      }
	
    ]
});
