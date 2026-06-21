export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
		showName?: boolean;
		/** 设置后点击将弹出文本弹窗，不再跳转到 url */
		popupText?: string;
	}[];
};
