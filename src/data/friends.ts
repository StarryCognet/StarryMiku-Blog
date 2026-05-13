// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "洛元(砂纸)の小屋",
		imgurl: "https://blog.dimeta.top/upload/avatar.jpg",
		desc: "洛元の小屋，科技，游戏，生活为主的blog",
		siteurl: "https://blog.dimeta.top/",
		tags: ["朋友"],
	},
	{
		id: 2,
		title: "永维塔菲百科",
		imgurl: "https://acetaffy.org/resources/assets/logo.png",
		desc: "我们的目标是为所有喜欢塔菲的雏草姬们提供一个全面、客观、准确的信息检索平台。",
		siteurl: "https://acetaffy.org",
		tags: ["收藏"],
	},
	{
		id: 3,
		title: "卡卡罗特",
		imgurl: "https://blog.share888.top/favicon.ico",
		desc: "精品导航，程序猿工具集，常用业务代码分享，java&VUE代码生成器,音乐电影动漫分享，健身记录，黑科技分享，AI技术，独立站",
		siteurl: "https://blog.share888.top/",
		tags: ["大佬"],
	},
	{
		id: 4,
		title: "無名小栈",
		imgurl: "https://blog.imsyy.top/favicon.ico",
		desc: "分享技术与科技生活",
		siteurl: "https://blog.imsyy.top/",
		tags: ["大佬"],
	},
	{
		id: 5,
		title: "林间拾语 - 技术与生活的温暖拾遗",
		imgurl: "https://www.xhhao.com/upload/logo.png",
		desc: "技术与生活的温暖拾遗",
		siteurl: "https://www.xhhao.com",
		tags: ["大佬"],
	},
	{
		id: 6,
		title: "锦木祈杰のblog",
		imgurl: "https://oss.qijieya.cn/1/hutao_hai.gif",
		desc: "敬...不完美的明天。",
		siteurl: "https://qijieya.cn/",
		tags: ["大佬"],
	},
	{
		id: 7,
		title: "SailTrack杂谈站",
		imgurl: "https://www.sailtrack.cn/upload/logo-wigth.png",
		desc: "让我们忠于理想，让我们面对显示",
		siteurl: "https://www.sailtrack.cn",
		tags: ["大佬"],
	},
	{
		id: 8,
		title: "梦里生华",
		imgurl: "https://zhangshuaibi29.cn/wp-content/uploads/2025/11/IMG_20251111_175918.jpg",
		desc: "梦里生华\n看见我你会变帅",
		siteurl: "https://zhangshuaibi29.cn",
		tags: ["朋友"],
	},
	{
		id: 9,
		title: "AToolkit",
		imgurl: "https://atoolkit.starrymiku.com/muzimi.png",
		desc: "实用工具整合包\n从2020年开始精心收集的优质电脑工具集合",
		siteurl: "https://atoolkit.starrymiku.com",
		tags: ["我的站点"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
