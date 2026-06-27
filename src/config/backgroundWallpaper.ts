import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式
	// 且同时维护多种壁纸模式过于复杂（已经屎山代码），在切换时有时候可能会出现一些奇怪的过渡效果或者bug
	// 推荐只选择自己喜欢的模式并关闭切换功能
	switchable: true,
	// 是否启用背景视频播放，配置后将在导航栏显示视频播放按钮
	playerEnable: false,
	/**
	 * 背景图片配置
	 * 图片路径支持三种格式：
	 * 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
	 * 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
	 * 3. 远程 URL："https://example.com/banner.jpg"
	 * 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
	 *
	 * 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
	 * 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
	 * 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
	 *
	 * 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
	 * desktop: "https://t.alcy.cc/pc",   // 随机图API
	 * desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
	 *
	 * mobile: "https://t.alcy.cc/mp", // 随机图API
	 * mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
	 *
	 * 支持配置多张图片（数组），每次刷新页面随机显示一张：
	 * desktop: [
	 * "assets/images/DesktopWallpaper/d1.avif",
	 * "assets/images/DesktopWallpaper/d2.avif",
	 * ],
	 *
	 * mobile:[
	 *   "assets/images/MobileWallpaper/m1.avif",
	 *   "assets/images/MobileWallpaper/m2.avif",
	 * ],
	 */
	src: {
		// 桌面背景图片（支持单张或多张随机）
		// desktop: "assets/images/DesktopWallpaper/d1.avif",
		desktop: [
			"https://image.whutwsf.top/file/横屏/1782588499343_133515647_p1_master1200.jpg",
			"https://image.whutwsf.top/file/横屏/1782588231894_146269572_p17_master1200.jpg",
            "https://image.whutwsf.top/file/横屏/1782588235687_146269572_p27_master1200.jpg",
            "https://image.whutwsf.top/file/横屏/1782545887831_1782409704663.jpeg",
            "https://image.whutwsf.top/file/横屏/1782539764868_1782521634504.png",
            "https://image.whutwsf.top/file/横屏/1782539763707_illust_138746537_20260627_041507.png",
            "https://image.whutwsf.top/file/横屏/1782539764337_1782522408775.jpeg",
            "https://image.whutwsf.top/file/横屏/1782539758505_1782505750563.jpeg",
            "https://image.whutwsf.top/file/横屏/1782539294427_137934497_p2__1_.png",
            "https://image.whutwsf.top/file/横屏/1782539294198_137934497_p0__1_.png",
            "https://image.whutwsf.top/file/横屏/1782500899666_1782089637460.png",
            "https://image.whutwsf.top/file/横屏/1782500892866_1782089644282.png",
            "https://image.whutwsf.top/file/横屏/1782500848333_1782089631172.png",
            "https://image.whutwsf.top/file/横屏/1782500900049_1782089639357.png",
		],
		// 移动背景图片（支持单张或多张随机）
		// mobile: "assets/images/MobileWallpaper/m1.avif",
		mobile: [
			"https://image.whutwsf.top/file/崩坏：星穹铁道/长夜月/1782547860973_illust_144140075_20260627_041208.png",
			"https://image.whutwsf.top/file/崩坏：星穹铁道/知更鸟/1782547410545_illust_144267756_20260627_041254.png",
			"https://image.whutwsf.top/file/崩坏：星穹铁道/知更鸟/1782547389289_1782516214306.png",
			"https://image.whutwsf.top/file/崩坏：星穹铁道/知更鸟/1782547339977_1.png",
			"https://image.whutwsf.top/file/崩坏：星穹铁道/知更鸟/1782547407521_illust_144267756_20260627_041301.png",
			"https://image.whutwsf.top/file/崩坏：星穹铁道/流萤/1782539256877_14.jpeg",
            "https://image.whutwsf.top/file/崩坏：星穹铁道/流萤/1782539180314_132752168_p3.png",
            "https://image.whutwsf.top/file/崩坏：星穹铁道/流萤/1782539180836_132752168_p1.png",
            "https://image.whutwsf.top/file/崩坏：星穹铁道/流萤/1782539266946_15.png",
            "https://image.whutwsf.top/file/蔚蓝档案/砂狼白子/1782501447712_1782409299798.png",
            "https://image.whutwsf.top/file/蔚蓝档案/砂狼白子/1782587349661_124860580_p1_master1200.jpg",
            "https://image.whutwsf.top/file/蔚蓝档案/砂狼白子/1782501447712_1782409299798.png",
            "https://image.whutwsf.top/file/崩坏：星穹铁道/停云/1782549224503_illust_144740402_20260627_041354.png",
            "https://image.whutwsf.top/file/鸣潮/达妮娅/1782491915463_1.png",
            "https://image.whutwsf.top/file/鸣潮/达妮娅/1782491956825_5.png",
            "https://image.whutwsf.top/file/鸣潮/达妮娅/1782491964596_7.png",
        ],
		// 背景视频播放地址
		// 支持单个视频路径（字符串）或多个视频循环（数组）
		// 支持远程视频URL，本地视频请放在 public/assets/videos/ 目录下
		// playerUrl: "/assets/videos/firefly.mp4",
		playerUrl: [
			"https://www.image2url.com/r2/default/videos/1781765166391-f2ba6648-1597-40e0-9f0a-6768ae39e574.mp4",
		],
	},
	// 横幅壁纸和全屏壁纸共享配置
	common: {
		// 横幅文字遮罩暗度，0-1之间，值越大越暗
		dimOpacity: 0.2,
		// 多视频播放模式："order" 顺序循环，"random" 随机切换（仅当 playerUrl 为数组时生效）
		playerMode: "random",
		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 是否允许用户通过控制面板切换横幅标题显示
			switchable: false,
			// 主页横幅主标题
			title: "橙花小猫",
			// 主页横幅主标题字体大小
			titleSize: "3.8rem",
			// 主页横幅副标题
			subtitle: [
				"会不定时分享生活和知识，如果你感兴趣的话，去看看我的文章吧！",
			],
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 → 循环显示所有副标题
				// 打字机关闭 → 每次刷新随机显示一条副标题
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
		},
		// 导航栏配置
		navbar: {
			// 导航栏透明模式："semi" 半透明，"full" 完全透明，"semifull" 动态透明
			transparentMode: "semifull",
			// 是否开启毛玻璃模糊效果，开启可能会影响页面性能，如果不开启则是半透明，请根据自己的喜好开启
			enableBlur: true,
			// 毛玻璃模糊度
			blur: 5,
		},
		// 水波纹动画效果配置，开启会影响页面性能，请根据自己的喜好开启
		waves: {
			enable: {
				// 桌面端是否启用水波纹动画效果
				desktop: true,
				// 移动端是否启用水波纹动画效果
				mobile: true,
			},
			// 是否允许用户通过控制面板切换水波纹动画
			switchable: true,
		},
		// 渐变过渡效果配置，当水波纹关闭时自动启用，提供壁纸底部到背景色的平滑过渡
		gradient: {
			enable: {
				// 桌面端是否启用渐变过渡
				desktop: true,
				// 移动端是否启用渐变过渡
				mobile: true,
			},
			// 渐变高度
			height: "15vh",
			// 是否允许用户通过控制面板切换渐变过渡
			switchable: true,
		},
	},
	// Banner模式特有配置
	banner: {
		// 图片位置
		// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
		position: "0% 20%",
		// 横幅图片轮播配置，仅在当配置多张图片时生效
		carousel: {
			// 是否启用横幅图片轮播；关闭时保持每次刷新随机显示一张
			enable: true,
			// 轮播切换间隔（毫秒）
			interval: 3000,
			// 是否允许用户通过控制面板切换横幅轮播
			switchable: false,
		},
	},
	// 全屏透明覆盖模式特有配置
	overlay: {
		// 是否允许用户通过控制面板调整全屏透明模式参数
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		// 层级，确保壁纸在背景层
		zIndex: -1,
		// 壁纸透明度
		opacity: 0.8,
		// 背景模糊度
		blur: 10,
		// 卡片透明度，0-1之间，值越小越透明
		cardOpacity: 0.5,
	},
	// 全屏壁纸模式特有配置
	fullscreen: {
		// 图片位置
		position: "center",
	},
};
