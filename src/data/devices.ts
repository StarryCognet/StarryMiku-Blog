// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Xiaomi: [
		{
			name: "Xiaomi 15 Ultra",
			image: "/images/device/xiaomi15ultra.webp",
			specs: "16G + 1TB / 经典黑",
			description: "徕卡光学四摄，2 亿像素长焦，影像旗舰。",
			link: "https://www.mi.com/global/product/xiaomi-15-ultra/",
		},
	],
	Dell: [
		{
			name: "Dell G15 5520",
			image: "/images/device/dellg155520.webp",
			specs: "i5-12500H + RTX 3050 / 32G + 1TB",
			description: "15.6 英寸游戏本，12 代酷睿搭配 RTX 30 系独显。",
			link: "https://detail.zol.com.cn/series/16/37644_1.html",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
